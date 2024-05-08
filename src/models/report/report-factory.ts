import InformationFactory from "../information/information-factory";
import PersonFactory from "../person/person-factory";
import Report from "./report";
import { ReportResponse, ReportFields } from "./types";

class ReportFactory {
  static createFromResponse(response: ReportResponse) {
    return new Report(this.mapResponseToFields(response));
  }

  static createManyFromResponse(response: ReportResponse[]): Report[] {
    return response.map((response) => this.createFromResponse(response));
  }

  static mapResponseToFields(response: ReportResponse): ReportFields {
    return {
      id: response.id,
      person: response.person,
      informations: response.information,
      lastSeenLocation: response.lastSeenLocation,
    };
  }

  static toFields(report: Report): ReportFields {
    return {
      id: report.id(),
      person: PersonFactory.toFields(report.person()),
      lastSeenLocation: report.lastSeenLocation(),
      informations: report
        .informations()
        ?.map((information) => InformationFactory.toFields(information)),
    };
  }
}

export default ReportFactory;
