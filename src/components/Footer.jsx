import React from 'react';
import SocialIcon from "../utils/SocialIcon";
import '../styles/Footer.css';

const Footer = () => {
  const instagram = "https://www.instagram.com/tedxsreyas_institute";
  const linkedin = "https://www.linkedin.com/company/tedxsreyasinstitute/about/";

  return (
    <footer className="relative bg-black text-white mt-96 pt-24 pb-12 z-10">
      <div className="absolute bottom-0 left-0 w-full z-0">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="100%" y1="46%" x2="0%" y2="54%"><stop offset="5%" stopColor="#f78da7"></stop><stop offset="95%" stopColor="#ff0000"></stop></linearGradient></defs><path d="M 0,600 L 0,350 C 73.45517004465819,320.32085194091377 146.91034008931638,290.64170388182754 210,299 C 273.0896599106836,307.35829611817246 325.8138096873927,353.7540364136036 400,374 C 474.1861903126073,394.2459635863964 569.834421161113,388.3421504637581 643,388 C 716.165578838887,387.6578495362419 766.8485056681553,392.8773617313638 822,402 C 877.1514943318447,411.1226382686362 936.7715561662658,424.1484026107867 1003,406 C 1069.2284438337342,387.8515973892133 1142.0652696667812,338.52902782548955 1216,324 C 1289.9347303332188,309.47097217451045 1364.9673651666094,329.73548608725525 1440,350 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="100%" y1="46%" x2="0%" y2="54%"><stop offset="5%" stopColor="#f78da7"></stop><stop offset="95%" stopColor="#ff0000"></stop></linearGradient></defs><path d="M 0,600 L 0,150 C 58.708347646856765,179.79663345929234 117.41669529371353,209.59326691858467 192,190 C 266.58330470628647,170.40673308141533 357.0415664720027,101.42356578495362 437,91 C 516.9584335279973,80.57643421504638 586.4170388182754,128.7124699416008 654,141 C 721.5829611817246,153.2875300583992 787.2902782548953,129.72655444864307 852,117 C 916.7097217451047,104.27344555135693 980.4218481621435,102.38131226382689 1052,122 C 1123.5781518378565,141.61868773617311 1203.0223290965303,182.74819649604947 1269,191 C 1334.9776709034697,199.25180350395053 1387.4888354517348,174.62590175197528 1440,150 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
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

        <div className="text-center text-white text-sm">
          © 2025 TEDx Sreyas Institute. This independent TEDx event is operated under license from TED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
