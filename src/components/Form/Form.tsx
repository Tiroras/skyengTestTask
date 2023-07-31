import React, { useState } from 'react'
import { useUsersContext } from '../../context/usersContext'
import styles from './Form.module.scss'

export const Form: React.FC = () => {
  const [value, setValue] = useState('')
  const { changeLogin } = useUsersContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const handleSubmit = (): void => {
    changeLogin(value)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.key === 'Enter' && handleSubmit()
  }

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder="Input login"
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnter}
        maxLength={100}
      />
      <button className={styles.button} onClick={handleSubmit}>Search</button>
    </form>
  )
}
