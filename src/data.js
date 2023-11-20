import epita from './assets/epita.png'
import ens from './assets/ens.png'
import factonics from './assets/factonics.png'
import siemens from './assets/siemens.png'

import coaching from './assets/coaching.png'
import commerce from './assets/commerce.png'
import fitnessPage from './assets/fitnessPage.png'
import inventoryManagement from './assets/inventoryManagement.png'
import mail from './assets/mail.png'
import network from './assets/network.png'
import search from './assets/search.png'
import stockTrading from './assets/stockTrading.png'
import wiki from './assets/wiki.png'


const experienceData = [
  {
    company: 'Florida International University',
    logo: epita,
    title: 'Bachelor in Business Management',
    startDate: new Date(2016, 8),
    endDate: new Date(2018, 4),
    description: [
      <p>Courses in management, accounting, finance, entrepreneurship</p>,
    ],
    color: 'green',
    position: 'bottom'
  },
  {
    company: 'YMCA',
    logo: epita,
    title: 'Personal Trainer',
    startDate: new Date(2017, 5),
    endDate: new Date(2023, 12, 15),
    description: [
      <p> Provided one-on-one training, coached the Teen Lifting Club, and operated the summer Athletic </p>,
    ],
    color: 'blue',
    position: 'center'
  },
  {
    company: 'One Fitness Weston',
    logo: epita,
    title: 'Personal Trainer',
    startDate: new Date(2022, 2),
    endDate: new Date(2023, 7),
    description: [
      <p> Conducted group fitness classes and designed effective workout programs</p>,
    ],
    color: 'purple',
    position: 'bottom'
  },
  {
    company: 'HarvardX',
    logo: factonics,
    title: 'CS50x Intro to Computer Science',
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 4),
    description: [
      <p>Tags: <b>C, Python, SQL, JavaScript, HTML, CSS, Flask, APIs</b></p>,
      <p><b><u><a href='https://certificates.cs50.io/4349187d-cda4-4cd0-8bfc-87c0c0398e21.pdf?size=letter'>Certificate</a></u></b></p>,
    ],
    color: 'orange',
    position: 'top'
  },
  {
    company: 'HarvardX',
    logo: siemens,
    title: 'CS50W Web Programming with Python and JavaScript',
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 8),
    description: [
      <p>Tags: <b>Python, JavaScript, HTML, CSS, SQL, Django, Git, React, Bootstrap, Selenium</b></p>,
      <p><b><u><a href='https://certificates.cs50.io/c709ede2-f49c-4158-80ac-792cda162595.pdf?size=letter'>Certificate</a></u></b></p>,
    ],
    color: 'green',
    position: 'bottom'
  },
  {
    company: 'HarvardX',
    logo: siemens,
    title: 'CS50SQL Intro to Databases with SQL',
    startDate: new Date(2023, 9, 15),
    endDate: new Date(2023, 10, 15),
    description: [
      <p>Tags: <b>SQLite, PostgreSQL, MySQL</b></p>,
      <p><b><u><a href='https://certificates.cs50.io/945bc382-ba75-4cd9-a116-3ccf5765e655.png?size=letter'>Certificate</a></u></b></p>,
    ],
    color: 'red',
    position: 'top'
  },
  {
    company: 'Udemy',
    logo: ens,
    title: 'Microservices with Node JS and React',
    startDate: new Date(2023, 10, 15),
    endDate: new Date(2023, 12, 15),
    description: [
      <p>Tags: <b>React, Next.js, Node.js, Express, MongoDB, Redis, Docker, Kubernetes, Skaffold, JavaScript, TypeScript, Google Cloud Platform, </b></p>,
      <p><u><a href=''>Certificate</a></u></p>,
    ],
    color: 'yellow',
    position: 'bottom'
  },
]





const projectsData = [
  {
    id: 0,
    title: 'Fitness Business Page',
    image: fitnessPage,
    description: (
      <p>
        Personal page to help you <b>promote</b> your business
      </p>
    ),
    link: 'https://github.com/joshuapramirez/FitnessPage',
    tags: [
      {
        text: 'Flask',
        color: 'var(--purple)',
        backgroundColor: 'var(--bg-purple)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 1,
    title: 'Coaching App Database',
    image: coaching,
    description: (
      <p>
        <b>SQLITE</b> database for a <b>coaching</b> application for personal trainers and clients
      </p>
    ),
    link: 'https://github.com/joshuapramirez/CoachingAppDatabase',
    tags: [
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
    ]
  },
  {
    id: 2,
    title: 'Google Clone',
    image: search,
    description: (
      <p>
        Simple web application that replicates the <b>Google Search</b> and <b>Google Images</b> pages.
      </p>
    ),
    link: 'https://github.com/joshuapramirez/GoogleClone',
    tags: [
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 3,
    title: 'Wikipedia Clone',
    image: wiki,
    description: (
      <p>
        Users can <b>search</b> for existing wiki pages, <b>create</b> new pages, and <b>edit</b> existing ones.
      </p>
    ),
    link: 'https://github.com/joshuapramirez/WikipediaClone',
    tags: [
      {
        text: 'Django',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 4,
    title: 'Stock Trading',
    image: stockTrading,
    description: (
      <p>
        Look up stock prices, <b>simulate buying and selling</b> of stocks, and track their <b>virtual portfolio</b>
      </p>
    ),
    link: 'https://github.com/joshuapramirez/StockTrading',
    tags: [
      {
        text: 'Flask',
        color: 'var(--purple)',
        backgroundColor: 'var(--bg-purple)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 5,
    title: 'Email',
    image: mail,
    description: (

      <p>Platform where users can <b>create, send, and receive</b> emails</p>
    ),
    link: 'https://github.com/joshuapramirez/Email',
    tags: [
      {
        text: 'Django',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
      {
        text: 'JavaScript',
        color: 'var(--cyan)',
        backgroundColor: 'var(--bg-cyan)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 6,
    title: 'E-commerce',
    image: commerce,
    description: (
      <div>
        <p>Platform for <b>browsing</b> products, <b>bidding</b> on items, <b>purchasing</b> products, and <b>selling</b> their own items.</p>
      </div>
    ),
    link: 'https://github.com/joshuapramirez/ECommerce',
    tags: [
      {
        text: 'Django',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 7,
    title: 'Twitter Clone',
    image: network,
    description: (
      <div>
        <p><b>Share</b> posts, <b>engage</b> with content, and <b>connect</b> with others.</p>
      </div>
    ),
    link: 'https://github.com/joshuapramirez/TwitterClone',
    tags: [
      {
        text: 'Django',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
      {
        text: 'JavaScript',
        color: 'var(--cyan)',
        backgroundColor: 'var(--bg-cyan)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 8,
    title: 'Inventory Management System',
    image: inventoryManagement,
    description: (
      <p><b>Create, update, manage, and analyze</b> products</p>
    ),
    link: 'https://github.com/joshuapramirez/InventorySystem',
    tags: [
      {
        text: 'Django',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
      {
        text: 'JavaScript',
        color: 'var(--cyan)',
        backgroundColor: 'var(--bg-cyan)',
      },
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'SQL',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
]

export { experienceData, projectsData }