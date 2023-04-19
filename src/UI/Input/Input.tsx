import { toast } from 'react-toastify'
import styles from '../../components/Modal/Modal.module.scss'

type InputProps = {
    title:string,
    value:number,
    setInput:React.Dispatch<React.SetStateAction<number>>
}

const Input = ({title, value, setInput}:InputProps) => {

    const checkNumber= ( e: React.ChangeEvent<HTMLInputElement>)=> {
        if(+e.target.value<60) {
            setInput(+e.target.value)
          
        }else {
            toast.warn('🦄 only number less 60', {
                position: "top-right",
                autoClose: 1000,
                theme: "dark",
                });
        }
        
    }

  return (
    <div className={styles.input_wrapper}>
        <p className={styles.name}>{title}</p>
        <input className={styles.input} min="1" max='59'  value={value} onChange={checkNumber} type="number"   />
    </div>
  )
}

export default Input