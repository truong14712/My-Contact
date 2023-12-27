import { useEffect } from "react";
import avatar from "../../assets/234194465_1113523415839438_2401265830247144587_n.jpg";
import Contact from "../../components/Contact";
const Home = () => {
  useEffect(() => {
    console.log("%cStop!", "color: red; font-size: 50px; font-weight: bold;");
    console.log(
      "%cThis is a browser feature intended for developers.",
      " font-size: 28px;"
    );
  }, []);
  return (
    <>
      <div
        className={
          "bg-gradient-to-r from-cyan-500 to-blue-500 pt-2 w-[100%] h-[100%]"
        }
      >
        <div className="flex items-center justify-center">
          <img
            src={avatar}
            alt="Lê Minh Trường"
            className="w-[120px] border-[2px] rounded-[50%] border-white bg-white shadow-xl object-cover my-2"
          />
        </div>
        <div className="flex items-center justify-center mt-[12px]">
          <div className="text-2xl text-white sm:hidden">Hello 👋🏻,</div>
          <span className="ml-1 text-4xl font-medium text-white sm:text-2xl">
            I&apos;m Lê Minh Trường
          </span>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
