import { ConfirmBoxComponent } from './../confirm-box/confirm-box.component';
import { VehiclesService } from './../../vehicles.service';
import { EditFormComponent } from './../edit-form/edit-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Vehicles } from './../../type';
import { Apollo } from 'apollo-angular';
import {  Component, Injectable, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements  OnInit {
  vehicles: Vehicles[] = [];
  dataSource! : MatTableDataSource<any>;

  constructor(private apollo: Apollo, public dialog: MatDialog, private vehiclesService: VehiclesService) { }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'car_model', 'car_make', 'vin_number', 'manufactured_date','actions'];

   ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        query {
      vehicles {
      uid
      id
      first_name
      last_name
      email
      car_model
      car_make
      vin_number
      manufactured_date
      }
      }
      `
    })
      .valueChanges.subscribe(
        ({data} : any) => {
          this.vehicles = data && data.vehicles;
        },
        error => {
          console.log(error);
        }
      );
  }

  updateVehicle(vehicleInfo: Vehicles) {
    const formVehicles = this.dialog.open(EditFormComponent,{
      width:'400px',
      data:vehicleInfo
    })
    formVehicles.afterClosed().subscribe(result =>{
      if(result){
        console.log(result);
        this.vehiclesService.updateVehiclesGraphql(result);
      }
    })
  }
  
  deleteVehicle(uid: string) {
    const formVehicles = this.dialog.open(ConfirmBoxComponent,{
      width:'400px',
      data:uid
    })
    formVehicles.afterClosed().subscribe(result =>{
      if(result){
        console.log(uid);
        this.vehiclesService.deleteVehiclesGraphql(uid);
      }
    })
  }
  

}


