import { REQUEST_METHOD } from "../../lib/constants"

export interface FetchConfig {
    url: string
    method: REQUEST_METHOD
    data: {
        [key: string]: any
    },
    token?: string
}


