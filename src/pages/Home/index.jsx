import avatar from "../../assets/234194465_1113523415839438_2401265830247144587_n.jpg";
import Contact from "../../components/Contact";
const Home = () => {
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
          <div className="text-2xl text-white">Hello 👋🏻,</div>
          <span className="text-4xl font-medium text-white ml-1">
            I&apos;m am Lê Minh Trường
          </span>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
