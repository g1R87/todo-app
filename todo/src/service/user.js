const USERS = {};

const getUser = (id) => USERS[id];

const getUsers = () => Object.values(USERS);

const createUser = (user) => {
  const id = Date.now();

  const newUser = {
    id,
    ...user,
  };

  USERS[id] = newUser;

  return newUser;
};

module.exports = {
  getUser,
  getUsers,
  createUser,
};
