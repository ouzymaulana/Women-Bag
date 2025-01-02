import React from "react";
import MainLayout from "../../Layout";
import image1 from "../../assets/img/bagmodel.jpg";
import image2 from "../../assets/img/bagmodel-two.jpg";
import welcomeBag from "../../assets/img/welcome-bag.svg";
import bagCat from "../../assets/img/bagCat.jpg";
import bagCat2 from "../../assets/img/bagCat2.svg";
import bagCat3 from "../../assets/img/bagCat3.svg";
import frame3 from "../../assets/img/Frame3.png";

export default function Home() {
  return (
    <MainLayout>
      <main className="mt-[139px] h-full flex px-24 py-20">
        <div className="flex justify-center items-center p-0 flex-1">
          <img src={image1} alt="image1" className="w-11/12" />
        </div>
        <div className="px-15 font-inriaserif font-extrabold flex-1 flex flex-col items-center justify-center space-y-5">
          <h1 className="text-7xl">Handbag for life</h1>
          <h1 className="text-7xl">-20%</h1>
          <h2 className="text-4xl">on the spring sale</h2>
          <button className="text-4xl bg-black text-white py-4 px-28">
            Catalogue
          </button>
        </div>
        <div className="flex justify-center items-center flex-1">
          <img src={image2} alt="image2" className="kk w-11/12" />
        </div>
      </main>
      <main className="flex px-96 justify-evenly items-center py-10 gap-28">
        <div className="font-inriaserif space-y-10 flex-1">
          <h2 className="text-5xl font-bold">Wellcome to WOMBAG</h2>
          <p className="text-3xl font-semibold text-justify">
            Wide range of stylish and trendy womens handbags that not only
            functional but also add a touch of elegance to your everyday look.
            we have something for everyone to match your style and personality!
          </p>
        </div>
        <div>
          <img src={welcomeBag} alt="welcome-img" />
        </div>
      </main>
      <main className="grid grid-cols-3 grid-rows-2 px-96 py-20 gap-0 font-opensans">
        <div className="bg-red-300 row-span-2 col-span-1 relative">
          <span className="text-2xl font-semibold absolute left-5 top-5 underline underline-offset-8 decoration-4 cursor-pointer">
            For every day
          </span>
          <img
            src={bagCat}
            alt="category-img"
            className="v object-cover object-center w-full h-full"
          />
        </div>

        <div className="row-span-1 col-span-1 relative">
          <button className="absolute bg-black text-white py-5 px-28 bottom-5 text-xl inset-x-16">
            View all
          </button>
          <img
            src={bagCat3}
            alt="category-img"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="row-span-1 col-span-1 relative">
          <span className="text-2xl font-semibold absolute left-5 top-5 underline underline-offset-8 decoration-4 cursor-pointer">
            Sports style
          </span>
          <img
            src={bagCat2}
            alt="category-img"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="row-span-1 col-span-2 relative">
          <span className="text-2xl font-semibold absolute left-5 top-5 underline underline-offset-8 decoration-4 cursor-pointer">
            For every day
          </span>
          <img
            src={frame3}
            alt="category-img"
            className="object-cover object-center h-full w-full"
          />
        </div>
      </main>
    </MainLayout>
  );
}
