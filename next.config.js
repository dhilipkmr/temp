const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
	[optimizedImages, {
		/* config for next-optimized-images */
		imagesFolder: 'images',
		imagesName: '[name]-[hash].[ext]',
		handleImages: ['jpg', 'png'],
		optimizeImages: true,
		optimizeImagesInDev: false,
		mozjpeg: {
			quality: 80,
		},
	}],

	// your other plugins here

]);