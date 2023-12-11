// Imported  Images
import frontend from "../imgs/frontend.jpg";
import backend from "../imgs/backend.jpg";
import ios from "../imgs/ios.jpg";
import andriod from "../imgs/android.png";
import nodejs from "../imgs/nodejs.png";
import javascript from "../imgs/javascript.jpg";
// Imported  Images

const data = () => {
  return [
    {
      id: 0,
      name: "💻 front-end",
      name2: "front-end",
      devImg: frontend,
      url: "/coursespage/frontend",
      fullInfos: [
        {
          status: "online",
          country: "Litva",
          date: "december 10, 2023",
          lang: "english",
        },
      ],
    },
    {
      id: 1,
      name: "💻 back-end",
      name2: "back-end",
      devImg: backend,
      url: "/coursespage/backend",
      fullInfos: [
        {
          status: "offline",
          country: "poland",
          date: "march 15, 2024",
          lang: "english",
        },
      ],
    },
    {
      id: 2,
      name: "💻 ios",
      name2: "ios",
      devImg: ios,
      url: "/coursespage/ios",
      fullInfos: [
        {
          status: "offline",
          country: "USA",
          date: "may 25, 2024",
          lang: "english",
        },
      ],
    },
    {
      id: 3,
      name: "💻 android",
      name2: "android",
      devImg: andriod,
      url: "/coursespage/android",
      fullInfos: [
        {
          status: "online",
          country: "Uzbekistan",
          date: "january 20, 2024",
          lang: "uzbek",
        },
      ],
    },
    {
      id: 4,
      name: "💻 node.js",
      name2: "node.js",
      devImg: nodejs,
      url: "/coursespage/nodejs",
      fullInfos: [
        {
          status: "online",
          country: "poland",
          date: "february 15, 2024",
          lang: "russian",
        },
      ],
    },
    {
      id: 5,
      name: "💻 javascript",
      name2: "javascript",
      devImg: javascript,
      url: "/coursespage/javascript",
      fullInfos: [
        {
          status: "offline",
          country: "Germany",
          date: "june 5, 2024",
          lang: "english",
        },
      ],
    },
  ];
};

export default data;
