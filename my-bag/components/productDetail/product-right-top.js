import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { Paper, Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductRightTop = () => {
  const product = {
    title: 'Tasche Steeple 25',
    price: 249.99,
    kimizi: {
      images: [
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-1-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-3-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-4-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-5-0-0-800-800_g.webp",
        "/images/img-1/tasche-steeple-25--083621CKAA-worn-6-0-0-800-800_g.webp",
      ],
    },
    karmizi: {
      images: [
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-1-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-3-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-4-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-5-0-0-800-800_g.webp",
        "/images/img-2/tasche-steeple-25--083618CKAC-worn-6-0-0-800-800_g.webp",
      ],
    },
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const renderThumbs = () =>
    selectedImageIndex === 0
      ? product.kimizi.images.map((image, index) => (
          <div key={index} className='flex justify-center items-center' style={{ width: '100px', height: 'auto', border: 'none' }}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: '100%', height: 'auto', outline: 'none' }}
            />
          </div>
        ))
      : product.karmizi.images.map((image, index) => (
          <div key={index} className='flex justify-center items-center' style={{ width: '100px', height: 'auto', border: 'none' }}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: '100%', height: 'auto', outline: 'none' }}
            />
          </div>
        ));

  const responsiveSettings = [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ];

  return (
    <Container className='flex-col  bg-[#F6F1EB]'>
    <Row className=''>
      <Col lg={8} className=''>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={true}
        infiniteLoop={false}
        dynamicHeight={true}
        renderThumbs={renderThumbs}
        thumbWidth={100}
        thumbHeight={60}
        thumbOpacity={1}
        selectedItem={selectedImageIndex}
        stopOnHover={true}
        autoPlay={true}
        responsive={responsiveSettings}
      >
        {selectedImageIndex === 0
          ? product.kimizi.images.map((image, index) => (
              <div key={index}>
                <Paper>
                  <Box>
                    <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                  </Box>
                </Paper>
              </div>
            ))
          : product.karmizi.images.map((image, index) => (
              <div key={index}>
                <Paper>
                  <Box>
                    <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                  </Box>
                </Paper>
              </div>
            ))}
      </Carousel>
      </Col>
      <Col lg={4} className='bg-white'>
       <div className='border-b-2 border-gray-100 font-mono pt-2 font-semibold '>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>

      <div className='flex justify-between gap-5 border-b-2 border-gray-100 py-2 font-mono text-sm'>
        <span>FARBE</span>
        <span>
          
        </span>
      </div>

      <div className='flex gap-3 border-b-2 border-gray-100 py-2'>
        <img
          src={product.kimizi.images[0]}
          width={50}
          height={50}
          style={{
            borderBottom: selectedImageIndex === 0 ? '2px solid black' : 'none',
          }}
          onClick={() => handleImageClick(0)}
        />
        <img
          src={product.karmizi.images[0]}
          width={50}
          height={50}
          style={{
            borderBottom: selectedImageIndex === 1 ? '2px solid black' : 'none',
          }}
          onClick={() => handleImageClick(1)}
        />
      </div>

      <div className='flex justify-center items-center gap-3 border-b-2 border-gray-100 py-3'>
        <Button className='px-5' variant='dark'>
          Ihrem Warenkorb hinzufügen
        </Button>
      </div>

      <div className='flex justify-center items-center gap-3 border-gray-100 py-3'>
        <p className='text-sm'>
          Tasche aus Toile H Plume mit "Clic Clac Panoplie Équestre"-Motiv und Swift-Kalbsleder, Schmuck mit Silber- und Palladiumauflage, herausnehmbarer Boden aus Stoff, große flache Innentasche auf der Rückseite, D-Befestigungsring, von der Gerte eines Reiters inspirierte Griffe, Talisman in Form eines Steigbügels
          Zum Tragen in der Hand oder in der Armbeuge
          <br />
          <br />
          Hergestellt in Frankreich
          <br />
          <br />
          Abmessungen: L 25 x H 23 x T 15 cm
        </p>
      </div>
      </Col>
    </Row>
    
     
      
    </Container>
  );
};

export default ProductRightTop;
