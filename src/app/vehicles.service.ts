import { Vehicles } from './type';
import { Apollo, gql } from 'apollo-angular';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class VehiclesService {
    constructor(private apollo: Apollo) { }

    // update vehicles thorough graphql
    updateVehiclesGraphql(data: Vehicles) {
        this.apollo.mutate({
            mutation: gql`
            mutation {
                updateVehicle(
                    uid: "${data.uid}",
                    id:"${data.id}",
                    first_name: "${data.first_name}",
                    last_name: "${data.last_name}",,
                    email: "${data.email}",
                    car_make: "${data.car_make}", 
                    car_model: "${data.car_model}",
                    vin_number: "${data.vin_number}",
                    manufactured_date: "${getFormattedDate(data.manufactured_date)}"
                ) {
                    uid
                }
                }
            `
        })
        .subscribe(({data}: any)=>{
            console.log(data);
        },
        error =>{
            console.log(error);
        })
    }

    deleteVehiclesGraphql(uid: string) {
        this.apollo.mutate({
            mutation: gql`
            mutation {
                deleteVehicle (
                    uid: "${uid}"
                ) {
                    uid
                }
                }
            `
        })
        .subscribe(({data}: any)=>{
            console.log(data);
        },
        error =>{
            console.log(error);
        })
    }
}

function getFormattedDate(date: Date): string {
    var todayTime = new Date(date);
    var month = todayTime .getMonth() +1;
    var day = todayTime .getDate();
    var year = todayTime .getFullYear();
    console.log(month + "/" + day + "/" + year);
    return month + "/" + day + "/" + year;
}