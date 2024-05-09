import { AxiosInstance, AxiosResponse } from "axios";

import RestAPIClient from "@/services/rest-api-client/rest-api-client";

import {
  getUpdateInformationsByIdEndpoint,
  getCreationInformationsByIdEndpoint,
} from "./utils";
import { InformationCreationData, InformationUpdateData } from "./types";
import InformationFactory from "@/models/information/information-factory";
import { InformationResponse } from "@/models/information/types";
import SessionStorageClient from "@/utils/session-storage/session-storage-client";

class InformationClient extends RestAPIClient {
  constructor(api: AxiosInstance) {
    super(api);
  }

  async create(creationData: InformationCreationData) {
    const storage = new SessionStorageClient();
    const data = storage.read();
    const response = await this.api.post<
      InformationResponse,
      AxiosResponse<InformationResponse>,
      InformationCreationData
    >(
      getCreationInformationsByIdEndpoint(creationData.reportId),
      creationData,
      {
        headers: {
          Authorization: `Bearer ${data?.credentials.access_token}`,
        },
      }
    );
    return InformationFactory.createFromResponse(response.data);
  }

  async update(updatedData: InformationUpdateData) {
    const storage = new SessionStorageClient();
    const data = storage.read();
    const response = await this.api.put<
      InformationResponse,
      AxiosResponse<InformationResponse>,
      InformationUpdateData
    >(getUpdateInformationsByIdEndpoint(updatedData.id), updatedData, {
      headers: {
        Authorization: `Bearer ${data?.credentials.access_token}`,
      },
    });

    return InformationFactory.createFromResponse(response.data);
  }
}

export default InformationClient;
