function builder(parent,plane,posx,posy,color){
	
		// SIZE ( WIDTH AND HEIGHT )
		size = SIZE;
		
		i = 0;
		
		if(typeof posy == "undefined"){
			y = 0;
		}
		else {
			y = posy;
		}
		
		// SWITCH
		row = null;
		
		// While i is lower than the length of the plane or BINARY ARRAY
		
		while(i<plane.length){
				
				// ROW 0
				if(i<4){ // 0 1 2 3
					// SWITCHER
					if(row==null){
						x = posx;
						row = 0; // <-- fila
					}
					
					if(plane[i] != 0){
						// CREATE BLOCK
						obj = new block(size);
						obj.setPos(x,y + obj.getWidth()*row); // POSITION
						obj.setId(parent.id); // ID (for group in a MULTIBLOCK)
						obj.putIn(canvas); // DRAW IN THE CANVAS
						obj.setColor(color); // SET COLOR
						parent.blocks.push(obj); // PUSH IN THE ARRAY blocks OF THE MULTIBLOCK
						x+=obj.getWidth();
					}
					else {
			        	x+=size;
					}
				}
				
				// ROW 1 
				if(i>=4 && i<8){
					// SWITCHER
					if(row == 0 || row == null ){
						x = posx;
						row = 1; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block(size);
						obj.setPos(x,y + obj.getWidth()*row);
						obj.setId(parent.id);
						obj.putIn(canvas);
						obj.setColor(color);
						parent.blocks.push(obj);
						x+=obj.getWidth();
					}
					else {
			        	x+=size;
					}
				}
				
				// ROW 2
				if(i>=8 && i<12){
					// SWITCHER
					if(row == 1 || row == null){
						x = posx;
						row = 2; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block(size);
						obj.setPos(x,y + obj.getWidth()*row);
						obj.setId(parent.id);
						obj.putIn(canvas);
						obj.setColor(color);
						parent.blocks.push(obj);
						x+=obj.getWidth();
					}
					else {
			        	x+=size;
					}
					
				}
				
				// ROW 3
				if(i>=12){
					// SWITCHER
					if(row == 2 || row == null ){
						x = posx;
						row = 3; // <-- fila
					}
					
					if(plane[i] != 0){
						obj = new block(size);
						obj.setPos(x,y + obj.getWidth()*row);
						obj.setId(parent.id);
						obj.putIn(canvas);
						obj.setColor(color);
						parent.blocks.push(obj);
						x+=obj.getWidth();
					}
					else {
			        	x+=size;
					}
				}
			i++;
		}
}