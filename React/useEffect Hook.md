
## 📌 React `useEffect` Hook – Notes

### 🔹 What is `useEffect`?

`useEffect` is a React Hook used to **run side effects** in a functional component.

Side effects include:

* Fetching data
* Updating document title
* Timers
* Subscriptions

---

### 🔹 Syntax

```jsx
useEffect(() => {
  // side effect code
}, [dependencies]);
```

---

### 🔹 How `useEffect` Works

* Runs **after the component renders**
* Runs again when **dependencies change**
* Can also run **only once** or **on every render**

---

### 🔹 Common Usage Patterns

#### 1️⃣ Run on every render

```jsx
useEffect(() => {
  console.log("Component rendered");
});
```

---

#### 2️⃣ Run only once (on mount)

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

#### 3️⃣ Run when state/props change

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

### 🔹 Cleanup Function

Used to clean resources like:

* Timers
* Event listeners
* Subscriptions

```jsx
useEffect(() => {
  return () => {
    console.log("Cleanup");
  };
}, []);
```

---

### 🔹 Important Points

* `useEffect` replaces lifecycle methods
* Dependency array controls when effect runs
* Cleanup runs **before re-render** or **on unmount**

---

### 🔹 `useEffect` + `useState`

```jsx
useEffect(() => {
  setTitle(`Count: ${count}`);
}, [count]);
```

---

### 🔹 Common Use Cases

* API calls
* Timer / interval
* DOM updates
* Event listeners

---

### 🔹 One-Line Summary

`useEffect` is used to **perform actions after render** in React components.

