//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality
	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? 
	think of a way to pass them in your function
*/
// write your code here ...

var friends = [{name:"ola" , age:23 , nationality:"syriab" , education:"physics" ,id:1},
{name:"marwa" , age:24 , nationality:"Syrian" , education:"CS" , id:2}] ;

function creatFreind(name,age,nationality,education,id){
	return friends.push({name:name,
		age:age,
		nationality:nationality,
		education:education,
		id:id})
};



function showFriend(name){
	var res="";

	for (var i = 0; i < friends.length; i++) {
		if(friends[i].name === name){
			res= friends[i].name + " with the age of "+friends[i].age+
			" with "+friends[i].education +" education "
		}
	}
	return res;

}


function avergeStudents(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum+=array[i].age;
	}
	return sum/array.length;
}



/*
 b-create a function called rangeSquared in
  which it will accept two parameters, 
  and will output the squared numbers 
 between these two parameter if 
 the number is even 
	in order to square the numbers create a 
	function called square and call 
	it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....


function rangeSquared(num1,num2){
	var newArr=[];
	i
	for (var i = num1; i <=num2 ;i++) {
		if(i%2 === 0){
		newArr.push(square(i))
}
	}
	return newArr
}

function square(x){
	return x*x;
}