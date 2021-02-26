const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

app.use('/messages', messagesRouter);

app.listen(port, () => {
    console.log('My app is listening at http://localhost:${port}')
})

