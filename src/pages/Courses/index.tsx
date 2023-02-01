import { Col, Container, Row } from "react-bootstrap";
import { Button } from 'antd';
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { container } from "tsyringe";
import React, { useEffect } from "react";
import './style.css';
import { CURRENCY } from "../../constants";
import { Pagination } from "../../components/Pagination";
import { useAuth } from "../../hooks/auth.hook";
import { isMobile } from "react-device-detect";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CourseService } from "../../services/course.service";
import { CartService } from "../../services/cart.service";
import { Loader } from '../../components/Loader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCoursesAsync, selectCourses, selectCourseTotal } from '../../redux/slices/courses.slice';
import { fetchCartAsync } from '../../redux/slices/cart.slice';

export default function CoursesPage() {
  const mountRef = React.useRef(false);
  const courseService = container.resolve(CourseService);
  const [searchParams, setSearchParams] = useSearchParams();
  const [levels, setLevels] = React.useState([]);
  const query = searchParams.get('q');
  const [currentPage, setCurrentPage] = React.useState(0);
  const [coursesPerPage] = React.useState(10);

  const courses = useAppSelector(selectCourses)
  const totalCourses = useAppSelector(selectCourseTotal);
  const isLoading = useAppSelector(state => state.course.status === 'loading')
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mountRef.current) {
      dispatch(fetchCoursesAsync({ keyword: query, levels }))
    } else {
      mountRef.current = true;
    }
  }, [levels, query])

  return (
    <Container className={'py-5'} style={{ minHeight: '70vh' }}>
      <h4 className={'fw-bold'}>{totalCourses} results for "{query}"</h4>
      <br/>
      <h6 className={'fw-bold'} style={{ textAlign: 'right' }}>
        {totalCourses?.toLocaleString()} results
      </h6>

      <Row className={'d-flex'}>
        <Col lg={2}>
          <h6 className={'fw-bold'}>
            Level
          </h6>
          <div>
            <div><input
              type={'checkbox'}
              onChange={(e) => {
                if (!e.target.checked) {
                  levels.splice(levels.indexOf('Beginner'), 1);
                } else {
                  levels.push('Beginner');
                }
                setLevels([...levels]);
              }}
            />&nbsp;Beginner
            </div>
            <div><input
              type={'checkbox'}
              onChange={(e) => {
                if (!e.target.checked) {
                  levels.splice(levels.indexOf('All Levels'), 1);
                } else {
                  levels.push('All Levels');
                }
                setLevels([...levels]);
              }}
            />&nbsp;All Levels
            </div>
            <div><input
              type={'checkbox'}
              onChange={(e) => {
                if (!e.target.checked) {
                  levels.splice(levels.indexOf('Intermediate'), 1);
                } else {
                  levels.push('Intermediate');
                }
                setLevels([...levels]);
              }}
            />&nbsp;Intermediate
            </div>
            <div><input
              type={'checkbox'}
              onChange={(e) => {
                if (!e.target.checked) {
                  levels.splice(levels.indexOf('Advanced'), 1);
                } else {
                  levels.push('Advanced');
                }
                setLevels([...levels]);
              }}
            />&nbsp;Advanced
            </div>
          </div>
        </Col>
        <Col lg={10}>
          <div>
            <div>
              {isLoading && <div className={'d-flex justify-content-center'}>
                <LoadingOutlined style={{ fontSize: 24 }} spin/>
              </div>}
            </div>
            <div>
              {courses?.map((course) => (
                <CourseCard course={course} key={course._id}/>
              ))}
            </div>
            <div className={'pt-lg-5 d-flex justify-content-center w-100'}>
              <Pagination
                total={totalCourses}
                size={coursesPerPage}
                currentPage={currentPage}
                onChange={(page: number) => setCurrentPage(page)}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const CourseCard = ({ course }) => {
  const cartService = container.resolve(CartService);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [addToCartLoader, setAddToCartLoader] = React.useState(false);
  const [isAddedToCart, setIsAddedToCart] = React.useState(course.isAddedToCart);
  const dispatch = useAppDispatch();

  const onAddToCart = async (courseId: string) => {
    setAddToCartLoader(true);
    if (isAddedToCart) {
      await cartService.removeFromCart(courseId);
    } else {
      await cartService.addToCart(courseId);
    }
    setAddToCartLoader(false);
    setIsAddedToCart((initVal) => {
      return !initVal;
    })
    dispatch(fetchCartAsync());
  }

  return (
    <div className={`clickable d-flex my-3 ${isMobile && 'flex-column'}`} key={course._id}
         onClick={() => navigate(`/course/${course._id}`)}>
      <img src={course.thumbnail} alt={'course-thumb'}/>
      <div className={`px-2 ${isMobile ? 'pt-2' : ''}`}>
        <h6 className='fw-bold mb-0'>{course.title}</h6>
        <div className='card-title small text-secondary py-1' dangerouslySetInnerHTML={{
          __html: course.description,
        }}></div>
        <div style={{ color: 'goldenrod' }} className={'fw-bold'}>
          {course.rating.averageValue} <small
          className={'text-secondary fw-light'}>({course.rating?.totalRatings?.toLocaleString()})</small>
        </div>
        <div className={'d-flex justify-content-between'}>
          <div>
            <small className={'d-flex text-secondary'} style={{ fontSize: '0.7rem' }}>
              <div>{course.totalHours} total hours</div>
              &nbsp;-&nbsp;
              <div>{course.lectures} lectures</div>
              &nbsp;-&nbsp;
              <div>{course.level}</div>
            </small>
            <div>
              {course.isBestSeller && <span className={'best-seller-badge'}>Bestseller</span>}
            </div>
          </div>
          {!isMobile && course.userIsEnrolled && <Button
            className={'add-to-cart rounded-0 border-dark border-1 border bg-white text-dark'}>Enrolled</Button>}
          {isAuthenticated && !course.userIsEnrolled && !isMobile && <Button
            loading={addToCartLoader}
            className={'add-to-cart'}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(course._id).then();
            }}
          >{isAddedToCart ? <span className={'d-flex justify-content-evenly align-items-center'}><CheckOutlined/> Added to cart</span> : 'Add to cart'}</Button>}
        </div>
      </div>
      <div style={{ marginLeft: 50, minWidth: 10, transform: isMobile ? 'translateY(-50px)' : '' }}>
        <div className={'d-flex flex-column align-items-end'}>
          <div className={'fw-bold'}>{CURRENCY}{course.price?.discountPrice?.toLocaleString()}</div>
          <div
            className={'original-price text-secondary'}
            style={{ textDecoration: 'line-through' }}>{CURRENCY}{course.price.originalPrice?.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
