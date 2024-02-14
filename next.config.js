const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if(phase ===PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: "francisdwine",
                mongodb_password: "RJJjKg8yqnTo97jy",
                mongodb_clustername: "cluster0",
                mongodb_database: "mysite",
              },
        }
    }
  return {
    env: {
      mongodb_username: "francisdwine",
      mongodb_password: "RJJjKg8yqnTo97jy",
      mongodb_clustername: "cluster0",
      mongodb_database: "messages5",
    },
  };
};
