import { SignUp } from '../components/auth/SingUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                Already have an account? <Link to="/login">Sign in</Link>   
            </p>            
        </div>
    )
}

export default RegisterPage