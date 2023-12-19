import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4 h-[39vh]">
      <div className="container mx-auto flex flex-row justify-between  items-center mt-4">
        <div > 
          <h1 className="text-2xl font-bold">सaksham </h1>
          <p className="text-md mt-3 ">Promoting Education and Inclusion <p>to empower, educate and enspire</p></p>
          
        </div>
        <div > 
          <div className="flex flex-row justify-around mt-2">
            <div className="flex flex-col mx-5">
              <div className="font-semibold  text-lg">Services</div>
              <div className="font-normal my-1">Services</div>
              <div className="font-normal my-1">Services</div>
              <div className="font-normal my-1">Services</div>
            </div>
            <div className="flex flex-col mx-5">
              <div className="font-semibold  text-lg">Links</div>
              <div className="font-normal my-1">Services</div>
              <div className="font-normal my-1">Services</div>
              <div className="font-normal my-1">Services</div>
            </div>        
            <div className="flex flex-col mx-5">
              <div className="font-semibold text-lg">Connect</div>
              <div className="font-normal my-1">Services</div>
              <div className="font-normal my-1">Services</div>
              <div className="font-normal my-1">Services</div>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
