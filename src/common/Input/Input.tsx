import React, { FC, forwardRef } from 'react';

import styles from './Input.module.css';
import classnames from 'classnames';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean;
  error?: string;
}

const Input: FC<InputProps> = forwardRef(
  ({ id, placeholder, error, ...props }, inputRef: React.Ref<HTMLInputElement>) => (
    <label htmlFor={id}>
      <span className={styles.span}>{placeholder}</span>
      <input
        className={classnames(styles.input, { [styles.input_error]: !!error })}
        id={id}
        ref={inputRef}
        {...props}
      />
    </label>
  )
) as FC<InputProps>;

export default Input;
