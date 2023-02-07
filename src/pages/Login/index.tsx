import { APP_NAME } from "../../constants";
import React, { FormEvent, useEffect } from "react";
import { Container } from "react-bootstrap";
import './style.css';
import { AuthService } from "../../services/auth.service";
import { container } from "tsyringe";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { HttpService } from "../../services/http.service";
import { isMobile } from 'react-device-detect';

export default function LoginPage() {
  const authService = container.resolve(AuthService);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const { isAuthenticated, isLoading, reFetchUser } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to={'/'}/>
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await authService.login(
        emailRef.current?.value ?? '',
        passwordRef.current?.value ?? ''
      )
      if (data.success) {
        navigate('/');
        // reload page
        window.location.reload();
      }
    } catch (e) {
      await toast("Email or Password is incorrect!", { type: 'error' })
    }
  }

  return (
    <Container className={`${!isMobile && 'w-25'} mt-xl-5`} style={{ minHeight: '80vh' }}>
      <h6 className={'text-center'}>Log in to your {APP_NAME} account</h6>
      <hr/>
      <form className={'d-flex flex-column'} onSubmit={onSubmit}>
        <input className={'auth-input-text'} type="text" placeholder="Email" ref={emailRef} aria-label={'email'}/>
        <br/>
        <input className={'auth-input-text'} type="password" placeholder="Password" ref={passwordRef}
               aria-label={'password'}/>
        <br/>
        <button className={'login-btn'} type={'submit'}>Log In</button>
        <br/>
        <div>
          Don't have an account? <Link to={'/signup'}>Sign up</Link>
        </div>
      </form>
    </Container>
  )
}