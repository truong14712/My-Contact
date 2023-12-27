import Signature from "../Signature";

const Contact = () => {
  const handleDiscord = () => {
    // Tạo một thẻ input ẩn để chứa nội dung cần copy
    const tempInput = document.createElement("input");
    tempInput.value = "truong14712";
    document.body.appendChild(tempInput);
    alert("Copied: " + tempInput.value);
    // Chọn và sao chép nội dung trong input
    tempInput.select();
    document.execCommand("copy");

    // Xóa thẻ input đã tạo
    document.body.removeChild(tempInput);
  };
  return (
    <div>
      <div className="py-[1.4rem]">
        <ul className="flex flex-col items-center justify-center font-medium">
          <li className="">
            <a
              href="https://www.facebook.com/mintru.03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[340px] py-3 mt-2 text-lg bg-white rounded-lg  hover:transition-all hover:delay-100 shadow-xl hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100 max-w-[550px]"
            >
              <i className="mx-5 fa-brands fa-facebook"></i>
              Facebook
            </a>
          </li>
          <li className="">
            <a
              href="mailto:letruong147123@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[340px]  py-3 mt-4 text-lg bg-white rounded-lg hover:transition shadow-xl
              hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100 
              "
            >
              <i className="mx-5 fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
          <li className="">
            <a
              href="https://www.linkedin.com/in/mintrudev/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[340px]  py-3 mt-4 text-lg bg-white rounded-lg hover:transition shadow-xl
              hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100
              "
            >
              <i className="mx-5 fa-brands fa-linkedin-in"></i>
              Linkedin
            </a>
          </li>
          <li className="">
            <a
              href="https://github.com/truong14712"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[340px]  py-3 mt-4 text-lg bg-white rounded-lg hover:transition shadow-xl
              hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100
              "
            >
              <i className="mx-5 fa-brands fa-github"></i>
              Github
            </a>
          </li>
          <li className="">
            <a
              href="https://www.instagram.com/mintru_03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[340px]  py-3 mt-4 text-lg bg-white rounded-lg hover:transition shadow-xl
              hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100
              "
            >
              <i className="mx-5 fa-brands fa-instagram"></i>
              Instagram
            </a>
          </li>
          <li className="">
            <a
              className="flex items-center w-[550px] sm:w-[340px]  py-3 mt-4 text-lg bg-white rounded-lg hover:transition shadow-xl cursor-pointer
              hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100
              "
              onClick={() => handleDiscord()}
            >
              <i className="mx-4 fa-brands fa-discord"></i>
              <span>truong14712</span>
            </a>
          </li>

          <li className="">
            <a
              href="https://www.tiktok.com/@mintru_03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[340px]  py-3 mt-4 text-lg bg-white rounded-lg hover:transition shadow-xl
              hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100
              "
            >
              <i className="mx-5 fa-brands fa-tiktok"></i>
              Tik tok
            </a>
          </li>
        </ul>
      </div>
      <Signature />
    </div>
  );
};

export default Contact;
