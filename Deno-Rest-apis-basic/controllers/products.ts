// Importing uuid standard lib
import { v4 } from "https://deno.land/std/uuid/mod.ts";
// Importing Product interface
import { Product } from "../types.ts";

// hard-coded values for the products
let products: Product[] = [
  {
    id: "1",
    name: "product one",
    description: "This is Product one",
    price: 29.99,
  },
  {
    id: "2",
    name: "product two",
    description: "This is Product two",
    price: 39.99,
  },
  {
    id: "3",
    name: "product three",
    description: "This is Product three",
    price: 49.99,
  },
  {
    id: "4",
    name: "product four",
    description: "This is Product four",
    price: 59.99,
  },
];

//* Creating Controller Function for Product resource *//

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc    Get a product
// @route   GET /api/v1/product/:id
const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  // Since we are using hard-coded values we operate on high order function
  // * we are comparing the products id value with passed parmas id values and checking it should match with our interface or undefined *//
  const product: Product | undefined = products.find((p) => p.id === params.id);
  // some basic validation
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Product not found",
    };
  }
};
// @desc    Add a product
// @route   POST /api/v1/product
const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  // Yes we are async because this method is not no longer in global scope/top level
  // Getting the request body from the client
  const body = await request.body();
  // basic validation
  if (!request.hasBody) {
    response.status = 400,
      response.body = {
        success: false,
        msg: "No proper data from client",
      };
  } else {
    const product: Product = body.value;
    // whenever we add a new data to product array we are genrating unique id for
    product.id = v4.generate(); // adding a uuid
    // pushing a new product in products array
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

// @desc    Update a product
// @route   PUT /api/v1/product/:id
const updateProduct = async (
  // Yes we are async because this method is not no longer in global scope/top level
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  // some basic validation
  if (product) {
    const body = await request.body();
    const updateData: { name?: string; description?: string; price?: number } =
      body.value;
    // we are comparing the product id when matched we are updating that product for matched id using spread operator
    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    ); // ternary operator dont get overwhelmed
    response.status = 200;
    response.body = {
      success: true,
      data: updateData,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Product not found",
    };
  }
};
// @desc    Delete a product
// @route   DELETE /api/v1/product/:id
const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  // we will filter method we are compare with ids will filter out the passed id
  products = products.filter((p) => p.id !== params.id);
  response.status = 200;
  response.body = {
    success: true,
    msg: "Product removed",
    data: products,
  };
};
export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
