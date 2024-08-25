import Image from "next/image";
import styles from "./page.module.css";

function Header() {
  return <header>Welcome!!!</header>;
}

function Intro() {
  return <div>Introduction .... </div>;
}

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <main className={styles.main}>Hello!!!!</main>;
    </>
  );
}
