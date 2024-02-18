import { ReactNode } from "react"
import { Header } from "./Header/Header"
import styles from './Layout.module.scss'

type LayoutType = {
  children: ReactNode
}

export default function Layout ({children}: LayoutType) {
  return (
    <>
    <Header/>
    <div className={styles.container}>
      {children}
    </div>
    </>
  )
}