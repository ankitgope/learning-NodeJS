import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
  // will be making a  object
  // const data =[
  //   icon(will be same for evey ) , desc, filesize, coseOrDownload , tagdetails
  // ];
  const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur yo yo .",
      filesize: "9.6mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Nowx", tagColour: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur yo yo .",
      filesize: "9.6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Nowy", tagColour: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur yo yo .",
      filesize: "9.6mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColour: "green" },
    },
  ];

  return (
    <div ref={ref} className="p-5 fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/20 flex gap-6 flex-wrap  ">
      {/* using dynamic rendering 
      in data.map the data in const data there is a object it will go every data an bring all the data and index and whatever i need to render from the object data it will render  
      */}
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
