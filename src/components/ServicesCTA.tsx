import MotionParent from '@components/MotionParent';
import Fade from '@components/Fade';

const Component = (props) => (
  <MotionParent>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br to-blue from-red rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <Fade>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Our Method</span>
                </h2>
              </Fade>
              <Fade>
                <p className="mt-4 text-lg leading-6 text-white">
                  Through audience research, creative production, results, and
                  optimization, you can be confident your campaigns are designed
                  to achieve the greatest impact.
                </p>
                <p className="mt-4 text-lg leading-6 text-green">
                  Through audience research, creative production, results, and
                  optimization, you can be confident your campaigns are designed
                  to achieve the greatest impact.
                </p>
              </Fade>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Fade>
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  </MotionParent>
);
export default Component;
