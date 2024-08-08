const express = require('express');
const path = require('path');
const app = express();
const port = 3001; // Use port 3001 for simplicity
app.get('/', (req, res) => {    res.sendFile(path.join(__dirname, 'Q3.html'));  });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function phoneFormat(phoneNum)  {
    const validFormat = /^\d\d\d-\d\d\d-\d\d\d\d$/;

    if (validFormat.test(phoneNum)) {return (phoneNum + "\nConforms to the required format :)");}
    else {return ('Incorrect number');}
}

app.post('/phoneFormat', (req, res) => {
    const { phone } = req.body;
    const result = phoneFormat(phone);
    res.send(`Phone Number: ${result}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
