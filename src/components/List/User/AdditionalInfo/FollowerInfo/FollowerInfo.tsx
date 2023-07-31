import React from 'react'
import { type IUser } from '../../../../../types'
import styles from './FollowerInfo.module.scss'

interface IProps {
  info: IUser
}

export const FollowerInfo: React.FC<IProps> = ({ info }) => (
  <div className={styles.follower} onClick={() => window.open(info.html_url, '_blank')}>
    <div className={styles.id}>{info.id}</div>
    <div className={styles.avatar}>
      <img width={50} height={50} src={info.avatar_url} alt={info.login} />
    </div>
    <div className={styles.login}>{info.login}</div>
  </div>
)
