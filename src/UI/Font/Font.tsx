import React from 'react'
import styles from '../../components/Modal/Modal.module.scss'

interface FontProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
  item: string,
  font:string
}

const Font = ({item, font ,...props}: FontProps) => {
    
  return (
    <div className={font==item ? styles.font_active:styles.font}  {...props}>
        <p>Аа</p>
    </div>
  )
}

export default Font