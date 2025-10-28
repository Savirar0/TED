import { time } from "framer-motion";
import { title } from "framer-motion/client";

const schedule = [
    {
      time: "9:30 AM - 10:00 AM",
      title: "Address by Vice Chairman, Principal and Organizer",
      location: "Auditorium",
      type: "Check-in",
      description: "Short welcome addresses."
    },
    {
      time: "10:00 AM - 10:15 AM",
      title: "Talk 1 - Mr. Venkat Lakshminarasimha Head of Solutions, Dexian India",
      location: "Auditorium",
      type: "Talk",
      description: "First talk of the day"
    },
    {
      time: "10:15 AM - 10:30 AM",
      title: "Dr. Kranthi R. Vardhan Ayurveda Spine Specialist",
      location: "Auditorium",
      type: "Talk",
      description: "Second talk of the day"
    },
    {
      time: "10:30 AM - 10:45 AM",
      title: "Dr. Abhiramula Moksha Kalyanram Advocate & Founder, La Mintage Legal",
      location: "Auditorium",
      type: "Talk",
      description: "Third talk of the day"
    },
    {
      time: "10:45 AM - 11:00 AM",
      title: "Mr. Soumen De Consultant, SGS India",
      location: "Auditorium",
      type: "Talk",
      description: "Fourth talk of the day"
    },
    {
      time: "11:00 AM - 11:15 AM",
      title: "Mr. Sravanth Gajula Co-Founder, Adonmo",
      location: "Auditorium",
      type: "Talk",
      description: "Fifth talk of the day"
    },
    {
      time: "11:15 AM - 11:30 AM",
      title: "Dr. Chaitali Das Jute Revivalist & Social Entrepreneur",
      location: "Auditorium",
      type: "Talk",
      description: "Sixth talk of the day"
    },
    {
      time: "11:30 AM - 11:45 AM",
      title: "Ms. Srividya Maharshi Actress",
      location: "Auditorium",
      type: "Talk",
      description: "Seventh talk of the day"
    },
    {
      time: "11:45 AM - 12:00 PM",
      title: "Dr. Amit Sahoo CHRO & Board of Director, Narwal",
      location: "Auditorium",
      type: "Talk",
      description: "Eighth talk of the day"
    },
    {
      time: "12:00 PM - 1:10 PM",
      title: "Lunch Break",
      location: "Sreyas",
      type: "Break",
      description: "Break between talks"
    },
    {
      time: "1:10 PM - 1:30 PM",
      title: "Western Dance/Band",
      location: "Auditorium",
      type: "Ceremony",
      description: "Dance/Band Ceremony"
    },
    {
      time: "1:30 PM - 1:45 PM",
      title: "Mr. Harshit Reddy Actor",
      location: "Auditorium",
      type: "Talk",
      description: "Ninth talk of the day"
    },
    {
      time: "1:45 PM - 2:00 PM",
      title: "Mr. Shreyas Reddy Founder, Inflooo",
      location: "Auditorium",
      type: "Talk",
      description: "Tenth talk of the day"
    },
    {
      time: "2:00 PM - 2:15 PM",
      title: "Mr. Ravi Kumar Nadimpalli Founder & Director, Swamedha Educational Services",
      location: "Auditorium",
      type: "Talk",
      description: "Eleventh talk of the day"
    },
    {
      time: "2:15 PM - 2:30 PM",
      title: "Mr. Ravi Anchor",
      location: "Auditorium",
      type: "Talk",
      description: "Twelfth talk of the day"
    },
    {
      time: "2:30 PM - 2:45 PM",
      title: "Mr. Dodagatta Nihar Tech Influencer",
      location: "Auditorium",
      type: "Talk",
      description: "Thirteenth talk of the day"
    },
    {
      time: "2:45 PM - 3:00",
      title: "VALEDICTORY",
      location: "Auditorium",
      type: "Ceremony",
      description: "Valedictory Ceremony"
    }
  ];

export default schedule;