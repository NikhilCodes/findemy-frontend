import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Checkbox, Input, Select } from "antd";
import './style.css';
import { APP_NAME, CURRENCY } from "../../constants";
import { LockFilled } from "@ant-design/icons";
import { useQuery } from "react-query";
import { MockService } from "../../services/mock.service";
import { container } from "tsyringe";
import { isMobile } from "react-device-detect";

export default function CheckoutPage() {
  const { register, formState: { errors } } = useForm();
  const mockService = container.resolve(MockService);
  const { data } = useQuery('cart', () => mockService.getCartItems())

  return (
    <div className={'min-vh-100 d-flex'} style={{
      flexDirection: isMobile ? 'column' : 'row',
    }}>
      <div className={'bg-white d-flex flex-column align-items-end'} style={{ width: isMobile ? '100%' : '55%' }}>
        <div className={`${isMobile ? 'w-100' : 'w-75'} p-3`}>
          <h2 style={{
            fontFamily: 'Lora, serif'
          }}>Checkout</h2>
          <form id={'checkout-form'}>
            <div className={'fw-bold mb-2'}>Billing Address</div>

            <Row>
              <Col>
                <label className={'form-label d-flex justify-content-between'} htmlFor={'countrySelect'}>
                  Country <span className={'small text-secondary'}>Required</span>
                </label>
                <Select id={'countrySelect'} {...register("country", { required: true })} className={'w-100'}>
                  <Select.Option value="india">India</Select.Option>
                  <Select.Option value="usa">USA</Select.Option>
                  <Select.Option value="uk">UK</Select.Option>
                  <Select.Option value="canada">Canada</Select.Option>
                  <Select.Option value="australia">Australia</Select.Option>
                  <Select.Option value="germany">Germany</Select.Option>
                  <Select.Option value="france">France</Select.Option>
                </Select>
              </Col>

              <Col>
                <label className={'form-label d-flex justify-content-between'} htmlFor={'stateSelect'}>
                  State{!isMobile && ' / Union Territory'}
                  <span className={'small text-secondary'}>Required</span>
                </label>
                <Select id={'stateSelect'} {...register("state", { required: true })} className={'w-100'}>
                  <Select.Option value="odisha">Odisha</Select.Option>
                  <Select.Option value="maharashtra">Maharashtra</Select.Option>
                  <Select.Option value="karnataka">Karnataka</Select.Option>
                  <Select.Option value="delhi">Delhi</Select.Option>
                  <Select.Option value="mumbai">Mumbai</Select.Option>
                  <Select.Option value="kolkata">Kolkata</Select.Option>
                </Select>
              </Col>
            </Row>
            <div className={'text-secondary small mt-2'} style={{ lineHeight: '140%' }}>
              {APP_NAME} is required to collect your billing address to comply with the tax laws of the country you are
              in.
            </div>
            <br/>
            <div className={'fw-bold mb-2 d-flex justify-content-between'}>Payment Method <small
              className={'fw-normal text-secondary d-flex align-items-center'}>Secured Connection&nbsp;
              <LockFilled/></small>
            </div>
            <div className={'d-flex flex-column'}>
              <Accordion defaultActiveKey={'0'}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    className={'findemy-accordion-header'}>
                    <div>Credit / Debit Card</div>
                    <div className={'supported-cards'}>
                      <img src={'http://www.udemy.com/staticx/udemy/images/v9/card-visa.svg'} height={20}/>
                      <img src={'http://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg'} height={20}/>
                      <img src={'http://www.udemy.com/staticx/udemy/images/v9/card-dinersclub.svg'} height={20}/>
                      <img src={'http://www.udemy.com/staticx/udemy/images/v9/card-amex.svg'} height={20}/>
                      <img src={'http://www.udemy.com/staticx/udemy/images/v9/card-rupay.svg'} height={20}/>
                      <img src={'http://www.udemy.com/staticx/udemy/images/v9/card-discover.svg'} height={20}/>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <label className={'form-label d-flex justify-content-between'} htmlFor={'nameOnCard'}>Name on
                      card</label>
                    <Input placeholder={'Name on card'}
                           className={'mb-2'} {...register("nameOnCard", { required: true })}/>
                    <br/>
                    <label className={'form-label d-flex justify-content-between'} htmlFor={'cardNumber'}>Card
                      number</label>
                    <Input placeholder={'0000 0000 0000 0000'}
                           className={'mb-2'} {...register("cardNumber", { required: true })}/>

                    <Row>
                      <Col>
                        <label className={'form-label d-flex justify-content-between'}>Security Code</label>
                        <Input placeholder={'000'}
                               className={'mb-2'} {...register("securityCode", { required: true })}/>
                      </Col>

                      <Col>
                        <label className={'form-label d-flex justify-content-between'}>Expiration Date</label>
                        <Input placeholder={'MM/YY'}
                               className={'mb-2'} {...register("securityCode", { required: true })}/>
                      </Col>
                    </Row>
                    <div>
                      <Checkbox/> <small className={'fw-semibold text-secondary'}>Securely save this card for future
                      purchases</small>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className={'findemy-accordion-header'}>Net Banking</Accordion.Header>
                  <Accordion.Body>
                    <label className={'form-label d-flex justify-content-between'} htmlFor={'bankSelect'}>Select
                      Bank</label>
                    <Select id={'bankSelect'} {...register("bank", { required: true })} className={'w-100'}>
                      <Select.Option value="hdfc">HDFC</Select.Option>
                      <Select.Option value="icici">ICICI</Select.Option>
                      <Select.Option value="sbi">SBI</Select.Option>
                      <Select.Option value="axis">Axis</Select.Option>
                      <Select.Option value="kotak">Kotak</Select.Option>
                    </Select>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className={'findemy-accordion-header'}>UPI</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <Input placeholder={'UPI ID'} className={'mb-2'} {...register("upiId", { required: true })}/>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={'mt-5'}>
              <div className={'fw-bold mb-2 d-flex justify-content-between'}>
                Order
              </div>
              <div className={'d-flex flex-column justify-content-between'}>
                {data?.map((item) => (
                  <div className={'d-flex align-items-center my-2'} key={item._id}>
                    <img src={item.thumbnail} height={40}/>
                    &nbsp;
                    <div className={'d-flex justify-content-between'}>
                      <div className={'fw-semibold small'}>{item.title}</div>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div className={'d-flex flex-column justify-content-between'}>
                      <div className={'text-secondary small'}>{CURRENCY}{item?.price?.discountPrice}</div>
                      <div className={'text-secondary small strike'}>{CURRENCY}{item?.price?.originalPrice}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ background: '#efefef', width: isMobile ? '100%' : '45%', position: 'sticky', top: 20 }}>
        <div className={'p-3'}>
          <h2 style={{
            fontFamily: 'Lora, serif'
          }}>&nbsp;</h2>
          <div className={'fw-bold mb-2'}>Summary</div>
          <div className={`${isMobile ? 'w-100' : 'w-50'} text-secondary small`}>
            <div className={'d-flex justify-content-between'}>
              <div>Original Price</div>
              <div>{CURRENCY}{data?.reduce((a, b) => a + b.price.originalPrice, 0)}</div>
            </div>

            <div className={'d-flex justify-content-between'}>
              <div>Discounts</div>
              <div>-{CURRENCY}{data?.reduce((a, b) => a + (b.price.originalPrice - b.price.discountPrice), 0)}</div>
            </div>
            <hr/>
            <div className={'d-flex justify-content-between fw-semibold text-dark'}>
              <div>Total:</div>
              <div>{CURRENCY}{data?.reduce((a, b) => a + b.price.discountPrice, 0)}</div>
            </div>
            <br/>
            <small>
              By clicking on the button below, you agree to our <a href={'#'}>Terms of Service</a> and <a href={'#'}>Privacy
              Policy</a>.
            </small>
            <br/><br/>
            <button className={'checkout-btn'} form={'checkout-form'}>
              Complete Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}