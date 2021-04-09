import Reveal from '@components/Reveal';
import Fade from '@components/Fade';
import MotionParent from '@components/MotionParent';
import React from 'react';
import Lines from '@components/Lines';

const Hero = (props) => {
  return (
    <MotionParent>
      <div className="relative overflow-hidden">
        <main>
          <div className="bg-gray-900 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-20">
                    <Reveal direction="right">
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">Fish where the</span>
                        <span className="block text-indigo-400">
                          fish are biting
                        </span>
                      </h1>
                    </Reveal>
                    <Fade>
                      <p className="mt-3 text-white text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Reaching your customers with quality video commercials
                        on the devices they watch most.
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className="lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:max-w-none"
                      src="/images/Illustration.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/*<Lines />*/}
    </MotionParent>
  );
};

export default Hero;
