import { MockService } from "../../services/mock.service";
import { container } from "tsyringe";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CheckOutlined, GlobalOutlined, HeartOutlined, InfoCircleFilled } from "@ant-design/icons";
import moment from "moment";
import { CURRENCY } from "../../constants";
import './style.css';
import { CourseService } from "../../services/course.service";
import { CartService } from "../../services/cart.service";
import { Loader } from '../../components/Loader';
import { isMobile } from 'react-device-detect';
import { useAuth } from '../../hooks/auth.hook';
import { useAppDispatch } from '../../redux/hooks';
import { fetchCartAsync } from '../../redux/slices/cart.slice';

export default function CourseById() {
  const cartService = container.resolve(CartService);
  const courseService = container.resolve(CourseService);
  const { id } = useParams();
  const { data } = useQuery(['course', id], () => courseService.getCourseById(id!));
  const [addToCartLoader, setAddToCartLoader] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();

  const onAddToCart = async (disableRemove = false) => {
    setAddToCartLoader(true);
    if (isAddedToCart) {
      if (!disableRemove) {
        await cartService.removeFromCart(id);
      }
    } else {
      await cartService.addToCart(id);
    }
    setAddToCartLoader(false);
    setIsAddedToCart((initVal) => {
      return !initVal;
    })
    dispatch(fetchCartAsync());
  }

  useEffect(() => {
    if (data?.isAddedToCart) {
      setIsAddedToCart(true);
    }
  }, [data]);

  if (!data) {
    return <Loader/>
  }

  return (
    <div className={'root'}>
      <div className={'bg-black text-white py-5'}>
        <Container className={'d-flex'}>
          <div className={'w-100'}>
            <h3>{data?.title}</h3>
            <div>{data?.subTitle}</div>
            <div className={'d-flex justify-content-start align-items-start mt-3'}>
              {data?.isBestSeller && <span className={'best-seller-badge'}>Bestseller</span>}
              &nbsp;
              <div style={{ color: 'goldenrod' }} className={'fw-bold'}>
                {data?.rating?.averageRating?.toFixed(1)} <small
                className={'text-secondary fw-light'}>({data?.rating?.totalRatings?.toLocaleString()}) <strong
                className={'fw-bold'}>{data?.enrolls?.toLocaleString()} students</strong></small>
              </div>
            </div>
            <div className={'small'}>
              Created by <span>
                <a href={'/'} style={{ textDecoration: 'underline' }}>
                  {data?.creator?.name}</a>
            </span>
            </div>
            <div className={'d-flex'}>
              <small className={'d-flex align-items-center me-3'}>
                <InfoCircleFilled/>
                &nbsp;Last Updated {moment(data?.lastUpdated).format('MM/YYYY')}
              </small>
              <small className={'d-flex align-items-center'}>
                <GlobalOutlined/>
                &nbsp;
                {data?.lang}
              </small>
            </div>
          </div>
          <div className={'w-25 h-100'}/>
        </Container>
      </div>
      <div className={'pt-5 d-flex'}>
        <Container>
          <div className={'d-flex'}>
            <div className={`w-100 ${!isMobile && 'me-5'}`}>
              {isMobile && <div>
                <video className={'w-100 h-100'} controls={true} src={data?.trailerVideo}/>
                <div className={'bg-white p-3 text-dark'}>
                  <h4 className={'mb-4'}>{CURRENCY}{data?.price?.discountPrice?.toLocaleString()}</h4>
                  {!data.userIsEnrolled && isAuthenticated && <div className={'d-flex justify-content-between align-items-center mb-1'}>
                    <button className={'add-to-cart w-100'} onClick={() => onAddToCart()}>{isAddedToCart ?
                      <span className={'d-flex justify-content-evenly align-items-center'}><CheckOutlined/> Added to cart</span> :
                      'Add to cart'}
                    </button>
                    &nbsp;
                    <button
                      className={'justify-content-center align-items-center d-flex add-to-cart bg-white text-dark border border-1 border-dark'}
                      style={{ width: 45, height: 45 }}
                    >
                      <HeartOutlined/>
                    </button>
                  </div>}

                  {!data.userIsEnrolled && isAuthenticated && <button
                    className={'w-100 add-to-cart bg-white text-dark border border-1 border-dark fw-bold'}
                    onClick={async () => {
                      await onAddToCart(true);
                      navigate('/checkout')
                    }}
                  >
                    Buy Now
                  </button>}

                  {data.userIsEnrolled && <button
                    className={'w-100 add-to-cart bg-white text-dark border border-1 border-dark fw-bold'}
                  >
                    Already Enrolled
                  </button>}

                  {!isAuthenticated && <button className={'add-to-cart w-100'} onClick={() => navigate('/login')}>
                    Login
                  </button>}

                  <div className={'my-2 text-secondary small text-center'}>30-days money back guarantee</div>
                  <div>
                    <strong className={'text-center'}>This course includes:</strong>
                    <div>
                      <small>
                        <div>5.5 hours on-demand video</div>
                        <div>70 downloadable resources</div>
                        <div>Full lifetime access</div>
                        <div>Access on mobile and TV</div>
                        <div>Certificate of completion</div>
                      </small>
                    </div>
                  </div>
                </div>
              </div>}
              <div className={'w-100 justify-content-start border-1 border-dark border p-4 pb-2'}>
                <h3>
                  What you'll learn
                </h3>
                <div className={'d-flex'}>
                  <ul className={'w-50'}>
                    {data?.learnings?.slice(0, Math.ceil(data?.learnings?.length / 2))?.map(l => <li key={l}>{l}</li>)}
                  </ul>
                  <ul className={'w-50'}>
                    {data?.learnings?.slice(Math.ceil(data?.learnings?.length / 2))?.map(l => <li key={l}>{l}</li>)}
                  </ul>
                </div>
              </div>

              <div className={'mt-5'}>
                <h3>
                  Requirements
                </h3>
                <div className={'d-flex'}>
                  <ul className={'w-50'}>
                    {data?.requirements?.map(l => <li key={l}>{l}</li>)}
                  </ul>
                </div>
              </div>

              <div className={'mt-4'}>
                <h3>
                  Description
                </h3>
                <div dangerouslySetInnerHTML={{ __html: data?.description ?? '' }}/>
              </div>

              <div className={'mt-4'}>
                <h3>
                  Instructor
                </h3>
                <div>
                  <h6><a href={'/'} className={'link-primary text-decoration-underline'}>{data?.creator?.name}</a>
                  </h6>
                  <div className={'text-secondary'}>{data?.creator?.occupation}</div>
                  <div className={'d-flex align-items-center'}>
                    <img alt={'instructor avatar'} src={data?.creator?.avatar}
                         className={'avatar-large w-25 h-25 my-2'}/>
                    <ul>
                      <li>{data?.creator?.rating} Instructor Rating</li>
                      <li>{data?.creator?.reviews?.toLocaleString()} Reviews</li>
                      <li>{data?.creator?.students?.toLocaleString()} Students</li>
                      <li>{data?.creator?.courses} Courses</li>
                    </ul>
                  </div>
                  <div className={'mb-5'}>
                    {data?.creator?.description}
                  </div>
                </div>
              </div>
            </div>
            {!isMobile && <div className={'w-25'}/>}
            {!isMobile && <div className={'border border-2 border-light w-75 h-100 shadow sticky-top'}
                  style={{ transform: 'translateY(-230px)', top: 400, zIndex: 10 }}>
              <video className={'w-100 h-100'} controls={true} src={data?.trailerVideo}/>
              <div className={'bg-white p-3 text-dark'}>
                <h4 className={'mb-4'}>{CURRENCY}{data?.price?.discountPrice?.toLocaleString()}</h4>
                {!data.userIsEnrolled && isAuthenticated && <div className={'d-flex justify-content-between align-items-center mb-1'}>
                  <button className={'add-to-cart w-100'} onClick={() => onAddToCart()}>{isAddedToCart ?
                    <span className={'d-flex justify-content-evenly align-items-center'}><CheckOutlined/> Added to cart</span> :
                    'Add to cart'}
                  </button>
                  &nbsp;
                  <button
                    className={'justify-content-center align-items-center d-flex add-to-cart bg-white text-dark border border-1 border-dark'}
                    style={{ width: 45, height: 45 }}
                  >
                    <HeartOutlined/>
                  </button>
                </div>}

                {!data.userIsEnrolled && isAuthenticated && <button
                  className={'w-100 add-to-cart bg-white text-dark border border-1 border-dark fw-bold'}
                  onClick={async () => {
                    await onAddToCart(true);
                    navigate('/checkout')
                  }}
                >
                  Buy Now
                </button>}

                {!isAuthenticated && <button className={'add-to-cart w-100'} onClick={() => navigate('/login')}>
                  Login to buy
                </button>}

                {data.userIsEnrolled && <button
                  className={'w-100 add-to-cart bg-white text-dark border border-1 border-dark fw-bold'}
                >
                  Already Enrolled
                </button>}

                <div className={'my-2 text-secondary small text-center'}>30-days money back guarantee</div>
                <div>
                  <strong className={'text-center'}>This course includes:</strong>
                  <div>
                    <small>
                      <div>5.5 hours on-demand video</div>
                      <div>70 downloadable resources</div>
                      <div>Full lifetime access</div>
                      <div>Access on mobile and TV</div>
                      <div>Certificate of completion</div>
                    </small>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </Container>
      </div>
    </div>
  );
}