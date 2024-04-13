import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import a1 from "../assets/image/Programming.jpeg";
import a2 from "../assets/image/rene2.jpeg";
import a3 from "../assets/image/porto2.jpeg";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const originalText = " I I exude a captivating blend of charisma and intelligence, effortlessly drawing people into my orbit. With a natural knack for communication, I navigate social situations with ease, leaving a lasting impression on those I encounter.";
  const typingSpeed = 80; 

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < originalText.length) {
        setText((prevText) => prevText + originalText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return <p className="px-8 font-bold">{text}</p>;
};

const Home = () => {
  return (
    <div className="container mx-auto bg-black">
      <div className="">
        <div className="hidden lg:block z-0 h-32" style={{ backgroundImage: `url(${a3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '70vh', backgroundAttachment: 'fixed' }}></div>
        <div className="bg-black text-white lg:flex lg:z-0">
          <div id="ix" className="w-1/2 py-4 pl-6">
            <div id="aa" className=" lg:flex">
              <div className="w-1/2">
                <img src={a2} alt="a1" className="rounded-full w-64" />
              </div>

              <div className="w-1/2 pt-32">
                <h1 className="text-yellow-700">Name:</h1> BANA RUSIZANA Rene Francis
                <h1 className="text-yellow-700">Profile:</h1> Full Stack developer
                <h1 className="text-yellow-700">Email:</h1> renefrancisco808@gmail.com
                <h1 className="text-yellow-700">Phone:</h1> 0787977557<br></br>
                <a href="/path/to/your/cv.pdf" download="your_cv.pdf"><button className="bg-yellow-700 p-2 rounded-xl hover:bg-yellow-500">Get My CV</button></a>
              </div>
            </div>
            {/* <div className="py-8"> 
              <p  className="text-yellow-700 text-xl font-bold" >Skills:</p>
              <p className="text-l font-semibold">HTML 90%</p>
              <p className="text-l font-semibold"> CSS 75%</p>
              <p className="text-l font-semibold">JAVASCRIPT 75%</p>
            </div> */}
          </div>
          <div id="topdiv" className="w-1/2 justify-center py-12">
            <TypingAnimation />
            <button id="btt"
              className="bg-yellow-700 p-2 rounded-xl hover:bg-yellow-500"
              onClick={() => window.location.href = 'tel:+250787977557'}
            >
              Make a Real Call
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
