const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
      title: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],

  shippingAddress: {
    fullName: String,
    phone: String,
    house: String,
    city: String,
    state: String,
    pincode: String,
    country: {
      type: String,
      default: "India"
    }
  },

  paymentMethod: {
    type: String,
    enum: ["COD", "UPI", "Card"],
    default: "COD"
  },

  paymentResult: {
    transactionId: String,
    status: String,
    paidAt: Date
  },

  itemsPrice: Number,
  shippingPrice: Number,
  taxPrice: Number,
  totalPrice: Number,

  orderStatus: {
    type: String,
    enum: [
      "Pending",
      "Confirmed",
      "Shipped",
      "Out for Delivery",
      "Delivered",
      "Cancelled"
    ],
    default: "Pending"
  },

  isPaid: {
    type: Boolean,
    default: false
  },

  paidAt: Date,

  deliveredAt: Date
}, { timestamps: true });
