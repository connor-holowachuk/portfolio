/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'assets.aceternity.com',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
				port: '',
				pathname: '**',
			},
		],
	},
	env: {
		DATABASE_URL: process.env.DATABASE_URL,
	},
};
