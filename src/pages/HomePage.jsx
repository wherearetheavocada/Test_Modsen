import React from 'react'
import Menu from "../components/Menu/Menu.jsx";
// import Map from '../components/Map.jsx';
import Map from '../components/conclusionPlaces.jsx';
import Panel from '../components/Panel/Panel.jsx'
import styles from '../App.module.css'
import { useAuth } from '../hooks/use-auth';
import {Redirect} from 'react-router-dom';

export default function Home() {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className={`${styles.wrapper}`}>
        <Panel />
        <Menu />
        <Map />
    </div>
  ) : (
    <Redirect to="/login" />
)
}
