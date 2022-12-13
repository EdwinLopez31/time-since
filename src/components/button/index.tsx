import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex justify-center items-center px-4 py-2 font-bold focus:outline-none",
  {
    variants: {
      intent: {
        primary: "bg-time-since-white text-time-since-black",
        secondary: "border-time-since-white border text-time-since-white",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = ({
  text,
  onClick,
  intent = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent })} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
