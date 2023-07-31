export type OrderType = 'desc' | 'asc'

export interface Params {
  order: OrderType
  per_page: number
  page: number
}

export interface IUser {
  login: string
  id: number
  avatar_url: string
  url: string
  html_url: string
  followers_url: string
  repos_url: string
  received_events_url: string
}

export interface GitHubResponse<T> {
  total_count: number
  items: T[]
}

export interface IRepos {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
  url: string
  html_url: string
}
