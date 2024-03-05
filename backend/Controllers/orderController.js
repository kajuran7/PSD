import asynchandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc Create new order
// route POST /api/order/createorder

// @access Public

const createorder = asynchandler(async (req, res) => {
  const { DesignName, DesignPrice, Designsize, Designsheetsize, Designcategory, DesignID } = req.body;
  const order = await Order.create({
    DesignName, DesignPrice, Designsize, Designsheetsize, Designcategory, DesignID
  });
  if (order) {
    res.status(201).json(order);
  } else {
    res.status(400);
    throw new Error('Invalid  data');
  }
});






// @desc Get a single order by ID
// route GET /api/order/ id
// @access Public


const getOrderById = asynchandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Design not found');
  }

});

// get all products by filetring, sorting, limiting, pagination
const getAllOrders = asynchandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));
    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }
    // limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }
    // pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      // if (skip >= productCount) throw new Error("This Page does not exists");
      if (skip >= productCount) {
        throw new Error("This Page does not exist");
      }
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






export { createorder, getOrderById, getAllOrders };