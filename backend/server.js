const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000; // Chọn một cổng tuỳ ý

// Kết nối đến MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Sử dụng middleware
app.use(cors());
app.use(bodyParser.json());

// Định nghĩa mô hình dữ liệu cho người dùng
const User = mongoose.model('User', {
  fullName: String,
  birthDate: Date,
  username: String,
  password: String,
  email: String,
});

// Đăng ký tài khoản
app.post('/register', async (req, res) => {
        try {
            const { fullName, birthDate, username, password, email } = req.body;
            //Hash mật khẩu sử dụng bcrypt
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ fullName, birthDate, username, password: hashedPassword, email });;
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).send(error);
        }
    console.log(req.body);
});


app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Tìm kiếm người dùng với tên đăng nhập
    const user = await User.findOne({ username });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});


// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
