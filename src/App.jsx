import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Close from "./component/icon/Close";

import { AnimatePresence, motion } from 'framer-motion';


export default function App() {
  const [mail, setName] = useState("");

  const [isComplete, setIsComplete] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const handlerInput = (e) => {
    setName(e.target.value);
  };

  const handlerEnter = () => {
    setIsComplete(!isComplete);
  };


  return (
    <div className="bg-beige h-screen flex flex-col justify-center items-center font-normal">
      <section className="bg-white shadow-lg rounded-lg w-[50%] p-8 flex flex-col justify-center items-center gap-6">
        <img src="./public/Logo_Strava.png" alt="logo" className="w-[40%]" />
        <h1 className="text-2xl font-bold ">Inscrivez-vous à notre newsletter</h1>

        {mail === "" && <p className="text-red-500">*Veuillez saisir une adresse e-mail.</p>}
        <form onSubmit={handlerSubmit} className="w-full">
          <input
            className="border-2 h-[40px] w-full px-4 rounded"
            type="email"
            pattern="+@example\.com"
            placeholder="Saisir une adresse e-mail"
            value={mail}
            onInput={handlerInput}
          />
        </form>


        <Boutton className="w-full relative" onClick={() => mail && handlerEnter()}>
          S'inscrire à la newsletter
        </Boutton>

      </section>

      <AnimatePresence>
        {isComplete && mail && <Modale onClick={handlerEnter}>

          <p className="text-white">Merci pour votre abonnement! Votre e-mail <span className="font-medium">{mail}</span> a bien été ajouté à notre liste d’abonnés.</p>
        </Modale>}
      </AnimatePresence>
    </div>
  );
}

// Composant Enfant Enfant

const Boutton = ({ children, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "rounded bg-primary px-4 py-2 text-white hover:bg-secondary",
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
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 1, type: 'spring', stiffness: 180 }}
        drag
        dragConstraints={{
          top: -75,
          left: -50,
          right: 50,
          bottom: 75,
        }}
        className="rounded-lg bg-primary w-[40%] text-center p-10 relative">

        <Close className="stroke-white cursor-pointer absolute top-3 right-3" onClick={onClick} />
        {children}</motion.div>
    </div>
  );
};