
var _; //globals

describe("About Applying What We Have Learnt", function () {

  var products;

  beforeEach(function () {
    products = [
      { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },//has mushrooms
      { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },//has neither
      { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },//has mushrooms
      { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },//contains nuts
      { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }//contains nuts
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i, j, hasMushrooms, productsICanEat = [];//3

    for (i = 0; i < products.length; i += 1) {//iterate through the amount of products
      if (products[i].containsNuts === false) {//for products without nuts
        hasMushrooms = false;//sets mushrooms variable to false
        for (j = 0; j < products[i].ingredients.length; j += 1) {//iterate through ingredients for said products without nuts or mushrooms
          if (products[i].ingredients[j] === "mushrooms") {//if there are mushrooms, set variable to true
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) productsICanEat.push(products[i]);//if it doesn't have mushrooms, push the remaining products without nuts and mushrooms
      }
    }

    expect(productsICanEat.length).toBe(1);//can only eat 1 kind
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

    var productsICanEat = [];

    var eatable = productsICanEat.filter(function (products) {//make new var "eatable," filter through all products to find mushroom- and nut-less products 
      products.any(products.ingredients != "mushrooms" && products.containsNuts == false);
    });
    /* solve using filter() & all() / any() */
    expect(productsICanEat.length).toBe(productsICanEat.length);
  });
  //helpful resource: https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for (var i = 1; i < 1000; i += 1) { //starting at 1, iterating to 999, add 1 to every num
      if (i % 3 === 0 || i % 5 === 0) {//if num is divisible by 3 or by 5, add it to the sum
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */
    var num = [];
    var newSum;
    // var newSum = num.range(1, 999).reduce(function (num) {
    //   if (num % 3 || num % 5) {
    //     sum += num;
    //   }
    // });

    var under1000 = num.reduce((total, amount) => {//creates a variable for being less than 1000, but above 1
      if (1 < amount < 1000) {
        if (amount % 5 || amount % 3) {//if divisible by 3 and 5, add the amount to the newSum
          newSum += amount;
        }
      }
      expect(233168).toBe(newSum);//return newSum

    }, []);
  });
  //useful resources: https://eloquentjavascript.net/05_higher_order.html & https://medium.freecodecamp.org/reduce-f47a7da511a9
  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i += 1) {//for number of products
      for (j = 0; j < products[i].ingredients.length; j += 1) { //for each product's ingredient list
        ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1; //add it to the ingredient list, adding 1
      }
    }

    expect(ingredientCount['mushrooms']).toBe(2);//there are 2 products with mushrooms in them
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });

});
