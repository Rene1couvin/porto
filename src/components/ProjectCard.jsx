// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ description, image,title }) => {
  return (
    <div className="rounded-lg p-2">
      <div className="px-4"><img src={image} alt="" className="w-1/3 h-24 md:w-fit md:h-fit    lg:w-full lg:h-72 mb-4 rounded-md" /></div>
      <div><p className="text-gray-600">{description}</p></div>
      <div><p className="text-gray-600">{title}</p></div>
    </div>
  );
};

export default ProjectCard;
