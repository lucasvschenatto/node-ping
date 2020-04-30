let express = require('express')
let app = express( )

app.get('*',(req,res) => {
	res.send('Request received')
})

app.listen(3478,()=>{console.log(`listening on port 3478`)})
