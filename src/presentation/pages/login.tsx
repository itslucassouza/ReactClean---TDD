import LoginHeader from '../components/LoginHeder/LoginHeader';
import Footer from '../components/Footer/Footer';
import { Spiner } from '../components/spiner/spiner';
import './login-styles.scss';

export function Login() {
  return (
    <div className="login">
      <LoginHeader />
      <form className="form">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu email" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Digite sua senha"
        />
        <button type="submit" className="submit">
          Entrar
        </button>
        <span className="link">Criar conta</span>
        <div className="errorWrap">
          <Spiner className="spinner" />
          <span className="error">Error</span>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
