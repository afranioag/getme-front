
import SessionContext, { SessionContextValue } from "@/contexts/session-context/session-context"

export type SESSION = SessionContextValue

function useSession(): SESSION {
  return SessionContext.useContext()
}

export default useSession