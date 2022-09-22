import React from 'react'
import QRCode from "react-qr-code";
import { QRCodeSVG } from 'qrcode.react';
function Qrcode() {
  const url ="http://192.168.10.57:3300/post/public"
  return (
    <div>
          <p>
              Scan this Qr Code .
          </p>
      <QRCodeSVG 
        size={256}
        imageSettings={
          {
                src:"https://www.forexnewsnow.com/wp-content/uploads/2018/04/Telegram-logo.png",
                height: 100,
                width: 100
          }
        }
        value={url} />
        <h5>
          OR
        </h5>
          <p>
              Visit  
              <a 
                style={{ color: "rgba(255,255,255,0.5)" }}
                href={url} target="_blank" rel="noreferrer"> Here</a>
               
          </p>
    </div>
  )
}

export default Qrcode