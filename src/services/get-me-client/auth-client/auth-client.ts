import { AxiosInstance, AxiosResponse } from 'axios'

import RestAPIClient from '@/services/rest-api-client/rest-api-client'
import { getAuthEndpoint } from './utils';
import { LoginCredentials, TokenResponse } from './types';

class AuthClient extends RestAPIClient {
    constructor(api: AxiosInstance) {
        super(api)
    }

    async login(loginData: LoginCredentials) {
        const formData = new URLSearchParams();
        formData.append('username', loginData.username);
        formData.append('password', loginData.password);
        formData.append('grant_type', 'password');
        console.log(formData)
        try {
            const response = await this.api.post<TokenResponse>(
                getAuthEndpoint(),
                formData,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic Z2V0bWU2NTM6Z2V0bWVANjUzMjk`,
                        withCredentials: false
                    }
                }
            );
            console.log(response)
            return response.data;
        } catch (error) {
            throw new Error('Erro ao fazer login: ' + error);
        }

    }
}

export default AuthClient