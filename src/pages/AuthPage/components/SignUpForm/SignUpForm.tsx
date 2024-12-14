import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../../../common/Input/Input'
import { User } from '../../../../types'
import { useRegisterWithEmailAndPasswordMutation } from '../../../../utils/firebase'
import {
  AUTH_COOKIE,
  emailSchema,
  passwordSchema,
  patternSchema,
  ROUTES
} from '../../../../utils/constants'
import { useNavigate } from 'react-router'

import styles from './SignUpForm.module.css'
import { setLogin } from '../../../../utils/redux/auth/authSlice'
import { useAppDispatch } from '../../../../utils/redux/store'
import { setCookie } from '../../../../utils/helpers'

interface SignUpFormValues extends User {
  email: string
  password: string
}

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    mutate: registerWithEmailAndPasswordMutate,
    isLoading: registerWithEmailAndPasswordMutateIsLoading
  } = useRegisterWithEmailAndPasswordMutation({
    options: {
      onSuccess: ({ user }) => {
        setCookie(AUTH_COOKIE, user.uid)
        dispatch(setLogin())
        navigate(ROUTES.POKEMONS)
      }
    }
  })
  const { register, handleSubmit, formState } = useForm<SignUpFormValues>()
  const { isSubmitting, errors } = formState
  const isLoading = isSubmitting || registerWithEmailAndPasswordMutateIsLoading

  return (
    <form
      className={styles.sign_up_form}
      onSubmit={handleSubmit(({ password, ...user }) =>
        registerWithEmailAndPasswordMutate({ user, password })
      )}
    >
      <h1 className={styles.title}>Sign up</h1>

      <Input
        {...register('displayName', patternSchema)}
        aria-invalid={errors.email ? 'true' : 'false'}
        disabled={isLoading}
        placeholder='Name'
        autoComplete='off'
        error={errors.displayName?.message}
      />
      {errors.displayName?.type === 'pattern' && <p role='alert'>{errors.displayName.message}</p>}

      <Input
        {...register('city', patternSchema)}
        aria-invalid={errors.email ? 'true' : 'false'}
        disabled={isLoading}
        placeholder='City'
        autoComplete='off'
        error={errors.city?.message}
      />
      {errors.city?.type === 'pattern' && <p role='alert'>{errors.city.message}</p>}

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
        aria-invalid={errors.password ? 'true' : 'false'}
        disabled={isLoading}
        placeholder='Password'
        error={errors.password?.message}
      />
      {errors.password?.type === 'required' && <p role='alert'>{errors.password.message}</p>}
      {errors.password?.type === 'minLength' && <p role='alert'>{errors.password.message}</p>}

      <button type='submit' disabled={isLoading}>
        Sign up
      </button>
    </form>
  )
}
export default SignUpForm
