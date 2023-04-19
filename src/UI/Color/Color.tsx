import styles from '../../components/Modal/Modal.module.scss'
import iconDone from '../../assets/done.svg'
interface ColorProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    item: string,
    color:string
}

const Color = ({item,color, ...props}: ColorProps) => {
  return (
    <div key={item} className={styles.color}  {...props}>
        {color==item &&   <img src={iconDone} alt="iconDone" />}
    </div>
  )
}

export default Color