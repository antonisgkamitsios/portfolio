module.exports = {
  apps : [
      {
        name: "portfolio",
        script: "./server.js",
        watch: true,
        env: {
          "NODE_ENV": "production",
        }
      }
  ]
}
