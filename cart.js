///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((sum, addend) => sum + addend.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  const subTotal = cartTotal * (1 + tax) - couponValue;
  const roundedTotal = Math.round(subTotal * 100) / 100;
  return roundedTotal;
};
console.log(calcFinalPrice(32.96, 5, 0.07));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Customer Information:
    * Identidy Information
        - firstName
        - lastName
    * Location Information
        - address
        - city
        - zipCode
        - state
    * Contact Information
        - email
        - cell phone
    * History
        - pastOrders

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customerList = [
  {
    identity: {
      firstName: "Matthew",
      lastName: "Smith",
    },
    location: {
      address: `127 N Washington`,
      city: `Springfield`,
      zipCode: `49431`,
      state: `PA`,
    },
    contact: {
      email: `m.smith@gmail.com`,
      cellPhone: `784-983-5628`,
    },
    history: [
      [
        `2023/04/12`,
        {
          name: "pizza",
          price: 9.99,
        },
        {
          name: "pasta",
          price: 8.99,
        },
      ],
      [
        `2023/05/23`,
        {
          name: "pizza",
          price: 9.99,
        },
      ],
    ],
  },
  {
    identity: {
      firstName: "John",
      lastName: "Appleseed",
    },
    location: {
      address: `4683 E 23rd Ave.  Apt. 23`,
      city: `Springfield`,
      zipCode: `49432`,
      state: `PA`,
    },
    contact: {
      email: `john.boy@hotmail.com`,
      cellPhone: `784-983-8743`,
    },
    history: [
      [
        `2023/02/16`,
        {
          name: "pizza",
          price: 9.99,
        },
        {
          name: "salad",
          price: 7.99,
        },
      ],
      [
        `2023/04/09`,
        {
          name: "pizza",
          price: 9.99,
        },
      ],
      [
        `2023/06/03`,
        {
          name: "pizza",
          price: 9.99,
        },
        {
          name: "pizza",
          price: 9.99,
        },
        {
          name: "salad",
          price: 7.99,
        },
      ],
    ],
  },
];

console.log(
  customerList.filter((customer) => customer.identity.lastName === `Appleseed`)
);
console.log(customerList[1].history);

/// So I used to work at Domino's Pizza as a delivery driver, and running this code in the terminal reminds me very much of their ancient interface; standing there, taking order over the phone, staring at a dos-looking screen.  pleasant memories.  :-)
