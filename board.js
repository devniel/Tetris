function board(){
	
	// animator of blocks-
	animator = [];
	
	// map of blocks, global.
	map = [];
	id = 0;
	
	// CONSTANT SPEED
	SPEED = 0.5;
	
	// CONTROL
	control = null;
	
	// SIZE OF miniBLOCKS
	SIZE = 20;
	
	
	// CREATE BOARD, ( ESP : Lienzo detrás del lienzo )
	var board = document.createElement("canvas");
	board.style.display = "none";
	board.width = document.querySelector("#canvas").width;
	board.height = document.querySelector("#canvas").height;
	board.className = "board";
	
	// ANIMATE BLOCKS | setInterval == Thread
	setInterval(function() {
	
			if(control == null){
				// Create multiBLOCK
				
				// Legal positions -> 400 / 20 = 20
				// 0 20 40 60 80 100 120 140 
				var lp = [0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400];
				
				// Type
				var tp = [1,2,3,4];
				
				var randomLp = lp[Math.floor(Math.random()*lp.length)];
				var randomTp = tp[Math.floor(Math.random()*tp.length)];
				
				// Random Color
				var randomColor = "rgb(" + Math.floor(Math.random() * 225) + "," + Math.floor(Math.random() * 225) + "," + Math.floor(Math.random() * 225) + ")";
				
				//alert(randomColor);

				mb2 = new mblock(board,randomTp,randomLp,randomColor);	
				mb2.build();
				mb2.fall();
				control = mb2;
				
			}
	
			// Clear the canvas
			board.getContext("2d").clearRect(0,0,board.width,board.height);
			
			// Detect if a block is in the limit
			for(i in map){
				if(map[i].posy <=0){
					alert("YOU FAIL");
				}
			}
			
			// Search the array of objects in Animator and show these.
			for(i in animator){
				if(animator[i] != null){
				
					// A simple BLOCK. NOT a MULTIBLOCK
					board.getContext("2d").save();
					board.getContext("2d").fillStyle = animator[i].color;
					board.getContext("2d").strokeStyle = "#000";
					board.getContext("2d").lineWidth = "0.5";
					board.getContext("2d").lineCap = "bevel";
					board.getContext("2d").globalCompositeOperation =  "source-over";
					board.getContext("2d").fillRect(animator[i].posx,animator[i].posy,animator[i].width,animator[i].height);
					board.getContext("2d").strokeRect(animator[i].posx,animator[i].posy,animator[i].width,animator[i].height);
					board.getContext("2d").restore();
				}
				
			}
			
			canvas.getContext("2d").putImageData(board.getContext("2d").getImageData(0,0,board.width,board.height), 0, 0);
			
	},SPEED,false);
	
	document.querySelector("#game").appendChild(board);
	
	// LISTENERS OF EVENT KEYS
	
	window.addEventListener("keydown", function(e){
	
		if(e.keyCode == 40){
			control.moveDown();
		}
		
		if(e.keyCode == 32){
			control.change();
		}
		
		if(e.keyCode == 39){
			control.moveRight();
		}
		
		if(e.keyCode == 37){
			control.moveLeft();
		}
		
	}, false);

}