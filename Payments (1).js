// const { instance } = require("../config/razorpay")
// const crypto = require("crypto")
// const User = require("../models/User")
// const mailSender = require("../utils/mailSender")
// const mongoose = require("mongoose")
// const {
//   itemboughtEmail,
// } = require("../mail/templates/courseEnrollmentEmail")
// const { paymentSuccessEmail } = require("../mail/templates/paymentSuccessEmail")



// exports.capturePayment = async (req, res) => {
//   const { items } = req.body
//   const userId = req.user.id
//   if (items.length === 0) {
//     return res.json({ success: false, message: "Please Provide Item ID" })
//   }

//   let total_amount = 0

//   for (const items_id of Item) {
//     let Item
//     try {
      
//       Item = await items.findById(Items_id)

      
//       if (!Item) {
//         return res
//           .status(200)
//           .json({ success: false, message: "Could not find the Item" })
//       }

      
//       const uid = new mongoose.Types.ObjectId(userId)
//       if (Item.users.Bought.includes(uid)) {
//         return res
//           .status(200)
//           .json({ success: false, message: "user has already Bought item" })
//       }

      
//       total_amount += Item.price
//     } catch (error) {
//       console.log(error)
//       return res.status(500).json({ success: false, message: error.message })
//     }
//   }

//   const options = {
//     amount: total_amount * 100,
//     currency: "INR",
//     receipt: Math.random(Date.now()).toString(),
//   }

//   try {
    
//     const paymentResponse = await instance.orders.create(options)
//     console.log(paymentResponse)
//     res.json({
//       success: true,
//       data: paymentResponse,
//     })
//   } catch (error) {
//     console.log(error)
//     res
//       .status(500)
//       .json({ success: false, message: "Could not initiate order." })
//   }
// }


// exports.verifyPayment = async (req, res) => {
//   const razorpay_order_id = req.body?.razorpay_order_id
//   const razorpay_payment_id = req.body?.razorpay_payment_id
//   const razorpay_signature = req.body?.razorpay_signature
//   const courses = req.body?.courses

//   const userId = req.user.id

//   if (
//     !razorpay_order_id ||
//     !razorpay_payment_id ||
//     !razorpay_signature ||
//     !courses ||
//     !userId
//   ) {
//     return res.status(200).json({ success: false, message: "Payment Failed" })
//   }

//   let body = razorpay_order_id + "|" + razorpay_payment_id

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_SECRET)
//     .update(body.toString())
//     .digest("hex")

//   if (expectedSignature === razorpay_signature) {
//     await boughtusers(Items, userId, res)
//     return res.status(200).json({ success: true, message: "Payment Verified" })
//   }

//   return res.status(200).json({ success: false, message: "Payment Failed" })
// }


// exports.sendPaymentSuccessEmail = async (req, res) => {
//   const { orderId, paymentId, amount } = req.body

//   const userId = req.user.id

//   if (!orderId || !paymentId || !amount || !userId) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Please provide all the details" })
//   }

//   try {
//     const BoughtUsers = await User.findById(userId)

//     await mailSender(
//       Boughtuser.email,
//       `Payment Received`,
//       paymentSuccessEmail(
//         `${Boughtuser.firstName} ${Boughtuser.lastName}`,
//         amount / 100,
//         orderId,
//         paymentId
//       )
//     )
//   } catch (error) {
//     console.log("error in sending mail", error)
//     return res
//       .status(400)
//       .json({ success: false, message: "Could not send email" })
//   }
// }


// const BoughtUser = async (Items, userId, res) => {
//   if (!Items || !userId) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Please Provide item ID and User ID" })
//   }

//   for (const ItemId of items) {
//     try {
      
//       const BoughtItem = await items.findOneAndUpdate(
//         { _id: itemId },
//         { $push: { BoughtItems: userId } },
//         { new: true }
//       )

//       if (!Boughtitems) {
//         return res
//           .status(500)
//           .json({ success: false, error: "Item not found" })
//       }
     
//       }
//       // Find the student and add the course to their list of enrolled courses
//       const BoughtUser = await User.findByIdAndUpdate(
//         userId,
//         {
//           $push: {
//             Items: ItemsId,
        
//           },
//         },
//         { new: true }
//       )

//       console.log("Bought user: ", BoughtUser)
     
//       const emailResponse = await mailSender(
//         Boughtstudent.email,
//         `Successfully Bought item into ${itembought.itemName}`,
//         itemboughttEmail(
//           BoughtItem.itemName,
//           `${boughtuser.firstName} ${boughtuser.lastName}`
//         )
//       )

//       console.log("Email sent successfully: ", emailResponse.response)
//     } catch (error) {
//       console.log(error)
//       return res.status(400).json({ success: false, error: error.message })
//     }
//   }
