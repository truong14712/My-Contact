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
        <ul className="flex flex-col items-center justify-center">
          <li className="">
            <a
              href="https://www.facebook.com/mintru.03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[450px] py-3 mt-2 text-lg bg-white rounded-lg hover:bg-gray-200 hover:transition-all hover:delay-100 shadow-xl"
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
              className="flex items-center w-[550px] sm:w-[450px]  py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
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
              className="flex items-center w-[550px] sm:w-[450px]  py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="fa-brands fa-linkedin-in mx-5"></i>
              Linkedin
            </a>
          </li>
          <li className="">
            <a
              href="https://github.com/truong14712"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[450px]  py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
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
              className="flex items-center w-[550px] sm:w-[450px]  py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="mx-5 fa-brands fa-instagram"></i>
              Instagram
            </a>
          </li>
          <li className="">
            <a
              className="flex items-center w-[550px] sm:w-[450px]  py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl cursor-pointer"
              onClick={() => handleDiscord()}
            >
              <i className="fa-brands fa-discord mx-4"></i>
              <span>truong14712</span>
            </a>
          </li>

          <li className="">
            <a
              href="https://www.tiktok.com/@mintru_03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[550px] sm:w-[450px]  py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="mx-5 fa-brands fa-tiktok"></i>
              Tik tok
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-around text-[3rem] p-2 text-white font-bold font-mono">
        <span>M</span>
        <span>I</span>
        <span>N</span>
        <span>T</span>
        <span>R</span>
        <span>U</span>
        <span>D</span>
        <span>E</span>
        <span>V</span>
      </div>
    </div>
  );
};

export default Contact;
