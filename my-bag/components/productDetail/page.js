'use client';
import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductLeftBottom from './product-left-bottom';
import ProductRightTop from './product-right-top';
import ProductRightBottom from './product-right-bottom';
import { Col, Container, Row } from 'react-bootstrap';

import { BsArrowLeft } from 'react-icons/bs';
import ProductLeft from '@/app/components/productCaurosel';





const ContactPage = () => {
  return (
    <div className="bg-[#F6F1EB]">
    <Container>
      <Row className="pt-5">
        <div className="flex start items-bottom ">
          <BsArrowLeft className="text-2xl" />
          <span className="text-md ps-2">Zurück</span>
        </div>
       
         <ProductRightTop />
         </Row>
         <Row className="">
         <Col lg={8} md={12} className="py-5">
     
            <ProductLeftBottom />
        
        </Col>
        <Col lg={4} md={12} className="py-5">
          
          <ProductRightBottom />
          </Col>
          
      </Row>
    </Container>
  </div>
    
  
  );
};

export default ContactPage;

