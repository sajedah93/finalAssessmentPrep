//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*
  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */
//writ your code here .....
				var players = [];

			function player(name){
				var onePlayer={};
				onePlayer={name:name}


			return {
				addInfo:function(age, position, level, availability){
					onePlayer.age=age;
					onePlayer.position=position;
					onePlayer.level=level;
					onePlayer.availability=availability;
					players.push(onePlayer)

				},
				increaseLevel:function(n){
					onePlayer.level+=n
					
				},
				isAvailable:function(){
					return onePlayer.availability;
					}
				}

				}
			

			function decrease(){
				for (var i = 0; i < players.length; i++) {
					if(players[i].age > 30){
						players[i].level-=1;
					}
				}
				return players
			}


			function sortPlayers(key){
				for (var i = 0; i < players.length; i++) {
					if(typeof(players[i][key]) === 'number'){
				players.sort(function(a,b){
					return a.players[i][key]-b.players[i][key]
				}) }else {

					players.sort(function(a, b){
				    var nameA=a.players[i][name].toLowerCase();
				    var nameB=b.players[i][name].toLowerCase();
				    if (nameA < nameB) 
				        return -1 
				    if (nameA > nameB)
				        return 1
				    return 0 
				})
				} 
			}
			return players
				}
				



