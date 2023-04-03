const User = require("./User");
const Project = require("./Project");

User.hasMany(Project, {
  foreignKey: 'user_id'
});
Project.belongsTo(User);

module.exports = { User, Project };
