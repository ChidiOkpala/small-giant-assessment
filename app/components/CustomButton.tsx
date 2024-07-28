type CustomButtonProps = {
  text: string;
  onClick?: () => void;
  theme?: "primary" | "primary-outline";
  className?: string;
  type?: "button" | "submit";
};

const CustomButton = ({
  className = "",
  text,
  onClick,
  theme = "primary",
  type = "button"
}: CustomButtonProps) => {
  return (
    <button type={type} className={`px-6 rounded-lg ${theme === "primary-outline" ? "border border-primary text-primary" : "bg-primary text-white"} ${className}`} onClick={onClick}>{text}</button>
  )
};

export default CustomButton;
