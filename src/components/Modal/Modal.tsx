import styles from './Modal.module.scss'
import iconClose from '../../assets/icon-close.svg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setColor, setFont, setPomodoro } from '../../store/slice/slice';
import { setLong } from '../../store/slice/slice';
import { setShort } from '../../store/slice/slice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Input from '../../UI/Input/Input';
import Font from '../../UI/Font/Font';
import Color from '../../UI/Color/Color';
type ModalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({setOpenModal}: ModalProps) => {
    const {font, color,pomodoro,long,short} = useSelector((state: RootState) => state.setting)
    const [localPomodoro,setLocalPomodoro] =useState(pomodoro)
    const [localShort,setLocalShort] =useState(short)
    const [localLong,setLocalLong] =useState(long)
    const dispatch = useDispatch()  
   
    useEffect(()=> {
        document.body.style.fontFamily=font
        document.body.setAttribute('color-theme' , color)
    },[font,color])

    const saveSettings =()=> {
        dispatch(setPomodoro(localPomodoro))
        dispatch(setLong(localLong))
        dispatch(setShort(localShort))
        setOpenModal(false)
    }

   
  return (
   <>
   <motion.div className={styles.overlay} onClick={()=>setOpenModal(false)} 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
        <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
            <div className={styles.heading}>
                <h2 className={styles.head_text}>Settings</h2>
                <button className={styles.closBtn} onClick={()=>setOpenModal(false)}>
                    <img src={iconClose} alt="iconClose" />
                </button>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.modal_content}>
                <p className={styles.title}>TIME (MINUTES)</p>
                <div className={styles.time_wrapper}>
                    <Input value={localPomodoro} title={'pomodoro'} setInput={setLocalPomodoro}/>
                    <Input value={localShort} title={'short break'} setInput={setLocalShort}/>
                    <Input value={localLong} title={'long break'} setInput={setLocalLong}/>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.set_wrapper}>
                    <p className={styles.setName}>font</p>
                    <div className={styles.variants}>
                        {['"Kumbh Sans", sans-serif','"Space Mono", monospace',"'Roboto Slab', serif" ].map(item=> {
                            return <Font  key={item} font={font} item={item} onClick={()=>dispatch(setFont(item))}/>
                        })}
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.set_wrapper}>
                    <p className={styles.setName}>color</p>
                    <div className={styles.variants}>
                        {['red', 'blue', 'purple'].map(item=> {
                            return <Color key={item} color={color} item={item} onClick={()=>dispatch(setColor(item))}/>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.btn} onClick={saveSettings}>Apply</div>
        </div>
   </motion.div>
   <ToastContainer/>
   </>
  )
}

export default Modal