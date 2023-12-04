import React from 'react';

function Hero() {
  return (
    <section className="bg-[#F5F3F0] h-screen">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          {/* <button type="button" className=" flex justify-end">
            JUNIOR
          </button> */}
          <h1 className="font-serif max-w-2xl mb-4 text-4xl font-extrabold tracking-[0.5em] leading-none md:text-5xl xl:text-6xl text-black">
            FRONT-END
          </h1>
          <h1 className="font-serif max-w-2xl text-4xl font-extrabold tracking-[0.5em] leading-none md:text-5xl xl:text-6xl text-black mb-0">
            DEVELOPER
          </h1>
          <div className="grid gap-6 lg:grid-cols-2 mt-10">
            <div className="font-light sm:text-sm md:text-md lg:text-lg text-black">
              Hi there !<br /> My name is Aurele and I'm (dynamic years) old
              ambitious front-end developer. Now I'm looking for a new positions
              and new challenges.
            </div>
            <div className="font-light sm:text-sm md:text-md lg:text-lg text-black">
              My goal is to learn something new every day, improve my skills and
              solve users and business issues. I can quickly analyze problems
              and solve them both independently and in a team.
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img src="webdev-AureleGuitard.png" alt="web developer img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
