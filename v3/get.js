function getHi(req,res){
	console.log('Hello v3');
	res.sendStatus(200);
};

function getBye(req,res){
	console.log('Goodbye v3');
	res.sendStatus(200);
}

module.exports.getHi = getHi;
module.exports.getBye = getBye;