let c=() => {
    let i = document.getElementById("in").value;
    if (parseInt(i) > 15) {
        alert("Baggage is overweight")
    }
}

let sumOfMultiplesof3or5Below1000 = () => {
    let sum = sumOfMultiplesOfAorBBelowN(3, 5, 1000);
    document.getElementById('rex2').value = sum;
}

let sumOfMultiplesOfAorBBelowN = (a, b, n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}

let findSum = () => {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let n = document.getElementById('n').value;

    let sum = sumOfMultiplesOfAorBBelowN(a, b, n);
    document.getElementById('rex3').value = sum;
}

let f4 = (a, b, l) => {
    // let multiples = [a, b];
    // return f6(multiples, l);
    let sum = 0;
    l.forEach((n) => {
        if (n % parseInt(a) === 0 || n % parseInt(b) === 0) {
            sum += parseInt(n);
        }
    });
    return sum;
}

let ex4 = () => {
    let a = document.getElementById('a1').value;
    let b = document.getElementById('b1').value;
    let l = document.getElementById('l').value.split(",");

    let sum = f4(a, b, l);
    document.getElementById('rex4').value = sum;
}

let f5 = (a, l) => {
    return l.filter( (x) => x % a[0] === 0 || x % a[1] === 0)
            .reduce( (acc, x) => acc + parseInt(x), 0);
}

let ex5 = () => {
    let multiples = document.getElementById('a2').value.split(",");
    let numbers = document.getElementById('l1').value.split(",");
    if (multiples.length != 2) {
        return;
    }
    // alert(f6(multiples, numbers));
    let sum = f5(multiples, numbers);
    document.getElementById('rex5').value = sum;
}

let f6 = (multiples, numbers) => {
    return numbers.filter( (x) => multiples.some( multiple => x % multiple === 0))
                  .reduce( (acc, x) => acc + parseInt(x), 0);
}

let ex6 = () => {
    let multiples = document.getElementById('a3').value.split(",");
    let numbers = document.getElementById('l3').value.split(",");
    let sum = f6(multiples, numbers);
    document.getElementById('rex6').value = sum;
}

// basket = {'egg':2, 'milk':1, 'apple':3}
// prices = {'apple':1.69, 'egg':1.03, 'milk':2.14}

let basket = {};
let prices = {};

let addProduct = () => {
    let productName = (document.getElementById("product").value).toLowerCase();
    let price = parseFloat(document.getElementById("price").value);
    prices[productName] = price;
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";

    let productHtml = "";
    for (let [obj, cost] in Object.entries(prices)) {
        productHtml += "<p>" + obj + ": €" + cost + "<p> <br>";
    }
    document.getElementById("product-container").innerHTML = productHtml;
}

let addToCart = () => {
    let productBought = (document.getElementById("productBought").value).toLowerCase();
    let quantity = parseInt(document.getElementById("quantity").value);
    if (prices[productBought] === undefined) {
        alert(productBought + " not in stock");
        return;
    }
    basket[productBought] = quantity;
    document.getElementById("productBought").value = "";
    document.getElementById("quantity").value = 0;
}

let f7 = (cart, inventory) => {

    let cost = 0;
    for (let product in cart) {
        if (inventory[product] !== undefined) {
            cost += (cart[product] * inventory[product]);
        }
    }
    return cost;
}

let calculate = () => {
    document.getElementById('totalPrice').value = f7(basket, prices);
}