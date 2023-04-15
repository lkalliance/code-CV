const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const db = require("./config/connection");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 180,
    httpOnly: true,
  },
  rolling: true,
  resave: false,
  saveUninitialized: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
