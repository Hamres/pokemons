import { useMutation } from '@tanstack/react-query'
import { loginWithGoogle } from '../requests'

export const useLoginWithGoogleMutation = (
  settings?: RequestMutationSettings<typeof loginWithGoogle>
) => useMutation(['loginWithGoogle'], loginWithGoogle, settings?.options && settings.options)
