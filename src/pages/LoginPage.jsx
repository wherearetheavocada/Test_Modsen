import { Login } from '../components/auth/Login';
import { Link } from 'react-router-dom';
import styles from '../components/auth/Form.module.css'
const LoginPage = () => {
    return (
        <div className={`${styles.formPage}`}>
            <h1 className={`${styles.formTitle}`}>Login</h1>
            <Login />
            <p className={`${styles.formRegister}`}>
            Don’t have an account? <Link to="/register">register</Link>
            </p>
        </div>
    )
}

export default LoginPage