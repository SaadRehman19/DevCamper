const Bootcamp = require("../Models/Bootcamps");

//@desc  GET ALL BOOTCAMPS
//@route GET  /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({ staus: "success",count: bootcamp.length, data: bootcamp });
  } catch (error) {
    res.status(400).json({ staus: "error" });
  }
};

//@desc  GET SINGLE BOOTCAMPS
//@route GET  /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
  try {
  const bootcamp =await Bootcamp.findById(req.params.id);
  
  if(!bootcamp){
    res.status(400).json({staus: 'error'})
  }
  
  res.status(200).json({staus: 'success',data: bootcamp})
  
  
  } catch (error) {
      next(error);
      // res.status(400).json({staus: 'error'})
  }
};

//@desc  CREATE BOOTCAMP
//@route POST  /api/v1/bootcamps/
//@access Private
exports.createBootcamp = async (req, res, next) => {
  // console.log(req.body)
  // Bootcamp.Create(req.body).then().then()...
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ staus: "success", data: bootcamp });
  } catch (error) {
    res.status(400).json({ staus: "error" });
  }
};

//@desc  Update BOOTCAMP
//@route PUT  /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp =async (req, res, next) => {

    try {
    const bootcamp =await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
    
    });
    
    if(!bootcamp) {
        res.status(400).json({status:error})
    }
    
    res
    .status(200)
    .json({ staus: "success", data: bootcamp});
        
    } catch (error) {
    res.status(400).json({ staus: "error" });
        
    }

 
};

//@desc  DELETE BOOTCAMP
//@route DELETE  /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp =async(req, res, next) => {
    try {
        const bootcamp =await Bootcamp.findByIdAndDelete(req.params.id,{
            new:true,
            runValidators:true,
        
        });
        
        if(!bootcamp) {
            res.status(400).json({status:error})
        }
        
        res
        .status(200)
        .json({ staus: "success", data: {}});
            
        } catch (error) {
        res.status(400).json({ staus: "error" });
            
        }
};
