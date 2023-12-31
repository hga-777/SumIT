// import logo from '../assets/logo.svg';
import logo from "../assets/logo1.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={logo} alt="sumIT_logo" className="w-28 object-contain" />
          <h1 className="ml-3 text-xl font-extrabold">SumIT</h1> 
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/hga-777/SumIT", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize & Listen to Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
