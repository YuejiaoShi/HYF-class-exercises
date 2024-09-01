"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import Layout from "@/components/Layout";
import Parent from "@/components/Parent";
import TodoList from "@/components/TodoList";
import ToggleContent from "@/components/ToggleContent";
const buttonProps = {
  text: "Button Text",
};

const cardProps = {
  title: "carrot",
  description: "This is just a cute pattern of carrot 🥕",
  imageUrl:
    "https://i.pinimg.com/originals/03/a6/f2/03a6f212d636320a0adf4e6cd2c60e73.jpg",
};

const triggerContextProps = {
  content: "Content Triggered",
};

function handleClick() {
  alert("You clicked the button!");
}

function About() {
  return (
    <>
      <Layout>
        <h1>This is about page</h1>
        <Button text={buttonProps.text} onClick={handleClick} />
        <Card
          title={cardProps.title}
          description={cardProps.description}
          imageUrl={cardProps.imageUrl}
        />
        <ToggleContent show={true} content={triggerContextProps.content} />
        <Counter />
        <TodoList />
        <Parent />
      </Layout>
    </>
  );
}

export default About;
