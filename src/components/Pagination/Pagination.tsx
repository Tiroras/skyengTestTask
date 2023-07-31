import React from 'react'
import { useUsersContext } from '../../context/usersContext'
import { initialParams } from '../../utils/initialParams'
import { PageNumButton } from './PageNumButton'
import styles from './Pagination.module.scss'

export const Pagination: React.FC = () => {
  const { page, total, changePage, users } = useUsersContext()

  const perPage = initialParams.per_page

  const prevPage = page - 1
  const nextPage = page + 1

  // GitHub API позволяет получать не более 1000 пользователей
  // Если найденное количество пользователей больше 1000 -
  // отображаем 50 страниц
  const totalPages = total > 1000 ? 50 : Math.ceil(total / perPage)
  const firstNumUsers = perPage * page
  const secondNumUsers = perPage * page + users.length

  const isFirstPage = page === 0
  const isLastPage = page === (totalPages - 1) || totalPages === 0 || totalPages === 1

  const onPrevPage = (): void => {
    !isFirstPage && changePage(prevPage)
  }

  const onNextPage = (): void => {
    !isLastPage && changePage(nextPage)
  }

  const showToFirstPageButton = page !== 0 && page !== 1
  const showToLastPageButton = page !== totalPages && page !== totalPages - 1 && totalPages > 0
  const showToNextPageButton = !isLastPage && totalPages > 1

  return (
    <div className={styles.pagination}>
      <div className={styles.info} data-testid={'paginationInfo'}>
        Users {firstNumUsers} to {secondNumUsers} out of {total}
      </div>
      <div className={styles.buttons}>
        <button
          data-testid={'paginationPrevButton'}
          className={styles.arrowButton}
          onClick={onPrevPage}
          disabled={isFirstPage}
        >&lt;</button>
        <div className={styles.numButtons}>
          {showToFirstPageButton && <><PageNumButton page={0} /> ...</>}
          {!isFirstPage && <PageNumButton page={prevPage} />}
          <PageNumButton page={page} />
          {showToNextPageButton && <PageNumButton page={nextPage} />}
          {showToLastPageButton && <>... <PageNumButton page={totalPages - 1} /></>}
        </div>
        <button
          data-testid={'paginationNextButton'}
          className={styles.arrowButton}
          onClick={onNextPage}
          disabled={isLastPage}
          >&gt;</button>
      </div>
      <div />
    </div>
  )
}
