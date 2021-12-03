import styles from './style.module.css';

type Props = {
  value: string;
  placeholder: string;
  onChange: Function;
  handleEnterKey: Function;
};

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder = '',
  handleEnterKey = () => {},
}) => {
  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && value?.trim()) {
      event.preventDefault();
      handleEnterKey();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.effect}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        onKeyPress={(e) => handleEnterKey && onKeyPress(e)}
      />
      <span className={styles.border}>
        <i />
      </span>
    </div>
  );
};

export default Input;
