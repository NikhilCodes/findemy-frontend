import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { container } from "tsyringe";
import { MockService } from "../../services/mock.service";
import './style.css';
import { CURRENCY } from "../../constants";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CourseService } from "../../services/course.service";
import { Rating } from '../../components/Rating';

export default function HomePage() {
  return (
    <>
      <Container className='py-5'>
        <div>
          <h3>Students are viewing</h3>
          <StudentView/>
        </div>
      </Container>
      <FeaturedTopics/>
    </>
  );
}

function StudentView() {
  const scrollableBodyRef = useRef<HTMLDivElement>(null);
  const courseService = container.resolve(CourseService);
  const navigate = useNavigate();
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const onClickScroll = (direction: 'left' | 'right') => {
    scrollableBodyRef.current?.scrollBy?.({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });

    // Controls visibility of left and right arrows
    setTimeout(() => {
      if (scrollableBodyRef.current?.scrollLeft === 0) {
        setShowLeftArrow(false);
      }
      if (scrollableBodyRef.current !== null && scrollableBodyRef.current.scrollLeft > 0) {
        setShowLeftArrow(true);
      }

      if (scrollableBodyRef.current !== null && scrollableBodyRef.current.scrollLeft < scrollableBodyRef.current.scrollWidth - scrollableBodyRef.current.clientWidth) {
        setShowRightArrow(true);
      }

      if (scrollableBodyRef.current?.scrollLeft === (scrollableBodyRef.current?.scrollWidth ?? 0) - (scrollableBodyRef.current?.clientWidth ?? 0)) {
        setShowRightArrow(false);
      }
    }, 500)
  }

  const { data, isLoading } = useQuery('student-view', () => courseService.getStudentView());
  console.log(data)
  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className={'d-flex justify-content-start align-items-center position-relative'}>
      {showLeftArrow && <div className={'position-absolute translate-middle'} style={{ left: 0 }}>
        <Button
          className={'rounded-circle'}
          variant='dark'
          onClick={() => onClickScroll('left')}
          style={{ height: 40, width: 40, display: 'flex', placeItems: 'center' }}
        ><LeftOutlined/></Button>
      </div>}
      <div className='student-view-container' ref={scrollableBodyRef}>
        {data!.map((course) => (<div className={'clickable'} style={{ minWidth: 245, marginRight: 20 }} key={course._id}
                                       onClick={() => navigate(`/course/${course._id}`)}>
          <div>
            <img
              src={course.thumbnail}
              className='card-img-top mb-2'
              alt='thumbnail'
            />
            <div className='card-body'>
              <h6 className='card-title fw-bold mb-0'>{course.title}</h6>
              <div className='small text-secondary py-1'>{course.creator.name}</div>
              <div className={'rating d-flex align-items-center'}>
                {course.rating?.averageRating?.toFixed(1) ?? '0'}
                &nbsp;
                <Rating rating={course.rating?.averageRating} total={5} />
                &nbsp;
                <small
                className={'text-secondary fw-light'}>({course.rating?.totalRatings?.toLocaleString() ?? '0'})</small>
              </div>
              <div className={'d-flex'}>
                <div className={'fw-bold me-2'}>{CURRENCY}{course.price.discountPrice?.toLocaleString()}</div>
                <div
                  className={'original-price text-secondary'}>{CURRENCY}{course.price.originalPrice?.toLocaleString()}</div>
              </div>
              <div>
                {course.isBestSeller && <span className={'best-seller-badge'}>Bestseller</span>}
              </div>
            </div>
          </div>
        </div>))}
      </div>
      {showRightArrow && <div className={'position-absolute'} style={{ right: 0, transform: 'translate(50%, -50%)' }}>
        <Button
          className={'rounded-circle'}
          variant='dark'
          onClick={() => onClickScroll('right')}
          style={{ height: 40, width: 40, display: 'flex', placeItems: 'center' }}
        ><RightOutlined/></Button>
      </div>}
    </div>
  );
}

function FeaturedTopics() {
  return (
    <div className={'featured-topic-container'}>
      <Container>
        <h3>Featured topics by category</h3>
        <br/>
        <Row>
          <Col>
            <h5 className={'fw-bold'}>Development</h5>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Python'}>Python</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Web Development'}>Web Development</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Machine Learning'}>Machine Learning</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>

          </Col>
          <Col>
            <h5 className={'fw-bold'}>Business</h5>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Financial Analysis'}>Financial Analysis</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=SQL'}>SQL</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=PMP'}>PMP</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
          </Col>
          <Col>
            <h5 className={'fw-bold'}>IT and Software</h5>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=AWS Certification'}>AWS Certification</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Ethical Hacking'}>Ethical Hacking</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Cyber Security'}>Cyber Security</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
          </Col>
          <Col>
            <h5 className={'fw-bold'}>Design</h5>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Photoshop'}>Photoshop</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Graphic Design'}>Graphic Design</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <Link className={'trending-topic-link'} to={'/courses?q=Drawing'}>Drawing</Link>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
          </Col>
        </Row>
        <Button variant={'outline-dark'} className={'mt-5 rounded-0 fw-bold'}>Explore more topics</Button>
      </Container>
    </div>
  )
}