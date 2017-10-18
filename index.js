const csvToArr = require('csv-to-array');
const fs = require('fs');
const columns = ['band', 'video'];

csvToArr(
  {
    columns,
    file: './list.csv',
  },
  function (err, arr) {
    fs.writeFile(
      './tweets',
      arr
      .map(
        (obj, i) => `${i + 1}. ${obj.band} ${obj.video} #AlertaWAM2018 #WAM2018 @wammurcia`
      )
      .reduce(
        (prev, cur) => prev + `\n${cur}`, ''
      ),
      function (err) {
        if(err) {
          console.log(err);
        } else {
          console.log("The file was saved!");
        }
      }
    );
  }
);
