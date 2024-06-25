import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategorySection from './CategorySection';
import './menu.css';
import Contact from './Contact';

const Menu = () => {
  const appetizers = [
    {
      name: 'Canapé',
      price: 5.99,
      image: 'https://media.istockphoto.com/id/174987545/photo/canapes-for-party.jpg?s=612x612&w=0&k=20&c=RtZXWZtOVWK3J5xKERls-o74EWdAXLP3y7S0IChfqOg='
    },
    {
      name: 'Hors d\'oeuvre',
      price: 6.99,
      image: 'https://media.istockphoto.com/id/481765835/photo/homemade-italian-bruschetta-appetizer.jpg?s=612x612&w=0&k=20&c=20lme_vcpR4R2wfNyAFwvglvSj3mxJU9qel00LqzP3I='
    },
    {
      name: 'Charcuterie',
      price: 7.99,
      image: 'https://www.shutterstock.com/image-photo/appetizers-differents-antipasti-charcuterie-snacks-600nw-2292940915.jpg'
    }
  ];

  const soupsSalads = [
    {
      name: 'Pumpkin Soup with Salad',
      price: 4.99,
      image: 'https://media.istockphoto.com/id/1179657676/photo/pumpkin-soup-with-salad.jpg?s=612x612&w=0&k=20&c=6hi-r7ksM4fgvTGr9SLzak5eCME7ktcIsa3HzNxOg2Y='
    },
    {
      name: 'Vegan Creamy Roasted Pumpkin Soup',
      price: 5.99,
      image: 'https://media.istockphoto.com/id/1201586372/photo/vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=0&k=20&c=ZdqjfwFW308JGJtREpx7UzZMsL-DB4E9SXro7Yh3ZTg='
    },
    {
      name: 'Scandinavian Salad Bowl',
      price: 6.99,
      image: 'https://media.istockphoto.com/id/1317237375/photo/scandinavian-salad-bowl.jpg?s=612x612&w=0&k=20&c=FN9W7JrNTURUb7wMClaXuPjf7ZZKXP6CmrpAdyCMOgs='
    }
  ];

  const desserts = [
    {
      name: 'Napoleon',
      price: 3.99,
      image: 'https://peanutbutterandjulie.com/wp-content/uploads/2023/03/Classic-French-Napoleon-Pastry-on-serving-platter-square.jpg'
    },
    {
      name: 'Low-fat mango fool',
      price: 4.99,
      image: 'https://img.taste.com.au/WZm5MxC2/taste/2016/11/low-fat-mango-fool-27560-1.jpeg'
    },
    {
      name: 'Affogato',
      price: 5.99,
      image: 'https://www.recipetineats.com/uploads/2023/06/Affogato_0.jpg'
    }
  ];

  const pizzas = [
    {
      name: 'Neapolitan',
      price: 8.99,
      image: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?s=612x612&w=0&k=20&c=v8mdiAa_5NaRYtIscClXe85lLzkx7loSd9_pJWt9G2o='
    },
    {
      name: 'Margherita',
      price: 9.99,
      image: 'https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg'
    },
    {
      name: 'Marinara',
      price: 10.99,
      image: 'https://allforpizza.com/wp-content/uploads/2023/03/Pizza-Marinara-1-1000x602.jpg'
    }
  ];

  const beverages = [
    {
      name: 'Coconut Lavender Lemonade',
      price: 1.99,
      image: 'https://www.mypricechopper.com/Frontend/Media/Recipes/CoconutLavenderLemonade_Web_1110x625.jpg'
    },
    {
      name: 'Raspberry Peach Lemonade',
      price: 2.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xK5CDScVuqe83zmFvM1sezlHYmOIhWg3-Q&s'
    },
    {
      name: 'Emerald Palmer',
      price: 3.99,
      image: 'https://www.goodgriefcook.com/wp-content/uploads/2021/07/drink.jpg'
    }
  ];

  return (
    <div>
      <Container>
        <CategorySection id="appetizers" title="Appetizers" items={appetizers} />
        <CategorySection id="soups-salads" title="Soups & Salads" items={soupsSalads} />
        <CategorySection id="desserts" title="Desserts" items={desserts} />
        <CategorySection id="pizzas" title="Pizzas" items={pizzas} />
        <CategorySection id="beverages" title="Beverages" items={beverages} />
      </Container>
    </div>
  );
};

export default Menu;
