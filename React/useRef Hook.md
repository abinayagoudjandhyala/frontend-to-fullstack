
## 📌 React `useRef` Hook – Notes

### 🔹 What is `useRef`?

`useRef` is a React Hook used to **store a value or DOM reference** that **does not cause re-render** when it changes.

---

### 🔹 Syntax

```jsx
const ref = useRef(initialValue);
```

* Value is accessed using `ref.current`
* Value remains same across renders

---

### 🔹 Key Points

* Changing `ref.current` ❌ does NOT re-render component
* Value is **mutable**
* Useful for **DOM access** and **persistent values**

---

### 🔹 Example (DOM Access)

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />
```

---

### 🔹 Example (Store Value)

```jsx
const countRef = useRef(0);
countRef.current += 1;
```

---

### 🔹 `useRef` vs `useState`

| useState         | useRef                   |
| ---------------- | ------------------------ |
| Causes re-render | No re-render             |
| Used for UI data | Used for background data |
| Immutable update | Mutable value            |

---

### 🔹 Common Use Cases

* Focus input field
* Scroll to element
* Store previous value
* Timers / intervals

---

### 🔹 When to Use

Use `useRef` when you want React to **remember something without updating the UI**.

---

### 🔹 One-Line Summary

`useRef` stores values or DOM references **without triggering re-render**.

