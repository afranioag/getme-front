import { EnvironmentVariableName, Mode } from './types'

class GlobalConfig {
  private _mode: Mode
  private _projectName: string

  private _apiURL: string

  constructor(mode: Mode) {
    this._mode = mode
    this._projectName = 'Get me'
    
    this._apiURL = this.ensureRequiredVariable(
      'NEXT_PUBLIC_API_URL',
      process.env.NEXT_PUBLIC_API_URL
    )
  }

  mode(): Mode {
    return this._mode
  }

  projectName(): string {
    return this._projectName
  }

  apiURL(): string {
    return this._apiURL
  }

  private ensureRequiredVariable<VariableValue extends string>(
    variableName: EnvironmentVariableName,
    variableValue: VariableValue | undefined
  ): VariableValue {
    if (variableValue === undefined || variableValue.trim() === '') {
      throw new Error(`Environment variable '${variableName}' is not set.`)
    }
    return variableValue
  }
}

const globalConfig = new GlobalConfig(process.env.NODE_ENV)

export default globalConfig