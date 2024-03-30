// Day-4 Task :-

// print odd numbers

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = arr.filter(item => item % 2 !== 0);

oddNumbers.forEach(number => console.log(number));

// convert all the string of array in Capitalize

const letters = ["work out","up look","black mail"],
const titleCase = arr =>{
    return arr.map((string)=>{
        return string.split('').map(word =>{
            return word.charAt(0).toUppercase()+word.slice(1);
        
        }).join('');

    });
};
const titlecaseArray = titleCase(letters);
console.log(titlecaseArray);

// sum of all numbers in array

let num = [20,30,40,50];
let sumNum = num.reduce((x,y) => x+y);
console.log(sumNum);


// prime numbers

const findPrimes = limit => {
    const primes = [];
  
    const isPrime = num => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };
  
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    return primes;
  };
  
  // Example usage:
  const primeNumbers = findPrimes(50);
  console.log(primeNumbers); //
  

// palindrome 

const isPalindrome = str => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  };
  
  const findPalindromes = arr => arr.filter(isPalindrome);
  
  // Example usage:
  const words = ["level", "hello", "racecar", "noon", "apple"];
  const palindromes = findPalindromes(words);
  console.log(palindromes);
  
