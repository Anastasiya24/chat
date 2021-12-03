import styles from './style.module.css';

type Props = {
  value: string;
  placeholder: string;
  onChange: Function;
  handleEnterKey: Function;
};

const Textarea: React.FC<Props> = ({
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
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.textarea}
      placeholder={placeholder}
      onKeyPress={(e) => handleEnterKey && onKeyPress(e)}
    />
  );
};

export default Textarea;
