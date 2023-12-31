///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
  name: `Pizza`,
  price: 12.99,
  category: `Main Course`,
  popularity: 5,
  rating: 4,
  tags: [`family-friendly`, `finger-food`, `easy-to-deliver`],
};

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

const { price } = pizza;
console.log(price);

/*
Fourth, and last, destructure the category
property.

Print the value of your category variable. 
*/

//CODE HERE
console.log(pizza.category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
  {
    name: `large pizza`,
    price: 14.99,
    category: `main course`,
    popularity: 5,
    rating: 4,
    tags: [
      `kid-friendly`,
      `finger-food`,
      `easy-to-deliver`,
      `group meal`,
      `authentic-italian`,
      `american`,
    ],
  },
  {
    name: `garlic bread`,
    price: 4.99,
    category: `Side`,
    popularity: 5,
    rating: 4,
    tags: [
      `kid-friendly`,
      `finger-food`,
      `easy-to-deliver`,
      `authentic-italian`,
    ],
  },
  {
    name: `spagetti`,
    price: 7.99,
    category: `main course`,
    popularity: 4,
    rating: 4,
    tags: [`authentic-italian`],
  },
  {
    name: `pizza slice`,
    price: 6.99,
    category: `main course`,
    popularity: 4,
    rating: 4,
    tags: [
      `kid-friendly`,
      `finger-food`,
      `easy-to-deliver`,
      `authentic-italian`,
      `american`,
    ],
  },
  {
    name: `rigatoni`,
    price: 11.99,
    category: `main course`,
    popularity: 3,
    rating: 5,
    tags: [`authentic-italian`],
  },
  {
    name: `fettuccine`,
    price: 10.99,
    category: `main course`,
    popularity: 4,
    rating: 5,
    tags: [`authentic-italian`],
  },
  {
    name: `salad`,
    price: 4.99,
    category: `Side`,
    popularity: 3,
    rating: 3,
    tags: [`vegetarian`],
  },
  {
    name: `hamburger`,
    price: 7.99,
    category: `main course`,
    popularity: 3,
    rating: 4,
    tags: [`lunch`, `finger-food`],
  },
  {
    name: `cheese burger`,
    price: 9.99,
    category: `Main Course`,
    popularity: 3,
    rating: 3,
    tags: [`lunch`, `finger-food`],
  },
  {
    name: `hotdog`,
    price: 6.99,
    category: `main course`,
    popularity: 3,
    rating: 3,
    tags: [`kid-friendly`, `finger-food`, `easy-to-deliver`],
  },
  {
    name: `french fries`,
    price: 3.99,
    category: `side`,
    popularity: 4,
    rating: 3,
    tags: [`kid-friendly`, `finger-food`, `easy-to-deliver`],
  },
];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
const filterByTag = (tag) => foodArr.filter((food) => food.tags.includes(tag));
console.log(filterByTag("kid-friendly"));

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string // not a string, a number // (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
const filterByProperty = (property, number, type) => {
  let filteredArr = [];

  if (type === "below") {
    filteredArr = foodArr.filter((object) => object[property] < number);
  } else {
    filteredArr = foodArr.filter((object) => object[property] > number);
  }

  return filteredArr;
};

/*
Invoke the `filterByProperty` function passing
in a value for each paramter.

You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty(`popularity`, 4, `above`));
