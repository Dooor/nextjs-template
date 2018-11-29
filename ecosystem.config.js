
module.exports = {
  /**
   * Application configuration section
   * - http://pm2.keymetrics.io/docs/usage/application-declaration/
   * - https://pm2.io/doc/en/runtime/reference/ecosystem-file/
   */
  apps: [
		{
			name        : "nextjs-template",
      script      : ".next/backend/index.js",
			instances   : process.env.PM2_NUMBER_OF_INSTANCES,
      exec_mode   : "cluster",
			env: {
        "PORT": 3000,
				"NODE_ENV": "development"
			},
			env_production : {
        "NODE_ENV": "production",
        "PORT": process.env.PORT
			}
		}
	]
};
