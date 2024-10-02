import React, { useState, useRef } from 'react';
import logo from './assets/logo.svg';
import smallImage from './assets/hero-mobile.jpg';
import largeImage from './assets/hero-desktop.jpg';
import arrow from './assets/icon-arrow.svg';
import error from './assets/icon-error.svg';
function App() {
  const validation = useRef('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  let sumbitted = false;

  function handelOnSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(validation.current.value)) {
      setIsValid(true);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2000);
    } else {
      setIsValid(false);
    }
  }

  return (
    <>
      <div className="bg-bgPattern pb-20 w-full bg-no-repeat bg-cover bg-center lg:flex lg:items-start lg:pb-0 lg:bg-none">
        <div className="w-full lg:px-28 lg:py-20 lg:w-[60%] lg:bg-bgPattern lg:h-screen bg-center bg-cover">
          <header className="p-7 py-5 w-full ">
            <img src={logo} alt="logo" className="w-1/3 lg:w-1/4" />
          </header>
          <main>
            <div className="w-full lg:hidden">
              <img src={smallImage} alt="Image" className="w-full" />
            </div>

            <div className="flex flex-col items-center py-8 pt-16 lg:items-start">
              <h1 className="text-[2.5rem] uppercase font-extralight tracking-[0.17em] text-red-400 text-opacity-70 lg:text-[3.5rem]">
                We're
              </h1>
              <h3 className="text-[2.5rem] uppercase text-red-950 tracking-[0.2em] text-opacity-95 font-[380] lg:text-[3.5rem]">
                coming
              </h3>
              <h3 className="text-[2.5rem] uppercase text-red-950 tracking-[0.2em] text-opacity-95 font-[380] lg:text-[3.5rem]">
                soon
              </h3>
              <p className="text-center text-[17px] text-pretty text-red-500 text-opacity-70 pt-4 lg:text-start">
                Hello fellow shoppers! We're currently building our new fashion store. Add
                your email below to stay up-to-date with announcements and our launch
                deals.
              </p>
            </div>

            <form
              onSubmit={handelOnSubmit}
              className="flex justify-between items-center mx-7 border-opacity-55 border-gray-400 border-2   py-3 rounded-full pl-5 relative transition-all duration-300 ease-in-out"
            >
              <input
                ref={validation}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border-none outline-none w-[80%] bg-transparent placeholder-red-400 font-semibold placeholder-opacity-55`}
                placeholder="Enter Your Email"
              />
              <button
                className="bg-red-500 bg-opacity-90 shadow-lg 
             shadow-red-400 rounded-full absolute top-0 right-0 py-[0.85rem] w-1/6 flex justify-center items-center hover:-translate-x-0 translate-x-2 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-red-300 active:translate-x-2"
              >
                <img src={arrow} alt="submit" />
              </button>
              <p
                className={`absolute -bottom-8   text-red-500 transition-all duration-300 ease-in-out    ${
                  !isValid || validation.current.value === ' '
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible opacity-0  translate-y-2'
                }`}
              >
                Please provide a valid Email
              </p>
              <div
                className={`absolute right-28 transition-all duration-300 ease-in-out ${
                  !isValid || validation.current.value === ' '
                    ? 'visible translate-x-0 opacity-100'
                    : 'invisible opacity-0  translate-x-2'
                }`}
              >
                <img src={error} alt="Invalid" />
              </div>
              <p
                className={`absolute -bottom-8   text-red-500 transition-all duration-300 ease-in-out    ${
                  submitted
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible opacity-0  translate-y-2'
                }`}
              >
                Submitted
              </p>
            </form>
          </main>
        </div>

        <div className="xl:w-[45%] lg:w-[50%]  hidden lg:block h-screen">
          <img src={largeImage} alt="Desktop_Image" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default App;
