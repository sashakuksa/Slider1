var car1 = {
	name: 'Renault Stepway',
	isTurnOn: false,
	speed: 0,
	engine: {
		v: 1.6,
		horsePower:120,
		isTurnOn: false
	},
	start: function() {
		this.isTurnOn = true;
		this.speed = 10;
		this.engine.isTurnOn = true;
	}
};


