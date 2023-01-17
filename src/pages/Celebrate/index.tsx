import React from "react";
import { Container } from "react-bootstrap";

export default function Celebrate() {
  return <div style={{ background: '#e7faff' }}>
    <Container className={'d-flex justify-content-center align-items-center vh-100'} >
      <div className={'d-flex flex-column justify-content-center align-items-center bg-white shadow p-5 rounded-3'}>
        <img src={'https://icon-library.com/images/celebration-icon-png/celebration-icon-png-7.jpg'} height={100} width={100}/>
        <br/>
        <h4>Your order is complete!</h4>
        <div className={'text-secondary'}>You will be receiving a confirmation email with order details</div>
      </div>
    </Container>
  </div>
}