/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        icon: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/i,
    });

		return config;
	},
};



