import { useState } from "react";

const Header = ({ country }) => {
  let [name, setName] = useState("Deepika");

  return (
    <div>
      <h1 className="text-2xl">
        Hello world {name} {country}
      </h1>
      <button
        type="button"
        onClick={() => {
          // name = "Ram"
          setName("shyam");
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Header;
