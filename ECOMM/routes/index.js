var express = require('express');
var router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const sections = [
  {
    title: "Digital Content & Devices",
    items: ["Amazon Music", "Kindle E Readers and Books", "Amazon Appstore"],
    showLinks: false
  },
  {
    title: "Shop By Departments",
    items: ["Electronics", "Computer", "Smart Home", "Arts and Crafts"],
    showLinks: false
  },
  {
    title: "Programs & Features",
    items: ["Gift Cards", "Shop By Interest", "Amazon Live", "International Shopping"],
    seeall: "See All",
    dynamicLinks: ["Exchange Offer", "Diwali Special", "Cheap Products"], // Add dynamic links
    showLinks: false // Add a flag to control link visibility
  }
];
let item;
const productdetails = [{
  title: "Gaming Accesories",
  imageurl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg",
  more: "See more"
},
{
  title: "Home & Kitchen Under $30",
  imageurl: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_758x608_2X_en_US._SY608_CB609304299_.jpg",
  more: "Shop More"
},
{
  title: "Sportswear",
  imageurl: "https://m.media-amazon.com/images/I/61o01QVYTCL._AC_UY879_.jpg",
  more: "See More"
},
{
  title: "Electronics",
  imageurl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg",
  more: "See details"
}
]
/* GET home page. */
router.get('/', async function (req, res, next) {
  const options = ["All", "Arts and Crafts", "Kids", "Women", "Men Fashion", "Electronics", "Automotive", "Girl's", "Baby", "Luggage", "Home and Kitchen", "Digital Music", "Deals", "Moviea and TV", "Music, CD's and Vinyls", "Pet Supplies", "Video Games", "Toys and Games", "Sports and Outdoors", "Industrial and Scientific", "Softwares", "Health and Household"]
 
  const midimages = [
    {
      image: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
    },
    {
      image: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
    },
    {
      image: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
    },
    {
      image: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
    },
    {
      image: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
    }
  ]
const headings=["Frequent repurchased product","Top Branded Products","Mobile and Laptops","Fragrances","Skin Care","Groceries","Home Decoration"]
  try {
    // Fetch data from the API
    var response = await fetch('https://fakestoreapi.com/products');
    var data = await response.json();
    var response1 = await fetch('https://dummyjson.com/products');
  var data1 = await response1.json();

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
  res.render("index", { sections, midimages, options,productdetails,item: data,headings,item1:data1.products });
});
router.get("/dynamic-route/:link", function (req, res) {
  const link = req.params.link;
  const dynamicLinks = sections[2].dynamicLinks;

  if (dynamicLinks.includes(link)) {
    res.send(`You clicked on link: ${link}`);
  } else {
    res.status(404).send("Not Found"); 
  }
});
router.get('/products/:title', async function(req, res) {
  try {
    const requestedTitle = req.params.title;
    const products = await productdetailsfn();
    
    // Debug statement to log the requested title
    console.log('Requested Title:', requestedTitle);

    // Debug statement to log all product titles in the data
    const productTitles = products.map(product => product.title);
    console.log('All Product Titles:', productTitles);

    let foundProduct = null;

    for (const product of products) {
      if (product.title === requestedTitle) {
        foundProduct = product;
        break; // Exit the loop once a match is found
      }
    }

    if (foundProduct) {
      // Display the product details if found
      const productDetailsHTML = `<h2>${foundProduct.title}</h2>`;
      res.send(productDetailsHTML);
    } else {
      res.send(`<h2>Product not found: ${requestedTitle}</h2>`);
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send(error);
  }
});



async function productdetailsfn() {
  try {
    // Fetch data from the first API
    const response1 = await fetch('https://fakestoreapi.com/products');
    const data1 = await response1.json();

    // Fetch data from the second API
    const response2 = await fetch('https://dummyjson.com/products');
    const data2 = await response2.json();

    // Combine data from both APIs into a single array
    return [...data1, ...data2.products];
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}

module.exports = router;