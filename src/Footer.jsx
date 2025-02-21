import React from 'react';
import SocialIcon from "./assets/SocialIcon.jsx"
const Footer = () => {
  const instagram = "https://www.instagram.com/tedxsreyas_institute";
  const linkedin = "https://www.linkedin.com/company/tedxsreyasinstitute/about/";

  return (
    <footer className="relative bg-black text-white mt-96 pt-24 pb-12 z-10">
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 L 0,150 C 47.24133678628684,158.00300900234308 94.48267357257367,166.00601800468615 152,189 C 209.51732642742633,211.99398199531385 277.3106424959921,249.9789369835985 327,224 C 376.6893575040079,198.0210630164015 408.27475644345793,108.07823406091994 455,100 C 501.72524355654207,91.92176593908006 563.5903317301764,165.70812677272167 626,184 C 688.4096682698236,202.29187322727833 751.3639166358365,165.08925884819337 800,160 C 848.6360833641635,154.91074115180663 882.9540017264769,181.93483783450483 932,175 C 981.0459982735231,168.06516216549517 1044.8200764582562,127.17138981378714 1107,114 C 1169.1799235417438,100.82861018621286 1229.7656924404982,115.37960291034653 1285,126 C 1340.2343075595018,136.62039708965347 1390.1171537797509,143.31019854482673 1440,150 L 1440,600 L 0,600 Z"
            stroke="none"
            fill="#ff0000"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-5xl font-bold">
                <span className="text-red-600">T</span>hinkers
              </h3>
              <h3 className="text-5xl font-bold">
                <span className="text-red-600">E</span>ncourage
              </h3>
              <h3 className="text-5xl font-bold">
                <span className="text-red-600">D</span>iscovery
              </h3>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
              <div className="flex space-x-6">
                <SocialIcon
                  href={instagram}
                  type="instagram"
                  className="hover:scale-110 hover:text-red-400 transition transform duration-300"
                />
                <SocialIcon
                  href={linkedin}
                  type="linkedin"
                  className="hover:scale-110 hover:text-blue-400 transition transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-96 bg-gray-900 rounded-xl shadow-2xl">
            <iframe
              className="border-none w-full h-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.193237700641!2d78.59096717566909!3d17.354432183527134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f30cfffffff%3A0x642833977d8c2e2e!2sSreyas%20Institute%20of%20Engineering%20and%20Technology%20-%20Autonomous!5e0!3m2!1sen!2sin!4v1740117950051!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="h-px bg-gray-700 my-12"></div>

        <div className="text-center text-gray-400 text-sm">
          © 2025 TEDx Sreyas Institute. This independent TEDx event is operated under license from TED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
