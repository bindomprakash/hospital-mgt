import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "./public")
        },
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    })
  })

export { upload };


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/temp')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// export const upload = multer({ storage: storage })