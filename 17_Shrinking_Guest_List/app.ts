// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let Guest_List : string[] = ["Kamran Khan Tessori" , "Daniyal Nagori" , "Zia Khan"] ;
// for(let i=0; i<Guest_List.length; i++) {
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;
// }
let absent_Guest : string = "Kamran Khan Tessori";
let new_Guest : string = "Ameen Alam";
Guest_List[0]= new_Guest ;

// for(let i=0; i<Guest_list.length; i++) {
//      console.log(`Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n)
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.')

//Array m 3 guest add kye hen.
 Guest_List.unshift('Sir Asharib Ali');
 Guest_List.splice(2 , 0 , 'sir ubaid');
 Guest_List.push('sir Taha Ahmed');

 //Yahan pr mene 6 guest k array ko print kraya h.
 for(let i=0; i<Guest_List.length; i++) {
   console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;

}
//sorry guest for not inviting
console.log('\nSorry we can not arrange big table, only two peoples will be invited.');

//Yahan par mene guest remove kye hen.
while(Guest_List.length > 2) {
  let remove_Guest =  Guest_List.pop();
  console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner`);
}

//Hmare bchy huy 2 invited guest.
for(let i=0; i<Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n') ;
 
 }

//Mene sare guest array s remove kr dye.
 Guest_List.splice(0, 2);
 console.log(Guest_List);