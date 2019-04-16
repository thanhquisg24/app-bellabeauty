'use strict';
 
const fs = require('fs');
const postcss = require('postcss');
const combineSelectors = require('postcss-combine-duplicated-selectors');
const css = fs.readFileSync('./build/style.webpack.css');
var isMap = false; 
postcss([combineSelectors])
    .process(css, {from: './build/style.webpack.css', to: './build/style.post.css'})
    .then((result) => {
      fs.writeFileSync('./build/style.post.css', result.css);
      if (result.map) {
        fs.writeFileSync('./build/style.post.css.map', result.map);
        isMap = true;
      }
    });

    
postcss([combineSelectors({removeDuplicatedProperties: true})])
    .process(css, {from: './build/style.post.css', to: './build/style.mini.css'})
    .then((result) => {
      fs.writeFileSync('./build/style.mini.css', result.css);
     
      if (result.map) {
        fs.writeFileSync('./build/style.mini.css.map', result.map);
        
      }
    }).then((result) =>{
       //delete file
      fs.unlinkSync('./build/style.post.css');
      fs.unlinkSync('./build/style.webpack.css');
      if (isMap) {
        fs.unlinkSync('./build/style.post.css.map');
      }
    });
