### JavaScript Essentials

### Common List Methods

```javascript
// Create an array
const array = [1, 2, 3, 4, 5];

// Sort elements in place
const arr = [3, 1, 4, 1, 5];
arr.sort(); // [1, 1, 3, 4, 5]

// Add elements to the end
array.push(6, 7);

// Remove the last element
array.pop();

// Add elements to the beginning
array.unshift(0);

// Remove the first element
array.shift();

// Remove and/or add elements at a specific index
array.splice(2, 1, 'a', 'b'); // Removes 1 element at index 2 and adds 'a' and 'b'

// Create a shallow copy of a portion of the array
const sliced = array.slice(1, 4); // [2, 'a', 'b']

// Merge arrays into a new array
const merged = array.concat([8, 9]);

// Reverse the order of elements
array.reverse();

// Create a new array with the results of calling a function on each element
const mapped = array.map(x => x * 2); // Doubles each element

// Create a new array with elements that pass a test
const filtered = array.filter(x => x > 2); // Elements greater than 2

// Execute a function on each element
array.forEach(x => console.log(x));

// Check if at least one element passes the test
const hasEven = array.some(x => x % 2 === 0);

// Check if all elements pass the test
const allEven = array.every(x => x % 2 === 0);

// Reduce the array to a single value
const sum = array.reduce((acc, curr) => acc + curr, 0); // Sum of all elements

// Flatten nested arrays
const nested = [1, [2, [3, 4]]];
const flat = nested.flat(2); // [1, 2, 3, 4]
```

### Common String Methods

```javascript
// Create a string
const str = 'Hello, World!';

// Get the length of the string
const length = str.length;

// Convert to uppercase
const upper = str.toUpperCase(); // 'HELLO, WORLD!'

// Convert to lowercase
const lower = str.toLowerCase(); // 'hello, world!'

// Find the index of a substring
const index = str.indexOf('World'); // 7

// Check if a substring exists
const contains = str.includes('Hello'); // true

// Extract a substring
const substring = str.slice(7, 12); // 'World'

// Replace a substring with another string
const replaced = str.replace('World', 'JavaScript'); // 'Hello, JavaScript!'

// Split the string into an array of substrings
const split = str.split(', '); // ['Hello', 'World!']

// Trim whitespace from both ends
const trimmed = '  Hello  '.trim(); // 'Hello'

// Repeat the string multiple times
const repeated = 'abc'.repeat(3); // 'abcabcabc'

// Check if the string starts with a substring
const startsWith = str.startsWith('Hello'); // true

// Check if the string ends with a substring
const endsWith = str.endsWith('!'); // true

// Extract characters from the string
const charAt = str.charAt(1); // 'e'
```

### Regex Shorthands Examples

```javascript
// \d - Matches any digit (same as [0-9])
const str1 = '123 abc 456';
const result1 = str1.replace(/\d+/g, '#');
console.log(result1); // '# abc #'

// \D - Matches any non-digit
const str2 = '123 abc 456';
const result2 = str2.replace(/\D+/g, '*');
console.log(result2); // '***'

// \w - Matches any word character (same as [a-zA-Z0-9_])
const str3 = 'Hello_123!';
const result3 = str3.replace(/\w+/g, '#');
console.log(result3); // '#_#!'

// \W - Matches any non-word character
const str4 = 'Hello_123!';
const result4 = str4.replace(/\W+/g, '*');
console.log(result4); // 'Hello*123*'

// \s - Matches any whitespace character (same as [ \t\n\r\f\v])
const str5 = 'Hello\tWorld\nWelcome';
const result5 = str5.replace(/\s+/g, '-');
console.log(result5); // 'Hello-World-Welcome'

// \S - Matches any non-whitespace character
const str6 = 'Hello\tWorld\nWelcome';
const result6 = str6.replace(/\S+/g, '#');
console.log(result6); // '#\t#\n#'
```
### Common `Map` Methods

```javascript
// Create a new Map
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

// Add or update an entry
map.set('key3', 'value3');

// Retrieve a value by key
const value = map.get('key1'); // 'value1'

// Check if a key exists
const exists = map.has('key2'); // true

// Remove an entry by key
map.delete('key1');

// Remove all entries
map.clear();

// Get the number of entries
const size = map.size;

// Iterate over keys
for (const key of map.keys()) {
  console.log(key);
}

// Iterate over values
for (const value of map.values()) {
  console.log(value);
}

// Iterate over [key, value] pairs
for (const [key, value] of map.entries()) {
  console.log(key, value);
}

// Execute a function for each [key, value] pair
map.forEach((value, key) => {
  console.log(key, value);
});
```

### Common `Set` Methods

```javascript
// Create a new Set
const set = new Set([1, 2, 3, 4]);

// Add a new value
set.add(5);

// Check if a value exists
const exists = set.has(2); // true

// Remove a value
set.delete(3);

// Remove all values
set.clear();

// Get the number of values
const size = set.size;

// Iterate over values
for (const value of set) {
  console.log(value);
}

// Execute a function for each value
set.forEach(value => {
  console.log(value);
});
```

### Common Math Methods

```javascript
// Absolute value
const abs = Math.abs(-5); // 5

// Rounding to the nearest integer
const round = Math.round(4.7); // 5

// Rounding down to the nearest integer
const floor = Math.floor(4.7); // 4

// Rounding up to the nearest integer
const ceil = Math.ceil(4.1); // 5

// Maximum of a set of numbers
const max = Math.max(1, 2, 3, 4, 5); // 5

// Minimum of a set of numbers
const min = Math.min(1, 2, 3, 4, 5); // 1

// Power of a number
const power = Math.pow(2, 3); // 8

// Square root of a number
const sqrt = Math.sqrt(16); // 4

// Random number between 0 (inclusive) and 1 (exclusive)
const random = Math.random(); // e.g., 0.123456789

// Trigonometric functions
const sin = Math.sin(Math.PI / 2); // 1 (sine of 90 degrees)
const cos = Math.cos(0); // 1 (cosine of 0 degrees)
const tan = Math.tan(Math.PI / 4); // 1 (tangent of 45 degrees)

// Natural logarithm (base e)
const log = Math.log(10); // 2.302585092994046

// Logarithm base 10
const log10 = Math.log10(100); // 2

// Exponential function
const exp = Math.exp(1); // 2.718281828459045 (e)

// Value of π (pi)
const pi = Math.PI; // 3.141592653589793

// Value of e (Euler's number)
const e = Math.E; // 2.718281828459045
```