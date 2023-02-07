import { APP_NAME } from "../../constants";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import '../Login/style.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { AuthService } from "../../services/auth.service";
import { container } from "tsyringe";

export default function SignupPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const authService = container.resolve(AuthService);

  if (isAuthenticated) {
    return <Navigate to={'/'}/>
  }

  return (
    <Container className={'w-25 mt-xl-5'} style={{ minHeight: '80vh' }}>
      <h6 className={'text-center'}>Log in to your {APP_NAME} account</h6>
      <hr/>
      <form className={'d-flex flex-column'} onSubmit={async (event) => {
        event.preventDefault();
        const _res = await authService.signup(
          emailRef.current?.value ?? '',
          passwordRef.current?.value ?? '',
          nameRef.current?.value ?? '',
        )
        const { data } = await authService.login(
          emailRef.current?.value ?? '',
          passwordRef.current?.value ?? ''
        )
        if (data.success) {
          navigate('/');
          // reload page
          window.location.reload();
        }
      }}>
        <input ref={nameRef} className={'auth-input-text'} type="text" placeholder="Full name" aria-label={'fullName'}/>
        <br/>
        <input ref={emailRef} className={'auth-input-text'} type="text" placeholder="Email" aria-label={'email'}/>
        <br/>
        <input ref={passwordRef} className={'auth-input-text'} type="password" placeholder="Password" aria-label={'password'}/>
        <br/>
        <button className={'login-btn'}>Sign Up</button>
        <br/>
        <div>
          Already have an account? <Link to={'/login'}>Login</Link>
        </div>
      </form>
    </Container>
  )
}