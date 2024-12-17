

export class ServiceResult<T=null> {

    constructor(public message : string, public status : number, public data :  T){};
};