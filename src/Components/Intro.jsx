import Hero_image from "./Images/hero-image.png";
import Flipkart from "./Images/flipkart.png";
import Amazon from "./Images/amazon.png";

const Intro = () => {
  return (
    <div className="flex items-center justify-start w-[80vw] m-[5vw] ">
      <div className=" flex-col w-[60vw]">
        <div className="text-8xl uppercase font-bold w-[35vw] mb-4">
          Your Feet deserve the best
        </div>
        <div className="text-xl font-mono w-1/2 mb-6">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </div>
        <div className="flex items-center gap-14 text-4xl">
          <div>
            <button className="px-3 py-1 bg-red-200 hover:bg-amber-500 rounded-lg cursor-pointer">
              Shop
            </button>
          </div>
          <div>
            <button className="px-3 py-2 hover:bg-amber-500 bg-red-200 rounded-lg cursor-pointer">
              Category
            </button>
          </div>
        </div>
        <div className="mb-5">Also Available on</div>
        <div className="flex items-center gap-4">
          <div>
            <img src={Amazon} alt="" className="cursor-pointer" />
          </div>
          <div>
            <img src={Flipkart} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <img src={Hero_image} alt="" />
      </div>
    </div>
  );
};

export default Intro;
