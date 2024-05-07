import { LocationDetails } from "@/models/information/types";

export interface InformationCreationData {
    reportId: string;
    name: string,
    phone: string,
    email: string,
    message: string,
    locationDetails: LocationDetails
    image: string
}

export interface InformationUpdateData extends InformationCreationData {
    id: string
}