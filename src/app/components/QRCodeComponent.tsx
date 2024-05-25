import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = ({qrData}) => {
    return (
        <QRCodeSVG value={qrData} />
    );
};

export default QRCodeComponent;