import { API_URL } from "@/configs/global"
import { ApiError } from "@/types/http-errors.interface"
import axios, {
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from "axios"
import { errorHandler, networkErrorStrategy } from "./http-error-strategies"

const httpService = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

httpService.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response) {
            const statusCode = error?.response.status
            if (statusCode >= 400) {
                const errorData: ApiError = error.response.data
                errorHandler[statusCode](errorData)
            }
        } else {
            networkErrorStrategy()
        }
    }
)

const apiBase = async <T>(
    url: string,
    options?: AxiosRequestConfig
): Promise<T> => {
    const response: AxiosResponse = await httpService(url, options)
    return response.data as T
}

const readData = async <T>(
    url: string,
    headers?: AxiosRequestHeaders
): Promise<T> => {
    const options: AxiosRequestConfig = {
        headers,
        method: "GET",
    }
    return await apiBase<T>(url, options)
}

const createData = async <TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders
): Promise<TResult> => {
    const options: AxiosRequestConfig = {
        headers,
        method: "POST",
        data: JSON.stringify(data),
    }
    return await apiBase<TResult>(url, options)
}

const updateData = async <TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders
): Promise<TResult> => {
    const options: AxiosRequestConfig = {
        headers,
        method: "PUT",
        data: JSON.stringify(data),
    }
    return await apiBase(url, options)
}

const deleteData = async (
    url: string,
    headers?: AxiosRequestHeaders
): Promise<void> => {
    const options: AxiosRequestConfig = {
        headers,
        method: "DELETE",
    }

    return await apiBase(url, options)
}

export { createData, readData, updateData, deleteData }
