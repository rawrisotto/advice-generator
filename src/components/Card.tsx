import dividerMobile from "../../public/assets/pattern-divider-mobile.svg";
import dividerDesktop from "../../public/assets/pattern-divider-desktop.svg";
import DiceButton from "./DiceButton";
import api from "../services/api";
import { useEffect, useState } from "react";

interface Slip {
  advice: string;
  id: number;
}

const Card = () => {
  const [slip, setSlip] = useState({} as Slip);

  const getAdvice = () => {
    api
      .get("/advice")
      .then((res) => setSlip(res.data.slip))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAdvice;
  }, []);

  return (
    <div className="p-10 bg-dark-grayish-blue flex flex-col items-center gap-7 relative max-w-[30rem] rounded-xl m-4">
      <p className="text-neon-green">Advice #{slip.id}</p>
      <p className="text-[28px] text-center text-light-cyan">{slip.advice}</p>
      <img
        className="sm:hidden mb-[2rem]"
        src={dividerMobile}
        alt="Divider Mobile"
      />
      <img className="hidden sm:block mb-[2rem]" src={dividerDesktop} alt="" />
      <div className="absolute bottom-[-30px] left-50">
        <DiceButton onClick={getAdvice}/>
      </div>
    </div>
  );
};

export default Card;
