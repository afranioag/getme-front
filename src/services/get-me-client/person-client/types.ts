import { Gender, LastSeenLocation, PersonStatus } from "@/models/person/types"

export interface PersonUpdatenData {
    id: number,
    name: string,
    age: number,
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