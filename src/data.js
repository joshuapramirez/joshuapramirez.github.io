import epita from './assets/epita.png'
import ens from './assets/ens.png'
import factonics from './assets/factonics.png'
import siemens from './assets/siemens.png'
import concordia from './assets/concordia.png'
import pathtracer from './assets/pathtracer.png'
import website from './assets/website.png'
import wce from './assets/wce.png'
import stoch from './assets/stoch.png'
import tau from './assets/tau.png'
import tiger from './assets/tiger.jpg'


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
    image: website,
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },

      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 1,
    title: 'Coaching App Database',
    image: website,
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
      </p>
    ),
    link: 'https://github.com/joshuapramirez/CoachingAppDatabase',
    tags: [
      {
        text: 'SQL',
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },
    ]
  },
  {
    id: 2,
    title: 'Google Clone',
    image: website,
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
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
	      color: 'var(--dark-teal)',
  	    backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 3,
    title: 'Wikipedia Clone',
    image: website,
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },

      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 4,
    title: 'Stock Trading',
    image: pathtracer,
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering. <b>CPU parallelized</b> and optimized with <b>Bounding Volume Hierarchy</b>.
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 5,
    title: 'Email',
    image: stoch,
    description: (

      <p><b>Stochastic methods</b> for real-time transparency in the <b>browser</b>.</p>
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },      
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 6,
    title: 'E-commerce',
    image: tiger,
    description: (
      <div>
        <p>Semester long school project to build the <b>frontend of a Tiger compiler</b></p>
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },      
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 7,
    title: 'Twitter Clone',
    image: tau,
    description: (
      <div>
        <p><b>Kaggle competition</b> : recognize floor surfaces using data collected from Inertial Sensors.</p>
        <p><b>Third team</b> out of 105.</p>
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },      
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
  {
    id: 8,
    title: 'Inventory Management System',
    image: wce,
    link: 'https://github.com/joshuapramirez/InventorySystem',
    description: (
      <p>Implementation of the <b><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></b> (Räsänen, Okko, et al., 2019).</p>
    ),
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
        color: 'var(--maroon)',
        backgroundColor: 'var(--bg-maroon)',
      },      
      {
        text: 'HTML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
      {
        text: 'CSS',
        color: 'var(--dark-teal)',
        backgroundColor: 'var(--bg-dark-teal)',
      },
    ]
  },
]

export { experienceData, projectsData }