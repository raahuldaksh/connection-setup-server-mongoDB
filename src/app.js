const express = require('express');
const connectDb = require('./config/db');
const NotesModel = require('./models/note.model');

let app = express();
app.use(express.json());

connectDb()

app.get('/', (req , res) => {
	res.send('server is active now')
});

app.post('/create', async (req , res) => {
  	let { title, discription } = req.body;

	console.log(title,discription)

	const newNotes = await NotesModel.create({
		title,
		discription,
	})

	res.send({success:true,
		message:"Note created successfully",
		data:newNotes,
	});
});

module.exports = app;