function block(size){
	
	// DIMENSIONS
	this.width = size;
	this.height = size;
	
	//alert(this.width + " " + this.height);
	
	// ID
	this.id;
	
	// POSITIONS
	this.posx;
	this.posy;
	
	// BOARD
	this.board;
	
	// SPEED
	this.speed = SPEED;
	
	// COLOR
	this.color = "#000000";
	
	// SET WIDTH
	this.setWidth = function(width){
		this.width = width;
	}
	
	// SET HEIGHT
	this.setHeight = function(height){
		this.height = height;
	}
	
	// GET WIDTH
	this.getWidth = function(){
		return this.width;
	}
	
	// GET HEIGHT
	this.getHeight = function(){
		return this.height;
	}
	
	// SET COLOR
	this.setColor = function(color){
		this.color = color;
	}
	
	// GET COLOR
	this.getColor = function(){
		return this.color;
	}
	
	// SET POSITION
	this.setPos = function(posx,posy){
		this.posx = posx;
		this.posy = posy;
	}
	
	// SET SPEED
	this.setSpeed = function(speed){
		this.speed = speed;
	}
	
	// SET ID
	this.setId = function(idi){
		this.id = idi;
	}
	
	// PUT BLOCK IN BOARD
	this.putIn = function(canvas){
		this.board = canvas;
		animator.push(this);
	}
 
}
