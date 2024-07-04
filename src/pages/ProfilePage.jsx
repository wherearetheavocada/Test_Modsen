import {Redirect} from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import Profile from '../components/Profile/Profile';

export default function ProfilePage() {


    const {isAuth, email} = useAuth();

    return isAuth ? (
        <Profile  email={email}/>
    ) : (
        <Redirect to="/login" />
    )
}




