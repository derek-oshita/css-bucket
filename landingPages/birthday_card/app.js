const imageSection = document.getElementById("image-section");
const img = document.querySelector("img");
const randomIdx = Math.floor(Math.random() * 11);
const imageArray = [
  "static_photos/chelsea2011.jpeg",
  "static_photos/chelsea2012.jpeg",
  "static_photos/chelsea2013.jpeg",
  "static_photos/chelsea2014.jpeg",
  "static_photos/chelsea2015.jpeg",
  "static_photos/chelsea2016.jpeg",
  "static_photos/chelsea2017.jpeg",
  "static_photos/chelsea2018.jpeg",
  "static_photos/chelsea2018(2).jpeg",
  "static_photos/chelsea2019.jpeg",
  "static_photos/chelsea2020.jpeg",
  "static_photos/chelsea2021.jpeg",
];

img.src = `${imageArray[randomIdx]}`;
