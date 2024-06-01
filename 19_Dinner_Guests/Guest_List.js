"use strict";
let Guest_List = ["Kamran Khan Tessori", "Daniyal Nagori", "Zia Khan"];
// for(let i=0; i<Guest_List.length; i++) {
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;
// }
let absent_Guest = "Kamran Khan Tessori";
let new_Guest = "Ameen Alam";
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++) {
//      console.log(`Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n)
// }
//console.log(`Mr. ${absent_Guest} is not coming to the party.`);
//console.log('Good News! We find big table so we are inviting 3 more guests.')
//Array m 3 guest add kye hen.
Guest_List.unshift('Sir Asharib Ali');
Guest_List.splice(2, 0, 'sir ubaid');
Guest_List.push('sir Taha Ahmed');
//Yahan pr mene 6 guest k array ko print kraya h.
//for(let i=0; i<Guest_List.length; i++) {
//  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;
//}
//sorry guest for not inviting
//console.log('\nSorry we can not arrange big table, only two peoples will be invited.');
//Yahan par mene guest remove kye hen.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    //  console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner`);
}
//Hmare bchy huy 2 invited guest.
//for(let i=0; i<Guest_List.length; i++) {
//   console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n') ;
//}
//Mene sare guest array s remove kr dye.
Guest_List.splice(0, 2);
console.log(Guest_List);
//Exercise 19
//print a message indicating the number of peaple you are inviting to dinner.
console.log(`Total number of Guest are: ${Guest_List.length}`);
