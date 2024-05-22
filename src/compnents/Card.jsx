import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"
//below we are getting the values from props there wre two way
// 1st way function Card(props) -> we can write and we have to write props.data every where needed
// 2nd way we use {} and performing destructuring function Card({data})
function Card({ data ,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.2} dragTransition={{bounceStiffness:100, bounceDamping:30}} className="relative w-60 flex-shrink-0 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden">
      {/* card compoent have 
           icon
           text
           footer 
               in footer --> data , tag */}

      {/* icons */}
      <FaFileAlt />
      {/* text */}
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      {/* footer 
               in footer --> data , tag */}
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-8 py-3 ">
          <h5>{data.filesize}</h5>
          {/* styling the icon  */}
          <span className="w-5 h-5 bg-sky-300 rounded-full flex items-center justify-center">
            {/* adding a condition for close icon &downlod button*/}
            {data.close ? (
              <MdClose />
            ) : (
              <MdOutlineFileDownload size=".8em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColour === "blue"?"bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h4 className="text-sm font-semibold">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
