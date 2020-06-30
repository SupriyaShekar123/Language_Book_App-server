"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          name: "Outsider in Amsterdam",
          author: "Janwillem Van De Wetering",
          description:
            "John Leonard On a quiet street in downtown Amsterdam,a man is found hanging from the ceiling beam of his bedroom, upstairs from the new religious society he founded: a group that calls itself  Hindist and supposedly mixes elements of various Eastern traditions.",
          category: "Thriller",
          language: "English",
          imageUrl:
            "https://i.pinimg.com/564x/6e/d2/26/6ed22669ccd9f871342605ba5792a665.jpg",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nooit Meer Terug",
          author: "Tim Weaver",
          description:
            "Als Emily Kane aankomt bij haar zus is de voordeur open en zijn Carrie haar man en hun dochters verdwenen. Het eten staat op, de tv is aan, maar het gezin is spoorloos. De politie staat voor een raadsel en het onderzoek loopt op niets uit.",

          category: "Thriller",
          language: "Dutch",
          imageUrl:
            "https://i.pinimg.com/564x/2a/1f/e3/2a1fe351ab507c2f84b809d2e846798f.jpg",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ich Habe Meinen Papa Lieb",
          author: "Shelly Admont",
          description:
            "Jimmy, der Hase, weiß zunächst nicht, wie man ohne Stützräder Fahrrad fährt, wie seine Brüder. Manchmal was extracted with sogar damit. If Papa Jimmy sows, who ausprobiert man ohne Angst etwas Neues, fängt der Spaß an.",

          category: "Children",
          language: "German",
          imageUrl: "https://media.s-bol.com/R2G6q8Kly7O/550x533.jpg",
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "De Bondgencten van de Mensheid",
          author: "Its for people who want to learn Dutch.",
          description:
            "...Meer dan twintig jaar geleden, verzamelde een groep individuen uit verschillende werelden zich op een onopvallende plek binnen ons zonnestelsel, dichtbij de Aarde, met als doel de buitenaardse inmenging die hier plaatsvindt te observeren. Deze groep waarnemers noemt zich ''De Bondgenoten van de Mensheid''.",

          category: "Mystery",
          language: "Dutch",
          imageUrl: "https://media.s-bol.com/gZVnzE634W2Y/550x823.jpg",
          userId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Les Morts Onttous La Meme Peau",
          author: "Its for people who want to learn Dutch.",
          description:
            " Entre donner les coups et les recevoir, je préférais les donner Dan est un sang-mêlé. Autrement dit, un noir à peau blanche Videur dans un bar de nuit à New York, il ne vit que pour Sheila, sa femme",

          category: "Crime",
          language: "France",
          imageUrl: "https://media.s-bol.com/gLLLD3423o6G/550x750.jpg",
          userId: 5,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ala Vuelta",
          author: "Nicolas Kronfeld",
          description:
            "'¿Como llegamos tan lejos?', se preguntan los hermanos Kronfeld. Y ensayan las respuestas en este libro que revive los 1117 días de su singular viaje por el mundo.",

          category: "Horror",
          language: "Spanish",
          imageUrl: "https://media.s-bol.com/YEE5ROJp3nq9/547x840.jpg",
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
