import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";

function Intro() {
  return <div>Introduction ....</div>;
}

function Greeting() {
  return <h1>Hello, React!</h1>;
}
function Card() {
  return (
    <div className={styles.card}>
      <h2>Card Title</h2>
      <p>This is a card component</p>
    </div>
  );
}
function Cards() {
  return (
    <>
      <Card />
      <Card />
    </>
  );
}

function Person() {
  const name = "Yuejiao";
  const age = 25;
  if (age < 18) return <p>{name} is a minor.</p>;
  return <p>{name} is an adult.</p>;
}

function Button() {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${styles.description}`}
    >
      Button
    </button>
  );
}

function DangerButton() {
  return <button className="btn btn-primary">Dangerous</button>;
}

function TextInput() {
  return <input placeholder="Type something here"></input>;
}

function ProfileImage() {
  return (
    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  );
}

export default function Home() {
  return (
    <div className="">
      <Header />
      <Greeting />
      <Cards />
      <Person />
      <Button />
      <DangerButton />
      <TextInput />
      <ProfileImage />
    </div>
  );
}
