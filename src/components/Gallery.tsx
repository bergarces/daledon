import React from "react";

const Pieces = [
  {
    fileName: "Henri_Matisse__L'escargot.jpg",
    artist: "Henri Matisse",
    title: "L'escargot",
  },
  {
    fileName: "Paul_Don__White_Flowers.jpg",
    artist: "Paul Don",
    title: "White Flowers",
  },
  {
    fileName: "Pablo_Picasso__The_Three_Dancers.jpg",
    artist: "Pablo Picasso",
    title: "The Three Dancers",
  },
  {
    fileName: "Paul_Don__Landscape_1.jpg",
    artist: "Paul Don",
    title: "Landscape 1",
  },
  {
    fileName: "Paul_Don__Masonry_Colours.jpg",
    artist: "Paul Don",
    title: "Masonry Colours",
  },
  {
    fileName: "Paul_Don__Dice_Sculptures.jpg",
    artist: "Paul Don",
    title: "Dice Sculptures",
  },
  {
    fileName: "Johannes_Vermeer__A_Lady_Drinking_and_a_Gentleman.jpg",
    artist: "Johannes Vermeer",
    title: "A Lady Drinking and a Gentleman",
  },
  {
    fileName: "Henri_Matisse__Young_Woman.jpg",
    artist: "Henri Matisse",
    title: "Young Woman",
  },
  {
    fileName: "Paul_Don__Beach_Huts.jpg",
    artist: "Paul Don",
    title: "Beach Huts",
  },
  {
    fileName: "Johannes_Vermeer__A_Lady_at_the_Virginals_with_a_Gentleman.jpg",
    artist: "Johannes Vermeer",
    title: "A Lady at the Virginals with a Gentleman",
  },
  {
    fileName: "Van_Gogh__Wheat_Field_with_Cypresses.jpg",
    artist: "Van Gogh",
    title: "Wheat Field with Cypresses",
  },
  {
    fileName: "Paul_Don__OXO_Tower.jpg",
    artist: "Paul Don",
    title: "OXO Tower",
  },
  {
    fileName: "Paul_Don__Purple_Flowers.jpg",
    artist: "Paul Don",
    title: "Purple Flowers",
  },
  {
    fileName: "Henri_Matisse__Blue_Nude_1.jpg",
    artist: "Henri Matisse",
    title: "Blue Nude 1",
  },
  {
    fileName: "Henri_Matisse__Rouge_et_Noir.jpg",
    artist: "Henri Matisse",
    title: "Rouge et Noir",
  },
  {
    fileName: "Henri_Matisse__The_Green_Stripe.jpg",
    artist: "Henri Matisse",
    title: "The Green Stripe",
  },
  {
    fileName: "Henri_Matisse__Asia.jpg",
    artist: "Henri Matisse",
    title: "Asia",
  },
  {
    fileName: "Paul_Don__Landscape_2.jpg",
    artist: "Paul Don",
    title: "Landscape 2",
  },
  {
    fileName: "Paul_Don__Stripes.jpg",
    artist: "Paul Don",
    title: "Stripes",
  },
  {
    fileName: "Van_Gogh__Sunflowers.jpg",
    artist: "Van Gogh",
    title: "Sunflowers",
  },
  {
    fileName: "Paul_Don__Colours.jpg",
    artist: "Paul Don",
    title: "Colours",
  },
  {
    fileName: "Paul_Don__Monarch's_way.jpg",
    artist: "Paul Don",
    title: "Monarch's way",
  },
  {
    fileName: "Paul_Don__Trees.jpg",
    artist: "Paul Don",
    title: "Trees",
  },
  {
    fileName: "Paul_Don__Field.jpg",
    artist: "Paul Don",
    title: "Field",
  },
  {
    fileName: "Paul_Don__Buildings.jpg",
    artist: "Paul Don",
    title: "Buildings",
  },
  {
    fileName: "Paul_Don__Yellow_Submarine.jpg",
    artist: "Paul Don",
    title: "Yellow Submarine",
  },
  {
    fileName: "Henri_Matisse__Blue_Nude_2.jpg",
    artist: "Henri Matisse",
    title: "Blue Nude 2",
  },
  {
    fileName: "Paul_Don__Triptic.jpg",
    artist: "Paul Don",
    title: "Triptic",
  },
  {
    fileName: "Johannes_Vermeer__The_Lacemaker.jpg",
    artist: "Johannes Vermeer",
    title: "The Lacemaker",
  },
];

export default function Gallery() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Pieces.map(({ fileName, title, artist }) => (
        <div
          key={fileName}
          className="relative group overflow-hidden rounded-md"
        >
          <img
            className="max-w-full aspect-square object-cover object-center transition-all duration-300 group-hover:brightness-75 group-hover:scale-105"
            src={`pieces/${fileName}`}
            alt={title}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/100 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-bold">{title}</h3>
            <p className="text-gray-300 font-semibold">{artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
