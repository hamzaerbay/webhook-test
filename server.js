import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const data = req.body;
    
    console.log("Received data:", data);
    
    res.status(200).json({
        message: "Webhook received successfully",
        data: data
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});