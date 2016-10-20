function getHi(req,res){
	console.log('Hello v1');
	res.sendStatus(200);
};

function getBye(req,res){
	console.log('Goodbye v1');
	res.sendStatus(200);
}

module.exports.getHi = getHi;
module.exports.getBye = getBye;