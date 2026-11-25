const mongoose = require('mongoose')


//Schema bana hai ki mujhe user se kis type ka data lena hai uske according wahi hi schema banana hoga
let notesSchema = new mongoose.Schema({
	title: {
		type:String,
		required:true,},
	discription:{
		type:String,
		minlength: 5,
	  },
});

//Model -> ab yaha banega model jo ki Schema ka collection banayega mongoDb me

const NotesModel = mongoose.model('notes',notesSchema);
module.exports = NotesModel

