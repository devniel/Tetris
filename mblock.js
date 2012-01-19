function mblock(canvas,type,posx,color){
	
	// ID OF THE BLOCK
	this.id = id;
	id+=1;
	
	// WIDTH OF THE MULTI BLOCK
	this.width = null;
	
	// ARRAY of blocks
	this.blocks = [];
	
	//FORM
	this.form = 0;
		  
	// BUILD
	this.build = function(){
		
		// CREATE A MULTIBLOCK WITH A BINARY ARRAY, each ONE is a BLOCK
		// TYPE 1
		if(type == 1){
			this.form = 0; // FORM (style) 0
			plane = [0,1,0,0,
					 1,1,1,0,
					 0,0,0,0,
					 0,0,0,0];
		}
		// TYPE 2
		else if(type == 2){
			this.form = 0; // FORM (style) 0
			plane = [1,1,0,0,
					 1,1,0,0,
					 0,0,0,0,
					 0,0,0,0]; 	
		}
		// TYPE 3
		else if(type == 3){
			this.form = 0; // FORM (style) 0 
			plane = [1,1,1,0,
					 1,0,0,0,
					 0,0,0,0,
					 0,0,0,0];	
		}
		// TYPE 4
		else if(type == 4){
			this.form = 0; // FORM (style) 0
			plane = [1,0,0,0,
					 1,0,0,0,
					 1,0,0,0,
					 1,0,0,0];	
		}
		

			console.log("TIPO NO DEFINIDO : " + type);		
		
		
		for(var w=0;w<4;w++){
				if(plane[w] == 1){
					this.width += SIZE;
				}
			}

		builder(this,plane,posx,null,color); // BUILD THE MULTIBLOCK 
		
	}
	
	// FALL 
	this.fall = function(){
		var stopped = false;
		this.action = window.setInterval(function(obj){
			return(function(){
				
				for(i in obj.blocks){
					if(obj.blocks[i].posy + obj.blocks[i].height == obj.blocks[i].board.height){
						obj.stop();
						stopped = true;
						break;
					}
				}
				
				if(!stopped){
					z=0;
					while(z<map.length && stopped == false){
						for(h in obj.blocks){
							if(map[z].posy == (obj.blocks[h].posy + obj.blocks[h].height) && map[z].posx == obj.blocks[h].posx){
								obj.stop();
								stopped = true;
							}
						}
						z++;
					}
				}
				
				if(!stopped){
					for(j in obj.blocks){
							obj.blocks[j].posy += obj.blocks[j].height;
					}
				}
				
			});
		}(this),SPEED);
	}
	
	this.stop = function(){
		control = null;
		clearInterval(this.action);
		for(i in this.blocks){
			map.push(this.blocks[i]);
		}
		
	}
	
	this.pause = function(){
		clearInterval(this.action);
	}
	
	this.getPosy = function(){
		maxHeight = 1000;
		for(i in this.blocks){
			if(this.blocks[i].posy < maxHeight){
				maxHeight = this.blocks[i].posy;
			}
		}
		return maxHeight;	
		
	}
	
	this.getPosx = function(){
		maxWidth = 1000;
		for(i in this.blocks){
			if(this.blocks[i].posx < maxWidth){
				maxWidth = this.blocks[i].posx;
			}
		}
		return maxWidth;	
	}
	
	this.moveRight = function(){
		for(i in this.blocks){
					this.blocks[i].posx += this.blocks[i].width;
				}		
	}
	
	this.moveLeft = function(){
		
		for(i in this.blocks){
				this.blocks[i].posx -= this.blocks[i].width;
		}
		
	}
	
	this.moveDown = function(){
		
		for(i in this.blocks){
					if(this.blocks[i].posy + this.blocks[i].height != this.blocks[i].board.height){
							this.blocks[i].posy += this.blocks[i].height;
					}
		}
		
	}

	
	this.change = function(){
		
		if(type == 1){
		// TYPE I
			if(this.form == 0){
				this.form = 1;
				plane = [1,0,0,0,
						 1,1,0,0,
						 1,0,0,0,
						 0,0,0,0]; 
			}
			else if(this.form == 1){
				this.form = 2;
				plane = [1,1,1,0,
						 0,1,0,0,
						 0,0,0,0,
						 0,0,0,0]; 
			}
			else if(this.form == 2){
				this.form = 3;
				plane = [0,1,0,0,
						 1,1,0,0,
						 0,1,0,0,
						 0,0,0,0]; 
			}
			else if(this.form == 3){
				this.form = 0;
				plane = [0,1,0,0,
						 1,1,1,0,
						 0,0,0,0,
						 0,0,0,0]; 
			}
		}
		// TYPE III
		else if(type == 3){
		
			if(this.form == 0){
				this.form = 1;
				plane = [1,0,0,0,
						 1,0,0,0,
						 1,1,0,0,
						 0,0,0,0];	 		 
			}
			else if(this.form == 1){
				this.form = 2;
				plane = [0,0,1,0,
						 1,1,1,0,
						 0,0,0,0,
						 0,0,0,0]; 
			}
			else if(this.form == 2){
				this.form = 3;
				plane = [1,1,0,0,
						 0,1,0,0,
						 0,1,0,0,
						 0,0,0,0]; 
			}
			else if(this.form == 3){
				this.form = 0;
				plane = [1,1,1,0,
						 1,0,0,0,
						 0,0,0,0,
						 0,0,0,0]; 
			}
		}
		// TYPE IV
		else if(type == 4){
		
			if(this.form == 0){
				this.form = 1;
				plane = [1,1,1,1,
						 0,0,0,0,
						 0,0,0,0,
						 0,0,0,0];	 		 
			}
			else if(this.form == 1){
				this.form = 0;
				plane = [1,0,0,0,
						 1,0,0,0,
						 1,0,0,0,
						 1,0,0,0]; 
			}
		}
		
		var h = this.getPosy();
		
		var x = this.getPosx();
		
		this.pause();
		
		i=0;
		
		var found = false;
		
		while(i<animator.length && found == false){
			if(animator[i].id == this.id){
				found = true;
				var index = i;
				console.log(animator[i]);
				console.log("Animator : " + animator);
			}
			i++;
		}
		
		if(found){
			animator.splice(index,4);
		}
		
		/*for(i in this.blocks){
			canvas.getContext("2d").clearRect(this.blocks[i].posx,this.blocks[i].posy,this.blocks[i].width,this.blocks[i].height);
			
		}*/
		
		canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
		
		delete this.blocks;
		
		this.blocks = [];
		
		builder(this,plane,x,h,color);

		this.fall();
		
		
	}
	
}
