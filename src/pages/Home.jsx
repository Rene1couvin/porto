import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import your TypingAnimation component here
import a2 from "../assets/image/rene2.jpeg";
import a3 from "../assets/image/porto2.jpeg";
import ProjectCard from "../components/ProjectCard"
// import cv from "../src/docs/CV"

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const originalText =
    "I exude a captivating blend of charisma and intelligence, effortlessly drawing people into my orbit. With a natural knack for communication, I navigate social situations with ease, leaving a lasting impression on those I encounter.";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };



  return (
    <div className="container mx-auto justify-items-center md:justify-items-center bg-black ">
      <div id="home" className="container mx-auto bg-black">
        <div className="">
          <div
            // className="hidden lg:block z-0 h-32"
            // style={{
            //   backgroundImage: `url(${a3})`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   height: "70vh",
            //   backgroundAttachment: "fixed",
            // }}
            className="lg:flex"
          >
            <div className="px-8 pt-8 w-1/3">
              <img src={a2} className="rounded-xl  w-64" />
            </div>
            <div className="w-2/3 pt-12">
              <p className="text-yellow-500 pt-12 px-8 text-6xl">HELLO!</p>

              <p className="text-white text-4xl px-8">I'm BANA RUSIZANA Rene Francis, <br /> a Web-designer based in Rwanda.</p>
            </div>
          </div>
          <div className="bg-black text-white lg:flex lg:z-0">


            <div id="topdiv" className=" justify-center py-12">
              <TypingAnimation />
              <div className="px-8 py-4 flex ">
                <div>
                  <button
                    id="btt"
                    className="bg-yellow-700  p-2 rounded-xl hover:bg-yellow-500"
                    onClick={() => (window.location.href = "tel:+250787977557")}
                  >
                    Make a Real Call
                  </button>
                </div>
                <div className="px-4">
                  <a
                    href="/home/couvin/Desktop/couvin/portifolio/porto/src/docs/cv.docx"
                    download="your_cv.cv.docx"
                  >
                    <button className="bg-yellow-700 p-2 px-8 rounded-xl hover:bg-yellow-500">
                      Get My CV
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="about" className="anchor">
        <div className="container mx-auto py-8 bg-black text-white h-auto">
          <div className="px-4">
            <div className="container  px-4 lg:px-8 py-8">
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
              <div className=" lg:flex">
                <hr/>
                <ProjectCard
                  description="This is a sample project description."
                  image="https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg"
                  title="fjvfdkj" />
                <ProjectCard
                  description="This is a sample project description."
                  image="https://i.pinimg.com/564x/d0/75/80/d075805b186c10f0f4068eed87664950.jpg"
                  title="fjvfdkj" />
                <ProjectCard
                  description="This is a sample project description."
                  image="https://i.pinimg.com/564x/d0/75/80/d075805b186c10f0f4068eed87664950.jpg"
                  title="fjvfdkj" />
                  <ProjectCard
                  description="This is a sample project description."
                  image="https://i.pinimg.com/564x/d0/75/80/d075805b186c10f0f4068eed87664950.jpg"
                  title="fjvfdkj" />
                  <ProjectCard
                  description="This is a sample project description."
                  image="https://i.pinimg.com/564x/d0/75/80/d075805b186c10f0f4068eed87664950.jpg"
                  title="fjvfdkj" />
                  <ProjectCard
                  description="This is a sample project description."
                  image="https://i.pinimg.com/564x/d0/75/80/d075805b186c10f0f4068eed87664950.jpg"
                  title="fjvfdkj" />

              </div>

            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="anchor">
        <div className="container mx-auto px-4 lg:px-8 py-8 bg-black text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="container mx-auto px-4 lg:px-8 py-8 bg-black text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="pb-16 md:justify-center">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-1/2 text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-500">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 text-black block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-500">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black" required />
              </div>
              <button type="submit" className="bg-yellow-700 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
