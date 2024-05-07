import User from '@/models/user/user'
import { LoginCredentials, TokenResponse } from '@/services/get-me-client/auth-client/types'
import { createContext } from '@/utils/context'

export interface SessionContextValue {
  user: User | null
  login: (credentials: LoginCredentials) => void
  isLoading: boolean
  clearSession: () => void
}

const SessionContext = createContext<SessionContextValue>('SessionContext')

export default SessionContext