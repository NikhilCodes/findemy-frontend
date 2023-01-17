import {
  GlobalOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { APP_NAME } from "../../constants";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import React, { FormEvent, useRef } from "react";
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

export function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const searchRef = useRef<HTMLInputElement>(null);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchRef.current?.value) {
      navigate(`/courses?q=${searchRef?.current?.value}`);
    }
  }

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top'>
      <div className='container-fluid'>
        <a className='navbar-brand header-app-name' href='/'>
          {APP_NAME}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='offcanvas offcanvas-end'
          tabIndex={-1}
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <h5
              className='offcanvas-title header-app-name'
              id='offcanvasNavbarLabel'
            >
              {APP_NAME}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-start flex-grow-1 pe-3'>
              <li className='nav-item d-flex align-items-center'>
                <form className='search px-2' role={"search"} onSubmit={(event) => onSearch(event)}>
                  <SearchOutlined className='search-icon'/>
                  <input
                    className='form-control me-2 search-input'
                    type='search'
                    placeholder='Search for anything'
                    aria-label='Search'
                    ref={searchRef}
                  />
                </form>
              </li>
            </ul>
            {isAuthenticated && <div className='d-flex align-items-center logged-in-actions pointer'>
              <div onClick={() => navigate('/my-learning')}>My Learning</div>
              <HeartOutlined/>
              <ShoppingCartOutlined/>

              <div/>

              <Avatar name={user?.name} email={user?.email}/>
            </div>}
            {!isAuthenticated && <div className='d-flex align-items-center space-top-mobile'>
              <ShoppingCartOutlined/>
              <button
                style={{ marginLeft: 10 }}
                className='rounded-0 btn btn-outline-dark'
                type='submit'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              &nbsp;
              <button className='rounded-0 btn btn-dark' type='submit' onClick={() => navigate('/signup')}>
                Sign up
              </button>
              &nbsp;
              <button className='rounded-0 btn btn-outline-dark d-flex align-items-center h-100'>
                <GlobalOutlined/>
              </button>
            </div>}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Avatar(props: { name?: string, email?: string }) {
  const [showPopover, setShowPopover] = React.useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <OverlayTrigger
      defaultShow={false}
      show={showPopover}
      delay={{ show: 250, hide: 400 }}
      placement={'bottom'}
      overlay={
        <Popover>
          <Popover.Header as="h3" className={'d-flex align-items-center justify-content-start'}>
            <div className={'avatar-large me-2'}>
              {props.name?.split(' ').map((name: string) => name[0])}
            </div>
            <div>
              <h6>{props.name}</h6>
              <div className={'text-secondary small fw-light'}>{props.email}</div>
            </div>
          </Popover.Header>
          <Popover.Body>
            <div className={'d-flex flex-column align-items-start justify-content-start'}>
              <div className={'pointer'} onClick={() => navigate('/my-learning')}>My learning</div>
              <div className={'pointer'} onClick={() => navigate('/cart')}>My cart</div>
              <div className={'pointer'} onClick={() => navigate('/help')}>Help</div>
              <div className={'pointer'} onClick={async () => {
                await logout();
                navigate('/login');
              }}>Log out
              </div>
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      <div className={'avatar'} onClick={() => {
        setShowPopover((v) => !v);
      }}>
        {props.name?.split(' ').map((name: string) => name[0])}
      </div>
    </OverlayTrigger>
  );
}