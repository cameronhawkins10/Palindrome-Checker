const input = document.querySelector('#text-input');
 const result = document.getElementById('result');
 const check = document.querySelector('#check-btn')

const checkPalindrome = () => {
  const processedInput = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  if (processedInput === processedInput.split('').reverse().join('')) {
    result.innerText = `${input.value} is a palindrome`
} else {
  result.innerText = `${input.value} is not a palindrome`
}
}

const checkInput = () => {
  if (input.value === "") {
     alert("Please input a value")
  } else {
    checkPalindrome()
  }
}
check.addEventListener("click", checkInput)