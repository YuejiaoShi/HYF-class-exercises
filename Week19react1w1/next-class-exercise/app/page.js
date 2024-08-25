import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Greeting from "@/components/Greeting";
import Person from "@/components/Person";
import Cards from "@/components/Cards";
import DangerButton from "@/components/DangerButton";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <div>
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
