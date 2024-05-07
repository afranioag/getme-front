import { AxiosInstance, AxiosResponse } from 'axios'

import RestAPIClient from '@/services/rest-api-client/rest-api-client'
import { PersonUpdatenData } from './types'
import { PersonResponse } from '@/models/person/types'
import { getPersonsByIdEndpoint, getPersonsEndpoint } from './utils'
import PersonFactory from '@/models/person/person-factory'
import SessionStorageClient from '@/utils/session-storage/session-storage-client'

class PersonClient extends RestAPIClient {
    constructor(api: AxiosInstance) {
        super(api)
    }

    async update(updatedData: PersonUpdatenData) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.put<
            PersonResponse,
            AxiosResponse<PersonResponse>,
            PersonUpdatenData
        >(
            getPersonsByIdEndpoint(updatedData.id),
            updatedData,
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )

        return PersonFactory.createFromResponse(response.data)
    }

    async getById(id: number) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.get<
            PersonResponse,
            AxiosResponse<PersonResponse>
        >(
            getPersonsByIdEndpoint(id),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
        return PersonFactory.createFromResponse(response.data)
    }

    async get() {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.get<
            PersonResponse[],
            AxiosResponse<PersonResponse[]>
        >(getPersonsEndpoint(), {
            headers: {
                Authorization: `Bearer ${data?.credentials.access_token}`
            }
        })
        return PersonFactory.createManyFromResponse(response.data)
    }
}

export default PersonClient