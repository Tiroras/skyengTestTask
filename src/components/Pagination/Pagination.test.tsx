import React from 'react'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'
import { UsersContext } from '../../context/usersContext'

describe('Pagination', () => {
  const mockUsers = [
    {
      login: 'loginyourheart',
      id: 2874920,
      avatar_url: 'https://avatars.githubusercontent.com/u/2874920?v=4',
      url: 'https://api.github.com/users/loginyourheart',
      html_url: 'https://github.com/loginyourheart',
      followers_url: 'https://api.github.com/users/loginyourheart/followers',
      repos_url: 'https://api.github.com/users/loginyourheart/repos'
    },
    {
      login: 'login2',
      id: 20555837,
      avatar_url: 'https://avatars.githubusercontent.com/u/20555837?v=4',
      url: 'https://api.github.com/users/login2',
      html_url: 'https://github.com/login2',
      followers_url: 'https://api.github.com/users/login2/followers',
      repos_url: 'https://api.github.com/users/login2/repos'
    },
    {
      login: 'ulogin-team',
      id: 1167211,
      avatar_url: 'https://avatars.githubusercontent.com/u/1167211?v=4',
      url: 'https://api.github.com/users/ulogin-team',
      html_url: 'https://github.com/ulogin-team',
      followers_url: 'https://api.github.com/users/ulogin-team/followers',
      repos_url: 'https://api.github.com/users/ulogin-team/repos'
    },
    {
      login: 'loginger',
      id: 6545795,
      avatar_url: 'https://avatars.githubusercontent.com/u/6545795?v=4',
      url: 'https://api.github.com/users/loginger',
      html_url: 'https://github.com/loginger',
      followers_url: 'https://api.github.com/users/loginger/followers',
      repos_url: 'https://api.github.com/users/loginger/repos'
    },
    {
      login: 'walidtec',
      id: 516879,
      avatar_url: 'https://avatars.githubusercontent.com/u/516879?v=4',
      url: 'https://api.github.com/users/walidtec',
      html_url: 'https://github.com/walidtec',
      followers_url: 'https://api.github.com/users/walidtec/followers',
      repos_url: 'https://api.github.com/users/walidtec/repos'
    },
    {
      login: 'gmail-login',
      id: 30037569,
      avatar_url: 'https://avatars.githubusercontent.com/u/30037569?v=4',
      url: 'https://api.github.com/users/gmail-login',
      html_url: 'https://github.com/gmail-login',
      followers_url: 'https://api.github.com/users/gmail-login/followers',
      repos_url: 'https://api.github.com/users/gmail-login/repos'
    },
    {
      login: 'loginov',
      id: 2863775,
      avatar_url: 'https://avatars.githubusercontent.com/u/2863775?v=4',
      url: 'https://api.github.com/users/loginov',
      html_url: 'https://github.com/loginov',
      followers_url: 'https://api.github.com/users/loginov/followers',
      repos_url: 'https://api.github.com/users/loginov/repos'
    },
    {
      login: 'DanielVonHellman',
      id: 128434386,
      avatar_url: 'https://avatars.githubusercontent.com/u/128434386?v=4',
      url: 'https://api.github.com/users/DanielVonHellman',
      html_url: 'https://github.com/DanielVonHellman',
      followers_url: 'https://api.github.com/users/DanielVonHellman/followers',
      repos_url: 'https://api.github.com/users/DanielVonHellman/repos'
    },
    {
      login: 'login2000me',
      id: 126371289,
      avatar_url: 'https://avatars.githubusercontent.com/u/126371289?v=4',
      url: 'https://api.github.com/users/login2000me',
      html_url: 'https://github.com/login2000me',
      followers_url: 'https://api.github.com/users/login2000me/followers',
      repos_url: 'https://api.github.com/users/login2000me/repos'
    },
    {
      login: 'loginetsolutions',
      id: 4643440,
      avatar_url: 'https://avatars.githubusercontent.com/u/4643440?v=4',
      url: 'https://api.github.com/users/loginetsolutions',
      html_url: 'https://github.com/loginetsolutions',
      followers_url: 'https://api.github.com/users/loginetsolutions/followers',
      repos_url: 'https://api.github.com/users/loginetsolutions/repos'
    }
  ]
  it('Shows the displayed users from the total number on first page', () => {
    const slicedUsers = mockUsers.slice(0, mockUsers.length - 1)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UsersContext.Provider value={{
      page: 0,
      total: slicedUsers.length,
      users: slicedUsers
    }}><Pagination /></UsersContext.Provider>)
    expect(screen.getByTestId('paginationInfo').textContent).toEqual('Users 0 to 9 out of 9')
  })

  it('Shows the displayed users from the total number on not first page', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UsersContext.Provider value={{
      page: 5,
      total: 1000,
      users: mockUsers
    }}><Pagination /></UsersContext.Provider>)
    expect(screen.getByTestId('paginationInfo').textContent).toEqual('Users 50 to 60 out of 1000')
  })

  it('To prev page button disabled when user is on first page', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UsersContext.Provider value={{
      page: 0,
      total: 100,
      users: mockUsers
    }}><Pagination /></UsersContext.Provider>)
    expect(screen.getByTestId('paginationPrevButton')).toBeDisabled()
  })

  it('To next page button disabled when user is on last page', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UsersContext.Provider value={{
      page: 0,
      total: 10,
      users: mockUsers
    }}><Pagination /></UsersContext.Provider>)
    expect(screen.getByTestId('paginationNextButton')).toBeDisabled()
  })
})
