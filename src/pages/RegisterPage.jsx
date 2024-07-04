import { SignUp } from '../components/auth/SingUp';
import { Link } from 'react-router-dom';
import styles from '../components/auth/Form.module.css'

const RegisterPage = () => {
    return (
        <div className={`${styles.formPage}`}>
            <h1 className={`${styles.formTitle}`}>Register</h1>
            <SignUp />
            <p className={`${styles.formRegister}`}>
                Already have an account? <Link to="/login"> Sign in</Link>   
            </p>            
        </div>
    )
}

export default RegisterPage