import diceImg from "../../public/assets/icon-dice.svg";

interface Props {
  onClick: () => void;
}

const DiceButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-neon-green rounded-full flex items-center justify-center p-5 hover:shadow-[0_0_30px] hover:shadow-hover-neon-green"
    >
      <img src={diceImg} alt="Dice Image" />
    </button>
  );
};

export default DiceButton;
