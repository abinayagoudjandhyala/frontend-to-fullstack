
## 📌 React `useState` Hook – Short Notes

### 🔹 What is `useState`?

`useState` is a **React Hook** that lets us **store and update data (state)** inside a functional component.

---

### 🔹 Why do we need `useState`?

* To handle **dynamic data**
* To update UI when data changes
* To manage values like **count, input text, toggle, etc.**

---

### 🔹 Syntax

```jsx
const [state, setState] = useState(initialValue);
```

* `state` → current value
* `setState` → function to update value
* `initialValue` → starting value

---

### 🔹 Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

---

### 🔹 How it works

1. Component renders with initial value
2. Button click updates state using `setCount()`
3. React **re-renders** the component
4. Updated value appears on UI

---

### 🔹 Important Points

* State updates are **asynchronous**
* Never update state directly (`count = count + 1 ❌`)
* Always use setter function (`setCount()` ✅)
* Each state is **independent**

---

### 🔹 Common Use Cases

* Counter
* Form inputs
* Toggle (dark/light mode)
* Show/Hide elements

---

### 🔹 One-Line Summary

`useState` helps React components **remember and update values**.

