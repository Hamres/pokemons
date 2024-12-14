import React, { useState } from 'react'
import styles from './AuthPage.module.css'
import { SignInForm, SignUpForm } from './components'

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true)

  return (
    <section className={styles.page}>
      {isSignUp ? <SignInForm /> : <SignUpForm />}
      <button className={styles.loginButton} onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Create account' : 'Already have account'}
      </button>
    </section>
  )
}

export default AuthPage
