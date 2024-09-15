## `fetch` API

The fetch API is a modern, promise-based way to make network requests in the browser. It replaces the older XMLHttpRequest and provides a more powerful and flexible feature set.

<!-- ### Key Features -->
- Promise-Based: Returns a Promise that resolves to the Response object representing the response to the request.

- Simpler Syntax: Provides a cleaner and more readable syntax compared to XMLHttpRequest.

- Better Error Handling: Allows for more straightforward error handling and chaining.

Using `async`/`await` with the `fetch` API simplifies the syntax and makes the code easier to read and maintain. Here’s how you can use `fetch` with `async`/`await`

### **1. Basic Fetch with `async`/`await`**

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json(); // Parsing JSON from the response
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### **2. POST Request with `async`/`await`**

```javascript
async function postData() {
  try {
    const response = await fetch('https://api.example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' }) // Sending JSON data
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();
```

### **3. Handling Multiple Fetches**

You can make multiple fetch requests sequentially using `async`/`await`:

```javascript
async function fetchMultiple() {
  try {
    const response1 = await fetch('https://api.example.com/data1');
    const data1 = await response1.json();
    console.log('Data 1:', data1);
    
    const response2 = await fetch('https://api.example.com/data2');
    const data2 = await response2.json();
    console.log('Data 2:', data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultiple();
```

### **4. Fetching with Error Handling**

Using `try`/`catch`, you can handle errors effectively with `async`/`await`:

```javascript
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchDataWithErrorHandling();
```

### **5. Parallel Fetch Requests with `Promise.all`**

To execute multiple fetch requests in parallel:

```javascript
async function fetchInParallel() {
  try {
    const [response1, response2] = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]);
    
    const data1 = await response1.json();
    const data2 = await response2.json();
    
    console.log('Data 1:', data1);
    console.log('Data 2:', data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchInParallel();
```

### **Summary**

- `async`/`await` makes asynchronous code look synchronous, enhancing readability.

- **Error Handling**: You can use `try`/`catch` to handle errors cleanly.

- **Multiple Fetches**: You can handle multiple sequential or parallel fetch requests using `async`/`await`.
