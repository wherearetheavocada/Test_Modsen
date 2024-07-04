import React from 'react'
import styles from './Profile.module.css'
import {removeUser} from '../../store/slices/userSlice'
import {useDispatch} from 'react-redux'

export default function Profile({email}) {
    const dispatch = useDispatch();

  return (
<div className={`${styles.profile}`}>
<h1 className={`${styles.profile_Text}`}>Welcome</h1>

<button className={`${styles.profile_Btn}`}
    onClick={()=> dispatch(removeUser())}
>Log out from {email}</button>
</div>
  )
}




