"use strict";
let Guest_List = ["Kamran Khan Tessori", "Daniyal Nagori", "Zia Khan"];
// for(let i=0; i<Guest_List.length; i++) {
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n') ;
// }
let absent_Guest = "Kamran Khan Tessori";
let new_Guest = "Ameen Alam";
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.');
Guest_List.unshift('Sir Asharib Ali');
Guest_List.splice(2, 0, 'sir ubaid');
Guest_List.push('sir Taha Ahmed');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
