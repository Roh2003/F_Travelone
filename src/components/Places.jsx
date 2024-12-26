import React from "react";
import { AiFillStar } from "react-icons/ai";

const Places = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places not to be missed</h1>
        <p>
        Explore the World’s Wonders – Where Every Journey Becomes an Unforgettable Adventure!
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/kashmir.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/rajasthan.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/ujjain.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/jaipur.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/omkareshwar.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/doha.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Our Recomendation</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/kashmir.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Ladakh</p>
                <p className="font-bold">9999 /-Rs</p>
              </div>
              <p className="font-semibold">
              The ultimate destination for adventurers, surrounded by majestic mountains
              </p>
              <div className="flex justify-between items-center">
                <h2>10 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/paris.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">paris, France</p>
                <p className="font-bold">75000/-Rs</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.7</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/bali.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Bali</p>
                <p className="font-bold">50000/-Rs</p>
              </div>
              <p className="font-semibold">
              A tropical paradise, famous for its serene beaches and vibrant culture. 
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/dubai.jpg"
              alt=""     
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Dubai, UAE</p>
                <p className="font-bold">5000/-Rs</p>
              </div>
              <p className="font-semibold">
              The playground of luxury, known for its towering Burj Khalifa and desert adventures.
              </p>
              <div className="flex justify-between items-center">
                <h2>10 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.5</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/tokyo.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Tokyo, Japan</p>
                <p className="font-bold">45000/-Rs</p>
              </div>
              <p className="font-semibold">
              A futuristic metropolis blending tradition with cutting-edge innovation.
              </p>
              <div className="flex justify-between items-center">
                <h2>8 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>3.9</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/bali.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Bali, Indonesia</p>
                <p className="font-bold">56000/-Rs</p>
              </div>
              <p className="font-semibold">
              A tropical paradise, famous for its serene beaches and vibrant culture.
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.1</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/mysor.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Mysore, Karnataka</p>
                <p className="font-bold">8999/-Rs</p>
              </div>
              <p className="font-semibold">
              A city of palaces, with a rich cultural heritage and grand festivities. 
              </p>
              <div className="flex justify-between items-center">
                <h2>11 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/peru.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Andaman & Nicobar Islands</p>
                <p className="font-bold">15000/-Rs</p>
              </div>
              <p className="font-semibold">
              national", description: "A tropical paradise with pristine beaches and crystal-clear waters.
              </p>
              <div className="flex justify-between items-center">
                <h2>10 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.2</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Places;
