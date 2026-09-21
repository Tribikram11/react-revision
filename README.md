# 🚀 React Revision & Mini-Projects Portfolio

Welcome to my React learning repository! This collection tracks my step-by-step progress as I revise core React fundamentals and put key concepts into practice through hands-on mini-projects.

---

## 📚 Mastered Concepts

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

### 1. `mini-project-1`: Student Dashboard
A monitoring interface built to practice foundational React patterns: component composition, props, array mapping, and localized state isolation.

- **Dynamic Attendance Warnings:** Evaluates attendance percentage and highlights students below the 75% threshold without rendering stray falsy values.
- **Independent Card Expansion:** Each student card holds its own `useState`, ensuring that clicking "Expand" on one card toggles details for that specific student without affecting others.
- **Calculated Summary Header:** Dynamically computes total student count and low-attendance alerts directly from data array transformations.

---

### 2. `mini-project-2`: Live Product Search & Cart
A mini e-commerce interface demonstrating global state management, custom hook creation, and re-render optimization.

- **Global Cart Context (`CartContext`):** Wraps the app in a unified provider holding the cart item array and an `addItem` dispatch function.
- **Debounced Search (`useDebounce`):** Utilizes a custom hook to delay user input filtering by 400ms, ensuring smooth typing without continuous execution on every keystroke.
- **Memoized Product Filter (`useMemo`):** Efficiently filters hardcoded products using the debounced search query. (Check browser console for `filtering...` logs to verify execution timing!)
- **Sibling State Synchronization (`CartSummary` & `ProductList`):** Sibling components update seamlessly via shared Context subscription without passing props between each other.

---

## 📂 Repository Structure

```text
.
├── mini-project-1/          # Student Dashboard project files
├── mini-project-2/          # Live Product Search & Cart project files
├── src/                     # practice codes
├── public/                  # Static assets
├── index.html               # Main HTML entry
├── package.json             # Root project dependencies & scripts
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
