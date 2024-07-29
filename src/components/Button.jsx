
const Button = ({children, onOpen}) => {
  return (
      <button className="btn-toggle" onClick={() => onOpen((open) => !open)}>
          {children}
    </button>
  );
}

export default Button
