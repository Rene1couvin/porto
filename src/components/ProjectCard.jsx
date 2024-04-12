import React from "react";

const ProjectCard = ({  description, imageUrl }) => {
  return (
    <div className=" rounded-lg p-4 flex">
      <div className="px-4"><img src={imageUrl} alt="" className="w-full mb-4 rounded-md" /></div>
      <div><p className="text-gray-600">{description}</p></div>
    </div>
  );
};

export default ProjectCard;
