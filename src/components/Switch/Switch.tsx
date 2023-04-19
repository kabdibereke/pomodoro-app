import { useState } from 'react'
import styles from './Switch.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { setActiveTab } from '../../store/slice/slice'
import { motion } from 'framer-motion'
const tabs = ['pomodoro', 'short break', 'long break']
const Switch = () => {
  const {activeTab} = useSelector((state: RootState) => state.setting)
  const dispatch = useDispatch() 
  
  return (
    <motion.div className={styles.wrapper}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>
        {['pomodoro', 'short break', 'long break'].map(item=> {
            return (
                <div key={item} className={activeTab==item? styles.tab_active: styles.tab} onClick={()=>dispatch(setActiveTab(item))}>
                {item}
            </div>
            )
        })}
    </motion.div>
  )
}

export default Switch