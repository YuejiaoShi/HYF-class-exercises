"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
const buttonProps = {
  text: "Button Text",
};

const cardProps = {
  title: "carrot",
  description: "This is just a cute pattern of carrot 🥕",
  imageUrl:
    "https://i.pinimg.com/originals/03/a6/f2/03a6f212d636320a0adf4e6cd2c60e73.jpg",
};

function handleClick() {
  alert("You clicked the button!");
}

function About() {
  return (
    <>
      <h1>This is about page</h1>
      <Button text={buttonProps.text} onClick={handleClick} />
      <Card
        title={cardProps.title}
        description={cardProps.description}
        imageUrl={cardProps.imageUrl}
      />
    </>
  );
}

export default About;
