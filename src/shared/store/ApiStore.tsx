import qs from "qs";

import { ApiResponse, HTTPMethod, IApiStore, RequestParams } from "./types";

export default class ApiStore implements IApiStore {
  // TODO: реализовать
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  private getRequestData<ReqT>(
    params: RequestParams<ReqT>
  ): [string, RequestInit] {
    let endpoint = `${this.baseUrl}${params.endpoint}`;
    const req: RequestInit = {
      headers: { ...params.headers },
    };

    if (params.method === HTTPMethod.GET) {
      endpoint = `${endpoint}?${qs.stringify(
        params.data
      )}/issues?access_token=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`;
    }
    if (params.method === HTTPMethod.POST) {
      req.body = JSON.stringify(params.data);
      req.headers = {
        ...req.headers,
        ["Content-Type"]: "application/json;charset=utf-8",
      };
    }
    return [endpoint, req];
  }

  async request<SuccessT, ErrorT, ReqT = unknown>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    try {
      const response = await fetch(...this.getRequestData(params));
      const data = await response.json();
      console.log(data);
      return {
        success: response.ok,
        data: data,
        status: response.status,
      };
    } catch (error) {
      return {
        success: false,
        data: {},
        status: 404,
      };
    }
  }
}
