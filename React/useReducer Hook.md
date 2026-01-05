
## 📌 React `useReducer` Hook – Notes

### 🔹 What is `useReducer`?

`useReducer` is a React Hook used to **manage complex state logic** using a **reducer function**.

It is an **alternative to `useState`** when state updates become hard to manage.

---

### 🔹 Why use `useReducer`?

* When state has **multiple values**
* When updates depend on **previous state**
* When logic needs to be **centralized**

---

### 🔹 Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* `state` → current state
* `dispatch` → function to send actions
* `reducer` → function that updates state
* `initialState` → starting state

---

### 🔹 Reducer Function

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}
```

---

### 🔹 Example

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </>
  );
}
```

---

### 🔹 How it Works

1. User triggers an action
2. `dispatch()` sends action
3. `reducer()` updates state
4. Component re-renders

---

### 🔹 `useState` vs `useReducer`

| useState      | useReducer          |
| ------------- | ------------------- |
| Simple state  | Complex state       |
| Direct update | Action-based update |
| Less logic    | Centralized logic   |

---

### 🔹 Common Use Cases

* Counters with multiple actions
* Form state handling
* Toggle systems
* State with multiple fields

---

### 🔹 Important Points

* Reducer must be **pure function**
* State should never be mutated
* Always return new state object

---

### 🔹 One-Line Summary

`useReducer` is used to manage **complex state logic** using actions and a reducer.
