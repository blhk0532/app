import Login from './Login'
import Register from './Register'
import EmailVerification from './EmailVerification'

const Auth = {
    Login: Object.assign(Login, Login),
    Register: Object.assign(Register, Register),
    EmailVerification: Object.assign(EmailVerification, EmailVerification),
}

export default Auth