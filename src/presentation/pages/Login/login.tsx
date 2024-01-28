import LoginHeader from '../../components/LoginHeder/LoginHeader';
import Footer from '../../components/Footer/Footer';
import './login-styles.scss';
import { FormStatus } from '../../components/FormStatus';

export function Login() {
  return (
    <div className="login">
      <LoginHeader />

      <form className="form">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu email" />
        <input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit" className="submit">
          Entrar
        </button>
        <span className="link">Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
}

export default Login;
