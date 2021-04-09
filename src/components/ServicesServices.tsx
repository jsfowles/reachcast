import Fade from '@components/Fade';
import Reveal from '@components/Reveal';

const Component = (props) => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <Fade>
        <h2 className="text-base font-semibold tracking-wider text-blue uppercase">
          Why Reachcast?
        </h2>
      </Fade>
      <Fade>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          We deliver audiences
        </p>
      </Fade>
      <Fade>
        <p className="mt-5 max-w-prose mx-auto text-xl text-grayTones-500">
          They'll get new TV and premium digital video products through
          high-quality content at any time, on any device. We build successful
          advertising campaigns because we combine all the elements of the new
          era of video advertising.
        </p>
      </Fade>
      <div className="mt-12 w-8/12 mx-auto">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="pt-6">
            <Fade>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-blue border border-blue">
                <div className="-mt-6">
                  <Reveal>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg bg-blue bg-blue">
                      {/* Heroicon name: outline/cloud-upload */}
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
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </span>
                  </Reveal>
                  <Fade>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Find
                    </h3>
                  </Fade>
                  <Fade>
                    <p className="mt-5 text-base text-grayTones-500">
                      We use data to find the potential customers most likely to
                      be interested in an advertiser's product or service.
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className="pt-6">
            <Fade>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-blue">
                <div className="-mt-6">
                  <Reveal>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg bg-blue">
                      {/* Heroicon name: outline/lock-closed */}
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </Reveal>
                  <Fade>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Target
                    </h3>
                  </Fade>
                  <Fade>
                    <p className="mt-5 text-base text-grayTones-500">
                      We target the business's potential customers across
                      screens, delivering ads only to the right audiences
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className="pt-6">
            <Fade>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-blue">
                <div className="-mt-6">
                  <Reveal>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg bg-blue">
                      {/* Heroicon name: outline/refresh */}
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
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </span>
                  </Reveal>
                  <Fade>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Report
                    </h3>
                  </Fade>
                  <Fade>
                    <p className="mt-5 text-base text-grayTones-500">
                      We report results, so advertisers can optimize ongoing
                      campaigns and plan more efficient future campaigns.
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className="pt-6">
            <Fade>
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 border border-blue">
                <div className="-mt-6">
                  <Reveal>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg bg-blue">
                      {/* Heroicon name: outline/shield-check */}
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </span>
                  </Reveal>
                  <Fade>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Prove
                    </h3>
                  </Fade>
                  <Fade>
                    <p className="mt-5 text-base text-grayTones-500">
                      We provide post-campaign reports that prove the ad
                      campaign had an impact on business results.
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Component;
