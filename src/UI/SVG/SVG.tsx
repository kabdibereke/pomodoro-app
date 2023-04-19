import React from 'react'
import styles from '../../components/Timer/Timer.module.scss'
type SvgProps = {
    strokeDashOffsetPx:number,
    strokeDashOffsetPxMob:number,
    color:string
}

const SVG = ({strokeDashOffsetPx,strokeDashOffsetPxMob,color}:SvgProps) => {
  return (
   <>
        <svg className= {styles.svg} width="410" height="410" xmlns="http://www.w3.org/2000/svg">
            <g>
            <circle className={styles.circle_animation} style={{strokeDashoffset:`${strokeDashOffsetPx}px`}} r="180" cy="205" cx="205" strokeWidth="8" stroke={color=='red'? '#f87272': color=='blue'? '#72f4f8':'#d882f8'} fill="none"/>
            </g>
        </svg>
        <svg className= {styles.svg_mob} width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <g>
            <circle className={styles.circle_animation} style={{strokeDashoffset:`${strokeDashOffsetPxMob}px`}} r="125" cy="150" cx="150" strokeWidth="8" stroke={color=='red'? '#f87272': color=='blue'? '#72f4f8':'#d882f8'} fill="none"/>
            </g>
        </svg>
   </>
  )
}

export default SVG