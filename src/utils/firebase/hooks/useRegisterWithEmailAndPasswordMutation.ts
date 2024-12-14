import { useMutation } from '@tanstack/react-query'
import { User } from '../../../types'
import { registerWithEmailAndPassword } from '../requests'

interface UseRegisterWithEmailAndPasswordMutationParams {
  user: User & { email: string }
  password: string
}

export const useRegisterWithEmailAndPasswordMutation = (
  settings?: RequestMutationSettings<typeof registerWithEmailAndPassword>
) =>
  useMutation(
    ['registerWithEmailAndPassword'],
    (params: RequestParams<UseRegisterWithEmailAndPasswordMutationParams>) =>
      registerWithEmailAndPassword(params.user, params.password),
    settings?.options && settings.options
  )
