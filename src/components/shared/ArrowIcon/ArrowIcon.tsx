import React from 'react'
import cn from 'classnames'
import arrow from '../../../icons/sortArrow.svg'
import styles from './ArrowIcon.module.scss'

interface IProps {
  className?: string
  isRotate?: boolean
  iconWidth?: number
  iconHeight?: number
  onClick?: () => void
}

export const ArrowIcon: React.FC<IProps> = ({ className, isRotate, iconHeight, iconWidth, onClick }) => (
  <span className={cn(styles.arrowIcon, className, Boolean(isRotate) && styles.rotated)} onClick={onClick}>
    <img height={iconHeight} width={iconWidth} src={arrow} />
  </span>
)
