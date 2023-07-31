import queryString from 'query-string'
import { type IUser, type GitHubResponse, type Params, type IRepos } from '../types'

const url = 'https://api.github.com/search/users?'

export const getUsers = async (params: Params, login: string): Promise<GitHubResponse<IUser>> => {
  try {
    const query = {
      ...params,
      q: `${login} in: login`,
      sort: 'repositories'
    }
    const data = await fetch(url + queryString.stringify(query))

    return await data.json()
  } catch (e: any) {
    console.error(e)
    return { total_count: 0, items: [] }
  }
}

export const getUserRepos = async (url: string): Promise<IRepos[]> => {
  return await (await fetch(url)).json()
}

export const getUserFollowers = async (url: string): Promise<IUser[]> => {
  return await (await fetch(url)).json()
}
