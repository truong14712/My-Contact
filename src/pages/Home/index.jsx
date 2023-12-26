import logo from "../../assets/kisspng-computer-icons-font-letter-t-5ae958426f2ea3.6394530715252419224554.png";
import Contact from "../../components/Contact";
const Home = () => {
  return (
    <>
      <div className="bg-gray-400 pt-[30px] w-[100vw] h-[100vh] text-white">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt=""
            className="w-[100px] border rounded-[100%] border-white "
          />
        </div>
        <div className="flex items-center justify-center mt-[12px]">
          <img src={logo} alt="" className="w-[40px] mx-[4px]" />
          <span className="text-4xl font-medium">Lê Minh Trường</span>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
