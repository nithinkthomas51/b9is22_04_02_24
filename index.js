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