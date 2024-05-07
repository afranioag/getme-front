import Person from "./person";
import { PersonResponse, PersonFields } from "./types";

class PersonFactory {
  static createFromResponse(response: PersonResponse): Person {
    return new Person(this.mapResponseToFields(response));
  }

  static mapResponseToFields(response: PersonResponse): PersonFields {
    return {
      id: response.id,
      name: response.name,
      age: response.age,
      height: response.height,
      hairColor: response.hairColor,
      eyeColor: response.eyeColor,
      gender: response.gender,
      bodyMark: response.bodyMark,
      physicalDescription: response.physicalDescription,
      psychologicalDescription: response.psychologicalDescription,
      lastSeenLocation: response.lastSeenLocation,
      document: response.document,
      status: response.status,
      image: response.image,
    };
  }

  static createManyFromResponse(response: PersonResponse[]): Person[] {
    return response.map((response) => this.createFromResponse(response));
  }

  static toResponse(person: Person): PersonResponse {
    return {
      id: person.id(),
      name: person.name(),
      age: person.age(),
      height: person.height(),
      hairColor: person.hairColor(),
      eyeColor: person.eyeColor(),
      gender: person.gender(),
      bodyMark: person.bodyMark(),
      physicalDescription: person.physicalDescription(),
      psychologicalDescription: person.psychologicalDescription(),
      lastSeenLocation: person.lastSeenLocation(),
      document: person.document(),
      status: person.status(),
      image: person.image(),
    };
  }

  static toFields(person: Person): PersonFields {
    return this.mapResponseToFields(this.toResponse(person));
  }
}

export default PersonFactory;
