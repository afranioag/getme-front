import { PERSONS_ENDPOINT } from "./constants"

export function getPersonsEndpoint(): string {
  return `${PERSONS_ENDPOINT}/v1`
}

export function getPersonsByIdEndpoint(id: number): string {
  return `${PERSONS_ENDPOINT}/${encodeURIComponent(id)}/v1`
}
