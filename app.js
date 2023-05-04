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
      </body>
  </html>`
));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});