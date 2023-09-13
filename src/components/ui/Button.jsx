const Button = ({ title, ...props }) => {
  return (
    <button className="" {...props}>
      {title}
    </button>
  );
};

export default Button;
