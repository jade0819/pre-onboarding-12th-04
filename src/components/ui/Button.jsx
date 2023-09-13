const Button = ({ title, selectedRegion, ...props }) => {
  const active = selectedRegion?.includes(title);

  return (
    <button className={active ? 'bg-green-pastel-accent' : 'bg-green-pastel'} {...props}>
      {title}
    </button>
  );
};

export default Button;
