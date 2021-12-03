import styles from './style.module.css';

type Props = {
  text: string;
  onClick: Function;
  invalid?: boolean;
  className?: string;
};

const Button: React.FC<Props> = ({ text, onClick, invalid = false, className = '' }) => (
  <div
    className={`${styles.wrapper} ${invalid && styles.invalid} ${className}`}
    onClick={() => {
      if (!invalid) onClick();
    }}
  >
    <p>{text}</p>
  </div>
);

export default Button;
