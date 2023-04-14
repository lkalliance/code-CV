const connection = require("../config/connection");
const { User, Project } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await Project.deleteMany({});

  const user = {
    username: "lkalliance",
    password: "12345678",
  };
  const projects = [
    {
      title: "Be For Reel",
      description:
        "Be For Reel was a project I worked on as the leader of a five-person team in the University of Minnesota Full Stack Coding Boot Camp. It included a username/password login, poll creation tools tied into IMDb's public API, and polls enriched with IMDb data. Users could submit a comment with their vote. The front page displayed six randomly-chosen polls, with the movie poster of one of its randomly-chosen options. Users each had a profile page, which showed all their created quizzes and all their submitted comments.",
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
    },
    {
      title: "You Get a Tech Blog!",
      description:
        "You Get a Tech Blog was an assignment in the University of Minnesota Coding Boot Camp; a primer into content management systems and authentication.",
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
    },
    {
      title: "Ringnut Jeopardy",
      description:
        "I coded this way back before I had gotten any training, in a distant youth: a time when I was just teaching myself JavaScript as I went along. It was a fun project for the benefit of a social group of Lord of the Rings fans.",
      techs: ["HTML", "CSS", "JavaScript"],
      url: "https://lkalliance.github.io/old-jeopardy/index.htm",
      repo: "https://github.com/lkalliance/old-jeopardy",
    },
  ];

  await User.create(user);
  await Project.collection.insertMany(projects);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(user);
  console.table(projects);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
