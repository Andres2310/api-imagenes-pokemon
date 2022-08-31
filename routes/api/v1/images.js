const express = require("express");
const router = express.Router();



router.get("/pokemon/:name?",(req,res)=>{
  if(req.params.name===undefined){
    res.status(500).json({
      message:"Pokemon not inserted"
    })
}else{
  res.status(200).json({
    message: "todo OK",
  })
}
})

router.get("/pokemon/:name/:imageType?", (req, res) => {

  if (req.params.imageType === "front_default" ||req.params.imageType === undefined) {
    res.status(200).json({
      message: "default",
    });
  } else if (req.params.imageType === "front_shinny") {
    res.status(200).json({
      message: "shinny",
    });
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
});

module.exports = router;
