
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8 bg-black text-white h-auto ">
      <div className="px-8">
      <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
        <p>
          Phasellus eu tellus sit amet tortor gravida placerat. Integer sapien
          est, iaculis in, pretium quis, viverra ac, nunc. Praesent eget sem vel
          leo ultrices bibendum.
        </p>
      </div>

      {/* Skills Section */}
      <div className="pt-2">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="mb-4">
          <p className="mb-2">JavaScript</p>
          <div className="w-full bg-gray-300 rounded-lg">
            <div
              className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2">HTML</p>
          <div className="w-full bg-gray-300 rounded-lg">
            <div
              className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2">Python</p>
          <div className="w-full bg-gray-300 rounded-lg">
            <div
              className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default About;
