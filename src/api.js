const express = require('express')
const serverless = require('serverless-http');
const fileUpload = require('express-fileupload');
const videoRouters = require('../routes/video.routes');

const cors = require('cors')

const app = express();

app.use(fileUpload());
app.use(cors());
app.use(express.json());

const router = express.Router();

router.get('/',(req,res) => {
    res.json({
        'hello': 'hi'
    })
}
)

app.use('/.netlify/functions/api/upload',videoRouters)

app.use('/.netlify/functions/api', router);





//app.listen(process.env.PORT || port);

module.exports.handler = serverless(app);













