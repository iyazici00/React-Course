// // server.cjs

// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const cors = require('cors');

// app.use(cors());

// const app = express();
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images'); // Dosyanın kaydedileceği konum
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname)); // Dosyanın yeni adı
//     },
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('image'), (req, res) => {
//     // Yükleme tamamlandığında yapılacak işlemler
//     res.json({ success: true });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
