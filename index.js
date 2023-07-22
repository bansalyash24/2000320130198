const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: '*'
}))
const trainRoute = require("./routes/trainRoutes");
app.use('/api',trainRoute)

app.listen(port, () => console.log(`Node server listening on port ${port}!`));