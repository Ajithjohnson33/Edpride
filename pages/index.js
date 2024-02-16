

import { useEffect } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import { useRouter } from 'next/router';





const LoginPage = () => {
    const router = useRouter()

    useEffect(() => {
router.push('/LoginForm')
    })

    return (
        <div>
            
            <LoginForm />
           
        </div>
    );
};

export default LoginPage;