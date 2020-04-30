const express = require('express')

let ports = process.argv.slice(2)
if(!ports.length){
	ports = [3478]
}
console.log(`Ports to listen are:${ports}`)

ports.forEach((sPort) =>{	
	let app = express( )
	app.get('*',(req,res) => {
		let message = `Request received on port: ${sPort}`
		console.log(message)
		res.send(message)
	})
	app.listen(parseInt(sPort),()=>{console.log(`listening on port ${sPort}`)})
})
