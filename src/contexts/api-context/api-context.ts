import GetMeClient from "@/services/get-me-client/get-me-client"
import { createContext } from "@/utils/context"
    
export interface APIContextValue {
  getMe: GetMeClient
  setGetMeClient: (getMeClient: GetMeClient) => void
}

const APIContext = createContext<APIContextValue>('APIContext')

export default APIContext