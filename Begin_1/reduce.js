const arr = [1,2,3,4,5,6,7,8,9]

//const total = arr.reduce( function (accumulator, currentValue){  return  accumulator+=currentValue;}, 0);

//console.log(total);

const total = arr.reduce(  (accumulator, currentValue) =>   accumulator+=currentValue, 0);

//console.log(total);

var shoppingCart = [
    {
      product: "T-shirt",
      color: "Red",
      size: "Medium",
      price: 19.99,
      quantity: 2
    },
    {
      product: "Jeans",
      color: "Blue",
      size: "32x32",
      price: 39.99,
      quantity: 1
    },
    {
      product: "Sneakers",
      color: "White",
      size: "10",
      price: 49.99,
      quantity: 1
    },
    {
      product: "Backpack",
      color: "Black",
      size: "One Size",
      price: 29.99,
      quantity: 1
    },
    {
      product: "Watch",
      color: "Silver",
      size: "One Size",
      price: 79.99,
      quantity: 1
    }
    // Add more objects as needed
  ];

  
  let totalValue  = shoppingCart.reduce( (acc,curr) => acc + curr.price , 0)

  console.log(totalValue);