import { useMemo, useState } from "react";

const arr = ["apple", "banana", "berry", "pineapple", "mango", "iceapple"];

function SearchableList() {
  const [element, setElement] = useState("");

  const filteredList = useMemo(() => {
    return arr.filter((item) =>
        item.toLowerCase().includes(element.toLowerCase())
    );
  }, [element, arr]);

  return (
    <>
      <input
        type="text"
        value={element}
        onChange={(e) => setElement(e.target.value)}
        placeholder="search"
      />

      <ul>
        {filteredList.map((item) => (
            <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchableList;
