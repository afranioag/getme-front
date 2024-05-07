import { AxiosInstance, AxiosResponse } from 'axios'

import RestAPIClient from '@/services/rest-api-client/rest-api-client'
import UserFactory from '@/models/user/user-factory'
import { UserResponse } from '@/models/user/types'
import { UserCreationData, UserUpdateData } from './types'
import { getDeleteReportsByIdEndpoint, getReportsByIdEndpoint, getReportsEndpoint, getReportsUsersEndpoint } from './utils'
import ReportFactory from '@/models/report/report-factory'
import { ReportResponse } from '@/models/report/types'
import SessionStorageClient from '@/utils/session-storage/session-storage-client'

class ReportClient extends RestAPIClient {
    constructor(api: AxiosInstance) {
        super(api)
    }

    async create(creationData: UserCreationData) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.post<
            ReportResponse,
            AxiosResponse<ReportResponse>,
            UserCreationData
        >(
            getReportsUsersEndpoint(),
            creationData, 
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
        return ReportFactory.createFromResponse(response.data)
    }

    async getById(id: string) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.get<
            ReportResponse,
            AxiosResponse<ReportResponse>
        >(
            getReportsByIdEndpoint(id),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
        return ReportFactory.createFromResponse(response.data)
    }


    async getAuthenticated() {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.get<
            ReportResponse[],
            AxiosResponse<ReportResponse[]>
        >(
            getReportsUsersEndpoint(),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
        return ReportFactory.createManyFromResponse(response.data)
    }

    async get() {
        const response = await this.api.get<
            ReportResponse[],
            AxiosResponse<ReportResponse[]>
        >(
            getReportsEndpoint(),
        )
        return ReportFactory.createManyFromResponse(response.data)
    }

    async deleteById(id: string) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        await this.api.delete<
            ReportResponse,
            AxiosResponse<ReportResponse>
        >(
            getDeleteReportsByIdEndpoint(id),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
    }
}

export default ReportClient