import { useEffect, useRef, useState } from 'react'
import styles from './Timer.module.scss'
import iconSettings from '../../assets/icon-settings.svg'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { motion } from 'framer-motion'
import sound from '../../assets/sound.mp3'
import { checkTab, playAudio } from '../../helpers/helpers'

const Timer = () => {
    const {pomodoro,long,short,activeTab} = useSelector((state: RootState) => state.setting)
    const [time, setTime] = useState(pomodoro*60);
    const [isRunning, setIsRunning] = useState(false);
    const [isRunned, setIsRunned] =useState(false)
    const intervalRef = useRef<number | null>(null);
    const [openModal, setOpenModal] =useState(false)

    const handleReset = () => {
        setIsRunning(false);
        setIsRunned(false)
        setTime(60);
      };

    useEffect(()=> {
         document.body.setAttribute('color-theme' , "red")
    },[])
    useEffect(()=>{
        handleReset()
        checkTab(activeTab, setTime, pomodoro,short,long)
    },[activeTab,pomodoro,short,long])

    useEffect(()=> {
        if(openModal){ 
            document.body.style.overflow = 'hidden';
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }else {
            document.body.style.overflow = 'unset';
        }
    },[openModal])

    useEffect(() => {
      if (isRunning && time > 0) {
        intervalRef.current = setInterval(() => {
          setTime(prevTime => prevTime - 1);
        }, 1000);
  
        return () => clearInterval(intervalRef.current!);
      } else {
        clearInterval(intervalRef.current!);
      }
      if(time==0) {
        playAudio(sound)
    }
    }, [isRunning, time]);
  
    const handleStart = () =>{
        setIsRunning(true)
        setIsRunned(true)
    };
  
    const handlePause = () => {
        setIsRunning(false)
    };
    const handleResume = () =>{
        setIsRunning(true)
       
    };
    const handleRestart =()=> {
        checkTab(activeTab, setTime, pomodoro,short,long)
        setIsRunning(true)
        setIsRunned(true)
    }
  
    const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);
  return (
    <>
    <motion.div className={styles.wrapper}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>
        <div className={styles.inner}> 
            <div className={styles.clock}>
                {formattedTime}
            </div>
            {!isRunning && !isRunned ? <button onClick={handleStart} className={styles.btn}>start</button>:''}
            {isRunning &&time!==0 ? <button onClick={handlePause} className={styles.btn}>pause</button>:''}
            {!isRunning && isRunned ? <button onClick={handleResume} className={styles.btn}>resume</button>:''}
            {time==0? <button onClick={handleRestart} className={styles.btn}>restart</button>:''}
        </div>

        <button className={styles.settingBtn} onClick={()=>setOpenModal(true)}>
        <img src={iconSettings} alt="iconSettings" />
        </button>
    </motion.div>
    {openModal &&   <Modal setOpenModal={setOpenModal}/> }
    </>
  )
}

export default Timer