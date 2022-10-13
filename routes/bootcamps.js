
const express=require('express');
const router=express.Router();

const {getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp}=require('../controller/bootcamps')

router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)


//WE CAN DO THIS ALSO 
// router.get('/',(req,res)=>{
//     res.status(200).json({staus: 'success',msg:'Show All Bootcamps'})

// })

// router.get('/:id',(req,res)=>{
// res.status(200).json({staus: 'success',msg:`Show Bootcamp ${req.params.id}`})

// })

// router.post('',(req,res)=>{
//     res.status(200).json({staus: 'success',msg:'Create new bootcamps'})

// })
 
// router.put('/:id',(req,res)=>{
// res.status(200).json({staus: 'success',msg:`Update Bootcamp ${req.params.id}`})

// })

// router.delete('/:id',(req,res)=>{
// res.status(200).json({staus: 'success',msg:`Delete Bootcamp ${req.params.id}`})
// })


module.exports=router