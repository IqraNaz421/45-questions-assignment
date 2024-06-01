"use strict";
function make_album(artist, tittle, tracks) {
    const album = {
        artist: artist,
        tittle: tittle
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist 1", "Album Tittle 1");
console.log(album1);
const album2 = make_album("Artist 2", "Album Tittle 2");
console.log(album2);
const album3 = make_album("Artist 3", "Album Tittle 3", 12);
console.log(album3);
