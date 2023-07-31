import React from 'react'
import { type IRepos } from '../../../../../types'
import styles from './RepositoryInfo.module.scss'
import { transformDate } from '../../../../../utils/transformDate/transformDate'

interface IProps {
  info: IRepos
}

export const RepositoryInfo: React.FC<IProps> = ({ info }) => (
  <div className={styles.repository} onClick={() => window.open(info.html_url, '_blank')}>
    <div className={styles.id}>{info.id}</div>
    <div className={styles.name} title={info.name}>{info.name}</div>
    <div className={styles.description} title={info.description}>{info.description}</div>
    <div className={styles.created}>{transformDate(info.created_at)}</div>
    <div className={styles.updated}>{transformDate(info.updated_at)}</div>
  </div>
)
