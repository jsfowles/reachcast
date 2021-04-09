import * as React from 'react';
import MotionParent from '@components/MotionParent';
import { motion } from 'framer-motion';

const item = {
  hidden: { y: 10, x: -10 },
  visible: { y: 0, x: 10 },
};

function SvgComponent(props) {
  return (
    <MotionParent>
      <svg
        className="absolute inset-0 transform -rotate-6 w-full"
        width={1358}
        height={767}
        viewBox="0 0 1358 767"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={item}
          opacity={0.111}
          clipRule="evenodd"
          d="M-175.758 12.973C-149.6-124.348 24.717-215.29 141.98-326.537c91.957-87.24 170.015-179.249 293.092-239.984 134.674-66.457 281.724-108.269 437.184-120.386 195.434-15.232 436.564-62.954 563.824 42.369 127.66 105.656-12.45 287.986 11.82 434.06 24.95 150.12 188.53 278.626 131.49 428.265-61.21 160.577-226.59 320.251-436.42 371.753-205.477 50.432-381.198-90.703-585.761-120.867C370.007 441.068 144.055 510.754-.41 420.938-147.788 329.31-204.298 162.793-175.758 12.973z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={1.444}
        />
        <motion.path
          variants={item}
          opacity={0.222}
          clipRule="evenodd"
          d="M-168.403.328C-139.658-137.618 37.315-226.234 157.25-336.31c94.054-86.322 174.208-177.693 299.099-236.758 136.659-64.63 285.332-104.204 441.94-113.702 196.881-11.941 440.301-55.83 566.461 52.545 126.56 108.717-17.62 290.037 4.22 437.685 22.44 151.739 184.72 284.112 124.69 433.934-64.41 160.774-233.61 318.819-445.62 367.064-207.598 47.242-381.878-98.072-587.136-132.045-187.838-31.09-416.38 35.201-560.123-57.845C-145.862 319.645-199.765 150.83-168.403.328z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={1.889}
        />
        <motion.path
          variants={item}
          opacity={0.333}
          clipRule="evenodd"
          d="M-160.811-12.108c31.363-138.524 210.962-224.75 333.563-333.598 96.145-85.359 178.397-176.048 305.08-233.4 138.619-62.754 288.88-100.049 446.59-106.892 198.268-8.604 443.918-48.596 568.908 62.824 125.38 111.772-22.87 291.999-3.52 441.183 19.89 153.316 180.79 289.552 117.75 439.5-67.65 160.909-240.66 317.243-454.79 362.172-209.673 43.995-382.416-105.491-588.295-143.306-188.407-34.606-419.487 28.222-562.437-68.055-145.834-98.22-197.066-269.295-162.849-420.428z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={2.333}
        />
        <motion.path
          variants={item}
          opacity={0.444}
          clipRule="evenodd"
          d="M-152.984-24.328c34.009-139.055 216.202-222.829 341.463-330.391 98.229-84.35 182.579-174.313 311.031-229.908 140.554-60.832 292.366-95.803 451.131-99.959 199.589-5.223 447.409-41.255 571.159 73.204 124.14 114.819-28.19 293.869-11.38 444.547 17.28 154.853 176.72 294.944 110.64 444.961-70.91 160.982-247.72 315.522-463.91 357.078-211.699 40.691-382.808-112.959-589.234-154.647-188.907-38.15-422.47 21.148-564.556-78.362-144.953-101.518-193.448-274.812-156.344-426.524z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={2.778}
        />
        <motion.path
          variants={item}
          opacity={0.556}
          clipRule="evenodd"
          d="M-144.927-36.329c36.683-139.537 221.438-220.795 349.349-327.013 100.308-83.295 186.754-172.489 316.95-226.283 142.462-58.863 295.789-91.47 455.561-92.902 200.857-1.801 450.767-33.811 573.207 83.677 122.83 117.859-33.58 295.646-19.35 447.777 14.62 156.347 172.5 300.284 103.36 450.311-74.18 160.993-254.79 313.657-472.99 351.781-213.662 37.333-383.042-120.471-589.938-166.062-189.338-41.722-425.329 13.981-566.478-88.762C-139.254 291.38-184.95 115.908-144.927-36.329z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={3.222}
        />
        <motion.path
          variants={item}
          opacity={0.667}
          clipRule="evenodd"
          d="M-136.645-48.103c39.386-139.969 226.668-218.65 357.219-323.465 102.378-82.196 190.92-170.576 322.834-222.527 144.343-56.846 299.146-87.047 459.872-85.724 202.06 1.664 454-26.263 575.06 94.244 121.44 120.888-39.05 297.327-27.45 450.869 11.93 157.796 168.16 305.569 95.94 455.547-77.49 160.94-261.87 311.644-482.02 346.282-215.578 33.918-383.132-128.027-590.422-177.549-189.699-45.32-428.06 6.722-568.201-99.251-142.968-108.111-185.802-285.717-142.832-438.426z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={3.667}
        />
        <motion.path
          variants={item}
          opacity={0.778}
          clipRule="evenodd"
          d="M-128.14-59.645c42.115-140.352 231.887-216.393 365.067-319.748 104.441-81.051 195.074-168.571 328.681-218.637 146.195-54.782 302.435-82.538 464.072-78.426 203.2 5.168 457.1-18.616 576.71 104.899 119.98 123.905-44.59 298.91-35.67 453.819 9.18 159.2 163.68 310.796 88.36 460.665-80.81 160.823-268.95 309.485-491 340.581-217.433 30.449-383.065-135.622-590.672-189.103-189.989-48.943-430.661-.625-569.72-109.825C-134.179 273.176-174.088 93.481-128.14-59.645z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={4.111}
        />
        <motion.path
          variants={item}
          opacity={0.889}
          clipRule="evenodd"
          d="M-119.417-70.95c44.869-140.682 237.095-214.023 372.892-315.859 106.492-79.86 199.213-166.477 334.485-214.615 148.018-52.673 305.654-77.942 468.15-71.011 204.28 8.713 460.06-10.871 578.15 115.639 118.46 126.908-50.2 300.393-43.99 456.624 6.38 160.559 159.05 315.963 80.62 465.662-84.16 160.641-276.04 307.178-499.92 334.677-219.233 26.928-382.847-143.252-590.692-200.718-190.207-52.59-433.129-8.059-571.036-120.482C-131.446 264.276-168.369 82.538-119.417-70.949z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={4.556}
        />
        <motion.path
          variants={item}
          clipRule="evenodd"
          d="M-110.48-82.01c47.647-140.963 242.288-211.542 380.688-311.802 108.533-78.623 203.338-164.291 340.247-210.459 149.808-50.519 308.799-73.262 472.095-63.482 205.3 12.296 462.9-3.029 579.39 126.461 116.86 129.897-55.87 301.776-52.43 459.282 3.54 161.87 154.3 321.065 72.74 470.533-87.52 160.394-283.13 304.722-508.79 328.572-220.963 23.354-382.463-150.916-590.467-212.392-190.352-56.258-435.463-15.578-572.144-131.216C-128.587 255.516-162.463 71.782-110.48-82.01z"
          stroke="#F9FBFC"
          strokeOpacity={0.5}
          strokeWidth={5}
        />
      </svg>
    </MotionParent>
  );
}

export default SvgComponent;
