import express from 'express';   // light weight HTTP server
import path from 'path';     // path for reading the directory __dirname is the global variable of path
import open from 'open';     // launching file
import color from 'colors';   // color formating
import webpack from 'webpack';     // web pack for bundling
import config from '../webpack.config.dev';   // web pack configuraiton file


const port = 3000;      // port
const app = express( );
const compiler = webpack(config);

// integrate express with web pack
app.use(require('webpack-dev-middleware')(compiler,{
   noInfo: true,
   publicPath: config.output.publicPath
}));


//get method
app.get('/',function(req,res){

  res.sendFile(path.join(__dirname,'../src/index.html'));
});

//listening to the port
app.listen(port, function(err){
  if(err){
    console.log(color.bgGreen(err));
  }else{
    open('http://localhost:' + port);
  }
});
