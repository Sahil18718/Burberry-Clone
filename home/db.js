class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    checkout(paymentMethod) {
      const total = this.calculateTotal();
      console.log(`Total amount: $${total.toFixed(2)}`);
      console.log(`Payment method: ${paymentMethod}`);
      console.log('Order placed successfully!');
    }
  }
  
  const products = [
    new Product('T-shirt', 15.99),
    new Product('Jeans', 29.99),
    new Product('Shoes', 49.99),
    new Product('Hat', 9.99),
    // Add more products as needed
  ];
  
  const cart = new ShoppingCart();
  
  cart.addItem(products[0], 2);
  cart.addItem(products[2], 1);
  
  console.log('Items in cart:');
  for (const item of cart.items) {
    console.log(`${item.product.name} - Quantity: ${item.quantity}`);
  }
  
  const paymentMethod = 'Credit Card';
  cart.checkout(paymentMethod);
  


  class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, "Dog");
      this.breed = breed;
    }
  
    makeSound() {
      console.log(`${this.name} barks loudly! Woof woof!`);
    }
  
    fetch() {
      console.log(`${this.name} fetches the ball.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super(name, "Cat");
      this.color = color;
    }
  
    makeSound() {
      console.log(`${this.name} purrs softly.`);
    }
  
    nap() {
      console.log(`${this.name} takes a cozy nap.`);
    }
  }
  
  const dog1 = new Dog("Buddy", "Golden Retriever");
  const cat1 = new Cat("Whiskers", "Gray");
  
  const animals = [dog1, cat1];
  
  for (const animal of animals) {
    console.log(`Name: ${animal.name}, Species: ${animal.species}`);
    animal.makeSound();
    if (animal instanceof Dog) {
      animal.fetch();
    } else if (animal instanceof Cat) {
      animal.nap();
    }
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNum = getRandomNumber(1, 100);
  console.log(`Random number between 1 and 100: ${randomNum}`);
  
  const evenNumbers = [];
  for (let i = 2; i <= 100; i += 2) {
    evenNumbers.push(i);
  }
  
  console.log("Even numbers between 1 and 100:", evenNumbers);
  
  const oddNumbers = Array.from({ length: 50 }, (_, i) => i * 2 + 1);
  console.log("Odd numbers between 1 and 100:", oddNumbers);
  
  const filteredNumbers = evenNumbers.filter(num => num > 50);
  console.log("Even numbers greater than 50:", filteredNumbers);
  
  const sum = (arr) => arr.reduce((total, num) => total + num, 0);
  console.log("Sum of even numbers greater than 50:", sum(filteredNumbers));
  
  const doubledNumbers = filteredNumbers.map(num => num * 2);
  console.log("Doubled even numbers greater than 50:", doubledNumbers);
  
  const squaredNumbers = doubledNumbers.map(num => num ** 2);
  console.log("Squared even numbers greater than 50:", squaredNumbers);
  
  const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
  console.log("Programming languages:", languages);
  
  const languageLengths = languages.map(language => language.length);
  console.log("Length of each programming language:", languageLengths);
  
  const languageStats = languages.reduce((stats, language) => {
    const length = language.length;
    stats[language] = length;
    return stats;
  }, {});
  console.log("Programming language stats:", languageStats);
  
  const sortedLanguages = languages.sort();
  console.log("Sorted programming languages:", sortedLanguages);
  
  const reversedLanguages = languages.reverse();
  console.log("Reversed programming languages:", reversedLanguages);
  
  const joinedLanguages = languages.join(" | ");
  console.log("Joined programming languages:", joinedLanguages);
  
  const greeting = "Hello, world!";
  console.log("Length of greeting:", greeting.length);
  
  const uppercaseGreeting = greeting.toUpperCase();
  console.log("Uppercase greeting:", uppercaseGreeting);
  
  const lowercaseGreeting = greeting.toLowerCase();
  console.log("Lowercase greeting:", lowercaseGreeting);
  
  const substringGreeting = greeting.substring(7, 12);
  console.log("Substring of greeting:", substringGreeting);
  
  const replacedGreeting = greeting.replace("world", "Universe");
  console.log("Replaced greeting:", replacedGreeting);
  
  const numberString = "42";
  const parsedNumber = parseInt(numberString);
  console.log("Parsed number:", parsedNumber);
  
  const floatString = "3.14159";
  const parsedFloat = parseFloat(floatString);
  console.log("Parsed float:", parsedFloat);
  
  const currentDate = new Date();
  console.log("Current date:", currentDate);
  
  const year = currentDate.getFullYear();
  console.log("Current year:", year);
  
  const month = currentDate.getMonth();
  console.log("Current month (0-based):", month);
  
  const day = currentDate.getDate();
  console.log("Current day:", day);
  
  const hours = currentDate.getHours();
  console.log("Current hours:", hours);
  
  const minutes = currentDate.getMinutes();
  console.log("Current minutes:", minutes);
  
  const seconds = currentDate.getSeconds();
  console.log("Current seconds:", seconds);
  
  const milliseconds = currentDate.getMilliseconds();
  console.log("Current milliseconds:", milliseconds);
  
  const formattedDate = currentDate.toLocaleDateString();
  console.log("Formatted date:", formattedDate);
  
  const formattedTime = currentDate.toLocaleTimeString();
  console.log("Formatted time:", formattedTime);
  
  const formattedDateTime = currentDate.toLocaleString();
  console.log("Formatted date and time:", formattedDateTime);
  
  const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  console.log("Is 2023 a leap year?", isLeapYear(2023));
  
  
  
  const fibonacciSequence = fibonacci(10);
  console.log("Fibonacci sequence:", fibonacciSequence);
  
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  
  console.log("Is 17 a prime number?", isPrime(17));
  console.log("Is 25 a prime number?", isPrime(25));
  
  const filterPrimes = (arr) => arr.filter(isPrime);
  const primeNumbers = filterPrimes([...Array(100).keys()]);
  console.log("Prime numbers between 1 and 100:", primeNumbers);
  
  const reverseString = (str) => str.split("").reverse().join("");
  console.log("Reverse of 'JavaScript':", reverseString("JavaScript"));
  
  const titleCase = (str) => str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  console.log("Title case of 'hello world':", titleCase("hello world"));
  
  const countOccurrences = (str, char) => str.split(char).length - 1;
  console.log("Occurrences of 'a' in 'banana':", countOccurrences("banana", "a"));
  
  const uniqueArray = (arr) => [...new Set(arr)];
  const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  console.log("Unique elements:", uniqueArray(numbersWithDuplicates));
  
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  console.log("Range from 1 to 10:", range(1, 10));
  
  const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);
  console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
  
  const averageArray = (arr) => sumArray(arr) / arr.length;
  console.log("Average of [10, 20, 30, 40, 50]:", averageArray([10, 20, 30, 40, 50]));
  
  const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  console.log("Merged arrays:", mergeArrays(array1, array2));
  
  const flattenArray = (arr) => arr.reduce((flat, next) => flat.concat(next), []);
  const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log("Flattened array:", flattenArray(nestedArray));
  
  const countOccurrencesInArray = (arr) => {
    const count = {};
    for (const item of arr) {
      count[item] = (count[item] || 0) + 1;
    }
    return count;
  };
  
  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
  console.log("Occurrences of fruits:", countOccurrencesInArray(fruits));
  
  const swapVariables = (a, b) => {
    [a, b] = [b, a];
    return [a, b];
  };
  
  let x = 5;
  let y = 10;
  console.log("Before swap:", "x =", x, "y =", y);
  [x, y] = swapVariables(x, y);
  console.log("After swap:", "x =", x, "y =", y);
  
  const findLongestWord = (str) => str.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
  console.log("Longest word in 'the quick brown fox jumps over the lazy dog':", findLongestWord("the quick brown fox jumps over the lazy dog"));
  
  const isPalindrome = (str) => str === reverseString(str);
  console.log("'racecar' is a palindrome:", isPalindrome("racecar"));
  console.log("'hello' is a palindrome:", isPalindrome("hello"));
  
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  console.log("Capitalized 'javascript':", capitalize("javascript"));
  
  const repeatString = (str, times) => str.repeat(times);
  console.log("Repeat 'hello' 3 times:", repeatString("hello", 3));
  
  const isAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
  console.log("'listen' and 'silent' are anagrams:", isAnagram("listen", "silent"));
  console.log("'hello' and 'world' are anagrams:", isAnagram("hello", "world"));
  
  const removeDuplicates = (arr) => [...new Set(arr)];
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  console.log("Array with duplicates:", arrayWithDuplicates);
  console.log("Array with duplicates removed:", removeDuplicates(arrayWithDuplicates));
  
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };
  
  const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Original array:", longArray);
  console.log("Chunked array (size 3):", chunkArray(longArray, 3));
  
  const findMissingNumber = (arr, n) => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((total, num) => total + num, 0);
    return expectedSum - actualSum;
  };
  
  const numbersWithMissing = [1, 2, 3, 4, 6, 7, 8, 9, 10];
  console.log("Missing number:", findMissingNumber(numbersWithMissing, 10));
  
  const bubbleSort = (arr) => {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
  
  const unsortedArray = [5, 2, 9, 1, 5, 6];
  console.log("Unsorted array:", unsortedArray);
  console.log("Sorted array (bubble sort):", bubbleSort(unsortedArray.slice()));
  
  const selectionSort = (arr) => {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  };
  
  console.log("Unsorted array:", unsortedArray);
  console.log("Sorted array (selection sort):", selectionSort(unsortedArray.slice()));
  
  const insertionSort = (arr) => {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
      const current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  };
  
  console.log("Unsorted array:", unsortedArray);
  console.log("Sorted array (insertion sort):", insertionSort(unsortedArray.slice()));
  
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  };
  

console.log("Unsorted array:", unsortedArray);
console.log("Sorted array (merge sort):", mergeSort(unsortedArray.slice()));

const quickSort = (arr) => {
if (arr.length <= 1) return arr;
const pivot = arr[arr.length - 1];
const left = [];
const right = [];
for (let i = 0; i < arr.length - 1; i++) {
if (arr[i] < pivot) {
  left.push(arr[i]);
} else {
  right.push(arr[i]);
}
}
return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log("Unsorted array:", unsortedArray);
console.log("Sorted array (quick sort):", quickSort(unsortedArray.slice()));

class Student {
constructor(name, age, grade) {
this.name = name;
this.age = age;
this.grade = grade;
}

displayInfo() {
console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
}
}

const student1 = new Student("Alice", 16, "A");
const student2 = new Student("Bob", 17, "B");
const student3 = new Student("Eve", 18, "A");

const studentList = [student1, student2, student3];

console.log("Student List:");
for (const student of studentList) {
student.displayInfo();
}

const isAdult = (student) => student.age >= 18;

console.log("Are all students adults?", studentList.every(isAdult));
console.log("Is at least one student an adult?", studentList.some(isAdult));

const adultStudents = studentList.filter(isAdult);
console.log("Adult Students:");
for (const student of adultStudents) {
student.displayInfo();
}

const totalStudentAge = studentList.reduce((total, student) => total + student.age, 0);
console.log("Total age of all students:", totalStudentAge);

const averageStudentAge = totalStudentAge / studentList.length;
console.log("Average age of students:", averageStudentAge);

const studentNames = studentList.map(student => student.name);
console.log("Names of students:", studentNames);

const studentAges = studentList.map(student => student.age);
console.log("Ages of students:", studentAges);

const studentGrades = studentList.map(student => student.grade);
console.log("Grades of students:", studentGrades);

class Shape {
constructor(type) {
this.type = type;
}

describe() {
console.log(`This is a ${this.type}.`);
}
}

class Circle extends Shape {
constructor(radius) {
super("Circle");
this.radius = radius;
}

area() {
return Math.PI * this.radius ** 2;
}

circumference() {
return 2 * Math.PI * this.radius;
}
}

class Rectangle extends Shape {
constructor(width, height) {
super("Rectangle");
this.width = width;
this.height = height;
}

area() {
return this.width * this.height;
}

perimeter() {
return 2 * (this.width + this.height);
}
}

const circle = new Circle(5);
console.log("Circle:");
circle.describe();
console.log("Area:", circle.area());
console.log("Circumference:", circle.circumference());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle:");
rectangle.describe();
console.log("Area:", rectangle.area());
console.log("Perimeter:", rectangle.perimeter());

const power = (base, exponent) => base ** exponent;
console.log("2^5 =", power(2, 5));

const factorial = (n) => {
if (n <= 1) return 1;
return n * factorial(n - 1);
};

console.log("Factorial of 5:", factorial(5));

const fibonacci = (n) => {
if (n <= 0) return [];
if (n === 1) return [0];
if (n === 2) return [0, 1];
const sequence = [0, 1];
for (let i = 2; i < n; i++) {
sequence.push(sequence[i - 1] + sequence[i - 2]);
}
return sequence;
};

console.log("Fibonacci sequence of length 10:", fibonacci(10));

const flattenDeep = (arr) => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flattenDeep(next) : next), []);
const deepArray = [1, [2, [3, [4, 5]]], 6, [7, 8]];
console.log("Deep array:", deepArray);
console.log("Flattened deep array:", flattenDeep(deepArray));

class Timer {
constructor() {
this.startTime = new Date();
}

getElapsedTime() {
const currentTime = new Date();
return currentTime - this.startTime;
}
}

const timer = new Timer();

setTimeout(() => {
console.log("Time elapsed:", timer.getElapsedTime(), "ms");
}, 2000);

const promisify = (func) => {
return (...args) => {
return new Promise((resolve, reject) => {
  func(...args, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
};
};

const readFile = promisify(fs.readFile);

readFile("example.txt", "utf8")
.then((data) => {
console.log("File content:", data);
})
.catch((err) => {
console.error("Error reading file:", err);
});

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
(async () => {
console.log("Start");
await wait(2000);
console.log("After 2 seconds");
await wait(1000);
console.log("After another 1 second");
})();

console.log("End");
