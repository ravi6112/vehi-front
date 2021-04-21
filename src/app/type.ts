export type Vehicles = {
        uid: string;
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        car_make: string;
        car_model: string;
        vin_number: string;
        manufactured_date: Date;
}

export  type Query = {
    vehicles: Vehicles[];
}