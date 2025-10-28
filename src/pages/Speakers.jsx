import React, { useState } from 'react';
import NavigationBar from '../components/Navbar';
import chindas from '../assets/images/speakers/chindas.png';
import moksha from '../assets/images/speakers/moksha.png';
import kranthi from '../assets/images/speakers/kranthi.png';
import venkatL from '../assets/images/speakers/venkatL.png';
import soumen from '../assets/images/speakers/soumen.png';
import shreyes from '../assets/images/speakers/shreyes.png';
import gauj from '../assets/images/speakers/gauj.png';
import srividya from '../assets/images/speakers/srividya.jpg';
import ravikumar from '../assets/images/speakers/ravikumar.jpg';
import nihar from '../assets/images/speakers/nihar.jpg';
import { image } from 'framer-motion/client';


const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  
  const speakers = [
    {
      id: 1,
      name: "Dr. Chaitali Das",
      role: "Jute Revivalist & Social Entrepreneur",
      image: chindas,
      bio: "Chaitali Das is the Director of Rakshak Group and the Founder of Route2Jute Pvt. Limited, a startup from the Indian Institute of Management Centre of Innovation Park. She established the Rakshak Foundation and serves on various national and international boards, including a business chamber of commerce. A Guinness World Record holder and former Mrs. International, she is known as the Queen of Jute for her innovative jute products. Chaitali is also recognized for her work in skilling prison inmates and advocates for sustainability, equal opportunity, and inclusive growth.",
    },
    {
      id: 2,
      name: "Dr. Moksha",
      role: "Founder, La Mintage Legal",
      image: moksha,
      bio: "Dr. Moksha Kalyanram Abhiramula is a seasoned legal expert with over 20 years of experience in corporate, taxation, civil, and ADR laws. He leads La Mintage Legal LLP, specializing in complex corporate and property matters. Recognized as Entrepreneur of the Year 2022, he aims to revolutionize global dispute resolution through La Mintage Dispute Resolution Hub LLP, utilizing technology for transparent mediation and arbitration. His work focuses on preventing corporate fraud and promoting amicable dialogue."
    },
    {
      id: 3,
      name: "Dr. Kranthi R Vardhan",
      role: "Ayurveda Spine Specialist.",
      image: kranthi,
      bio: "Vardhan Ayurveda Hospital, founded by Dr. Kranthi R. Vardhan in 1999 in Basheerbagh, Hyderabad, is a leading Ayurveda wellness brand known for its high-quality, personalized care. With seven branches across Andhra Pradesh and Telangana, Dr. Vardhan is a versatile Ayurvedic physician, academician, researcher, and orator. He has reinvented the concept of Meru Chikitsa, an ancient spine and neuro therapy, successfully treating over 600,000 back pain patients and preventing more than 250,000 spinal surgeries. Renowned as an Ayurveda Spine Specialist, he is affectionately called the No Spine-Surgery Doctor by his patients.",
    },
    {
      id: 4,
      name: "Mr. Venkat Lakshminarasimha",
      role: "Head of Solutions,  Dexian India.",
      image: venkatL,
      bio: "Mr. Venkat Lakshminarasimha serves as the Head of Solutions at Dexian India, where he leads initiatives in digital transformation and cognitive projects. With a focus on business and product management, Mr. Lakshminarasimha has successfully expanded Dexian's Managed Services globally, overseeing teams across the US, Middle East, and India.",
    },
    {
      id: 5,
      name: "Mr. Soumen De",
      role: "Global Technical Consultant at SGS",
      image: soumen,
      bio: "Soumen De is a passionate engineering leader with nearly three decades of global experience in industries like manufacturing, automobiles, and wind energy. He currently serves as a Global Technical Consultant at SGS, the world’s leading company in Testing, Inspection, and Certification. With 23 technical patents and numerous talks at national and international platforms, Soumen combines technical brilliance with practical wisdom. He has held key leadership roles in organizations like PMI and is a pro bono strategy advisor at APQP4Wind, shaping quality standards for the wind energy sector. Beyond his professional achievements, he is dedicated to mentoring the next generation, helping students navigate career confusion, overcome self-doubt, and build meaningful lives with purpose and clarity.",
    },
    {
      id: 6, 
      name: "Mr.Shravanth Gajula",
      role: "Co-Founder, Adonmo",
      image: gauj,
      bio: "Sravanth Gajula is the co-founder of Adonmo, a Hyderabad-based startup revolutionizing outdoor advertising through smart, location-based digital displays. Recognized among the '40 under 40' by the media and entertainment industry, Sravanth is celebrated for his resilience and reliability, even under tight deadlines.",
    },
    {
      id: 7,
      name: "Mr. Shreyes Manyam",
      role: "Founder, inflooo",
      image: shreyes,
      bio: "Shreyes Manyam is the founder of Inflooo, a platform designed to help brands connect with micro and nano influencers. With a background in engineering and a passion for digital marketing, Shreyes is dedicated to empowering creators and brands through data-driven influencer collaborations. He is fluent in Telugu and Hindi, and is based in Hyderabad, India.​",
    }, 
    {
      id: 8,
      name: "Mrs. Srividya Maharshi",
      role: "Head of Digital at Infinitum Network Solutions and a powerhouse in media innovation and strategy",
      image: srividya,
      bio: "Say hello to Srividya Maharshi, Head of Digital at Infinitum Network Solutions and a powerhouse in media innovation and strategy. With a stellar track record from her time at Zee Studios, she’s led some of the most impactful campaigns across entertainment and branding. 🌟 A master of content, audience engagement, and platform growth — Srividya blends creativity, data, and strategy to drive real results in the digital world."
    },
    {
      id: 9,
      name: "Mr. Ravi Kumar Nadimpalli",
      role: "Founder - Director Swamedha Educational Services",
      image: ravikumar,
      bio: "Introducing Mr. Ravi Kumar Nadimpalli — a visionary leader with over 25 years of experience in skill development, entrepreneurship, and human potential building. Known for empowering individuals and organizations with future-ready skills and a mindset of lifelong learning, Mr. Ravi Kumar brings passion, insight, and real-world wisdom to the stage."
    },
    {
      id: 10,
      name: "Mr. Nihar Dodagatta",
      role: "Co-Founder of Codedale and a beloved tech influencer with over 530K+ Instagram followers and 180K+ YouTube subscribers! 🚀",
      image: nihar,
      bio: "Nihar Dodagatta, Co-Founder of Codedale and a beloved tech influencer with over 530K+ Instagram followers and 180K+ YouTube subscribers! 🚀 Passionate about making coding accessible in regional languages, Nihar creates content in Telugu to empower students from tier 2 & 3 colleges. Through Codedale, he’s helping thousands land their first tech job and build confidence along the way."
    },
    {
      id: 11, 
      name: "Srividya Maharshi",
      role: "Actress, Singer, Writer, Dancer, and Journalis",
      image: "#",
      bio: " Srividya Maharshi is also known as Palaparthi Sri Vidya, Sri Vidya Maharshi, Vidya (Chai Bisket) is an Actress, Singer, Writer, Dancer, and Journalist. Srividya Maharshi is also known as Palaparthi Sri Vidya, Sri Vidya Maharshi, Vidya (Chai Bisket) is an Actress, Singer, Writer, Dancer, and Journalist."
    },
    

  ];

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <div className="min-h-screen bg-black text-black">
      <NavigationBar activeLink="speakers" />
     
      <div className="container mx-auto px-4  pt-32 md:pt-40- pb-24"> 
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-red-600 mb-4 md:mb-8">SPEAKERS</h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {speakers.slice(0, 4).map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => openModal(speaker)} />
          ))}
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {speakers.slice(4, 8).map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => openModal(speaker)} />
          ))}
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {speakers.slice(8, 12).map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => openModal(speaker)} />
          ))}
        </div>
      </div>

      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-black text-white max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-8 relative">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-600"></div>
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-red-600"></div>
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{selectedSpeaker.name}</h2>
                <p className="text-lg md:text-xl mb-4 md:mb-6">{selectedSpeaker.role}</p>
                <p className="text-sm md:text-base">{selectedSpeaker.bio}</p>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-2xl p-2"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SpeakerCard = ({ speaker, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  
  const handleTouchStart = () => {
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 1000);
  };
  
  return (
    <div 
      className="cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
    >
      <div className={`relative overflow-hidden rounded-xl shadow-md border-2 ${isHovered || isTouched ? 'border-white border-4' : 'border-white'}`}>
        <img
          src={speaker.image}
          alt={speaker.name}
          className={`w-full transition-all duration-300 ${isHovered || isTouched ? '' : 'filter grayscale'}`}
          loading="lazy" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
          <h3 className="text-white text-lg md:text-xl font-bold truncate">{speaker.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Speakers;