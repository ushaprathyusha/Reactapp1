const razorpay = require("razorpay");
const Payment = require("../models/payment1Model");

const razorpayInstance = new razorpay({
  key_id: "rzp_test_7ffWepXdK0WViE",
  key_secret: "Wo5E8UZyqCuGvnnin5TOvSzI",
});

// Create an object to hold your controller functions
const paymentController = {
  // Handler for creating a payment order
  createOrder: async (req, res) => {
    const { totalAmount } = req.body;

    const options = {
      amount: totalAmount * 100, // Amount should be in paise (e.g., 100 INR should be 10000)
      currency: "INR",
    };

    try {
      const order = await razorpayInstance.orders.create(options);

      const payment = new Payment({
        orderId: order.id,
        amount: totalAmount,
      });

      await payment.save();

      res.json({ order });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Error creating order" });
    }
  },

  // Handler for fetching payment preferences
  getPaymentPreferences: async (req, res) => {
    const { order_id } = req.params;

    try {
      const encodedOrderID = encodeURIComponent(order_id);
      const response = await razorpayInstance.orders.fetch(encodedOrderID);
      console.log("Razorpay API response:", response); // Log the response
      res.json({ preferences: response });
    } catch (error) {
      console.error("Error fetching payment preferences:", error);
      res.status(500).json({ error: "Error fetching payment preferences" });
    }
  },
};

module.exports = paymentController;
