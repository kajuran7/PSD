import mongoose from "mongoose";
// import Design from "./designModel";

const orderSchema =  mongoose.Schema({
    DesignName: {
        required: true, 
        type: String
    },
    DesignID: {
        required: true,
        type: String 
    },
      DesignPrice: {
        type: Number, 
        required: true,
      },
     
        Designsize:{
          type:String,
          required: true,
        },
        Designsheetsize:
        {
          type:String,
          required: true,
        },
    
        Designcategory: {
          type: String,
          required:true,
                 
      },
    
},
{
    timestamps: true,
    type: Date,
    default: Date.now
})
const Order = mongoose.model('order', orderSchema);
export default Order;