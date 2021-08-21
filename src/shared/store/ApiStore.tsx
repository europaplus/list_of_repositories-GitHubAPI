import {ApiResponse, IApiStore, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
    // TODO: реализовать
    baseUrl: string;

    constructor(url: string) {
        this.baseUrl = url;
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const response = await fetch(`${this.baseUrl}${params.endpoint}`);
            const data = await response.json();
            console.log('Response', response);
            console.log('Data', data);
            return {
                success: response.ok,
                data: data,
                status: response.status,
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}