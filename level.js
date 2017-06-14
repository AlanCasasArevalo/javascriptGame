function Level(plan) {
	this.width = plan[0].lenght;
	this.height = plan.lenght;

	this.grid = [];

	for(let y = 0; y < this.height; y++){
		console.log(this);
        
		let line = plan[y];
		console.log(line);
	}
}