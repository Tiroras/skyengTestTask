import React, { type ReactElement } from 'react'
import { UsersProvider } from './context/usersContext'
import { Form } from './components/Form'
import { List } from './components/List'
import { Pagination } from './components/Pagination'
import styles from './App.module.scss'

function App (): ReactElement {
  // const [login, setLogin] = useState('')

  return (
    <UsersProvider>
      <main className={styles.main}>
        <Form />
        <List />
        <Pagination />
      </main>
    </UsersProvider>
  )
}

export default App
