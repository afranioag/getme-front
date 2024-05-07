import { FC, PropsWithChildren, useMemo, useState } from 'react'

import APIContext, { APIContextValue } from './api-context'
import GetMeClient from '@/services/get-me-client/get-me-client'


const APIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [getMeClient, setGetMeClient] = useState(() => {
    
    return new GetMeClient()
  })

  const api = useMemo<APIContextValue>(
    () => ({ getMe: getMeClient, setGetMeClient: setGetMeClient }),
    [getMeClient, setGetMeClient]
  )

  return <APIContext.Provider value={api}>{children}</APIContext.Provider>
}

export default APIContextProvider