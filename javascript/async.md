## Callbacks, Promises, async await
- `async`/`await` avoids the nested, complex structure of callbacks (callback hell), making the code more linear and easier to read.

- With `async`/`await`, you can use `try`/`catch` for error handling, which is cleaner and more intuitive compared to handling errors through callback parameters.

### **Callback Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => callback(null, 'Data fetched'), 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
```

### **Promise Example:**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

### **Async/Await Example:**

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
}

async function process() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

process();
```

- **Callbacks**: Manage asynchronous operations but can lead to deeply nested code.

- **Promises**: Provide a more manageable way to handle asynchronous operations, with chaining and error handling.

- **Async/Await**: Simplifies asynchronous code further by making it appear synchronous, improving readability and ease of error handling. It is built on top of promises and provides a cleaner syntax for handling asynchronous tasks.

## Non blocking
- await pauses the execution of the async function where it is used, but other code (other fns) can still run while waiting for fetchData to resolve.
- JavaScript runtime is not blocked by await; it’s only the async function that is paused.