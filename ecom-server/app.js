const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); 

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: 'Config/.env' }); 


const app = express();

app.use(cors()); 

mongoose.connect('mongodb://127.0.0.1:27017/onlineshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(bodyParser.json());
const cartRoutes = require('./routes/CartRoutes');
const addressRoutes = require("./routes/addressRoutes");
const authRoutes = require('./routes/authRoutes');
const forgotPasswordRoutes = require("./routes/forgotPasswordRoutes");
const PaymentRoutes = require("./routes/paymentRoutes");
const payment1Routes = require("./routes/payment1Routes");
const productRoutes = require('./routes/productRoutes');
const productFormRoutes = require("./routes/productFormRoutes");
const productFormBeRoutes = require('./routes/productFormBeRoutes');
const productListRoutes = require('./routes/productListRoutes');
const reviewRoutes = require('./routes/productReviewsRoutes');
const profileRoutes = require('./routes/profileRoutes');
const RegisterRoutes = require('./routes/RegisterRoutes');
const searchRoutes = require('./routes/searchRoutes');



app.use(express.json());
app.use('/cart', cartRoutes);
app.use("/address", addressRoutes);
app.use("/", forgotPasswordRoutes);
app.use('/', authRoutes);
app.use('/payment', PaymentRoutes);
app.use("/payment1", payment1Routes);
app.use('/product', productRoutes);
app.use("/productFormRoutes", productFormRoutes);
app.use('/productFormBeRoutes', productFormBeRoutes);
app.use('/productListRoutes', productListRoutes);
app.use('/reviewRoutes', reviewRoutes);
app.use('/profile', profileRoutes);
app.use('/Register', RegisterRoutes);
app.use('/search', searchRoutes);


const PORT =5009
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
