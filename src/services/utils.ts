import QueryString from 'qs'

import globalConfig from '@/config/global-config/global-config'

function withBaseURL(baseURL: string, endpoint: string): string {
  const separator = endpoint.startsWith('/') ? '' : '/'
  return `${baseURL}${separator}${endpoint}`
}

export function withApiServiceURL(endpoint: string): string {
  return withBaseURL(globalConfig.apiURL(), endpoint)
}


export function serializeQueryParameters(parameters: unknown): string {
  return QueryString.stringify(parameters, { arrayFormat: 'repeat' })
}