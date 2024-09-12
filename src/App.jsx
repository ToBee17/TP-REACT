import { useState } from "react";
import { twMerge } from "tailwind-merge";


export default function App() {
  const [name, setName] = useState("");

  const [isComplete, setIsComplete] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const handlerInput = (e) => {
    setName(e.target.value);
  };

  const handlerResetName = () => {
    setName("");
  };

  const handlerEnter = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          className="border-2 border-indigo-600 p-4"
          type="text"
          placeholder="Entrer votre nom"
          value={name}
          onInput={handlerInput}
        />
      </form>

      <Boutton className="mt-4" onClick={handlerResetName}>
        Reset
      </Boutton>
      <Boutton className="mt-4" onClick={handlerEnter}>
        Enter
      </Boutton>

      {isComplete && <Modale onClick={handlerEnter}>Bonjour {name}</Modale>}
    </div>
  );
}

// Composant Enfant Enfant

const Boutton = ({ children, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Modale = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
    >
      <div className="rounded bg-white p-4">{children}</div>
    </div>
  );
};