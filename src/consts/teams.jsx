import hrd from '../assets/images/teams/core/vicechair.jpg';
import prin from '../assets/images/teams/core/principal.jpg';
import harsha from '../assets/images/teams/core/harsha.jpeg';
import ranjit from '../assets/images/teams/core/ranjit.png';
import vard from '../assets/images/teams/core/vardhini.png';
import aks from '../assets/images/teams/core/akash.jpeg';
import navd from '../assets/images/teams/webdev/navadeep.png';
import josh from '../assets/images/teams/webdev/joshua.jpeg';
import resh from '../assets/images/teams/webdev/Reshmi.png';
import srinivas from '../assets/images/teams/webdev/Srinivas.png';
import chaitra from '../assets/images/teams/hospitality/chaitra.png';
import goutham from '../assets/images/teams/hospitality/goutham.png';
import manugnya from '../assets/images/teams/hospitality/manugnya.png';
import nithin from '../assets/images/teams/hospitality/nithin.png';
import prachi from '../assets/images/teams/hospitality/prachi.png';
import shashi from '../assets/images/teams/hospitality/shashi.png';
import srivarun from '../assets/images/teams/hospitality/srivarun.png';
import vishnu from '../assets/images/teams/sponsorship/vishnu.png';
import harshini from '../assets/images/teams/sponsorship/harshini.jpg';
import sritha from '../assets/images/teams/sponsorship/sritha.png';
import aum from '../assets/images/teams/marketing/aumaditya.jpg';
import srilakshmi from '../assets/images/teams/marketing/srilakshmi.jpg';
import srinidhi from '../assets/images/teams/marketing/srinidhi.jpeg';
import srinitha from '../assets/images/teams/marketing/srinitha.jpg';
import chandrakanth from '../assets/images/teams/marketing/chandrakanth.png';
import adarsh from '../assets/images/teams/production/adarsh.png';
import sudarshan from '../assets/images/teams/production/sudarshan.png';
import varsha from '../assets/images/teams/production/varsha.png';
import sairam from '../assets/images/teams/production/sairam.png';


{/*const images = import.meta.glob('../assets/images/teams/core/*', { eager: true });
const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, module]) => [
    path.split('/').pop(),
    module.default
  ])
);*/}

const teams = {
    'CORE TEAM': [
        {
            name: 'A. Hriday Reddy',
            role: 'Vice Chairman',
            image: hrd,
            socials: {}
        },
        {
            name: 'Dr. C. Udaya Kiran',
            role: 'Principal',
            image: prin,
            socials: {}
        },
        {
            name: 'P. Sri Harsha',
            role: 'Faculty Co-Ordinator',
            image: harsha,
            socials: {}
        },
        {
            name: 'Dr. Anand Ranjith',
            role: 'Faculty Co-Ordinator',
            image: ranjit,
            socials: {}
        },
        {
            name: 'K V V S S Vardhini',
            role: 'Organizer',
            image: vard,
            socials: {
                linkedin: 'https://www.linkedin.com/in/vardhini-konijeti-33a211291',
                instagram: 'https://www.instagram.com/iam_kvvvarddhini'
            }
        },
        {
            name: 'Akash Rao M.',
            role: 'Co-Organizer',
            image: aks,
            socials: {
                linkedin: 'https://www.linkedin.com/in/akash-rao-mallareddy',
                instagram: 'https://www.instagram.com/akash_mallareddy'
            }
        },
    ],

    'HOSPITALITY TEAM' : [
        {
            name: 'B. Chaitra',
            role: 'Lead',
            image: chaitra,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/chaitra-bonagiri-404b61290',
                instagram: 'https://www.instagram.com/chaitra_12_5'
            }
        },
        {
            name: 'M. Sri Varun',
            role: 'Co-Lead',
            image: srivarun,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/manthena-srivarun-7b7a83290',
                instagram: 'https://www.instagram.com/itsvarun_04'
            }
        },
        {
            name: 'P. Manugnya',
            role: 'Member',
            image: manugnya,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/chaitra-bonagiri-404b61290',
                instagram: 'https://www.instagram.com/manugnya_reddy'
            }
        },
        {
            name: 'U Shashi Kumar',
            role: 'Member',
            image: shashi,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/shashi-kumar-260215291',
                instagram: 'https://www.instagram.com/shashii.xo'
            }
        },
        {
            name: 'M. Nithin',
            role: 'Member',
            image: '#',
            socials: {
                linkedin: 'https://www.linkedin.com/in/nithin-m-803935355/',
                instagram: 'https://www.instagram.com/clarkk_kvntt/'
            }
        },
        {
            name: 'Surabhi Goutham',
            role: 'Member',
            image: goutham,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/surabhi-goutham-47b4a4328',
                instagram: 'https://www.instagram.com/goutham_2703',
            }
        },
        {
            name: 'Prachi Singh',
            role: 'Member',
            image: prachi,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/thakur-prachi-singh-chowhan-8b6160323',
                instagram: 'https://bit.ly/Prachithakur0102',
            }
        }
    ],

    'MARKETING TEAM': [
        {
            name: 'J. Aum Aditya',
            role: 'Lead',
            image: aum,
            socials: {
                
                linkedin: 'https://www.linkedin.com/in/aum-aditya-a53211291/',
                instagram: 'https://www.instagram.com/aum_aditya_30'
            }
        },
        {
            name: 'J. Sri Lakshmi',
            role: 'Co-Lead',
            image: srilakshmi,
            socials: {
                linkedin: 'https://www.linkedin.com/in/jhade-sri-lakshmi-531212291',
                instagram: 'https://www.instagram.com/sxnnuuuu'
            }
        },
        {
            name: 'R. Srinidhi',
            role: 'Member',
            image: srinidhi,
            socials: {
                linkedin: 'https://www.linkedin.com/in/srinidhi-rachakonda-b58216291',
                instagram: 'https://www.instagram.com/nidhuuu._'
            }
        },
        {
          name: 'D. Chandrakanth',
          role: 'Member',
        image: chandrakanth,
          socials: {
              linkedin: 'http://linkedin.com/in/chandra-kanth-6aa959306',
              instagram: 'https://www.instagram.com/chandrakanth__06'
          }
        },
        {
          name: 'G. Srinitha',
          role: 'Member',
            image: srinitha,
          socials: {
              linkedin: 'https://www.linkedin.com/in/srinitha-g-944259330',
              instagram: 'https://www.instagram.com/srinitha0___'
          }
        }
    ],

    'PRODUCTIONS TEAM': [
        {
          name: 'V. Sai Ram',
          role: 'Lead',
          image: sairam,
          socials: {
              linkedin: 'https://www.linkedin.com/in/sai-ram-nayak-174b2726b',
              instagram: 'https://www.instagram.com/sairamnayak_pawar'
          }
        },
        {
          name: 'M. Sudarshan',
          role: 'Co-Lead',
          image: sudarshan,
          socials: {
              linkedin: 'https://www.linkedin.com/in/sudarshan-maheshwari-9091aa332',
              instagram: 'https://www.instagram.com/m.sudarshann'
          }
        },
        {
          name: 'Varsha',
          role: 'Member',
          image: varsha,
          socials: {
              linkedin: 'https://www.linkedin.com/in/varsha-vs-59a226291',
              instagram: 'https://www.instagram.com/varsh.aaa01'
          }
        },
        {
          name: 'Adarsh P. R.',
          role: 'Member',
          image: adarsh,
          socials: {
              linkedin: 'https://www.linkedin.com/in/adarsh-pr-3a126a349',
              instagram: 'https://www.instagram.com/_adu_68_'
          }
        }
      ],

      'SPONSORSHIP TEAM': [
        {
          name: 'Vishnu Sai Paineni',
          role: 'Lead',
          image: vishnu,
          socials: {
              linkedin: 'https://www.linkedin.com/in/vishnu-sai-paineni-268257291',
              instagram: 'https://www.instagram.com/vishnupaineni_'
          }
        },
        {
          name: 'P. Sri Harshini',
          role: 'Co-Lead',
          image: harshini,
          socials: {
              linkedin: 'https://www.linkedin.com/in/harshini-netha-15b252291',
              instagram: 'https://www.instagram.com/harshii._.30'
          }
        },
        {
          name: 'N. Sri Sritha Reddy',
          role: 'Member',
          image: sritha,
          socials: {
              linkedin: 'http://linkedin.com/in/srisritha-reddy-neravetla-94ab60290',
              instagram: 'https://www.instagram.com/srisritha__n'
          }
        },
      ],

    'WEB-DEV TEAM': [
        {
            name: 'P. Navadeep',
            role: 'Lead',
            image: navd,
            socials: {
                github: 'https://github.com/Savirar0',
                linkedin: 'https://www.linkedin.com/in/peddamalla-navadeep-abaa01212',
                instagram: 'https://www.instagram.com/navadeep_2077'
            }
        },
        {
            name: 'Esvin Joshua',
            role: 'Co-Lead',
            image: josh,
            socials: {
                github: 'https://www.github.com/wakandawebweaver',
                linkedin: 'https://www.linkedin.com/in/esvin-joshua/',
                instagram: 'https://www.instagram.com/esvinjoshua/'
            }
        },
        {
            name: 'Srinivas Yejarla',
            role: 'Member',
            image: srinivas,
            socials: {
                github: '#',
                linkedin: 'https://www.linkedin.com/in/srinu-yejarla-46a21a291',
                instagram: 'https://www.instagram.com/srinu_yejarla'
            }
        },
        
    {
        name: 'Syeda Reshmi',
        role: 'Member',
        image: resh,
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/syeda-reshmi-85b17b34b'
        }
    },
    ]



  };

export default teams;