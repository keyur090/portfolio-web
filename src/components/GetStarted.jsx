const GetStarted = () => {
  const resumeURL = "/Keyur's_CV.pdf";
  return (
    <div className="relative flex items-center justify-center group">
      <div className="absolute inset-0 w-[140px] h-[140px] rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-70 blur-xl group-hover:blur-2xl group-hover:opacity-100 transition-all duration-500"></div>

      <div className="absolute inset-0 w-[140px] h-[140px] rounded-full  animate-spin-slow transition duration-500"></div>

      <a
        href={resumeURL}
        download="Keyur's_CV.pdf"
        className="relative z-10 flex items-center justify-center w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-primary rounded-full shadow-lg shadow-blue-500/30">
          <p className="font-poppins font-bold text-[18px] leading-[23.4px] text-gradient tracking-wider">
            Download
          </p>
          <p className="font-poppins font-bold text-[18px] leading-[23.4px] text-gradient tracking-wider animate-fadeIn">
            Resume
          </p>
        </div>
      </a>
    </div>
  );
};

export default GetStarted;
