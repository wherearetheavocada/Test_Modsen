import React from 'react'
import MenuFavorites from "../components/Menu/MenuFavorites.jsx";
import Map from '../components/Map.jsx';
import Panel from '../components/Panel/Panel.jsx'
import styles from '../App.module.css'
import { useAuth } from '../hooks/use-auth';
import {Redirect} from 'react-router-dom';

export default function Favorites() {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div>
      <div className={`${styles.wrapper}`}>
        <Panel />
        <MenuFavorites />
        <Map />
        </div>
    </div>
  ) : (
    <Redirect to="/login" />
)
}
