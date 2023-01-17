import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { container } from "tsyringe";
import { MockService } from "../../services/mock.service";
import './style.css';
import { CURRENCY } from "../../constants";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";

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
  const mockService = container.resolve(MockService);

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

  const { data, isLoading } = useQuery('student-view', () => mockService.getStudentsView());
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
        {data!.map((course) => (<div style={{ minWidth: 245, marginRight: 20 }} key={course._id}>
          <div>
            <img
              src={course.thumbnail}
              className='card-img-top mb-2'
              alt='thumbnail'
            />
            <div className='card-body'>
              <h6 className='card-title fw-bold mb-0'>{course.title}</h6>
              <div className='small text-secondary py-1'>{course.creator.name}</div>
              <div className={'rating'}>
                {course.rating.averageValue} <small
                className={'text-secondary fw-light'}>({course.rating.totalRatings.toLocaleString()})</small>
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
              <a className={'trending-topic-link'} href={'/'}>Python</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Web Development</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Machine Learning</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>

          </Col>
          <Col>
            <h5 className={'fw-bold'}>Business</h5>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Financial Analysis</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>SQL</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>PMP</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
          </Col>
          <Col>
            <h5 className={'fw-bold'}>IT and Software</h5>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>AWS Certification</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Ethical Hacking</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Cyber Security</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
          </Col>
          <Col>
            <h5 className={'fw-bold'}>Design</h5>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Photoshop</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Graphic Design</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
            <br/>
            <Row>
              <a className={'trending-topic-link'} href={'/'}>Drawing</a>
              <div className={'text-secondary'}>3,622,331 students</div>
            </Row>
          </Col>
        </Row>
        <Button variant={'outline-dark'} className={'mt-5 rounded-0 fw-bold'}>Explore more topics</Button>
      </Container>
    </div>
  )
}