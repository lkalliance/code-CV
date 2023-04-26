const connection = require("../config/connection");
const { Project } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Project.deleteMany({});

  const projects = [
    {
      title: "Be For Reel",
      description:
        "Be For Reel was a project I worked on as the leader of a five-person team in the University of Minnesota Full Stack Coding Boot Camp. It included a username/password login, poll creation tools tied into IMDb's public API, and polls enriched with IMDb data. Users could submit a comment with their vote. The front page displayed six randomly-chosen polls, with the movie poster of one of its randomly-chosen options. Users each had a profile page, which showed all their created quizzes and all their submitted comments.",
      short_description: "A movie poll site powered by IMDb",
      techs: [
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "Handlebars",
        "jQuery",
        "Bootstrap",
      ],
      url: "https://be-for-reel.herokuapp.com",
      repo: "https://github.com/lkalliance/Be-For-Reel",
      image: "/images/be-for-reel-3.png",
    },
    {
      title: "You Get a Tech Blog!",
      description:
        "You Get a Tech Blog was an assignment in the University of Minnesota Coding Boot Camp; a primer into content management systems and authentication.",
      short_description:
        "Create your own blog, including comments, with this CMS",
      techs: [
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "Handlebars",
        "jQuery",
        "Bootstrap",
      ],
      url: "https://you-get-a-tech-blog.herokuapp.com",
      repo: "https://github.com/lkalliance/you-get-a-tech-blog",
      image: "/images/tech-blog-screen-1.png",
    },
    {
      title: "Moon Fish",
      description:
        "Moon Fish was a project I worked on as the leader of a four-person team in the University of Minnesota Full Stack Coding Boot Camp. It combined data from public API's from GeoApify.com, OpenWeatherMap.org, and Solunar.org and presented it as a comprehensive fishing location interface. A user would search on a location and get the week's weather and solunar chart.",
      short_description:
        "Gone fishing? Perhaps you used Moon Fish to pick your spot",
      techs: ["HTML", "Javascript", "Milligram"],
      url: "https://lkalliance.github.io/Moon-Fish/",
      repo: "https://github.com/lkalliance/Moon-Fish",
      image: "/images/moonfish-screen-shot.png",
    },
    {
      title: "Ringnut Jeopardy",
      description:
        "I coded this way back before I had gotten any training, in a distant youth: a time when I was just teaching myself JavaScript as I went along. It was a fun project for the benefit of a social group of Lord of the Rings fans.",
      short_description:
        "From back in the day when I taught myself Javascript, for my Lord of the Rings fan community",
      techs: ["HTML", "CSS", "JavaScript"],
      url: "https://lkalliance.github.io/old-jeopardy/index.htm",
      repo: "https://github.com/lkalliance/old-jeopardy",
      image: "/images/work-1.png",
    },
    {
      title: "Dragging Exercise",
      description:
        "I was planning a web-based interface for a product, and I created this snippet of code in vanilla Javascript as a proof of concept. No libraries or frameworks. Drag the ten-second strip to navigate or click on the full disclosure below it. Control-click to create a report strip, or option-click-drag to create movable calipers to measure heart rate. This project was never begun beyond this.",
      short_description:
        "A vanilla JavaScript exercise in multiple interactions",
      techs: ["HTML", "CSS", "JavaScript"],
      url: "https://lkalliance.github.io/old-dragging/",
      repo: "https://github.com/lkalliance/old-dragging",
      image: "/images/dragging.png",
    },
  ];

  await Project.collection.insertMany(projects);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
