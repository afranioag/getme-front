import axios, { AxiosInstance } from "axios";

import globalConfig from "@/config/global-config/global-config";

import UserClient from "./user-client/user-client";
import { serializeQueryParameters } from "../utils";
import InformationClient from "./information-client/information-client";
import ReportClient from "./report-client/report-client";
import PersonClient from "./person-client/person-client";
import AuthClient from "./auth-client/auth-client";

class GetMeClient {
    private _userCLient: UserClient;
    private _informationClient: InformationClient;
    private _reportClient: ReportClient;
    private _personClient: PersonClient;
    private _authClient: AuthClient;

    constructor() {
        const apiService = this.createAPIInstance(globalConfig.apiURL());

        this._userCLient = new UserClient(apiService);
        this._informationClient = new InformationClient(apiService);
        this._reportClient = new ReportClient(apiService);
        this._personClient = new PersonClient(apiService)
        this._authClient = new AuthClient(apiService)
    }

    private createAPIInstance(baseURL: string): AxiosInstance {
        return axios.create({
            baseURL,
            paramsSerializer: serializeQueryParameters,
        });
    }

    public getUserClient() {
        return this._userCLient
    }

    public getInformationClient() {
        return this._informationClient
    }

    public getPersonClient() {
        return this._personClient
    }

    public getReportClient() {
        return this._reportClient
    }

    public getAuthClient() {
        return this._authClient
    }
}

export default GetMeClient;
