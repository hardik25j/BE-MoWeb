module.exports = {
  database: {
    url: process.env.MONGO_URI
  },
  app: {
    name: 'moweb',
    apiURL: `${process.env.BASE_API_URL}`,
  },
};
