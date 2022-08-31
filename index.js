const express = require("express");
const routes = require("./routes/api/v1/images");
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
)
app.use("/api/v1", routes);

app.listen(3000, () => {
  console.log(`Server Started al ${3000}`);
});
