import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import HappyFaceIcon from "../../icons/HappyFaceIcon";
import SadFaceIcon from "../../icons/SadFaceIcon";

//TODO (EDWIN): ADD MOUNT / UNMOUNT ANIMATION

enum MESSAGE_ENUM {
  success = "Operation finished successfully",
  error = "An unexpected error occured",
}

const toastStyles = cva(
  "flex w-80 px-4 py-2 items-center font-bold bg-opacity-10 backdrop-blur-lg gap-4 rounded absolute",
  {
    variants: {
      intent: {
        success: "bg-green-500 shadow-green-700/10 shadow-inner",
        error: "bg-red-500 shadow-red-700/10 shadow-inner",
      },
      size: {
        xl: "w-80",
        large: "w-72",
        medium: "w-56",
        small: "w-40",
      },
      y: {
        top: "top-8",
        bottom: "bottom-8",
        centered: "top-1/2 -translate-y-1/2",
      },
      x: {
        left: "left-8",
        right: "right-8",
        centered: "left-1/2 -translate-x-1/2",
      },
    },
    defaultVariants: {
      intent: "success",
    },
  }
);

interface ToastProps extends VariantProps<typeof toastStyles> {
  variant?: "success" | "error";
  message?: string;
}

const Toast = ({
  variant = "success",
  intent = `${variant}`,
  message = `${MESSAGE_ENUM[variant]}`,
  size = "xl",
  x = "centered",
  y = "top",
}: ToastProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [aliveTime, setAliveTime] = useState(2);
  const handleCloseToast = () => {
    setAliveTime(0);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    let interval: ReturnType<typeof setInterval>;
    if (aliveTime > 0) {
      interval = setInterval(() => {
        setAliveTime((prevAliveTime) => --prevAliveTime);
      }, 1000);
    } else {
      handleCloseToast();
    }

    return () => {
      clearInterval(interval);
    };
  }, [isOpen, aliveTime]);

  if (isOpen) {
    return (
      <div className={toastStyles({ intent, x, y, size })} role='alert'>
        <button
          className='absolute right-2 top-2 w-3 h-3'
          onClick={handleCloseToast}
          name='close'
        >
          <CloseIcon />
        </button>
        <span className='w-8'>
          {variant === "success" ? <HappyFaceIcon /> : <SadFaceIcon />}
        </span>
        <p role='paragraph'>{message}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Toast;
