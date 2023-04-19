import styles from './Container.module.scss'

type ContainerProps = {
    children:React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className={styles.container}>
        <h1>pomodoro</h1>
        {children}
    </div>
  )
}

export default Container