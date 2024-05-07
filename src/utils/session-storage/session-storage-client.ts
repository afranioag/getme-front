import { TokenResponse } from '@/services/get-me-client/auth-client/types'
import { SESSION_DATA_STORAGE_KEY } from './constants'

interface PersistedSessionData {
  credentials: TokenResponse
}

class SessionStorageClient {
  constructor() {

  }
  save(sessionData: PersistedSessionData) {
    window.localStorage.setItem(SESSION_DATA_STORAGE_KEY, JSON.stringify(sessionData))
  }

  read(): PersistedSessionData | null {
    
    const stringifiedSessionData = window.localStorage.getItem(SESSION_DATA_STORAGE_KEY)
    
    if (!stringifiedSessionData) {
      return null
    }

    const sessionData = JSON.parse(stringifiedSessionData)
    
    return sessionData
  }

  clear() {
    window.localStorage.removeItem(SESSION_DATA_STORAGE_KEY)
  }
}

export default SessionStorageClient