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

// app.post('/upload',(req,res) => {

//     console.log("Node Post Called");
//     if(req.files === undefined){
//     return res.status(400).json({msg: 'No file Uploaded'})
//     }

//     const file = req.files.file;

//     const folder = req.body.folder;

//     folder.replace(/[\_]/g,'/')

//     console.log("Folder" , folder);

//     file.mv(`${__dirname}/reactapp/public/uploads/${file.name}`, err => {
//         if(err){
//             console.error(err);
//             return res.status(500).send(err);
//         }

//         res.json({fileName: file.name, filepath: `uploads/${file.name}`});

//         ffmpeg(`${__dirname}/reactapp/public/uploads/${file.name}`).output(`${folder}/output.m3u8`).on('end', () => {
//                 console.log('end');
//                 let result = {"data" : "Conversion Completed!!!!"}
//                 console.log(JSON.stringify(result));
//         }).run();
        
//     })

  
// })

//app.listen(port, () => console.log("server started ...."));

app.listen(process.env.PORT || port);