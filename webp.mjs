import imagemin from "imagemin";
import webp from "imagemin-webp";

// outputFolder είναι το αρχείο που θα μπουν οι webp φωτογραφίες
const outputFolder = "./img";
const produceWebP = async () => {
//το img/ είναι το αρχείο που έχει τις φωτογραφίες Png και jpg. Εάν το όνομα
// του φακέλου είναι άλλο βάλτε το αντίστοιχο όνομα.
 await imagemin(["img/*.png"], {
  destination: outputFolder,
  plugins: [
   webp({
    lossless: true,
   }),
  ],
 });
 console.log("PNGs processed");
 await imagemin(["img/*.{jpg,jpeg}"], {
  destination: outputFolder,
  // * Εάν τα jpg αρχεία είναι ήδη optimized τότε το quality 
  //ενδέχετε να χρειάζεται να το βάλετε στο 100%
  plugins: [
   webp({
    quality: 65,
   }),
  ],
 });
 console.log("JPGs and JPEGs processed");
};
produceWebP();