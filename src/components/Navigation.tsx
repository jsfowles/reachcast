import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { id: 1, title: 'Agency', route: '/' },
  { id: 1, title: 'Services', route: '/services' },
  { id: 1, title: 'Newsroom', route: '/newsroom' },
  { id: 1, title: 'Contact', route: '/contact' },
];

const Component = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', changeNavbarColor);
  }

  return (
    <nav
      className={`fixed ${
        colorChange ? 'bg-white' : 'bg-transparent'
      } z-50 inset-x-0`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div
              className={`${
                colorChange ? 'bg-blue-light' : 'bg-white'
              } rounded-full w-10 h-10 md:w-16 md:h-16 flex-shrink-0 flex items-center`}
            />
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {NAV_ITEMS.map(({ id, title, route }) => (
                <Link href={route} passHref>
                  <a
                    key={id}
                    className={`border-transparent ${
                      colorChange ? 'text-gray' : 'text-white'
                    } hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium`}
                  >
                    {title}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className={`inline-flex z-50 items-center justify-center p-2 rounded-md ${
                toggleMenu ? 'text-grayTones-400' : 'text-white'
              } hover:text-grayTones-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <svg
                className="block h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {toggleMenu && (
        <div
          className="sm:hidden bg-white md:bg-transparent fixed inset-0 z-40"
          id="mobile-menu"
        >
          <div className="pt-20 pb-3 space-y-1">
            {NAV_ITEMS.map(({ id, title, route }) => (
              <Link href={route} passHref>
                <a
                  onClick={() => toggleMenu(false)}
                  className="border-transparent text-blue-light hover:border-gray-300 hover:text-gray block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Component;
