import { useMemo, useState } from "react";

const DEFAULT_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function NumberStats({ arr = DEFAULT_NUMBERS }) {
  const [toggle, setToggle] = useState("light");

  const total = useMemo(() => {
    console.log("calculating sum ...")
    return arr.reduce((price, sum) => price + sum, 0);
    
  },[arr])

  return (
    <>
      <button
        onClick={() => {
          setToggle((t) => (t === "light" ? "dark" : "light"));
        }}
      >
        toggle {toggle}
      </button>
      <p>{total}</p>
    </>
  );
}

export default NumberStats;
