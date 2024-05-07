import { useCallback } from 'react'
import toast, { ToastPosition, useToasterStore } from 'react-hot-toast'

const DEFAULT_DURATION = 4000

interface ToastOptions {
  maxOnScreen: number
}

function useToasts({ maxOnScreen }: ToastOptions) {
  const { toasts } = useToasterStore()

  const show = useCallback(
    (
      content: JSX.Element,
      options: {
        id: string
        position?: ToastPosition
        duration?: number
        ariaLabel?: string
      }
    ) => {
      const { id: toastId, position = 'top-center', duration = DEFAULT_DURATION } = options

      const numberOfToastsToDismiss = Math.max(maxOnScreen - 1, 0)
      const toastsToDismiss = toasts.filter(toast => toast.visible).slice(numberOfToastsToDismiss)
      toastsToDismiss.forEach(toastToDismiss => {
        toast.dismiss(toastToDismiss.id)
      })

      toast.custom(
        ({ id, visible }) => (
          <div role="status" aria-live="polite" aria-label={options.ariaLabel}>
            <button
              type="button"
              onClick={() => toast.dismiss(id)}
              className={clsx(
                'rounded-md border-1 border-gray-200 bg-white py-3 px-4 text-left shadow-md',
                position.startsWith('top') && (visible ? 'animate-enter-down' : 'animate-leave-up'),
                position.startsWith('bottom') && (visible ? 'animate-enter-up' : 'animate-leave-down')
              )}
            >
              {content}
            </button>
          </div>
        ),
        { id: toastId, position, duration }
      )
    },
    [toasts, maxOnScreen]
  )

  return { show }
}

export default useToasts