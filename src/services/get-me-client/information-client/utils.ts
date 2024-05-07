import { INFORMATIONS_ENDPOINT } from "./constants"

export function getUpdateInformationsByIdEndpoint(id: string): string {
  return `${INFORMATIONS_ENDPOINT}/${encodeURIComponent(id)}/v1`
}

export function getCreationInformationsByIdEndpoint(id: string): string {
  return `${INFORMATIONS_ENDPOINT}/reports/${encodeURIComponent(id)}/v1`
}
