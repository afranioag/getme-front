export enum PersonStatus {
  MISSING = "Desaparecido",
  ABDUCTED = "Sequestrado",
  FOUND = "Encontrado",
  FAMILY_SEPARATED = "Família Separada",
  DECEASED = "Falecido"
}

export enum Gender {
  MALE = "Masculino",
  FEMALE = "Feminino"
}

export interface LastSeenLocation {
  country: string,
  state: string,
  city: string,
  neighborhood: string,
  number: string,
  postalCode: string,
  latitude: number,
  longitude: number
}

export interface PersonResponse {
  id: number,
  name: string,
  age: number,
  image: string,
  height: number,
  hairColor: string,
  eyeColor: string,
  gender: Gender,
  bodyMark: string,
  physicalDescription: string,
  psychologicalDescription: string,
  lastSeenLocation: LastSeenLocation,
  document: string,
  status: PersonStatus
}

export interface PersonFields {
  id: number,
  name: string,
  age: number,
  image: string,
  height: number,
  hairColor: string,
  eyeColor: string,
  gender: Gender,
  bodyMark: string,
  physicalDescription: string,
  psychologicalDescription: string,
  lastSeenLocation: LastSeenLocation,
  document: string,
  status: PersonStatus
}