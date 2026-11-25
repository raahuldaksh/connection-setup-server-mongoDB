const { default: mongoose } = require("mongoose")

const connectDb = async () => {
	try {
		const uri = process.env.MONGODB_URI;
		if (!uri) {
			throw new Error('MONGODB_URI environment variable is required');
		}
		await mongoose.connect(uri)
		console.log('mongoDB is connect sucessful')
	} catch (error) {
		console.error('error while mongodb connecting', error)
	}
};

module.exports = connectDb;
