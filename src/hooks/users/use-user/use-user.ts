import useAPI from '@/hooks/api/use-api/use-api'

import { useQuery } from 'react-query'
import { usersKey } from './constants'
import User from '@/models/user/user'

const useUser = (id: string) => {
  const api = useAPI()
  const queryKey = usersKey.byId(id)

  const {
    data: user = null,
    isLoading
  } = useQuery<User>(
    queryKey,
    function fetchUserById() {
      return api.getMe.getUserClient().getById(id)
    }
  )

  return {
    user,
    isLoading,
  }
}

export default useUser