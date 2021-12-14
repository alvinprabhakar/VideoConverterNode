const {uploadVideo}  = require("../services/video.services");



const route = require('express').Router();



route.post("/",uploadVideo);




module.exports = route;