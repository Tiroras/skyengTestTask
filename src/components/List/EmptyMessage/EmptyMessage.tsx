import React from 'react'
import styles from './EmptyMessage.module.scss'

export const EmptyMessage: React.FC = () => (
  <div className={styles.message}>
    No users found
  </div>
)
