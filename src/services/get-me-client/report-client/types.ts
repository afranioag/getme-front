export interface ReportCreationData {
  person: {
    name: string;
    age: string;
    height: string;
    hairColor: string;
    eyeColor: string;
    gender: string;
    bodyMark: string;
    physicalDescription: string;
    psychologicalDescription: string;
    document: string;
    status: string;
    image: string;
  };
  lastSeenLocation: {
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    number: string;
    postalCode: string;
  };
}
