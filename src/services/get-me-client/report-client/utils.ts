import { REPORTS_ENDPOINT } from "./constants"

export function getReportsEndpoint(): string {
  return `${REPORTS_ENDPOINT}`
}

export function getReportsUsersEndpoint(): string {
  return `${getReportsEndpoint()}/users`
}

export function getReportsByIdEndpoint(id: string): string {
  return `${getReportsEndpoint()}/${encodeURIComponent(id)}`
}

export function getDeleteReportsByIdEndpoint(id: string): string {
  return `${getReportsEndpoint()}/${encodeURIComponent(id)}/users`
}
