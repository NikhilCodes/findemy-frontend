import { Button, Col, Container, Row } from "react-bootstrap";
import { MockService } from "../../services/mock.service";
import { container } from "tsyringe";
import { useQuery } from "react-query";
import React, { useEffect } from "react";
import './style.css';
import { CURRENCY } from "../../constants";
import { Pagination } from "../../components/Pagination";
import { useAuth } from "../../hooks/auth.hook";
import { isMobile } from "react-device-detect";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CourseService } from "../../services/course.service";

export default function CoursesPage() {
  const courseService = container.resolve(CourseService);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, isLoading } = useQuery(['courses', query], () => courseService.searchCourses(query, []));
  const [currentPage, setCurrentPage] = React.useState(0);
  const [coursesPerPage] = React.useState(10);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(data)

  return (
    <Container className={'py-5'}>
      <h4 className={'fw-bold'}>{data?.total} results for "{query}"</h4>
      <br/>
      <h6 className={'fw-bold'} style={{ textAlign: 'right' }}>
        {data?.total?.toLocaleString()} results
      </h6>

      <Row className={'d-flex'}>
        <Col lg={2}>
          <h6 className={'fw-bold'}>
            Level
          </h6>
          <div>
            <div><input type={'checkbox'}/>&nbsp;Beginner</div>
            <div><input type={'checkbox'}/>&nbsp;All Levels</div>
            <div><input type={'checkbox'}/>&nbsp;Intermediate</div>
            <div><input type={'checkbox'}/>&nbsp;Advanced</div>
          </div>
        </Col>
        <Col lg={10}>
          <div>
            <div>
              {data?.data?.map((course) => (
                <div className={`clickable d-flex my-3 ${isMobile && 'flex-column'}`} key={course._id}
                     onClick={() => navigate(`/course/${course._id}`)}>
                  <img src={course.thumbnail}/>
                  <div className={`px-2 ${isMobile ? 'pt-2' : ''}`}>
                    <h6 className='fw-bold mb-0'>{course.title}</h6>
                    <div className='card-title small text-secondary py-1'>{course.description}</div>
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
                      {isAuthenticated && !isMobile && <Button className={'add-to-cart'}>Add to cart</Button>}
                    </div>
                  </div>
                  <div style={{ marginLeft: 20, transform: isMobile ? 'translateY(-50px)' : '' }}>
                    <div className={'d-flex flex-column align-items-end'}>
                      <div className={'fw-bold'}>{CURRENCY}{course.price?.discountPrice?.toLocaleString()}</div>
                      <div
                        className={'original-price text-secondary'}
                        style={{ textDecoration: 'line-through' }}>{CURRENCY}{course.price.originalPrice?.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={'pt-lg-5 d-flex justify-content-center w-100'}>
              <Pagination
                total={data?.total}
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