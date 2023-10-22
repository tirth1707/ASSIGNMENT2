function reverseString() {
    var inpStr = document.getElementById("inpStr").value;
    var revStr = inpStr.split("").reverse().join("");
    document.getElementById("outpStr").textContent =
      "Reversed String: " + revStr;
  }

  function palindrome() {
    var palin = document.getElementById("inp").value;
    var revInp = palin.split("").reverse().join("");
    var isPalindrome = palin === revInp;
    document.getElementById("outp").textContent =
      "Is The Entered Value Palindrome? : " + isPalindrome;
  }

  function totalBill() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tipPer = parseFloat(document.getElementById("tip").value);

    if (!isNaN(subtotal) && !isNaN(tipPer)) {
      var tipAmount = (subtotal * tipPer) / 100;
      var totalAmount = subtotal + tipAmount;

      document.getElementById("total").textContent =
        "Total Amount with " + tipPer + "% tip: " + totalAmount.toFixed(2);
    } else {
      document.getElementById("total").textContent =
        "Please enter valid numbers.";
    }
  }