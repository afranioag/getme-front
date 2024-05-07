export const reportsKey = {
    all() {
      return ['reports'] as const
    },
    byId(id: string) {
      return ['reports', id] as const
    },
  }
  
  