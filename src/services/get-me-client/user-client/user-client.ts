import { AxiosInstance, AxiosResponse } from 'axios'

import RestAPIClient from '@/services/rest-api-client/rest-api-client'
import UserFactory from '@/models/user/user-factory'
import { UserResponse } from '@/models/user/types'
import { UserCreationData, UserUpdateData } from './types'
import { getUsersEndpoint, getUsersByIdEndpoint, getUsersByEmailEndpoint } from './utils'
import SessionStorageClient from '@/utils/session-storage/session-storage-client'


class UserClient extends RestAPIClient {

    constructor(api: AxiosInstance) {
        super(api)
    }

    async create(creationData: UserCreationData) {
        const response = await this.api.post<
            UserResponse,
            AxiosResponse<UserResponse>,
            UserCreationData
        >(
            getUsersEndpoint(),
            creationData
        )
        return UserFactory.createFromResponse(response.data)
    }

    async update(updatedData: UserUpdateData) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.put<
            UserResponse,
            AxiosResponse<UserResponse>,
            UserUpdateData
        >(
            getUsersByIdEndpoint(updatedData.id),
            updatedData,
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }

        )
        return UserFactory.createFromResponse(response.data)
    }

    async getById(id: string) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.get<
            UserResponse,
            AxiosResponse<UserResponse>
        >(
            getUsersByIdEndpoint(id),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
        return UserFactory.createFromResponse(response.data)
    }

    async getByEmail(email: string) {
        const storage = new SessionStorageClient()
        const data = storage.read()
      
        const response = await this.api.get<
            UserResponse,
            AxiosResponse<UserResponse>
        >(
            getUsersByEmailEndpoint(),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                },
                params: {
                    email
                }
            }
        )
        return UserFactory.createFromResponse(response.data)
    }

    async deleteById(id: string) {
        const storage = new SessionStorageClient()
        const data = storage.read()
        const response = await this.api.delete<
            UserResponse,
            AxiosResponse<UserResponse>
        >(
            getUsersByIdEndpoint(id),
            {
                headers: {
                    Authorization: `Bearer ${data?.credentials.access_token}`
                }
            }
        )
        return UserFactory.createFromResponse(response.data)
    }
}

export default UserClient