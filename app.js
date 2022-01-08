const express = require('express')
const fileUpload = require('express-fileupload');
const videoRouters = require('./routes/video.routes');
const Converter = require('./ffmpeg');

const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

let cors = require('cors')

ffmpeg.setFfmpegPath(ffmpegInstaller.path);


let app = express();
let port = 3001;

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
    console.log("Middleware Api called!!!!!!");
    next();
})

app.use('/upload', videoRouters);



app.listen(process.env.PORT || port);