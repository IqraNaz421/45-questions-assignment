
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let Guest_List : string[] = ["Kamran Khan Tessori" , "Daniyal Nagori" , "Zia Khan"] ;
// for(let i=0; i<Guest_List.length; i++) {
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;
// }

 for(let i=0; i<Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;
 
 }
let absent_Guest : string = "Kamran Khan Tessori";
let new_Guest : string = "Ameen Alam";
Guest_List[0]= new_Guest ;

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.')

 Guest_List.unshift('Sir Asharib Ali');
 Guest_List.splice(2 , 0 , 'sir ubaid');
 Guest_List.push('sir Taha Ahmed');
 
 for(let i=0; i<Guest_List.length; i++) {
   console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;

}

