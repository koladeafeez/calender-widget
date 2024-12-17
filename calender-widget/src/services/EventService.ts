import axios from "axios";
import { ApiBaseResponse, EventModel } from "../models/Event";
import { CompanyModel } from "../models/Company";
import {apiConfig} from "../../package.json";

let BASE_URL  : string = apiConfig.apiUrl;

console.log(BASE_URL);

if(!BASE_URL)
{
   BASE_URL = `http://localhost:4000`;
}else
{
  if(BASE_URL.endsWith('/'))
  {
    BASE_URL = BASE_URL.slice(0, -1);
    console.log("New Base" + BASE_URL);
  }
}





export class EventService {

    public getEvents = async () : Promise<ApiBaseResponse<EventModel[] | null>> => {
        try {
            const response = await axios.get(BASE_URL +"/api/events");
            const data : ApiBaseResponse<EventModel[]>  = response.data;
            return data;

          } catch (err) {
            console.log(`Something went wrong ${err}`);
            return new ApiBaseResponse<null>("An error occur", false, null);
          }

    };

    public saveBooking = async (companyId : number, eventId : number, ticketCount : number) : Promise<ApiBaseResponse<EventModel | null>> => {
        try {

            var response = await axios.post(`${BASE_URL}/api/companies/${companyId}/booking`, {
                eventId: eventId,
                ticketCount: ticketCount
              });
              
            const data : ApiBaseResponse<EventModel>  = response.data;
            return data;

          } catch (err) {
            console.log(`Something went wrong ${err}`);
            return new ApiBaseResponse<null>("An error occur", false, null);
          }
    }


    public getSetting = async (companyId : number) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/companies/${companyId}`);
            const data : ApiBaseResponse<CompanyModel>  = response.data;
            return data;

          } catch (err) {
            console.log(`Something went wrong ${err}`);
            return new ApiBaseResponse<null>("An error occur", false, null);
          }
    }

}