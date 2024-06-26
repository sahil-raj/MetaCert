import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

//@ts-ignore
const QRCodeComponent = ({ qrData }) => {
  return <QRCodeSVG value={qrData} className="w-12 h-12" />
}

export default QRCodeComponent
