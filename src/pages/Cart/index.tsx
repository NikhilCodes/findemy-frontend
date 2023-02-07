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
import { CartService } from "../../services/cart.service";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCartAsync, selectCartCourses } from '../../redux/slices/cart.slice';

export default function CartPage() {
  const cartService = container.resolve(CartService);
  const navigate = useNavigate();
  const cartCourses = useAppSelector(selectCartCourses)
  const totalDiscountedPrice = cartCourses?.reduce((acc, item) => acc + item.price.discountPrice, 0) ?? 0;
  const totalOriginalPrice = cartCourses?.reduce((acc, item) => acc + item.price.originalPrice, 0) ?? 1;
  const dispatch = useAppDispatch();

  const onRemoveFromCart = async (id) => {
    await cartService.removeFromCart(id);
    dispatch(fetchCartAsync());
  }

  return (
    <Container className={'py-5'}>
      <h2 style={{
        fontFamily: 'Lora, serif'
      }}>Shopping Cart</h2>
      <br/>
      {cartCourses?.length !== 0 && <div className={`d-flex ${isMobile ? 'flex-column-reverse' : 'flex-row'}`}>
        <div>
          <div className={'text-secondary mb-3'}>{cartCourses?.length} Courses in cart</div>
          {cartCourses?.map((item) => (
            <div key={item._id} className={`clickable d-flex justify-content-between p-3 border border-opacity-50 border-1 mx-1 ${isMobile ? 'flex-column' : 'flex-row'}`}
                 onClick={() => navigate(`/course/${item._id}`)}
            >
              <div className={'d-flex justify-content-between me-3'}>
                <img src={item.thumbnail} alt={'thumbnail'} height={isMobile? 100 : '100%'} className={isMobile ? 'w-100 h-100' : ''}/>
              </div>
              <div className={`mx-1 ${isMobile ? 'w-100' : 'w-50'} d-inline-block`}>
                <strong className={`d-block ${isMobile ? 'mt-2' : ''}`} style={{marginTop: 30}}>{item.title}</strong>
                <div
                  className={'text-secondary small'}>By {item.creator.name}, {item.enrolls - (item.enrolls % (10 ** (item.enrolls.toString().length - 1)))}+
                </div>
                <div style={{ color: 'goldenrod' }} className={'fw-bold'}>
                  {item.isBestSeller &&
                    <span className={'best-seller-badge'}>Bestseller</span>} {item?.rating?.averageRating?.toFixed(1)} <small
                  className={'text-secondary fw-light'}>({item?.rating?.totalRatings?.toLocaleString()} ratings)</small>
                </div>
                <div className={'small text-secondary'}>
                  {item.totalHours} total hours • {item.lectures} lectures • {item.level}
                </div>
              </div>
              <div className={'mx-1'}>
                <div className={'link-primary fw-semibold'} onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromCart(item._id);
                }}>Remove</div>
              </div>
              <div className={'mx-1'}>
                <div className={'fw-bold d-flex align-items-center color-primary'}
                     >{CURRENCY}{item?.price?.discountPrice}&nbsp; <TagFilled
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
      </div>}
      {
        cartCourses?.length === 0 && <div className={'text-center'} style={{height: '40vh'}}>
          <h3 className={'text-secondary'}>Your cart is empty</h3>
          <br/>
          <button className={'checkout-btn'} onClick={() => navigate('/')}>Explore Courses</button>
        </div>
      }
    </Container>
  )
}