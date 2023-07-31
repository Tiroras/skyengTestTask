import React, { useState } from 'react'
import { type IUser } from '../../../types'
import styles from './User.module.scss'
import { AdditionalInfo } from './AdditionalInfo'
import { ArrowIcon } from '../../shared/ArrowIcon'

interface IProps {
  user: IUser
}

export const User: React.FC<IProps> = ({ user }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)

  const handleShowInfo = (): void => {
    setShowAdditionalInfo(!showAdditionalInfo)
  }

  return (
    <div>
      <div className={styles.user} onClick={handleShowInfo}>
        <span className={styles.id}>{user.id}</span>
        <span className={styles.img}>
          <img width={80} height={80} src={user.avatar_url} alt={user.login} />
        </span>
        <span className={styles.login}>{user.login}</span>
        <ArrowIcon className={styles.button} isRotate={showAdditionalInfo} />
      </div>
      {showAdditionalInfo && <AdditionalInfo userUrl={user.html_url} reposUrl={user.repos_url} followersUrl={user.followers_url} />}
    </div>
  )
}
