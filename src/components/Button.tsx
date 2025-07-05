interface ButtonProps {
  text: string;
  Icon?: React.ComponentType;
  styles?: string;
  textSizes?: string;
  typeButton?: "button" | "submit";
  isLoading?: boolean;
}

const Button = ({ text, Icon, styles, textSizes, typeButton, isLoading }: ButtonProps) => {
  return (
    <button
      type={typeButton === "submit" ? "submit" : "button"}
      disabled={isLoading}
      className={`${styles
        ? styles
        : "flex gap-2 items-center justify-center bg-black text-white rounded-3xl py-1 px-4 "
        }
      sm:hover:bg-[#A2A2A2] hover:scale-105 transition-all duration-300 
      `}
    >
      <span
        className={`
          font-worksans font-light
          ${textSizes
            ? textSizes
            : "text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] 3xl:text-[1.5rem]"
          }`}
      >
        {text}
      </span>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
