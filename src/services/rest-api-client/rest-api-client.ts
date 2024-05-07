import { AxiosInstance } from 'axios'

type BaseAPI = AxiosInstance | Record<string, AxiosInstance>

class RestAPIClient<API extends BaseAPI = AxiosInstance> {
  constructor(protected api: API) {}

  baseURL(instanceName?: keyof API): string | undefined {
    if (this.isAxiosInstance(this.api)) {
      return this.api.defaults.baseURL
    }
    if (this.isGroupedAPIInstances(this.api) && instanceName !== undefined) {
      return this.api[instanceName].defaults.baseURL
    }
    return undefined
  }

  private isAxiosInstance(api: BaseAPI): api is AxiosInstance {
    return 'defaults' in api
  }

  private isGroupedAPIInstances(api: BaseAPI): api is Record<string, AxiosInstance> {
    const instances = Object.values(api) as AxiosInstance[]
    return instances.every(instance => this.isAxiosInstance(instance))
  }
}

export default RestAPIClient