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

let f4 = (a, b, l) => {
    let numbers = l.split(",");
    let sum = 0;
    numbers.forEach((n) => {
        if (n % parseInt(a) === 0 || n % parseInt(b) === 0) {
            sum += parseInt(n);
        }
    });
    return sum;
}

let ex4 = () => {
    let a = document.getElementById('a1').value;
    let b = document.getElementById('b1').value;
    let l = document.getElementById('l').value;
    let multiples = [a, b];
    let numbers = l.split(",");

    // let sum = f4(a, b, l);
    let sum = f6(multiples, numbers);
    alert(sum);
}

let f6 = (multiples, numbers) => {
    return numbers.filter( (x) => multiples.some( multiple => x % multiple === 0))
                  .reduce( (acc, x) => acc + x, 0);
}

let ex5 = () => {
    let a = document.getElementById('a2').value;
    let l = document.getElementById('l2').value;
    let multiples = a.split(",");
    let numbers = l.split(",");
    let sum = f6(multiples, numbers);
    alert(sum);
}