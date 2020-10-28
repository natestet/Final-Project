function socialDistancingCheck(){
	
	//Prompt user for initial inputs
	var numTables = window.prompt("Please enter the number of tables (in feet):");
	var numSeats = window.prompt("Please enter the number of seats at each table (in feet):");
	var DINING_ROOM_AREA = 1000;
	//tables are 4ftx4ft. To calculate the actual area of the table, 6 feet must be added to each dimension, resulting in an area value of 100 ft^2
	var TABLE_AREA = 100;
	var spareRoom = DINING_ROOM_AREA - (numTables*TABLE_AREA);
	var tableRemoval = numTables-10;
	var totalSeats = numSeats*numTables;
	var seatsAfterTableRemoval = (numTables*numSeats) - (tableRemoval*numSeats);

	if(numTables*TABLE_AREA<=DINING_ROOM_AREA){
		window.alert("You can fit your tables in the dining room while maintaining social distancing! You have " + spareRoom + " feet to spare and you can seat " + totalSeats + "people.");
	}else if(numTables*TABLE_AREA > DINING_ROOM_AREA){
		window.alert("You cannot fit all your tables in the dining room while maintaing social distancing. To maintain social distancing, you have to remove " + tableRemoval + " tables and then you will be able to seat " + seatsAfterTableRemoval + " people.");
	}
	
}
