let c=() => {
    let i = document.getElementById("in").value;
    if (parseInt(i) > 15) {
        alert("Baggage is overweight")
    }
}

let findSum = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert(sum);
}