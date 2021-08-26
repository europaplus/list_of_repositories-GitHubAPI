import {ApiResponse, HTTPMethod, IApiStore, RequestParams} from "./types";
import qs from 'qs';

export default class ApiStore implements IApiStore {
    // TODO: реализовать
    baseUrl: string;

    constructor(url: string) {
        this.baseUrl = url;
    }

    private getRequestData<ReqT>(params: RequestParams<ReqT>): [string, RequestInit] {
        let endpoint = `${this.baseUrl}${params.endpoint}`;
        const req: RequestInit = {
            headers: {...params.headers},
        };

        if (params.method === HTTPMethod.GET) {
            endpoint = `${endpoint}?${qs.stringify(params.data)}`
        }
        if (params.method === HTTPMethod.POST) {
            req.body = JSON.stringify(params.data);
            req.headers = {
                ...req.headers,
                ['Content-Type']: 'application/json;charset=utf-8',
            };
        }
        return [endpoint, req];
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const response = await fetch(...this.getRequestData(params));
            const data = await response.json();
            return {
                success: response.ok,
                data: data,
                status: response.status,
            }
        } catch (error) {
            return {
                success: error.success,
                data: error.data,
                status: error.status,
            }
        }
    }
}