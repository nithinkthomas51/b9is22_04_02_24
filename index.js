let c=() => {
    let i = document.getElementById("in").value;
    if (parseInt(i) > 15) {
        alert("Baggage is overweight")
    }
}

let sumOfMultiplesof3or5Below1000 = () => {
    let sum = sumOfMultiplesOfAorBBelowN(3, 5, 1000);
    alert(sum);
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
    alert(sum);
}

function f4(a, b, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum = sum + parseInt(l[i]);
        }
    }
    return sum;

}

let ex4 = () => {
    let a = parseInt(document.getElementById('a1').value);
    let b = parseInt(document.getElementById('b1').value);
    let l = document.getElementById('l').value.split(",");

    let sum = f4(a, b, l);
    alert(sum);
}

let f5 = (multiples, numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % multiples[0] === 0 || numbers[i] % multiples[1] === 0) {
            sum = sum + parseInt(numbers[i]);
        }
    }
    return sum;
    // return numbers.filter( (x) => x % multiples[0] === 0 || x % multiples[1] === 0)
    //         .reduce( (acc, x) => acc + parseInt(x), 0);
}

let ex5 = () => {
    let multiples = document.getElementById('a2').value.split(",");
    let numbers = document.getElementById('l1').value.split(",");
    if (multiples.length != 2) {
        return;
    }
    // alert(f6(multiples, numbers));
    alert(f5(multiples, numbers));
}

let f6 = (multiples, numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < multiples.length; j++) {
            if (numbers[i] % multiples[j] === 0) {
                sum = sum + parseInt(numbers[i]);
                break;
            }
        }
    }
    return sum;
    // return numbers.filter( (x) => multiples.some( multiple => x % multiple === 0))
    //               .reduce( (acc, x) => acc + parseInt(x), 0);
}

let ex6 = () => {
    let multiples = document.getElementById('a3').value.split(",");
    let numbers = document.getElementById('l3').value.split(",");
    alert(f6(multiples, numbers));
}