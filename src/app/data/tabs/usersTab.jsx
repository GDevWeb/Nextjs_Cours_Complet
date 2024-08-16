import anxietyImage from "../../../../public/image/emotions/anxiety.jpg";
import ennuiImage from "../../../../public/image/emotions/ennui.png";
import envyImage from "../../../../public/image/emotions/envy.jpg";
import joyImage from "../../../../public/image/emotions/joy.jpg";

const usersTab = [
  {
    id: "0",
    genre: "women",
    name: "Christelle",
    age: 36,
    hobbies: ["gaming", "mangas", "family", "raclette dinner"],
    email: "christelle@fakemail.com",
    password: "p@ssword59",
    userName: "Christelle59",
    avatar: joyImage,
  },
  {
    id: "1",
    genre: "women",
    name: "Oceane",
    age: 9,
    hobbies: ["polar", "gaming", "sofa", "chocolate"],
    email: "oceane@fakemail.com",
    password: "p@ssword59",
    userName: "Océane59",
    avatar: ennuiImage,
  },
  {
    id: "2",
    genre: "women",
    name: "Annabeth",
    age: 5,
    hobbies: ["cartoons", "gym", "candy", "sticky my parents"],
    email: "annabeth@fakemail.com",
    password: "p@ssword59",
    userName: "Annabeth59",
    avatar: envyImage,
  },
  {
    id: "3",
    genre: "men",
    name: "Gaetan",
    age: 39,
    hobbies: ["coding", "learning", "reading", "marvel", "family"],
    email: "gaëtan@fakemail.com",
    password: "p@ssword59",
    userName: "Gaëtan59",
    avatar: anxietyImage,
  },
];

export default usersTab;
