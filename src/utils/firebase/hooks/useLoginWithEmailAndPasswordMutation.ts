import { useMutation } from '@tanstack/react-query'
import { loginWithEmailAndPassword } from '../requests'

interface UseLoginWithEmailAndPasswordMutationParams {
  email: string
  password: string
}

export const useLoginWithEmailAndPasswordMutation = (
  settings?: RequestMutationSettings<typeof loginWithEmailAndPassword>
) =>
  useMutation(
    ['loginWithEmailAndPassword'],
    (params: RequestParams<UseLoginWithEmailAndPasswordMutationParams>) =>
      loginWithEmailAndPassword(params.email, params.password),
    settings?.options && settings.options
  )
