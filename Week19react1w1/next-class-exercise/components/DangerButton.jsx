import styles from "../app/page.module.css";

function DangerButton() {
  return (
    <button className={`${styles.dangerButton} btn btn btn-primary`}>
      Dangerous
    </button>
  );
}

export default DangerButton;
