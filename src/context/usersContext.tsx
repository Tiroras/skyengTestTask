import React, { type FC, type PropsWithChildren, createContext, memo, useCallback, useContext, useMemo, useState } from 'react'
import { type OrderType, type IUser } from '../types'
import { getUsers } from '../api'
import { initialParams } from '../utils/initialParams'
import { noop } from '../utils/noop'

interface InitialDataType {
  users: IUser[]
  total: number
  order: OrderType
  page: number
  login: string
  searchUsers: (login: string, newOrder?: OrderType, newPage?: number) => void
  changeOrder: (order: OrderType) => void
  changePage: (page: number) => void
  changeLogin: (login: string) => void
}

type UseUsersContextType = () => InitialDataType

const initialData: InitialDataType = {
  users: [],
  total: 0,
  order: initialParams.order,
  page: initialParams.page,
  login: '',
  searchUsers: noop,
  changeOrder: noop,
  changePage: noop,
  changeLogin: noop
}

export const UsersContext = createContext(initialData)

export const UsersProvider: FC<PropsWithChildren> = memo(({ children }) => {
  const [users, setUsers] = useState<IUser[]>(initialData.users)
  const [order, setOrder] = useState<OrderType>(initialData.order)
  const [page, setPage] = useState(initialData.page)
  const [total, setTotal] = useState(initialData.total)
  const [login, setLogin] = useState('')

  const changeOrder = useCallback((order: OrderType) => {
    setOrder(order)
  }, [])

  const changePage = useCallback((page: number) => {
    setPage(page)
  }, [])

  const changeLogin = useCallback((login: string) => {
    setLogin(login)
  }, [])

  const searchUsers = useCallback(async (newLogin = login, newOrder = order, newPage = page) => {
    const data = await getUsers({ order: newOrder, page: newPage, per_page: initialParams.per_page }, newLogin)
    setUsers(data.items)
    setTotal(data.total_count > 1000 ? 1000 : data.total_count)
    newOrder !== order && changeOrder(newOrder)
    newPage !== page && changePage(newPage)
  }, [order])

  const value = useMemo(() => ({
    users,
    total,
    order,
    page,
    login,
    searchUsers,
    changeOrder,
    changePage,
    changeLogin
  }), [order, users, page, total, login, searchUsers, changeOrder, changePage, changeLogin])

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  )
})

UsersProvider.displayName = 'UsersProvider'

export const useUsersContext: UseUsersContextType = () => useContext(UsersContext)
