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
    endDate: new Date(2023, 11),
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
  // -------------------------------------


/*
  {
    company: 'Concordia',
    logo: concordia,
    title: 'Volunteering',
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2018, 8, 31),
    description: [
      <p>Renovation of Latresnes' church with 10 other international students.</p>
    ],
    color: 'red',
    position: 'bottom'
  },
  {
    company: 'Tampere University',
    logo: epita,
    title: 'Exchange semester in Finland',
    startDate: new Date(2019, 1, 1),
    endDate: new Date(2019, 5),
    description: [
      <p>Courses in Machine Learning, Signal Compression and Software Engineering.</p>,
      <p><b>3rd out of 105 teams</b> at the university's <u><a href='https://www.kaggle.com/c/robotsurface/overview'>Kaggle competition</a></u>.</p>
    ],
    color: 'purple',
    position: 'top'
  },
  {
    company: 'ENS - PSL',
    logo: ens,
    title: 'Internship',
    startDate: new Date(2019, 5, 1),
    endDate: new Date(2019, 8, 31),
    description: [
      <p>Benchmarking of the <u><a href='https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime'>DiViMe</a></u> speech processing tool.</p>,
      <p>Implementation of the <u><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></u> (Räsänen, Okko, et al., 2019).</p>,
      <p>Tags: <b>MATLAB, Python, Docker</b></p>
    ],
    color: 'yellow',
    position: 'bottom'
  },
  {
    company: 'EPITA',
    logo: epita,
    title: 'Master in Image Processing and Computer Graphics',
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2022, 7),
    description: [
      <p>Courses in Image Processing, Computer Vision and Computer Graphics.</p>,
      <p>Tags: <b>C++, Python, OpenGL, CUDA</b></p>
    ],
    color: 'blue',
    position: 'center'
  },

*/
  // -------------------------------------
  {
    company: 'HarvardX',
    logo: factonics,
    title: 'CS50x Intro to Computer Science',
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 4),
    description: [
      <p> Explored key topics including abstraction, algorithms, data structures, relational databases, 
      and encapsulation.</p>,
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
      <p> Learned fundamental web development concepts</p>,
      <p> Built 6 web applications</p>,
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
      <p> Developed experience with SQL, and integrated it </p>,
      <p> with programming languages like Python and Java. </p>,
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
      <p>Gained proficiency in architecting, deploying, scaling, and</p>,
      <p>maintaining multi-service applications with a diverse tech stack</p>,
      <p>Tags: <b>React, Next.js, Node.js, Express, MongoDB, Redis, Docker, Kubernetes, Skaffold, JavaScript, TypeScript, Google Cloud Platform, </b></p>,
      <p><u><a href=''>Certificate</a></u></p>,
    ],
    color: 'yellow',
    position: 'bottom'
  },
  {
    company: '',
    logo: ens,
    title: '',
    startDate: new Date(2024, 1),
    endDate: new Date(2024, 6),
    description: [
    ],
    color: '',
    position: 'center'
  },
]








const projectsData = [
  {
    id: 0,
    title: 'Word count estimator',
    image: wce,
    link: 'https://github.com/bootphon/word-count-estimator',
    description: (
      <p>Implementation of the <b><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></b> (Räsänen, Okko, et al., 2019).</p>
    ),
    tags: [
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'ML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
    ]
  },
  {
    id: 1,
    title: 'Robot Surface Detection',
    image: tau,
    description: (
      <div>
        <p><b>Kaggle competition</b> : recognize floor surfaces using data collected from Inertial Sensors.</p>
        <p><b>Third team</b> out of 105.</p>
      </div>
    ),
    link: 'https://www.kaggle.com/c/robotsurface/overview',
    tags: [
      {
        text: 'Python',
        color: 'var(--green)',
        backgroundColor: 'var(--bg-green)',
      },
      {
        text: 'ML',
        color: 'var(--red)',
        backgroundColor: 'var(--bg-red)',
      },
    ]
  },
  {
    id: 2,
    title: 'Tiger Compiler',
    image: tiger,
    description: (
      <div>
        <p>Semester long school project to build the <b>frontend of a Tiger compiler</b></p>
      </div>
    ),
    link: 'https://assignments.lrde.epita.fr/index.html',
    tags: [
      {
        text: 'C++',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
    ]
  },
  {
    id: 3,
    title: 'Real-time transparency',
    image: stoch,
    description: (

      <p><b>Stochastic methods</b> for real-time transparency in the <b>browser</b>.</p>
    ),
    link: 'https://github.com/SabineHU/PFEE_Stochastic_Transparency',
    tags: [
      {
        text: 'JS',
        color: 'var(--orange)',
        backgroundColor: 'var(--bg-orange)',
      },
      {
        text: 'ThreeJS',
        color: 'var(--cyan)',
        backgroundColor: 'var(--bg-cyan)',
      },
      {
        text: 'GLSL',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
  {
    id: 4,
    title: 'Path tracer',
    image: pathtracer,
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering. <b>CPU parallelized</b> and optimized with <b>Bounding Volume Hierarchy</b>.
      </p>
    ),
    link: 'https://github.com/MedericCar/pathtracer',
    tags: [
      {
        text: 'C++',
        color: 'var(--blue)',
        backgroundColor: 'var(--bg-blue)',
      },
    ]
  },
  {
    id: 5,
    title: 'Personal website',
    image: website,
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
      </p>
    ),
    link: 'https://github.com/MedericCar/portfolio',
    tags: [
      {
        text: 'React',
        color: 'var(--purple)',
        backgroundColor: 'var(--bg-purple)',
      },
      {
        text: 'ThreeJS',
        color: 'var(--cyan)',
        backgroundColor: 'var(--bg-cyan)',
      },
      {
        text: 'GLSL',
        color: 'var(--pink)',
        backgroundColor: 'var(--bg-pink)',
      },
    ]
  },
]

export { experienceData, projectsData }