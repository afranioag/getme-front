import Information from "../information/information";
import InformationFactory from "../information/information-factory";
import Person from "../person/person";
import PersonFactory from "../person/person-factory";
import { LastSeenLocation } from "../person/types";
import { ReportFields } from "./types";


class Report {
    private _id: number;
    private _person: Person;
    private _informations: Information[];
    private _lastSeenLocation: LastSeenLocation;
    
    constructor(fields: ReportFields) {
        this._id = fields.id;
        this._person = PersonFactory.createFromResponse(fields.person);
        this._lastSeenLocation = fields.lastSeenLocation;
        this._informations = fields.informations ? InformationFactory.createManyFromResponse(fields.informations) : []
    }

    id(): number {
        return this._id;
    }

    person(): Person {
        return this._person;
    }

    lastSeenLocation() {
        return this._lastSeenLocation;
    }

    informations() {
        return this._informations
    }
}

export default Report;
