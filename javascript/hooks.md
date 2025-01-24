### **1. `memo`**

- `memo` is a higher-order component that prevents unnecessary re-renders of a component by memoizing the component’s output based on props.

  **Snippet:**
  ```jsx
  const Child = React.memo(({ value }) => {
    return <div>{value}</div>;
  });
  ```
  `React.memo` ensures that the `Child` component will only re-render when its props (`value`) change. Even if the parent re-renders, `Child` will skip re-rendering if the props are the same, improving performance.

---

### **2. `useMemo`**

- `useMemo` memoizes the result of an expensive computation, preventing it from being recalculated on every render unless its dependencies change.

  **Snippet:**
  ```jsx
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);
  ```
  `useMemo` is useful for optimizing expensive calculations. Here, `expensiveComputation` is only called when `count` changes. Without `useMemo`, the computation would run on every render, even if `count` hasn't changed.

---

### **3. `useCallback`**

- `useCallback` memoizes a function to prevent its recreation on every render unless its dependencies change.

  **Snippet (with dependencies):**
  ```jsx
  const handleClick = useCallback(() => {
    console.log("Clicked, count:", count);
  }, [count]);
  ```
  `useCallback` ensures that the `handleClick` function is only recreated when the `count` dependency changes. This is useful when the function is passed to child components and you don't want them to re-render unless necessary.

  **Snippet (without dependencies):**
  ```jsx
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);
  ```
  In this case, `handleClick` is created once and will not be recreated on subsequent renders because the dependency array is empty. This can be useful when the function does not rely on any state or props that change frequently.

---

Great! Here are some questions to check your understanding of `memo`, `useMemo`, and `useCallback`:

1. **What does `memo` do in React?**
2. **When would you use `useMemo` instead of `useCallback`?**
3. **What would happen if you don't pass any dependencies to `useCallback`?**
4. **Can `useMemo` help with optimizing components that are re-rendering too often? How?**
5. **If a component's props don't change, will `memo` help with re-renders when state inside the component changes?**

Let me know your answers!
