# which-chord-next
This web app helps musicians create chord progressions by suggesting which chord they should use next.

## Installation and running the app locally
This app uses React JS. Install the node packages by running `npm install` in the root directory.

Run `npm start` to run the app. It will automatically serve the the app on `localhost:3000`.

## Version 1.0
For this version, I am just going to provide suggestions for the chords that are diatonic to the major scale. To get the functionality up and running quickly, I'm going to use bootstrap styles.

The basic idea will be that there is 'chordMap' object, which contains the chords (as numbers, 1-7), and then, for each chord, has an array with all the other chords that can follow it.