const Contact = () => {
  return (
    <div>
      <div className="mt-[1.4rem]">
        <ul className="flex flex-col items-center justify-center">
          <li className="">
            <a
              href="https://www.facebook.com/mintru.03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[512px] py-3 mt-2 text-lg bg-white rounded-lg hover:bg-gray-200 hover:transition-all hover:delay-100 shadow-xl"
            >
              <i className="mx-4 fa-brands fa-facebook"></i>
              <div>Facebook</div>
            </a>
          </li>
          <li className="">
            <a
              href="mailto:letruong147123@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[512px] py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="mx-4 fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
          <li className="">
            <a
              href="https://www.facebook.com/mintru.03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[512px] py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="mx-4 fa-brands fa-github"></i>
              Github
            </a>
          </li>
          <li className="">
            <a
              href="https://www.facebook.com/mintru.03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[512px] py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="mx-4 fa-brands fa-instagram"></i>
              Instagram
            </a>
          </li>
          <li className="">
            <a
              href="https://www.facebook.com/mintru.03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[512px] py-3 mt-4 text-lg bg-white rounded-lg hover:bg-gray-100 hover:transition shadow-xl"
            >
              <i className="mx-4 fa-brands fa-linkedin-in "></i>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
