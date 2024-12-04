function a() {
    if (document.getElementById("NtB").checked) {
        numberToBinary(prompt("Lütfen bir sayı giriniz."));
    } else if (document.getElementById("BtN").checked) {
        binaryToNumber(prompt("Lütfen bir sayı giriniz."));
    }
}


function numberToBinary(number) {
    var binary = "";
    while (true) {
        if (number == 1) {
            binary += 1;
            break;
        }
        binary += ((number % 2) + "");
        number = Math.floor(number / 2);
    }
    alert("Binary : " + reverse(binary));
}
function binaryToNumber(binary) {
    var reversedB = reverse(binary);
    var number = new Number();
    for (i = 0; i <= binary.length - 1; i++) {
        if (reversedB[i] == "1") {
            number += 2 ** i;
        }
        else {
            number += 0;
        }
    }
    alert("Number : " + number)
}
function reverse(number) {
    var newNumber = "";
    for (var i = (number + "").length - 1; i >= 0; i--) {
        newNumber += number[i];
    }
    return newNumber;
}