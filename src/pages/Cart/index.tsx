import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { container } from "tsyringe";
import { MockService } from "../../services/mock.service";
import React from "react";
import { CURRENCY } from "../../constants";
import { TagFilled } from "@ant-design/icons";
import './style.css';
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const mockService = container.resolve(MockService);
  const navigate = useNavigate();
  const { data } = useQuery('cart', () => mockService.getCartItems())
  const totalDiscountedPrice = data?.reduce((acc, item) => acc + item.price.discountPrice, 0) ?? 0;
  const totalOriginalPrice = data?.reduce((acc, item) => acc + item.price.originalPrice, 0) ?? 1;
  return (
    <Container className={'py-5'}>
      <h2 style={{
        fontFamily: 'Lora, serif'
      }}>Shopping Cart</h2>
      <br/>
      <div className={`d-flex ${isMobile ? 'flex-column-reverse' : 'flex-row'}`}>
        <div>
          <div className={'text-secondary mb-3'}>{data?.length} Courses in cart</div>
          {data?.map((item) => (
            <div key={item._id} className={`clickable d-flex justify-content-between p-3 border border-opacity-50 border-1 mx-1 ${isMobile ? 'flex-column' : 'flex-row'}`}
                 onClick={() => navigate(`/course/${item._id}`)}
            >
              <div className={'d-flex justify-content-between'}>
                <img src={item.thumbnail} alt={'thumbnail'} height={isMobile? 100 : '100%'} className={isMobile ? 'w-100 h-100' : ''}/>
              </div>
              <div className={`mx-1 ${isMobile ? 'w-100' : 'w-50'} d-inline-block`}>
                <strong>{item.title}</strong>
                <div
                  className={'text-secondary small'}>By {item.creator.name}, {item.enrolled - (item.enrolled % (10 ** (item.enrolled.toString().length - 1)))}+
                </div>
                <div style={{ color: 'goldenrod' }} className={'fw-bold'}>
                  {item.isBestSeller &&
                    <span className={'best-seller-badge'}>Bestseller</span>} {item?.rating?.averageValue} <small
                  className={'text-secondary fw-light'}>({item?.rating?.totalRatings?.toLocaleString()} ratings)</small>
                </div>
                <div className={'small text-secondary'}>
                  {item.totalHours} total hours • {item.lectures} lectures • {item.level}
                </div>
              </div>
              <div className={'mx-1'}>
                <div className={'link-primary fw-semibold'}>Remove</div>
              </div>
              <div className={'mx-1'}>
                <div className={'fw-bold d-flex align-items-center'}
                     style={{ color: '#8710d8' }}>{CURRENCY}{item?.price?.discountPrice}&nbsp; <TagFilled
                  style={{ transform: 'scaleX(-1)' }}/></div>
                <div className={'strike'}>{CURRENCY}{item?.price?.originalPrice}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={'px-3 flex-grow-1 mb-5'}>
          <div className={'text-secondary mb-3'}>Total:</div>
          <div>
            <h3 className={'mb-1'}>{CURRENCY}{totalDiscountedPrice?.toLocaleString()}</h3>
            <div className={'strike text-secondary small'}>{CURRENCY}{totalOriginalPrice?.toLocaleString()}</div>
            <div className={'text-secondary small'}>{(100 - (totalDiscountedPrice * 100 / totalOriginalPrice)).toFixed()}% off</div>
            <br/>
            <button className={'checkout-btn'} onClick={() => navigate('/checkout')}>Checkout</button>
          </div>
        </div>
      </div>
    </Container>
  )
}