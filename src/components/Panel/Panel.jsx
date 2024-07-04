import React from 'react'
import styles from './Panal.module.css'
import { ReactComponent as LogoSVG } from '../../svg/logo.svg';
import { ReactComponent as SearchSVG } from '../../svg/search.svg';
import { ReactComponent as FavoritesSVG } from '../../svg/favorites.svg';
import {
    Link,
  } from "react-router-dom";

export default function Panel() {
  return (
    <div className={`${styles.panel}`}>
        <Link to='/'>
        <div className={`${styles.logo}`}>
            <LogoSVG className={`${styles.logoSVG}`}/>
        </div>
        </Link>
        <Link to='/'>
        <div className={`${styles.panal_search}`}>
            <div className={`${styles.search}`}>
                <SearchSVG className={`${styles.searchSVG}`}/>
            </div>
        </div>
        </Link>
        <Link to='/favorites'>
        <div className={`${styles.panal_favorites}`}>
            <div className={`${styles.favorites}`}>
                <FavoritesSVG className={`${styles.favoritesSVG}`}/>
            </div>
        </div>
        </Link>
        <Link to='/profile'>
            <div className={`${styles.panal_profile}`}>
                <img className={`${styles.profilePng}`} src="/icons/profile.png" alt="profile"></img>
            </div>
        </Link>
    </div>
  )
}
