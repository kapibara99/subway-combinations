
const fs = require('fs');
//import glob from 'glob';
const request = require('request');
const path = require('path');
const {JSDOM} = require('jsdom');

const getHTMLData = (url,resultName) =>{
  return new Promise((resolve, reject)=>{
    request.get({
      uri: url,
      headers: {'Content-type': 'text/html;'},
    },(err, req, data) => {
      if(req.statusCode == 200){
        resolve(data)
        fs.writeFileSync(path.resolve(__dirname,`./result/${resultName}.html`), data);
      }
      console.log("complate:",url);
      resolve("");
    });
  })
}

const HTMLParsedJSON = (htmlText) =>{
  try{
    // options
    const dom = new JSDOM(htmlText,{
      runScripts: "dangerously",
      resources: "usable"
    });
    // get element info
    const text = dom.window.document.title;
    console.log(`text:`,text);
  }catch (e){
    // console.error(e)
  }
}

const puppeteer = require('puppeteer')


module.exports = {getHTMLData,HTMLParsedJSON};