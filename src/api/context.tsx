import { createContext, useContext } from 'react'
import * as api from './index'
export const ApiContext = createContext(api)
export const useApi = () => {
    return useContext(ApiContext)
}
