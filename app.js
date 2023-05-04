const express = require("express");
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname,'public')) )

app.get("/", (req, res) => res.send(
  `<http>
     <head>
     <link rel='stylesheet'href='public/style.css'/>
     </head>
      <body>
      <img src="/public/logo.png">
        <h1>Otters Frolicing</h1>
        <img src="https://d1pk12b7bb81je.cloudfront.net/thumbor
        /o_AXALnWng1WxIa0JzIyx09nLzA=/full-fit-in/800x800
        /https://d1pk12b7bb81je.cloudfront.net/okdataengine/appmedia/images/69/69943/Sasquatch-forest.png">
      </body>
  </html>`
));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});