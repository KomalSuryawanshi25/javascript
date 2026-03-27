// product list

const products = [
  {id: 1,
    name:"Samsung Galaxy S26 Ultra",
    price:35000,
    category:"electronics",
    image:"https://www.geeky-gadgets.com/wp-content/uploads/2025/11/samsung-galaxy-s26-ultra-design-upgrade_optimized.jpg" 
    

  },

  {id: 2,
    name:"Laptop",
    category:"electronics",
    price:90000,
    image:"https://th.bing.com/th/id/OIP.szTL9IW7cWe7tR20hia7AwHaE8?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },



  {id: 3,
    name:"Kurtas",
    category:"fashion",
    price:1000,
    image:"https://tse2.mm.bing.net/th/id/OIP.et4OiHgaS8P8Vt_SQ4a7NQHaJ4?w=1080&h=1440&rs=1&pid=ImgDetMain&o=7&rm=3"},

  {id: 4,
    name:"Cook Book",
    category:"books",
    price:300,
    image:"https://tse2.mm.bing.net/th/id/OIP.V7OojGdcSUsgT8Yk0w7W-AHaL0?rs=1&pid=ImgDetMain&o=7&rm=3"},

  {id: 5,
    name:"Novel",
    category:"books",
    price:800,
    image:"https://tse4.mm.bing.net/th/id/OIP.DDgU-35DbfdKK8iAhETSVQHaIk?rs=1&pid=ImgDetMain&o=7&rm=3"},

  {id: 6,
    name:"Toy Car",
    category:"toys",
    price:500,
    image:"https://tse4.mm.bing.net/th/id/OIP.N9Qyo9pweP0ZhtmQay64qgHaG2?rs=1&pid=ImgDetMain&o=7&rm=3"},

  {id: 7,
    name:"Table Lamp",
    category:"home",
    price:40000,
    image:"https://i5.walmartimages.com/seo/Cinkeda-Modern-Table-Lamp-Set-of-2-for-Bedroom-Living-Room-with-USB-A-C-Ports-AC-Outlet-Gradient-Grey-Glass-Nightlight-Nightstand-Bedside-Lamps_67db5344-6a74-4a5a-93db-3d90a6882c0c.d5c2021820f2529074f231880651de1f.jpeg"
  },

  {id: 8,
    name:"Wall Clock",
    category:"home",
    price:1500,
    image:"https://images.eq3.com/product-definitions/cjuedn73z05650162zt3g6fu8/instance/cjv6ukkqm02p30118culhn925/THUMBNAIL/4ad0d9c2-7dc6-40cc-9a61-df08bcce4e0e.jpg"},

  {id: 9,
    name:"Jeans",
    category:"fashion",
    price:2000,
    image:"https://tse2.mm.bing.net/th/id/OIP.hCi62tERshxeyDUiwkpdQQHaJ4?pid=ImgDet&w=190&h=253&c=7&dpr=1.3&o=7&rm=3"},

  {id: 10,
    name:"Car",
    category:"toys",
    price:1200,
    image:"https://th.bing.com/th/id/OIP.iuF8z8Jvg_vZKpxn1LagwwHaE7?w=272&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"},

  {id: 11,
    name:"Foundation",
    category:"beauty",
    price:50000,
    image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/foundation-1656605946.jpg"}, 

  {id: 12,
    name:"Smart Watch",
    category:"electronics",
    price:50000,
    image:"https://m.media-amazon.com/images/I/71KjTSO8M9L._SL1500_.jpg"}, 

  {id: 13,
    name:"Lipstick",
    category:"beauty",
    price:900,
    image:"https://th.bing.com/th/id/OIP.iXFylwAieN3VmPQaXdILBwHaE8?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"}, 

  {id: 14,
    name:"Self Improvement Books",
    category:"books",
    price:3000,
    image:"https://editrepublic.com/wp-content/uploads/2023/06/Self-Improvement-Books-2022-Post.jpg"}, 


    {id: 15,
    name:"Atomic Habits",
    category:"books",
    price:250,
    image:"https://m.media-amazon.com/images/I/81F90H7hnML.jpg"},

  {id: 16,
    name:"Tops",
    category:"fashion",
    price:1200,
    image:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/29726008/2024/5/23/a5c2bbe8-1677-447f-9dc9-698ade6540ad1716443543531KALINIPrintEthnicCottonTieredTop1.jpg"},

  {id: 17,
    name:"Decore",
    category:"home",
    price:8000,
    image:"https://img.houseui.com/media/blog-thumbnail/Wall_Decor_Ideas.jpg/"},
    
    {id:18,
      name:"Golden Hour Combo ",
      category:"beauty",
      price:6000,
      image:"https://th.bing.com/th/id/R.dc2bc5792cc1429a6e49a88e8e30817e?rik=HP3%2fXlM5AalgDA&riu=http%3a%2f%2fgoldenhourbotanicals.com%2fcdn%2fshop%2fcollections%2fGoldenhour_Lifestyle_Collection_Hi-Res_008.jpg%3fv%3d1674253511&ehk=oTFncUQc282a8Bt8vDCX1z%2fqf1lCxrQddCWH%2bxjJRJQ%3d&risl=&pid=ImgRaw&r=0"
    },

    {id:19,
      name:"Dot & key Combo ",
      category:"beauty",
      price:1485,
    image:"https://www.dotandkey.com/cdn/shop/files/2_0610d2be-ad52-401e-a398-4369ebd33852.jpg?v=1710313688"
   },


   {id: 20,
    name:"Teddy Bear",
    category:"toys",
    price:850,
    image:"https://tse3.mm.bing.net/th/id/OIP.iIOzMK-pZ5ricXtDF6Z4iwHaIq?w=2020&h=2364&rs=1&pid=ImgDetMain&o=7&rm=3"},

    {id: 21,
    name:"Building Blocks",
    category:"toys",
    price:850,
    image:"https://tse4.mm.bing.net/th/id/OIP.9VJuwchsluuMczXTeYWfjQHaHa?w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3"},


     {id: 22,
    name:"Realme Earbuds",
    category:"electronics",
    price:3560,

    image:"https://m.media-amazon.com/images/I/61kDfm8FD7L.jpg"},



 {id: 23,
    name:"Pink Lehenga",
    category:"fashion",
    price:6850,
    image:"https://tse4.mm.bing.net/th/id/OIP.aXDD7OSSe0sJA2hDOpPbSwHaKf?pid=ImgDet&w=187&h=265&c=7&dpr=1.3&o=7&rm=3"
 },

 {id: 24,
    name:"Wall Decore",
    category:"home",
    price:6850,
    image:"https://www.urbanwood.in/image/cache/catalog/decor/jordan/teak/1-1920x1340.jpg"
 },

];



function goToBeauty() {
  categoryFilter.value = "beauty";
  const beautyProducts = products.filter(p => p.category === "beauty");
   displayProducts(beautyProducts);
     document.getElementById("productList").scrollIntoView({
    behavior: "smooth"
  });
}


function goToFashion() {
  categoryFilter.value = "fashion";
  const beautyProducts = products.filter(p => p.category === "fashion");
   displayProducts(beautyProducts);
     document.getElementById("productList").scrollIntoView({
    behavior: "smooth"
  });
}


function goToBooks() {
  categoryFilter.value = "books";
  const beautyProducts = products.filter(p => p.category === "books");
   displayProducts(beautyProducts);
     document.getElementById("productList").scrollIntoView({
    behavior: "smooth"
  });
}








let cart = [];


const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const searchInput = document.getElementById("searchInput");


// display products

function displayProducts(list) {

  productList.innerHTML = "";

  list.forEach( p => {
    productList.innerHTML +=
   `<div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" >
   <div class="card h-100  shadow-sm ">
   <img src="${p.image}" class="card-img-top" alt="${p.name}">
   <div class="card-body d-flex flex-column p-4">
   <h5 class="card-title"> ${p.name}</h5>
   <p class="fw-bold">₹${p.price}</p>
     <button class="btn btn-warning  w-100 mt-auto" onclick="addToCart(${p.id})">Add to Cart</button>
     </div>
     </div>
     </div>
     `;
  });
}
displayProducts(products);

// add to cart 

function addToCart(id) {
const product = products.find(p => p.id === id);
const existing = cart.find(item =>item.id === id );

if(existing) {
  existing.quantity++;
}else{
  cart.push({...product ,quantity:1});
  alert("Item Added to Cart")
}
updateCart();
}


// remove from cart

 function removeFromCart(index) {
       cart.splice(index, 1);
       updateCart();
    }


//  Update Cart Display
function updateCart() {
  cartItems.innerHTML = "";

  if(cart.length === 0) {
    alert("Cart is Empty")
  }

let total = 0;
let CartQuantity = 0;



  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    CartQuantity += item.quantity;

    cartItems.innerHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
//  cart alert

    if(cart.length === 0) {
  cartItems.innerHTML = "<p class='text-center fw-bold '>Cart is Empty</p>";
  
}
  });
  cartTotal.textContent = total;

  // cart count


  document.getElementById("cartButton").innerHTML = `🛒 cart <span class="badge bg-danger">${CartQuantity}</span>
`;}

//  Filter, Sort, Search
function filterAndSort() {
  
  let filtered = [...products];

  // Filter category
  const category = categoryFilter.value;
  if (category !== "all") filtered = filtered.filter(p => p.category === category);

  // Search
  
  const search = searchInput.value.toLowerCase();
  filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

  // Sort
  const sort = sortFilter.value;
  if (sort === "name") filtered.sort((a,b) => a.name.localeCompare(b.name));
  if (sort === "price") filtered.sort((a,b) => a.price - b.price);

  displayProducts(filtered);
}

//  Event Listeners
categoryFilter.addEventListener("change", filterAndSort);
sortFilter.addEventListener("change", filterAndSort);
searchInput.addEventListener("input", filterAndSort);

// Initial Display
displayProducts(products);
