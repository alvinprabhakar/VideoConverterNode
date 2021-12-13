const Converter = require('../ffmpeg');

const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');


ffmpeg.setFfmpegPath(ffmpegInstaller.path);


const service = {

    uploadVideo(req,res){
        console.log("Node Post Called");
        if(req.files === undefined){
        return res.status(400).json({msg: 'No file Uploaded'})
        }
        const file = req.files.file;
        const folder = req.body.folder;
        folder.replace(/[\_]/g,'/')
        console.log("Folder" , folder , "File" , file);
        console.log(__dirname);
        file.mv(`${__dirname}/${file.name}`, err => {
            if(err){
                console.error(err);
                return res.status(500).send(err);
            }
            res.json({fileName: file.name, filepath: `uploads/${file.name}`});
            ffmpeg(`${__dirname}/${file.name}`).output(`${folder}/output.m3u8`).on('end', () => {
                    console.log('end');
                    let result = {"data" : "Conversion Completed!!!!"}
                    console.log(JSON.stringify(result));
            }).run();   
        })
    }
    }
  


module.exports = service;