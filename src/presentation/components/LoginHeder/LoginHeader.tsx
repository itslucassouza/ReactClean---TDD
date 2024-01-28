import { memo } from 'react';
import { Logo } from '../logo/Logo';
import './login-header-styles.scss';

function LoginHeder() {
  return (
    <header>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  );
}

export default memo(LoginHeder);
