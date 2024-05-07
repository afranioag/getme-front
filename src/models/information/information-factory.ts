import { InformationResponse, InformationFields } from "./types";
import Information from "./information";

class InformationFactory {
  static createFromResponse(response: InformationResponse): Information {
    return new Information(this.mapResponseToFields(response));
  }

  static createManyFromResponse(response: InformationResponse[]): Information[] {
    return response.map(
      (response) => new Information(this.mapResponseToFields(response))
    );
  }

  static mapResponseToFields(response: InformationResponse): InformationFields {
    return {
      id: response.id,
      name: response.name,
      email: response.email,
      locationDetails: response.locationDetails,
      message: response.message,
      reportId: response.reportId,
      phone: response.phone
    };
  }

  static toResponse(information: Information): InformationResponse {
    return {
      id: information.id(),
      name: information.name(),
      email: information.email(),
      locationDetails: information.locationDetails(),
      message: information.message(),
      reportId: information.reportId(),
      phone: information.phone(),
    };
  }

  static toFields(information: Information): InformationFields {
    return this.mapResponseToFields(this.toResponse(information));
  }
}

export default InformationFactory;

