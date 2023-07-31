import React from 'react'
import { useUsersContext } from '../../../context/usersContext'
import styles from './PageNumButton.module.scss'

interface IProps {
  page: number
}

export const PageNumButton: React.FC<IProps> = ({ page }) => {
  const { changePage } = useUsersContext()

  const handleClick = (): void => {
    changePage(page)
  }

  return (
    <div className={styles.button} onClick={handleClick}>{page + 1}</div>
  )
}
