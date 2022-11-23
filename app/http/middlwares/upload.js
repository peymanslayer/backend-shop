var multer  = require('multer');
const path=__dirname+"../../../upload/"
console.log(path);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        // console.log(file);
        cb(null, Date.now()+'-'+file.originalname);
    },
    
});

const upload = multer({ storage }).single('avatar');
module.exports={
    uploadMidllware:async (req,res,next)=>{
    upload(req,res,function(err){
        if(req.file){
           next()
        }else{
            res.send('is exist')
        }
    })
    },
    updateImage:async(req,res,next)=>{
        upload(req,res,function(err){
            if(err){
                res.status(400).json(err)
            }else if(!req.file){
                res.status(400).json({
                    massage:'image not exist'
                })
            }else{
                next()
            }
        })
    }
}