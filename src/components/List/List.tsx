import React, { useEffect } from 'react'
import { useUsersContext } from '../../context/usersContext'
import { User } from './User'
import styles from './List.module.scss'
import { firstCharToUpperCase } from '../../utils/firstCharToUpperCase'
import { ArrowIcon } from '../shared/ArrowIcon'
import { EmptyMessage } from './EmptyMessage'

export const List: React.FC = () => {
  const {
    users,
    page,
    order,
    login,
    searchUsers,
    changeOrder
  } = useUsersContext()

  useEffect(() => {
    searchUsers(login, order, page)
  }, [page, order, login])

  const isAsc = order === 'asc'

  const handleOrderChange = (): void => {
    changeOrder(isAsc ? 'desc' : 'asc')
  }

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <span className={styles.id}>Id</span>
        <span className={styles.avatar}>
          Avatar
        </span>
        <span className={styles.login}>Login</span>
        <span className={styles.order} onClick={handleOrderChange}>
          {firstCharToUpperCase(order)}
          <ArrowIcon isRotate={isAsc} />
        </span>
      </div>
      {(users?.length > 0) ? users.map(user => (<User key={user.id} user={user} />)) : <EmptyMessage />}
    </div>
  )
}
