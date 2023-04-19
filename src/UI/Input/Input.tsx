import { toast } from 'react-toastify'
import styles from '../../components/Modal/Modal.module.scss'

type InputProps = {
    title:string,
    value:number,
    setInput:React.Dispatch<React.SetStateAction<number>>
}

const Input = ({title, value, setInput}:InputProps) => {
    const preventArrow =(e: React.KeyboardEvent<HTMLInputElement>)=> {
        if (!(e.keyCode==38 || e.keyCode===40)) {
            e.preventDefault();
            toast.warn('🦄 Use only arrow', {
                position: "top-right",
                autoClose: 1000,
                theme: "dark",
                });
        }
    }
  return (
    <div className={styles.input_wrapper}>
        <p className={styles.name}>{title}</p>
        <input className={styles.input} min="5" max='60'  value={value} onChange={(e)=>setInput(+e.target.value)} type="number" onKeyDown={preventArrow}  />
    </div>
  )
}

export default Input