const images = import.meta.glob("../assets/images/teams/webdev/*");


const teams = {
    'CORE TEAM': [
        {
            name: 'Akash Rao M.',
            role: 'Organizer',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
        name: 'K V V S S Vardhini',
        role: 'Co-Organizer',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/vardhini-konijeti-33a211291',
            instagram: 'https://www.instagram.com/iam_kvvvarddhini'
        }
    },
    ],
    'WEB-DEV TEAM': [
    {
        name: 'P. Navadeep',
        role: 'Lead',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/peddamalla-navadeep-abaa01212',
            instagram: 'https://www.instagram.com/navadeep_2077'
        }
    },
    {
        name: 'Esvin Joshua',
        role: 'Co-Lead',
        image: 'src/assets/images/teams/webdev/joshua.jpeg',
        socials: {
            github: 'https://wakandawebweaver.github.io',
            linkedin: 'https://www.linkedin.com/in/esvin-joshua/',
            instagram: 'https://www.instagram.com/esvinjoshua/'
        }
    },
    {
        name: 'Srinivas Yejarla',
        role: 'Design Lead',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/srinu-yejarla-46a21a291',
            instagram: 'https://www.instagram.com/srinu_yejarla'
        }
    },
    {
        name: 'Syeda Reshmi',
        role: 'Design Co-Lead',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/syeda-reshmi-85b17b34b',
            instagram: '#'
        }
    },
    ],
    'HOSPITALITY TEAM' : [
        {
            name: 'B.Chaitra',
            role: 'Lead',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'M.Sri Varun',
            role: 'Co-Lead',
            socials: {
                github: '#',
                linkedin: 'https://www.linkedin.com/in/manthena-srivarun-7b7a83290',
                instagram: 'https://www.instagram.com/itsvarun_04'
            }
        },
        {
            name: 'P.Manugnya',
            role: 'Member',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'U SHASHI KUMAR',
            role: 'Member',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'M.Nithin',
            role: 'Member',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'Surabhi Goutham',
            role: 'Member',
            socials: {
                github: '#',
                linkedin: 'https://www.linkedin.com/in/surabhi-goutham-47b4a4328',
                instagram: 'https://www.instagram.com/goutham_2703',
            }
        },
        {
            name: 'Prachi Singh',
            role: 'Member',
            socials: {
                github: '#',
                linkedin: 'https://www.linkedin.com/in/thakur-prachi-singh-chowhan-8b6160323',
                instagram: 'https://bit.ly/Prachithakur0102',
            }
        }
    ],
    'MARKETING TEAM': [
        {
            name: 'J.Aum Aditya',
            role: 'Lead',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'J.Sri Lakshmi',
            role: 'Co-Lead',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            name: 'R.Srinidhi',
            role: 'Member',
            socials: {
                github: '#',
                linkedin: '#',
                instagram: '#'
            }
        },
        {
          name: 'D.Chandrakanth',
          role: 'Member',
          socials: {
              github: '#',
              linkedin: 'http://linkedin.com/in/chandra-kanth-6aa959306',
              instagram: 'https://www.instagram.com/chandrakanth__06'
          }
        },
        {
          name: 'G.srinitha',
          role: 'Member',
          socials: {
              github: '#',
              linkedin: 'https://www.linkedin.com/in/srinitha-g-944259330',
              instagram: '#'
          }
        }
    ],
    'PRODUCTIONS TEAM': [
      {
        name: 'V. Sai Ram',
        role: 'Lead',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/sai-ram-nayak-174b2726b',
            instagram: 'https://www.instagram.com/sairamnayak_pawar'
        }
      },
      {
        name: 'M.Sudarshan',
        role: 'Co-Lead',
        socials: {
            github: '#',
            linkedin: '#',
            instagram: '#'
        }
      },
      {
        name: 'Varsha',
        role: 'Member',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/varsha-vs-59a226291',
            instagram: 'https://www.instagram.com/varsh.aaa01'
        }
      },
      {
        name: 'Adarsh P. R.',
        role: 'Member',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/adarsh-pr-3a126a349',
            instagram: 'https://www.instagram.com/_adu_68_'
        }
      }
    ],
    'SPONSORSHIP TEAM': [
      {
        name: 'Vishnu Sai Paineni',
        role: 'Lead',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/vishnu-sai-paineni-268257291',
            instagram: 'https://www.instagram.com/vishnupaineni_'
        }
      },
      {
        name: 'P.Sri Harshini',
        role: 'Co-Lead',
        socials: {
            github: '#',
            linkedin: 'https://www.linkedin.com/in/harshini-netha-15b252291',
            instagram: 'https://www.instagram.com/harshii._.30'
        }
      },
      {
        name: 'N.Sri Sritha Reddy',
        role: 'Member',
        socials: {
            github: '#',
            linkedin: 'http://linkedin.com/in/srisritha-reddy-neravetla-94ab60290',
            instagram: 'https://www.instagram.com/srisritha__n'
        }
      },
    ]
  };

export default teams;