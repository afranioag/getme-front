import {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useQueryClient } from "react-query";
import jwt, { JwtPayload } from "jsonwebtoken";

import useAPI from "@/hooks/api/use-api/use-api";
import User from "@/models/user/user";

import SessionContext, { SessionContextValue } from "./session-context";
import {
  LoginCredentials,
  TokenResponse,
} from "@/services/get-me-client/auth-client/types";
import GetMeClient from "@/services/get-me-client/get-me-client";
import SessionStorageClient from "@/utils/session-storage/session-storage-client";

const SessionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const api = useAPI();
  const { setGetMeClient: setGetMeClient } = api;

  const queryClient = useQueryClient();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const clearSession = useCallback(async () => {
    const storage = new SessionStorageClient();
    storage.clear();
    queryClient.clear();
  }, [queryClient]);

  useEffect(() => {
    const storage = new SessionStorageClient();
    const data = storage.read();
    setUser(data?.user ?? null);
  }, []);

  const saveSessionDataToStorage = useCallback(
    (credentials: TokenResponse, user: User | null) => {
      const storage = new SessionStorageClient();
      storage.save({ credentials, user });
    },
    []
  );

  const startSession = useCallback(
    async (credentials: TokenResponse, user: User | null) => {
      const getMeClient = new GetMeClient();
      setGetMeClient(getMeClient);
      saveSessionDataToStorage(credentials, user);
    },
    [saveSessionDataToStorage, setGetMeClient]
  );

  const login = useCallback(
    async (loginCredentials: LoginCredentials) => {
      setIsLoading(true);
      const sessionResult = await api.getMe
        .getAuthClient()
        .login(loginCredentials);
      const decoded = jwt.decode(sessionResult.access_token) as JwtPayload;
      const email = decoded.username;
      await startSession(sessionResult, null);
      const user = await api.getMe.getUserClient().getByEmail(email);
      await startSession(sessionResult, user);
      setUser(user);
      setIsLoading(false);
    },
    [api.getMe, startSession]
  );

  const session = useMemo<SessionContextValue>(
    () => ({ user, isLoading, login, clearSession }),
    [user, isLoading, login, clearSession]
  );

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
