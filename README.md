# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- npm install -D tailwindcss postcss autoprefixer

- npm run dev

- npm install framer-motion




------------------------------------------------- EXERCICE POP-UP ---------------------------------------------------------

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import {AnimatePresence, motion} from 'framer-motion';

// Composant Parent
export default function App() {
  //const [count, setCount] = useState(0);
  
  //const handleIncrement = () => {setCount(count + 1);};

  const [isOpen, setIsOpened] = useState(false);

  const handleClick = () => {setIsOpened(!isOpen);};
  

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-bold mb-4">exercice de la modale</h1>

      <Button onClick={handleClick} className={"bg-blue-400"}>Open</Button>
      <AnimatePresence>
      {isOpen && <Modale>
        <h2 className="text-3xl font-bold mb-4">Un instant!</h2>
        <p className="flex text-center">Vous êtes sur le point de supprimer un élément de façon définitive. Cette action est irréversible, veuillez confirmer votre choix avant de continuer.</p>
        <div className="flex justify-between mt-4 w-full gap-4">
          <Button onClick={handleClick} className={"w-full bg-white hover:bg-violet-500 hover:border text-violet-500 hover:text-white"}>Supprimer</Button>
          <Button onClick={handleClick} className={"w-full bg-white hover:bg-violet-500 hover:border text-violet-500 hover:text-white"}>Annuler</Button>
        </div>
        </Modale>}
        </AnimatePresence>
    </div>
  );
}

// Composant Enfant
const Compteur = ({children}) => {
  return 
    <>
     {children}
     </>
};

// Composant Enfant Enfant

const Button = ({children, onClick, className}) => {
  return (
    <button className={twMerge("rounded px-4 py-2 font-bold text-white bg-emerald-500 hover:bg-emerald-400", className)}
    onClick={onClick}>
    
    {children}
    </button>
  );
}

const Modale = ({children, onClick}) => {
  return (
    <div onClick={onClick} 
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
      <motion.div 
      initial={{opacity: 0, scale: 0.5, rotate: 0}}
      animate={{opacity: 1 , scale: 1, rotate: 360}}
      transition={{duration: 1, type: 'spring', stiffness: 180}}
      className="bg-violet-500 py-2 px-4 rounded-xl text-white max-w-[50%]">
        <div className="p-4 rounded-xl flex flex-col justify-center items-center gap-4">
        {children}
        </div>
      </motion.div>
    </div>
  );
} uses [SWC](https://swc.rs/) for Fast Refresh

- npm install -D tailwindcss postcss autoprefixer

- npm run dev




------------------------------------------------- EXERCICE POP-UP ---------------------------------------------------------

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import {AnimatePresence, motion} from 'framer-motion';

// Composant Parent
export default function App() {
  //const [count, setCount] = useState(0);
  
  //const handleIncrement = () => {setCount(count + 1);};

  const [isOpen, setIsOpened] = useState(false);

  const handleClick = () => {setIsOpened(!isOpen);};
  

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-bold mb-4">exercice de la modale</h1>

      <Button onClick={handleClick} className={"bg-blue-400"}>Open</Button>
      <AnimatePresence>
      {isOpen && <Modale>
        <h2 className="text-3xl font-bold mb-4">Un instant!</h2>
        <p className="flex text-center">Vous êtes sur le point de supprimer un élément de façon définitive. Cette action est irréversible, veuillez confirmer votre choix avant de continuer.</p>
        <div className="flex justify-between mt-4 w-full gap-4">
          <Button onClick={handleClick} className={"w-full bg-white hover:bg-violet-500 hover:border text-violet-500 hover:text-white"}>Supprimer</Button>
          <Button onClick={handleClick} className={"w-full bg-white hover:bg-violet-500 hover:border text-violet-500 hover:text-white"}>Annuler</Button>
        </div>
        </Modale>}
        </AnimatePresence>
    </div>
  );
}

// Composant Enfant
const Compteur = ({children}) => {
  return 
    <>
     {children}
     </>
};

// Composant Enfant Enfant

const Button = ({children, onClick, className}) => {
  return (
    <button className={twMerge("rounded px-4 py-2 font-bold text-white bg-emerald-500 hover:bg-emerald-400", className)}
    onClick={onClick}>
    
    {children}
    </button>
  );
}

const Modale = ({children, onClick}) => {
  return (
    <div onClick={onClick} 
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
      <motion.div 
      initial={{opacity: 0, scale: 0.5, rotate: 0}}
      animate={{opacity: 1 , scale: 1, rotate: 360}}
      transition={{duration: 1, type: 'spring', stiffness: 180}}
      className="bg-violet-500 py-2 px-4 rounded-xl text-white max-w-[50%]">
        <div className="p-4 rounded-xl flex flex-col justify-center items-center gap-4">
        {children}
        </div>
      </motion.div>
    </div>
  );
}