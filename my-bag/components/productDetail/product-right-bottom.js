'use client';
import React from 'react';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductRightBottom = () => {
  return (
    
      <div className=' bg-white'>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Bakım Talimatları</Typography>
          </AccordionSummary>
          <div className='font-serif text-xs ms-3 my-2'>
            
          <p>Bu şekilde Hermès derinizin uzun süreli korunmasını sağlarsınız</p> 
           
          </div>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Teslimat</Typography>
          </AccordionSummary>
          <div className='font-serif text-xs ms-3 my-2'>
          
              <li>FedEx tarafından 3 ila 4 iş günü içinde teslim edilir</li>
              <li>Butikten 3 ila 4 iş günü içinde teslim alınır</li>
              <li>Ücretsiz kargo</li>
            
          </div>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
            <Typography>Ödeme Aracı</Typography>
          </AccordionSummary>
          <div className='font-serif text-xs ms-3 my-2'>
            
              <li>Kartla: Visa®, MasterCard®, Maestro® ve American Express®</li>
              <li>Verified by Visa®, MasterCard® SecureCode ve American Express SafeKey® ile güvenli kartla ödeme</li>
             
            
          </div>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
            <Typography>İade ve Değişimler</Typography>
          </AccordionSummary>
          <div className='font-serif text-xs ms-3 my-2'>
            
              <li>Kolay ve ücretsiz, 30 gün içinde</li>
              
            
          </div>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
            <Typography>Hediye Yapmak İçin</Typography>
          </AccordionSummary>
          <div className='font-serif text-xs ms-3 my-2'>
            
              <li>Tüm siparişler - Bolduc kurdeleli turuncu bir kutu içinde teslim edilir</li>
             
          </div>
        </Accordion>
      </div>
  )
}

export default ProductRightBottom