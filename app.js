// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

app.use(express.static('pages'));


// Define the port number where our server will listen
const PORT = 3007;
const jobs=[];
app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {

res.render('home');


   

    //res.send('Job Board Description');

});

app.get('/post-form', (req, res) => {


     res.render('job-posting-form');

});

app.get('/confirmation', (req, res) => {


     res.render('confirmation');

});






app.post('/submit-job', (req, res) => {
    console.log(req.body);
    const job = req.body;
   // job['timestamp'] = new Date();
    console.log(job);
   
   jobs.push(job);
   

   //Display confirmation page
   res.render('confirmation');
   
});

app.get('/admin', (req, res) => {
    res.render('admin');
});

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
