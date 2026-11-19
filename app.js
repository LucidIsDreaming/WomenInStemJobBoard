// Import the express module
import express from 'express';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv. config();

const pool= mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
 }).promise();

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
app.get('/', async(req, res) => {
try {
        // Fetch all orders from the database, newest first
    const jobs =  await pool.query('SELECT * FROM jobs ORDER BY timestamp DESC');
	console.log(jobs[0]);
    res.render('home', {jobs: jobs[0]});



    } catch(err) {


        console.error('Database error:', err);
        res.status(500).send('Database error: ' + err.message);
    }


});

app.get('/post-form', (req, res) => {


     res.render('job-posting-form');

});


app.post('/submit-job', async(req, res) => {
    const job = req.body;
   job['timestamp'] = new Date();
    console.log(job);
   const sql = `INSERT INTO jobs (jobTitle, companyName, tradeArea, location, method, internMethod, 
   datePosted, expDate, appUrl)
   VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//CREATE AN ARRAY OD PARAMETERS FROM ORDER DATA
const params =[
    job.jobTitle,
    job.companyName,
    job.tradeArea,
    job.location,
    job.method,
    job.internMethod,
    job.datePosted,
    job.expDate,
    job.appUrl
];
   
const [result] = await pool.execute(sql, params);

   //Display confirmation page
   res.render('confirmation',{job});
   
});

app.get('/admin', (req, res) => {
    res.render('admin');
});

app.get('/admin-data', async(req,res) => {
    try{
        const [jobs]= await pool.query('SELECT * FROM jobs');
        console.log(jobs);
        res.render('admin-data', {jobs});
    } catch(err){
        console.error('Database error: ', err);
        res.status(500).send('Database error occured.');
    }
    
});


// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
