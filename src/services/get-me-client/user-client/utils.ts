import { USERS_ENDPOINT } from "./constants";

export function getUsersEndpoint(): string {
  return `${USERS_ENDPOINT}`;
}

export function getUsersByIdEndpoint(id: string): string {
  return `${USERS_ENDPOINT}/${encodeURIComponent(id)}/v1`;
}

export function getUsersByEmailEndpoint(): string {
  return `${USERS_ENDPOINT}/email/v1`;
}
