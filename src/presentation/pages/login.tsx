import { Spiner } from '../components/spiner/spiner';
import './login-styles.scss';

export function Login() {
  return (
    <div className="login">
      <header>
        <img src="PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIwcHgiIGhlaWdodD0iODdweCIgdmlld0JveD0iMCAwIDEyMCA4NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkdyb3VwIENvcHk8L3RpdGxlPgogICAgPGRlc2M" />
        <h1>4Dev - Enquetes para programadores</h1>
      </header>
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
      <footer />
    </div>
  );
}

export default Login;
