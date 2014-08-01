/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Room = function(name) {
	var name = name,
		id;

	// Define which variables and methods can be accessed
	return {
		name: name,
		id: id
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.Room = Room;