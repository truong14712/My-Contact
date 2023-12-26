import logo from "../../assets/kisspng-computer-icons-font-letter-t-5ae958426f2ea3.6394530715252419224554.png";
import Contact from "../../components/Contact";
const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-2 w-[100vw] h-[100vh] mx-auto container">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt=""
            className="w-[100px] border-[2px] rounded-[50%] border-white bg-white shadow-xl object-cover"
          />
        </div>
        <div className="flex items-center justify-center mt-[12px]">
          <img src={logo} alt="" className="w-[40px] mx-[4px] " />
          <span className="text-4xl font-medium text-white">
            Lê Minh Trường
          </span>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
