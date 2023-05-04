const express = require("express");
const app = express();

app.get("/", (req, res) => res.send(
  `<http>
     <head>
     </head>
       <body>
       <h1>Otters Frolicing</h1>
       </body>
  </html>`
));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});