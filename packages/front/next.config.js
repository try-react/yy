const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    basePath: isProd
      ? "https://yy-site.netlify.app/.netlify/functions"
      : "http://localhost:3000/api",
  },
};
