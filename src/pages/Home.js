import React from "react";

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Konferencija o tehnologiji",
      description: "Pridružite nam se na konferenciji sa vrhunskim predavačima.",
      image: "https://source.unsplash.com/300x200/?technology,conference",
      link: "#"
    },
    {
      id: 2,
      title: "Muzicki koncert",
      description: "Uživajte u nastupu popularnih bendova i solo izvođača.",
      image: "https://source.unsplash.com/300x200/?music,concert",
      link: "#"
    },
    {
      id: 3,
      title: "Radionica programiranja",
      description: "Naučite osnove React.js na interaktivnoj radionici.",
      image: "https://source.unsplash.com/300x200/?coding,workshop",
      link: "#"
    },
    {
      id: 4,
      title: "Festival hrane",
      description: "Isprobajte specijalitete iz celog sveta na našem festivalu.",
      image: "https://source.unsplash.com/300x200/?food,festival",
      link: "#"
    },
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Dobrodošli na Eventify</h1>
        <p>Najbolji događaji na jednom mestu.</p>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link}>Saznaj više</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
