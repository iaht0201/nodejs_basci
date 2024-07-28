const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Đảm bảo biến môi trường được tải trước khi kết nối

mongoose.set('strictQuery', true);

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Tăng thời gian chờ kết nối lên 30 giây nếu cần
    });
    console.log('Kết nối đến cơ sở dữ liệu thành công');
  } catch (error) {
    console.error('Lỗi kết nối đến cơ sở dữ liệu', error);
  }
}

module.exports = { connectToDatabase };
