export const personsKey = {
    all() {
      return ['persons'] as const
    },
    byId(id: string) {
      return ['persons', id] as const
    },
  }
  
  