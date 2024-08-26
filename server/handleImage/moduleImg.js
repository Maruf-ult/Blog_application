import multer from 'multer';
import path from 'path';

// Set up storage engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './images');
  },
  filename: function(req, file, cb) {
   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' +uniqueSuffix+ path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({ storage: storage });

export default upload;