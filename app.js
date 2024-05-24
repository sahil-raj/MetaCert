const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const ejsmate = require("ejs-mate");
const methodoverride = require('method-override');
const port = 8080;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('ejs', ejsmate);
app.use(methodoverride("_method"));


const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMTJlODBlOS0xNDU1LTQ5YTgtOWFmOC0zZjdjMTQ3ZjNmZTYiLCJlbWFpbCI6InNhbmpheWJvbHQ5LjU4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5ZjE5ZTQxNmQ1Yzg2YjVkYWM5MyIsInNjb3BlZEtleVNlY3JldCI6ImIzMzBjOTUxYTFmNWRiZDE5ZmY4ODRjYzc3NDcwZGZhNjlmOGY3NTc4MmJmYjFlMzk1Y2ExMjc1YmZhOWI5MmUiLCJpYXQiOjE3MTY1NzA2NDZ9.KzVGZn1ahMSvM2VYIu3fVWlvH2xo7JVtO0XIrhTKyF4';
const pinataAPIKey = '9f19e416d5c86b5dac93';
const pinataSecretAPIKey = 'b330c951a1f5dbd19ff884cc77470dfa69f8f75782bfb1e395ca1275bfa9b92e';

const pinata = pinataSDK(pinataAPIKey, pinataSecretAPIKey);


// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
};




// Route to process the IPFS link and create a JSON file
app.get('/process-ipfs-link', async (req, res) => {
    const ipfsLink = req.query.ipfsLink;

    if (!ipfsLink) {
        return res.status(400).json({ error: 'ipfsLink query parameter is required' });
    }

    try {
        // Fetch data from the IPFS link
        const response = await axios.get(ipfsLink);
        const data = response.data;

        // Create JSON data with fetched data
        const jsonFilePath = path.join(uploadsDir, 'data.json');
        fs.writeFileSync(jsonFilePath, JSON.stringify(data));

        // Upload JSON file to Pinata
        const result = await pinata.pinFromFS(jsonFilePath, {
            pinataMetadata: {
                name: 'data.json',
            },
        });

        // Send JSON response with new Pinata link
        res.json({ pinataLink: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}` });
    } catch (error) {
        console.error('Error processing IPFS link:', error);
        res.status(500).json({ error: 'Error processing IPFS link' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});












