import React from 'react'
import styles from './Menu.module.css'
import { ReactComponent as SearchMenuSVG } from '../../svg/searchMenu.svg';

export default function Menu() {
  return (
    <div className={`${styles.menu}`}>
            <form className={`${styles.form_search}`}>
              <SearchMenuSVG  className={`${styles.searchMenuSVG}`}/>
              <input className={`${styles.input_search}`} type="text" placeholder="Место, адрес..."></input>
            </form>
        <h2 className={`${styles.menu_title}`}>Избранное</h2>
    </div>
  )
}
