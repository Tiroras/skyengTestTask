import React, { useEffect, useState } from 'react'
import { type IUser, type IRepos } from '../../../../types'
import { RepositoryInfo } from './RepositoryInfo'
import { getUserFollowers, getUserRepos } from '../../../../api'
import styles from './AdditionalInfo.module.scss'
import { FollowerInfo } from './FollowerInfo'

interface IProps {
  userUrl: string
  reposUrl: string
  followersUrl: string
}

export const AdditionalInfo: React.FC<IProps> = ({ reposUrl, followersUrl, userUrl }) => {
  const [repos, setRepos] = useState<IRepos[]>([])
  const [followers, setFollowers] = useState<IUser[]>([])

  useEffect(() => {
    const getRepoInfo = async (): Promise<void> => {
      const data = await getUserRepos(reposUrl)
      setRepos(data)
    }

    const getFollowersInfo = async (): Promise<void> => {
      const data = await getUserFollowers(followersUrl)
      setFollowers(data)
    }

    void getRepoInfo()
    void getFollowersInfo()
  }, [])

  return (
    <div>
      <div className={styles.githubLink} onClick={() => window.open(userUrl, '_blank')}>Github Link</div>
      <div>
        <div className={styles.title}>Repositories: {repos.length}</div>
        <div className={styles.list}>
          {repos.map(rep => <RepositoryInfo key={rep.id} info={rep} />)}
        </div>
      </div>
      <div>
        <div className={styles.title}>Followers: {followers.length}</div>
        <div className={styles.list}>
          {followers.map(follower => <FollowerInfo key={follower.id} info={follower} />)}
        </div>
      </div>
    </div>
  )
}
