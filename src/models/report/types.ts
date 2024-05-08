import { InformationFields, InformationResponse } from "../information/types";
import {
  LastSeenLocation,
  PersonFields,
  PersonResponse,
} from "../person/types";

export interface ReportResponse {
  id: number;
  person: PersonResponse;
  information?: InformationResponse[];
  lastSeenLocation: LastSeenLocation;
}

export interface ReportFields {
  id: number;
  person: PersonFields;
  informations?: InformationFields[];
  lastSeenLocation: LastSeenLocation;
}
