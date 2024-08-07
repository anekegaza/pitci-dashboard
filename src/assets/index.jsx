import React from "react";

import {
  FaCalendar,
  FaKaaba,
  FaSwatchbook,
  FaChevronRight,
  FaUser,
  FaCog,
  FaRegCalendar,
} from "react-icons/fa";

import man from "./images/man.svg";
import woman from "./images/woman.svg";

export const sideLinks = [
  {
    id: "0",
    url: "/dashboard",
    label: "Dashboard",
    icon: <FaKaaba />,
    end: <FaChevronRight />,
  },
  {
    id: "1",
    url: "/pitches",
    icon: <FaSwatchbook />,
    label: "Pitches",
    end: <FaChevronRight />,
  },
  {
    id: "2",
    url: "/calendar",
    icon: <FaCalendar />,
    label: "Calendar",
    end: <FaChevronRight />,
  },
];
export const OTHERLINKS = [
  {
    id: "0",
    url: "/personal",
    label: "Personal",
    icon: <FaUser />,
    end: <FaChevronRight />,
  },
];

export const PitcheCount = [
  {
    id: "0",
    label: "Total Pitches",
    value: "3000",
  },
  {
    id: "0",
    label: "Pending Reviews",
    value: "40",
  },
  {
    id: "0",
    label: "Approved Pitches",
    value: "1187",
  },
  {
    id: "0",
    label: "Declined Pitches",
    value: "1773",
  },
];

// DATA FOR THE LINE CAHRT ==============================
export const BarChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
  datasets: [
    {
      label: ["Countries"],
      data: [1200, 700, 350, 980, 800],
      backgroundColor: ["red", "green", "blue", "orange", "purple"],
      borderWidth: 0,
      categoryPercentage: 1,
      barPercentage: 1,
    },
  ],
};

// DATA FOR THE LINE CAHRT ==============================
export const PieChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 700, 350, 980, 800],
      backgroundColor: ["red", "green", "blue", "orange", "purple"],
      borderWidth: 0,
    },
  ],
};

export const PitchData = [
  {
    "Pitch ID": 1,
    Author: "Aneke Ifeanyi",
    Status: "approved",
    "Date Submitted": "5/22/2024",
  },
  {
    "Pitch ID": 2,
    Author: "Nata Barney",
    Status: "approved",
    "Date Submitted": "3/25/2024",
  },
  {
    "Pitch ID": 3,
    Author: "Dionisio Franzewitch",
    Status: "approved",
    "Date Submitted": "7/21/2024",
  },
  {
    "Pitch ID": 4,
    Author: "Carroll Koppes",
    Status: "declined",
    "Date Submitted": "4/2/2024",
  },
  {
    "Pitch ID": 5,
    Author: "Abe Korn",
    Status: "declined",
    "Date Submitted": "1/15/2024",
  },
  {
    "Pitch ID": 6,
    Author: "Delila Costa",
    Status: "pending",
    "Date Submitted": "7/25/2024",
  },
  {
    "Pitch ID": 7,
    Author: "Devonna Edward",
    Status: "approved",
    "Date Submitted": "5/3/2024",
  },
  {
    "Pitch ID": 8,
    Author: "Joaquin Pidduck",
    Status: "pending",
    "Date Submitted": "8/18/2023",
  },
  {
    "Pitch ID": 9,
    Author: "Moritz Hickin",
    Status: "pending",
    "Date Submitted": "12/20/2023",
  },
  {
    "Pitch ID": 10,
    Author: "Von Treharne",
    Status: "declined",
    "Date Submitted": "11/21/2023",
  },
  {
    "Pitch ID": 11,
    Author: "Denny Tran",
    Status: "approved",
    "Date Submitted": "8/17/2023",
  },
  {
    "Pitch ID": 12,
    Author: "Kellsie Akehurst",
    Status: "declined",
    "Date Submitted": "5/28/2024",
  },
  {
    "Pitch ID": 13,
    Author: "Ker Khomishin",
    Status: "declined",
    "Date Submitted": "12/18/2023",
  },
  {
    "Pitch ID": 14,
    Author: "Revkah Tobias",
    Status: "pending",
    "Date Submitted": "8/19/2023",
  },
  {
    "Pitch ID": 15,
    Author: "Ulla Bulter",
    Status: "approved",
    "Date Submitted": "4/19/2024",
  },
  {
    "Pitch ID": 16,
    Author: "Kaile Ludlem",
    Status: "declined",
    "Date Submitted": "6/16/2024",
  },
  {
    "Pitch ID": 17,
    Author: "Jeremiah Reynolds",
    Status: "pending",
    "Date Submitted": "7/12/2024",
  },
  {
    "Pitch ID": 18,
    Author: "Jareb Guyver",
    Status: "declined",
    "Date Submitted": "11/17/2023",
  },
  {
    "Pitch ID": 19,
    Author: "Colan Braunter",
    Status: "approved",
    "Date Submitted": "6/30/2024",
  },
  {
    "Pitch ID": 20,
    Author: "Vivienne Montrose",
    Status: "pending",
    "Date Submitted": "7/4/2024",
  },
  {
    "Pitch ID": 21,
    Author: "Emmy Plumm",
    Status: "approved",
    "Date Submitted": "8/13/2023",
  },
  {
    "Pitch ID": 22,
    Author: "Lia Comelli",
    Status: "declined",
    "Date Submitted": "3/15/2024",
  },
  {
    "Pitch ID": 23,
    Author: "Minny Python",
    Status: "declined",
    "Date Submitted": "7/20/2024",
  },
  {
    "Pitch ID": 24,
    Author: "Dun Babbs",
    Status: "approved",
    "Date Submitted": "5/21/2024",
  },
  {
    "Pitch ID": 25,
    Author: "Penny Coarser",
    Status: "approved",
    "Date Submitted": "1/24/2024",
  },
  {
    "Pitch ID": 26,
    Author: "Booth Alsopp",
    Status: "pending",
    "Date Submitted": "5/10/2024",
  },
  {
    "Pitch ID": 27,
    Author: "Blakelee Wannell",
    Status: "approved",
    "Date Submitted": "2/25/2024",
  },
  {
    "Pitch ID": 28,
    Author: "Ekaterina Farrants",
    Status: "declined",
    "Date Submitted": "2/29/2024",
  },
  {
    "Pitch ID": 29,
    Author: "Gloriane Southworth",
    Status: "pending",
    "Date Submitted": "4/15/2024",
  },
  {
    "Pitch ID": 30,
    Author: "Darryl Maudsley",
    Status: "declined",
    "Date Submitted": "4/9/2024",
  },
  {
    "Pitch ID": 31,
    Author: "Piotr Greensite",
    Status: "pending",
    "Date Submitted": "6/13/2024",
  },
  {
    "Pitch ID": 32,
    Author: "Wolfy Cockshtt",
    Status: "declined",
    "Date Submitted": "5/14/2024",
  },
  {
    "Pitch ID": 33,
    Author: "Irving Peperell",
    Status: "pending",
    "Date Submitted": "12/19/2023",
  },
  {
    "Pitch ID": 34,
    Author: "Ive Blei",
    Status: "pending",
    "Date Submitted": "10/12/2023",
  },
  {
    "Pitch ID": 35,
    Author: "Una Whillock",
    Status: "declined",
    "Date Submitted": "3/26/2024",
  },
  {
    "Pitch ID": 36,
    Author: "Valle Shorey",
    Status: "approved",
    "Date Submitted": "5/17/2024",
  },
  {
    "Pitch ID": 37,
    Author: "Paten Dymond",
    Status: "declined",
    "Date Submitted": "2/22/2024",
  },
  {
    "Pitch ID": 38,
    Author: "Thornton Tummasutti",
    Status: "declined",
    "Date Submitted": "5/31/2024",
  },
  {
    "Pitch ID": 39,
    Author: "Cristina Simms",
    Status: "declined",
    "Date Submitted": "5/25/2024",
  },
  {
    "Pitch ID": 40,
    Author: "Egan Brothers",
    Status: "pending",
    "Date Submitted": "6/28/2024",
  },
  {
    "Pitch ID": 41,
    Author: "Kandace Avesque",
    Status: "declined",
    "Date Submitted": "8/16/2023",
  },
  {
    "Pitch ID": 42,
    Author: "Myrtle Tieman",
    Status: "pending",
    "Date Submitted": "11/4/2023",
  },
  {
    "Pitch ID": 43,
    Author: "Junina Vanyutin",
    Status: "approved",
    "Date Submitted": "7/1/2024",
  },
  {
    "Pitch ID": 44,
    Author: "Cordy Wigginton",
    Status: "declined",
    "Date Submitted": "9/7/2023",
  },
  {
    "Pitch ID": 45,
    Author: "Elisa Allpress",
    Status: "pending",
    "Date Submitted": "11/25/2023",
  },
  {
    "Pitch ID": 46,
    Author: "Rosalyn Mirams",
    Status: "declined",
    "Date Submitted": "4/1/2024",
  },
  {
    "Pitch ID": 47,
    Author: "Tobi Stempe",
    Status: "approved",
    "Date Submitted": "10/27/2023",
  },
  {
    "Pitch ID": 48,
    Author: "Shannon Gedge",
    Status: "declined",
    "Date Submitted": "5/23/2024",
  },
  {
    "Pitch ID": 49,
    Author: "Burt Pammenter",
    Status: "pending",
    "Date Submitted": "7/18/2024",
  },
  {
    "Pitch ID": 50,
    Author: "Miguela Thalmann",
    Status: "pending",
    "Date Submitted": "10/8/2023",
  },
  {
    "Pitch ID": 51,
    Author: "Daile Niche",
    Status: "approved",
    "Date Submitted": "8/7/2023",
  },
  {
    "Pitch ID": 52,
    Author: "Twyla Boerder",
    Status: "pending",
    "Date Submitted": "10/17/2023",
  },
  {
    "Pitch ID": 53,
    Author: "Cart Debill",
    Status: "declined",
    "Date Submitted": "4/18/2024",
  },
  {
    "Pitch ID": 54,
    Author: "August Hauxwell",
    Status: "approved",
    "Date Submitted": "12/22/2023",
  },
  {
    "Pitch ID": 55,
    Author: "Diana Bony",
    Status: "approved",
    "Date Submitted": "7/31/2024",
  },
  {
    "Pitch ID": 56,
    Author: "Yasmeen Yakunikov",
    Status: "pending",
    "Date Submitted": "9/14/2023",
  },
  {
    "Pitch ID": 57,
    Author: "Aubrie Mansell",
    Status: "pending",
    "Date Submitted": "12/8/2023",
  },
  {
    "Pitch ID": 58,
    Author: "Ariela Held",
    Status: "pending",
    "Date Submitted": "6/18/2024",
  },
  {
    "Pitch ID": 59,
    Author: "Kerrill Causey",
    Status: "approved",
    "Date Submitted": "12/16/2023",
  },
  {
    "Pitch ID": 60,
    Author: "Pace Hamflett",
    Status: "pending",
    "Date Submitted": "1/21/2024",
  },
  {
    "Pitch ID": 61,
    Author: "Philbert Nassau",
    Status: "declined",
    "Date Submitted": "9/12/2023",
  },
  {
    "Pitch ID": 62,
    Author: "Coleen Spilisy",
    Status: "declined",
    "Date Submitted": "8/16/2023",
  },
  {
    "Pitch ID": 63,
    Author: "Iona Aucourte",
    Status: "pending",
    "Date Submitted": "7/9/2024",
  },
  {
    "Pitch ID": 64,
    Author: "Chick McDuff",
    Status: "declined",
    "Date Submitted": "8/10/2023",
  },
  {
    "Pitch ID": 65,
    Author: "Hillier Ravilus",
    Status: "approved",
    "Date Submitted": "9/1/2023",
  },
  {
    "Pitch ID": 66,
    Author: "Georgeanna Fromont",
    Status: "approved",
    "Date Submitted": "4/11/2024",
  },
  {
    "Pitch ID": 67,
    Author: "Gloriane Cordaroy",
    Status: "approved",
    "Date Submitted": "12/13/2023",
  },
  {
    "Pitch ID": 68,
    Author: "Liuka Huggons",
    Status: "pending",
    "Date Submitted": "8/2/2023",
  },
  {
    "Pitch ID": 69,
    Author: "Cari Topper",
    Status: "declined",
    "Date Submitted": "11/25/2023",
  },
  {
    "Pitch ID": 70,
    Author: "Clemmie Golding",
    Status: "declined",
    "Date Submitted": "11/2/2023",
  },
  {
    "Pitch ID": 71,
    Author: "Eleanora Johnke",
    Status: "pending",
    "Date Submitted": "8/29/2023",
  },
  {
    "Pitch ID": 72,
    Author: "Ivie Carleman",
    Status: "approved",
    "Date Submitted": "4/19/2024",
  },
  {
    "Pitch ID": 73,
    Author: "Terza Gorries",
    Status: "pending",
    "Date Submitted": "12/18/2023",
  },
  {
    "Pitch ID": 74,
    Author: "Diahann Borghese",
    Status: "declined",
    "Date Submitted": "5/28/2024",
  },
  {
    "Pitch ID": 75,
    Author: "Tybi Leader",
    Status: "pending",
    "Date Submitted": "7/22/2024",
  },
  {
    "Pitch ID": 76,
    Author: "Ansell Matuschek",
    Status: "pending",
    "Date Submitted": "8/10/2023",
  },
  {
    "Pitch ID": 77,
    Author: "Sidoney Titman",
    Status: "approved",
    "Date Submitted": "10/1/2023",
  },
  {
    "Pitch ID": 78,
    Author: "Sharai Carrack",
    Status: "approved",
    "Date Submitted": "1/12/2024",
  },
  {
    "Pitch ID": 79,
    Author: "Maridel Cypler",
    Status: "approved",
    "Date Submitted": "5/23/2024",
  },
  {
    "Pitch ID": 80,
    Author: "Hamil Giraudou",
    Status: "declined",
    "Date Submitted": "12/31/2023",
  },
  {
    "Pitch ID": 81,
    Author: "Calla Eagell",
    Status: "declined",
    "Date Submitted": "7/30/2024",
  },
  {
    "Pitch ID": 82,
    Author: "Sal Clausius",
    Status: "declined",
    "Date Submitted": "8/24/2023",
  },
  {
    "Pitch ID": 83,
    Author: "Shayna Jeannaud",
    Status: "approved",
    "Date Submitted": "12/20/2023",
  },
  {
    "Pitch ID": 84,
    Author: "Cyrillus Veelers",
    Status: "declined",
    "Date Submitted": "11/16/2023",
  },
  {
    "Pitch ID": 85,
    Author: "Nonie Rawstorne",
    Status: "pending",
    "Date Submitted": "11/19/2023",
  },
  {
    "Pitch ID": 86,
    Author: "Rossie Castelyn",
    Status: "declined",
    "Date Submitted": "2/2/2024",
  },
  {
    "Pitch ID": 87,
    Author: "Filmer Eakley",
    Status: "approved",
    "Date Submitted": "5/18/2024",
  },
  {
    "Pitch ID": 88,
    Author: "Sheena Attock",
    Status: "declined",
    "Date Submitted": "7/3/2024",
  },
  {
    "Pitch ID": 89,
    Author: "Natassia Dallywater",
    Status: "pending",
    "Date Submitted": "8/9/2023",
  },
  {
    "Pitch ID": 90,
    Author: "Maud Ryles",
    Status: "approved",
    "Date Submitted": "2/2/2024",
  },
  {
    "Pitch ID": 91,
    Author: "Margarete Josiah",
    Status: "declined",
    "Date Submitted": "3/23/2024",
  },
  {
    "Pitch ID": 92,
    Author: "Brigit Fulle",
    Status: "pending",
    "Date Submitted": "10/9/2023",
  },
  {
    "Pitch ID": 93,
    Author: "Cliff Cornehl",
    Status: "declined",
    "Date Submitted": "2/8/2024",
  },
  {
    "Pitch ID": 94,
    Author: "Frans Shakelade",
    Status: "approved",
    "Date Submitted": "10/17/2023",
  },
  {
    "Pitch ID": 95,
    Author: "Carolan Jaimez",
    Status: "declined",
    "Date Submitted": "2/3/2024",
  },
  {
    "Pitch ID": 96,
    Author: "Roxie Clappison",
    Status: "pending",
    "Date Submitted": "7/4/2024",
  },
  {
    "Pitch ID": 97,
    Author: "Nani Gasken",
    Status: "pending",
    "Date Submitted": "2/13/2024",
  },
  {
    "Pitch ID": 98,
    Author: "Euell Tipper",
    Status: "declined",
    "Date Submitted": "5/15/2024",
  },
  {
    "Pitch ID": 99,
    Author: "Winnie Battelle",
    Status: "approved",
    "Date Submitted": "6/6/2024",
  },
  {
    "Pitch ID": 100,
    Author: "Ashley Whitmore",
    Status: "pending",
    "Date Submitted": "8/12/2023",
  },
];

export const Activities = [
  {
    img: man,
    icon: <FaCog />,
    name: "John Doe",
    email: "grace@pitci.com",
    status: "has been approved",
  },
  {
    img: woman,
    icon: <FaCog />,
    name: "Jane Doe",
    email: "grace@pitci.com",
    status: "has been declined",
  },
  {
    img: man,
    icon: <FaCog />,
    name: "John Doe",
    email: "grace@pitci.com",
    status: "has been approved",
  },
  {
    img: woman,
    icon: <FaCog />,
    name: "Jane Doe",
    email: "grace@pitci.com",
    status: "has been declined",
  },
  {
    img: man,
    icon: <FaCog />,
    name: "John Doe",
    email: "grace@pitci.com",
    status: "has been declined",
  },
  {
    img: woman,
    icon: <FaCog />,
    name: "Jane Doe",
    email: "grace@pitci.com",
    status: "has been approved",
  },
  {
    img: man,
    icon: <FaCog />,
    name: "John Doe",
    email: "grace@pitci.com",
    status: "has been declined",
  },
  {
    img: woman,
    icon: <FaCog />,
    name: "Jane Doe",
    email: "grace@pitci.com",
    status: "has been approved",
  },
  {
    img: man,
    icon: <FaCog />,
    name: "John Doe",
    email: "grace@pitci.com",
    status: "has been declined",
  },
  {
    img: woman,
    icon: <FaCog />,
    name: "Jane Doe",
    email: "grace@pitci.com",
    status: "has been approved",
  },
];

export const Upcoming = [
  {
    icon: <FaRegCalendar />,
    name: "Innovate X",
    Date: "Wed 15 June, 2024",
    Time: "10:00am -3:00pm",
  },
  {
    icon: <FaRegCalendar />,
    name: "Creators Pitch",
    Date: "Wed 15 June, 2024",
    Time: "10:00am -2:45pm",
  },
  {
    icon: <FaRegCalendar />,
    name: "Meetup Fest",
    Date: "Wed 15 June, 2024",
    Time: "8:00am -1:00pm",
  },
  {
    icon: <FaRegCalendar />,
    name: "Startup Fest",
    Date: "Wed 15 June, 2024",
    Time: "11:00am -3:00pm",
  },
  {
    icon: <FaRegCalendar />,
    name: "Meetup Fest",
    Date: "Wed 15 June, 2024",
    Time: "8:00am -1:00pm",
  },
  {
    icon: <FaRegCalendar />,
    name: "Startup Fest",
    Date: "Wed 15 June, 2024",
    Time: "11:00am -3:00pm",
  },
];
