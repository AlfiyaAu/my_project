import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export default function App() {

  const [orders, setOrders]=useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [items,setItems] =useState([
    {
      id:1,
      title: "Платье женское вечернее",
      img:"dr1.jpg",
      desk:"Элегантное маленькое черное платье, которое должно быть в гардеробе у любой девушки. Где бы вы не захотели провести вечер, оно станет самым лучшим дополнением к вашей индивидуальности.",
      category: "zara",
      price:"6300.98"
    },
    {
      id:2,
      title: "Блузка приталенная",
      img:"dr2.jpg",
      desk:"Блузка женская из поплина, для повседневной носки, полуприлегающего силуэта с центральной застёжкой на планке на десять обмётанных петель и десять пуговиц, расположенных группами.",
      category: "Zolla",
      price:"4800.01"
    },
    {
      id:3,
      title: "Пижама женская",
      img:"dr3.jpg",
      desk:"Шелковый комплект с топом и короткими шортами – отличный выбор для тех, кто ищет что-то легкое, простое, но в то же время сексуальное. Она практические не ощущается на теле, что особенно важно во время сна",
      category: "SoftHome",
      price:"1800"
    },
    {
      id:4,
      title: "Футболка мужская",
      img:"dr4.jpg",
      desk:"Эта черная однотонная футболка с оригинальным дизайном выполнена из мягкого и приятного к телу материала, что обеспечивает комфорт во время активного отдыха, занятий спортом или просто повседневной жизни",
      category: "SoftHome",
      price:"2500"
    },
    {
      id:5,
      title: "Брюки палаццо",
      img:"dr5.jpg",
      desk:"Черные брюки-палаццо – практичный вариант для прогулочных или офисных комплектов, который выгодно смотрится с белыми или цветными блузками, топами, футболками, пиджаками.",
      category: "Louis Vuitton",
      price:"7000"
    },
    {
      id:6,
      title: "Пуховик зимний",
      img:"dr6.jpg",
      desk:"Куртка прямого силуэта с центральной застежкой на «молнию», планкой на кнопках, отстегивающейся капюшон.",
      category: "Louis Vuitton",
      price:"12000"
    },
    {
      id:7,
      title: "Босоножки на танкетке",
      img:"dr7.jpg",
      desk:"Сочетание платформы и каблука, которые создают постепенно увеличивающийся объем. Главный плюс такой обуви — безусловный комфорт. Ноги в босоножках на танкетке почти не устают — это отличный выбор для повседневной носки в городе.",
      category: "Ekonika",
      price:"4300"
    },
    {
      id:8,
      title: "Ботинки ",
      img:"dr8.jpg",
      desk:"Практичные классические ботинки для уверенных в себе мужчин. Вы оцените высокое качество натуральной кожи и добротный пошив этой модели.",
      category: "Ekonika",
      price:"9000"
    },
    {
      id:9,
      title: "Туфли лодочки",
      img:"dr9.jpg",
      desk:"Элегантные женские туфли лодочки для повседневной носки",
      category: "Ekonika",
      price:"5000"
    },
    {
      id:10,
      title: "Свитер мужской",
      img:"dr10.jpg",
      desk:"Мужской свитер рассчитан на сильные морозы и обеспечивает максимальную защиту от холода.",
      category: "Louis Vuitton",
      price:"25000"
    }

  ])

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const addToOrder=(item3)=>{
    if(!orders.some((el)=>el.id===item3.id)){
      setOrders([...orders,item3]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const chooseCategory=(category)=>{
    if (category==="all"){
      setCurrentItems(items);
    }
    else {
      setCurrentItems(items.filter((el) => el.category === category));
    }
  }

  const onShowItem = (item)=> {
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
    <Header orders2={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem/>}
    <Footer/>
    </div>
  );


}


