// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

app.use(express.static('pages'));


// Define the port number where our server will listen
const PORT = 3007;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {



    res.sendFile(`${import.meta.dirname}/views/home.html`);

    //res.send('Job Board Description');

});

app.get('/post-form', (req, res) => {


     res.sendFile(`${import.meta.dirname}/views/job-posting-form.html`);

});

app.get('/confirmation', (req, res) => {


     res.sendFile(`${import.meta.dirname}/views/confirmation.html`);

});

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
