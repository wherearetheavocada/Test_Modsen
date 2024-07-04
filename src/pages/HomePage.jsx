import React, { useEffect } from 'react'
import Menu from "../components/Menu/Menu.jsx";
// import Map from '../components/Map.jsx';
import Map from '../components/conclusionPlaces.jsx';
import Panel from '../components/Panel/Panel.jsx'
import styles from '../App.module.css'
import { useAuth } from '../hooks/use-auth';
import {Redirect} from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const { isAuth } = useAuth();
  const [radius,setRadius] = useState('1'); // 2km
  const [meter, setMeter] = useState(0); // 2000m

  useEffect(() => {
    setMeter(radius*1000);
  }, [radius])

  return isAuth ? (
    <div className={`${styles.wrapper}`}>
        <Panel />
        <Menu radius={radius} setRadius={setRadius}/>
        <Map meter={meter} setMeter={setMeter}/>
    </div>
  ) : (
    <Redirect to="/login" />
)
}
