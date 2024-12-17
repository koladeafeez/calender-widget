
export class ApiBaseResponse<T = null>
{
 constructor(public message : string, public success : boolean, public data : T){};

}


export class EventModel {
    constructor(public id : number, public name:string, public date: Date, 
        public location : string, public availableTicket : number, public shortDescription : string,  ){};

   
}