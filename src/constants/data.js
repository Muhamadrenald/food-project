import burgerImg from "../assets/burger.jpg";
import pizzaImg from "../assets/pizza.jpg";
import waffleImg from "../assets/waffle.jpg";
import steakImg from "../assets/steak.jpg";
import donutImg from "../assets/donut.jpg";
import breadImg from "../assets/bread.jpg";
import pastryImg from "../assets/pastry.jpg";
import saladImg from "../assets/salad.jpg";
import mochiImg from "../assets/mochi.jpg";
import foodImg from "../assets/food.jpg";

// Menu Items Data
export const menuItems = [
  {
    id: 1,
    title: "Cheese Burger",
    price: 3.88,
    image: burgerImg,
    category: "burger",
    location: "Burger Arena",
  },
  {
    id: 2,
    title: "Toffe's Cake",
    price: 4.0,
    image: steakImg,
    category: "dessert",
    location: "Top Sticks",
  },
  {
    id: 3,
    title: "Dancake",
    price: 1.99,
    image: waffleImg,
    category: "dessert",
    location: "Cake World",
  },
  {
    id: 4,
    title: "Crispy Sandwich",
    price: 3.0,
    image: pastryImg,
    category: "sandwich",
    location: "Fastfood Dine",
  },
  {
    id: 5,
    title: "Thai Soup",
    price: 2.79,
    image: breadImg,
    category: "soup",
    location: "Foody man",
  },
  {
    id: 6,
    title: "Pepperoni Pizza",
    price: 12.5,
    image: pizzaImg,
    category: "pizza",
    location: "Pizza House",
  },
  {
    id: 7,
    title: "Fresh Garden Salad",
    price: 7.25,
    image: saladImg,
    category: "salad",
    location: "Green Cafe",
  },
  {
    id: 8,
    title: "Chicken Wings",
    price: 9.99,
    image: mochiImg,
    category: "chicken",
    location: "Wing Stop",
  },
  {
    id: 9,
    title: "Chocolate Donut",
    price: 2.5,
    image: donutImg,
    category: "dessert",
    location: "Sweet Delights",
  },
];

export const menuCategories = [
  { key: "all", label: "All", image: foodImg },
  { key: "burger", label: "Burger", image: burgerImg },
  { key: "pizza", label: "Pizza", image: pizzaImg },
  { key: "dessert", label: "Dessert", image: donutImg },
  { key: "steak", label: "Steak", image: steakImg },
  { key: "sandwich", label: "Sandwich", image: pastryImg },
  { key: "pasta", label: "Pasta", image: mochiImg },
  { key: "salad", label: "Salad", image: saladImg },
  { key: "chicken", label: "Chicken", image: burgerImg },
  { key: "soup", label: "Soup", image: breadImg },
];

export const DEFAULT_ACTIVE_CATEGORY = "all";

export const promoItems = [
  {
    id: 1,
    title: "Best deals",
    highlight: "Crispy Sandwiches",
    description:
      "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    buttonText: "PROCEED TO ORDER",
    image: pastryImg,
    layout: "left",
  },
  {
    id: 2,
    title: "Celebrate parties with",
    highlight: "Fried Chicken",
    description:
      "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    buttonText: "Proceed to order",
    image: mochiImg,
    layout: "right",
  },
  {
    id: 3,
    title: "Wanna eat hot & spicy",
    highlight: "Pizza?",
    description:
      "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    buttonText: "PROCEED TO ORDER",
    image: pizzaImg,
    layout: "left",
  },
];
