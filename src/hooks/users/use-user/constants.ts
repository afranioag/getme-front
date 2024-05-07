export const usersKey = {
    all() {
      return ['users'] as const
    },
    byId(id: string) {
      return ['users', id] as const
    },
  }
  
  