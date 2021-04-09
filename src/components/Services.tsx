import { item } from '../../styles/motion';

import Fade from '@components/Fade';
import Reveal from '@components/Reveal';

const Services = (props) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <Fade transition={{ delay: 0.75 }}>
          <h2 className="text-3xl font-extrabold text-white tracking-tight w-1/2">
            We improve our customers results in every step of the sales funnel.
          </h2>
        </Fade>
        <Fade transition={{ delay: 1 }}>
          <p className="mt-4 max-w-2xl text-lg text-white">
            Reachcast plans and executes multiscreen advertising campaigns
            customized to the goals of our customers. Our campaigns solutions
            help companies of any size, while remaining budget-conscious.
          </p>
        </Fade>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div>
            <Fade>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </span>
            </Fade>
            <div className="mt-6">
              <Reveal>
                <h3 className="text-lg font-medium text-white">Awareness</h3>
              </Reveal>
              <Fade>
                <p className="mt-2 text-green w-3/4">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </Fade>
            </div>
          </div>

          <div>
            <Fade>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </Fade>
            <div className="mt-6">
              <Reveal>
                <h3 className="text-lg font-medium text-white">
                  Consideration
                </h3>
              </Reveal>
              <Fade>
                <p className="mt-2 text-green w-3/4">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </Fade>
            </div>
          </div>

          <div>
            <Fade>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </span>
            </Fade>
            <div className="mt-6">
              <Reveal>
                <h3 className="text-lg font-medium text-white">Intent</h3>
              </Reveal>
              <Fade>
                <p className="mt-2 text-green w-3/4">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </Fade>
            </div>
          </div>

          <div>
            <Fade>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </span>
            </Fade>
            <div className="mt-6">
              <Reveal>
                <h3 className="text-lg font-medium text-white">Purchase</h3>
              </Reveal>
              <Fade>
                <p className="mt-2 text-green  w-3/4">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
