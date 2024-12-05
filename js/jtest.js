let nb = 1 
while (nb < 100) {
    console.log(nb)
    nb = nb + 1
    if (nb % 3 == 0) {
        console.log("Fizz")
    }
    if (nb % 5 == 0) {
        console.log("Buzz")
    }
    if (nb % 3 == 0 && nb % 5 == 0) {
        console.log("FizzBuzz")
    }
}


