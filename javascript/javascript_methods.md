### JavaScript Essentials

### Common List Methods

```javascript
// Array
const arr = [1, 2, 3, 4, 5];

// Sort array
const nums = [3, 1, 4, 1, 5];
nums.sort(); // [1, 1, 3, 4, 5]

// Sort numbers
nums.sort((a, b) => a - b);

// Add to end
arr.push(6, 7);

// Remove last
arr.pop();

// Add to start
arr.unshift(0);

// Remove first
arr.shift();

// Splice array
arr.splice(2, 1, 'a', 'b');

// Slice array
const sliced = arr.slice(1, 4);

// Merge arrays
const merged = arr.concat([8, 9]);

// Reverse array
arr.reverse();

// Map array
const mapped = arr.map(x => x * 2);

// Filter array
const filtered = arr.filter(x => x > 2);

// Find first > 3
const firstElement = nums.find(n => n > 3);

// Find index > 3
const firstIndex = nums.findIndex(n => n > 3);

// Find last < 4
const findLast = nums.findLast(n => n < 4);

// Find last index < 4
const findLastIndex = nums.findLastIndex(n => n < 4);

// Loop through array
arr.forEach(x => console.log(x));

// Check any even
const hasEven = arr.some(x => x % 2 === 0);

// Check all even
const allEven = arr.every(x => x % 2 === 0);

// Reduce array to sum
const sum = arr.reduce((acc, curr) => acc + curr, 0);

// Flatten array
const nested = [1, [2, [3, 4]]];
const flat = nested.flat(2);
```

### Common String Methods

```javascript
// String
const str = 'Hello, World!';

// Length
const len = str.length;

// Uppercase
const upper = str.toUpperCase();

// Lowercase
const lower = str.toLowerCase();

// Find substring index
const index = str.indexOf('World');

// Contains substring
const contains = str.includes('Hello');

// Substring
const sub = str.slice(7, 12);

// Replace substring
const replaced = str.replace('World', 'JavaScript');

// Split string
const split = str.split(', ');

// Trim string
const trimmed = '  Hello  '.trim();

// Repeat string
const repeated = 'abc'.repeat(3);

// Starts with
const startsWith = str.startsWith('Hello');

// Ends with
const endsWith = str.endsWith('!');

// Get character
const char = str.charAt(1);

// Get ASCII code
const code = str.charCodeAt(1);
```

### Regex Shorthands Examples

```javascript
// \d - Digits
const s1 = '123 abc 456';
const res1 = s1.replace(/\d+/g, '#');
console.log(res1); // '# abc #'

// \D - Non-digits
const s2 = '123 abc 456';
const res2 = s2.replace(/\D+/g, '*');
console.log(res2); // '***'

// \w - Word chars
const s3 = 'Hello_123!';
const res3 = s3.replace(/\w+/g, '#');
console.log(res3); // '#_#!'

// \W - Non-word chars
const s4 = 'Hello_123!';
const res4 = s4.replace(/\W+/g, '*');
console.log(res4); // 'Hello*123*'

// \s - Whitespace
const s5 = 'Hello\tWorld\nWelcome';
const res5 = s5.replace(/\s+/g, '-');
console.log(res5); // 'Hello-World-Welcome'

// \S - Non-whitespace
const s6 = 'Hello\tWorld\nWelcome';
const res6 = s6.replace(/\S+/g, '#');
console.log(res6); // '#\t#\n#'
```

### Common `Map` Methods

```javascript
// Map
const map = new Map([['k1', 'v1'], ['k2', 'v2']]);

// Add/update entry
map.set('k3', 'v3');

// Get value
const v = map.get('k1');

// Key exists?
const exists = map.has('k2');

// Delete entry
map.delete('k1');

// Clear map
map.clear();

// Map size
const size = map.size;

// Loop keys
for (const k of map.keys()) {
  console.log(k);
}

// Loop values
for (const v of map.values()) {
  console.log(v);
}

// Loop entries
for (const [k, v] of map.entries()) {
  console.log(k, v);
}

// ForEach in map
map.forEach((v, k) => {
  console.log(k, v);
});
```

### Common `Set` Methods

```javascript
// Set
const set = new Set([1, 2, 3, 4]);

// Add value
set.add(5);

// Check value
const exists = set.has(2);

// Delete value
set.delete(3);

// Clear set
set.clear();

// Set size
const size = set.size;

// Loop values
for (const v of set) {
  console.log(v);
}

// ForEach in set
set.forEach(v => {
  console.log(v);
});
```

### Common Math Methods

```javascript
// Absolute value
const abs = Math.abs(-5);

// Round
const round = Math.round(4.7);

// Round down
const floor = Math.floor(4.7);

// Round up
const ceil = Math.ceil(4.1);

// Max
const max = Math.max(1, 2, 3, 4, 5);

// Min
const min = Math.min(1, 2, 3, 4, 5);

// Power
const pow = Math.pow(2, 3);

// Square root
const sqrt = Math.sqrt(16);

// Random number
const rand = Math.random();

// Sine
const sin = Math.sin(Math.PI / 2);

// Cosine
const cos = Math.cos(0);

// Tangent
const tan = Math.tan(Math.PI / 4);

// Natural log
const log = Math.log(10);

// Log base 10
const log10 = Math.log10(100);

// Exponent
const exp = Math.exp(1);

// Pi value
const pi = Math.PI;

// Euler's number
const e = Math.E;
```

