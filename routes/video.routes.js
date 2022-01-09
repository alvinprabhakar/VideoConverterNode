const {uploadVideo}  = require("../services/video.services");



const route = require('express').Router();



route.get("/",uploadVideo);




module.exports = route;