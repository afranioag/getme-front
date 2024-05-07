export type Mode = 'development' | 'production' | 'test'

export interface Environment {
  readonly NODE_ENV: Mode

  readonly NEXT_PUBLIC_API_URL: string
  readonly NEXT_PUBLIC_COMPANY_NAME: string
}

export type EnvironmentVariableName = keyof Environment