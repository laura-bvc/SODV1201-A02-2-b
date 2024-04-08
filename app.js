const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());


app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: 'Tee',
		size: 'large'
	});
});

app.post('/tshirt/:id', (req, res) => {
	const {id} = req.params;
	const {logo} = req.body;
	
	if (!logo) {
	res.status(418).send( { message: 'We need a logo!!'});
	}
	res.send({
		tshirt: `Tshirt with your logo ${logo} and ID of ${id}`
	});
});


app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}........`)
})