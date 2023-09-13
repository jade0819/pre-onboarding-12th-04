const Button = ({ title, active, ...props }) => {
  return (
    <button className={active === title ? 'bg-green-pastel-accent' : 'bg-green-pastel'} {...props}>
      {title}
    </button>
  );
};

export default Button;
