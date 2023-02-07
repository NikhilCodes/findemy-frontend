import React, { Suspense } from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

// Lazy-loaded pages
const HomePage = React.lazy(() => import('../../pages/Home'))
const LoginPage = React.lazy(() => import('../../pages/Login'))
const SignupPage = React.lazy(() => import('../../pages/Signup'))
const CoursesPage = React.lazy(() => import('../../pages/Courses'))
const CourseById = React.lazy(() => import('../../pages/Courses/ById'))
const CheckoutPage = React.lazy(() => import('../../pages/Checkout'))
const CelebratePage = React.lazy(() => import('../../pages/Celebrate'))
const CartPage = React.lazy(() => import('../../pages/Cart'))
const SearchPage = React.lazy(() => import('../../pages/mobileOnly/SearchPage'))
//

export function AppShell() {
  return (
    <React.Fragment>
      <Header/>
      <Suspense>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/signup'} element={<SignupPage/>}/>
          <Route path={'/courses'} element={<CoursesPage/>}/>
          <Route path={'/course/:id'} element={<CourseById/>}/>
          <Route path={'/checkout'} element={<CheckoutPage/>}/>
          <Route path={'/cart'} element={<CartPage/>}/>
          <Route path={'/celebrate'} element={<CelebratePage/>}/>
          <Route path={'/search'} element={<SearchPage/>}/>
          <Route path={'/*'}
                 element={<div className={'vh-100 d-flex justify-content-center align-items-center'}>404</div>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </React.Fragment>
  );
}
