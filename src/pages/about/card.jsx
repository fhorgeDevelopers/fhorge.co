import React from 'react'
import style from './card.module.css'

export default function Card({title, content, icon}) {
  return (
      <div className={style.cardContainer}>
          <div className={style.cardHeader}>
              <div><h1>{title}</h1></div>
              <div>{icon}</div>
          </div>
          <div>
              <p>{content}</p>
          </div>
          
    </div>
  )
}
