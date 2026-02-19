import './Button.css';

interface ButtonProps {
  children: React.ReactNode;  // Le texte du bouton
  onClick?: () => void;        // Fonction au clic (optionnel)
  className?: string;          // Classes CSS supplémentaires (optionnel)
}

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button 
      className={`button ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;