import { LocationDetails } from "@/models/information/types";

export interface InformationCreationData {
  reportId: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  image: string;
  locationDetails: LocationDetails;
}

export interface InformationUpdateData extends InformationCreationData {
  id: string;
}
