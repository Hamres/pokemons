import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../../../common/Input/Input'
import { User } from '../../../../types'
import {
  useLoginWithEmailAndPasswordMutation,
  useLoginWithGoogleMutation
} from '../../../../utils/firebase'
import { AUTH_COOKIE, emailSchema, passwordSchema, ROUTES } from '../../../../utils/constants'
import { useNavigate } from 'react-router'

import styles from './SignInForm.module.css'
import { useAppDispatch } from '../../../../utils/redux/store'
import { setLogin } from '../../../../utils/redux/auth/authSlice'
import { setCookie } from '../../../../utils/helpers'
import { UserCredential } from '@firebase/auth'

interface SignInFormValues extends User {
  email: string
  password: string
}
const SignInForm: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSignInSuccess = ({ user }: UserCredential) => {
    setCookie(AUTH_COOKIE, user.uid)
    dispatch(setLogin())
    navigate(ROUTES.POKEMONS)
  }

  const { mutate: loginWithGoogleMutate } = useLoginWithGoogleMutation({
    options: {
      onSuccess: onSignInSuccess
    }
  })

  const {
    mutate: loginWithEmailAndPasswordMutate,
    isLoading: loginWithEmailAndPasswordMutateIsLoading
  } = useLoginWithEmailAndPasswordMutation({
    options: {
      onSuccess: onSignInSuccess
    }
  })
  const { register, handleSubmit, formState } = useForm<SignInFormValues>()
  const { isSubmitting, errors } = formState
  const isLoading = isSubmitting || loginWithEmailAndPasswordMutateIsLoading

  return (
    <>
      <form
        className={styles.sign_in_form}
        onSubmit={handleSubmit(async ({ password, email }) =>
          loginWithEmailAndPasswordMutate({ email, password })
        )}
      >
        <h1 className={styles.title}>Login</h1>

        <Input
          {...register('email', emailSchema)}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={isLoading}
          placeholder='Email'
          error={errors.email?.message}
        />
        {errors.email?.type === 'required' && <p role='alert'>{errors.email.message}</p>}
        {errors.email?.type === 'pattern' && <p role='alert'>{errors.email.message}</p>}

        <Input
          type='password'
          {...register('password', passwordSchema)}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={isLoading}
          placeholder='Password'
          error={errors.password?.message}
        />
        {errors.password?.type === 'required' && <p role='alert'>{errors.password.message}</p>}
        {errors.password?.type === 'minLength' && <p role='alert'>{errors.password.message}</p>}

        <button type='submit' disabled={isLoading} className={styles.signInButton}>
          Sign in
        </button>
      </form>
      <button className={styles.googleButton} onClick={() => loginWithGoogleMutate({})}>
        Login with google
      </button>
    </>
  )
}

export default SignInForm
