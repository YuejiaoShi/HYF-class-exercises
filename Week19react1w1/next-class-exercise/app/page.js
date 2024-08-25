import Image from "next/image";
import styles from "./page.module.css";

function Header() {
  return <header>Welcome!!!</header>;
}

function Intro() {
  return <div>Introduction ....</div>;
}

function Greeting() {
  return <h1>Hello, React!</h1>;
}
function Card() {
  return (
    <div>
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
  return <button className="btn btn-primary">Button</button>;
}

function DangerButton() {
  return <button className="btn btn btn-primary">Dangerous</button>;
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
