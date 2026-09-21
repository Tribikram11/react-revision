# 🚀 React Revision & Mini-Projects Portfolio

Welcome to my React learning repository! This project collection tracks my step-by-step progress as I revise core React fundamentals and put advanced concepts into practice through hands-on mini-projects.

---

## 📚 Learning Objectives & Mastered Concepts

Through building these mini-projects, I have actively practiced and applied:

- **JSX & Conditional Rendering:** Avoiding common rendering traps (e.g., preventing stray falsy values like `0` with explicit boolean checks).
- **Props & Component Architecture:** Passing immutable data to children and composing UI using clear, decoupled component hierarchies.
- **Lists & Keys:** Mapping over arrays using `.map()` while ensuring every rendered item has a unique `key` prop for efficient DOM diffing.
- **Local Component State (`useState`):** Managing independent state per component instance (e.g., toggleable cards where one card's state doesn't leak into siblings).
- **Global State Management (`Context API`):** Eliminating prop drilling by creating centralized context providers (`createContext`, `useContext`) to share state across sibling components.
- **Custom Hooks (`useDebounce`):** Extracting reusable state logic to optimize expensive operations and improve UX during user inputs.
- **Performance Optimization (`useMemo`):** Memoizing expensive filtering computations so they only re-run when specific dependencies change.

---

## 🛠️ Featured Mini-Projects

### Project 1: Student Dashboard
A monitoring interface built to practice foundational React patterns: component composition, props, array mapping, and localized state isolation.

#### Key Features & Requirements
- **Dynamic Attendance Warnings:** Evaluates attendance percentage and highlights students below the 75% threshold without rendering stray falsy values.
- **Independent Card Expansion:** Each student card holds its own `useState`, ensuring that clicking "Expand" on one student card toggles details for that specific card without affecting others.
- **Calculated Summary Header:** Dynamically computes total student count and low-attendance alerts directly from data array transformations.

#### Concepts Applied
`Props` | `Conditional Rendering` | `List Mapping (.map)` | `Independent Component State`

---

### Project 2: Live Product Search & Cart
A small e-commerce interface demonstrating global state management, custom hook creation, and re-render optimization.

#### Key Features & Requirements
- **Global Cart Context (`CartContext`):** Wraps the app in a unified provider holding the cart item array and an `addItem` dispatch function.
- **Debounced Search (`useDebounce`):** Utilizes a custom hook to delay user input filtering by 400ms, ensuring smooth typing without continuous execution on every keystroke.
- **Memoized Product Filter (`useMemo`):** Efficiently filters hardcoded products using the debounced search query. (Check browser console for `filtering...` logs to verify execution timing!)
- **Sibling State Synchronization (`CartSummary` & `ProductList`):** Sibling components update seamlessly via shared Context subscription without passing props between each other.

#### Concepts Applied
`Context API` | `Custom Hooks` | `useMemo Optimization` | `Debouncing` | `Sibling Component Communication`

---

## 📂 Repository Structure

```text
src/
├── project1-student-dashboard/
│   ├── components/
│   │   ├── StudentCard.jsx       # Individual student card with isolated state
│   │   └── DashboardSummary.jsx  # Computed summary stats
│   └── App.jsx
│
└── project2-product-cart/
    ├── context/
    │   └── CartContext.jsx       # Global cart state & functions
    ├── hooks/
    │   └── useDebounce.js        # Reusable debouncing hook
    ├── components/
    │   ├── ProductList.jsx       # Search & product catalog
    │   └── CartSummary.jsx       # Real-time cart overview
    └── App.jsx
