import styles from "./SearchField.module.css";

const SearchField = ({ onChange}) => {
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
