import APIContext, { APIContextValue } from "@/contexts/api-context/api-context"

export type API = APIContextValue

function useAPI(): API {
  return APIContext.useContext()
}

export default useAPI