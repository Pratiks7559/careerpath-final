// careers/engineer.js

const engineerData = {
    name: 'Engineer',
    description: 'Engineers solve real-world problems using science and technology.',
    roadmap: [
      {
        stage: 'Stage 1: School Level (Class 8–10)',
        description: 'Focus on Mathematics, Science (especially Physics). Build analytical & logical skills. Start participating in Olympiads, science fairs, or coding competitions.',
      },
      {
        stage: 'Stage 2: Senior Secondary (Class 11–12)',
        description: 'Choose Science stream with PCM. Prepare for entrance exams like JEE, State CETs, and Private Exams. Take coaching (optional but helpful).',
      },
      {
        stage: 'Stage 3: Engineering College (B.Tech/BE - 4 years)',
        description: 'Choose specialization based on interest. Participate in internships, hackathons, and clubs. Build a strong portfolio.',
      },
      {
        stage: 'Stage 4: Career After Graduation',
        description: 'Job through campus placement or off-campus. Go for higher studies or join startups, freelancing, or entrepreneurship.',
      },
    ],
    branches: [
      {
        name: 'Computer Science Engineering (CSE)',
        skills: 'Programming (C++, Python, Java), DSA, OS, DBMS, AI/ML, Web Dev.',
        careerOptions: ['Software Developer', 'Data Scientist', 'AI Engineer', 'DevOps', 'Cybersecurity'],
        topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS'],
      },
      {
        name: 'Mechanical Engineering',
        skills: 'CAD/CAM, Thermodynamics, Manufacturing, Robotics, Design.',
        careerOptions: ['Design Engineer', 'Automobile Engineer', 'Plant Engineer', 'R&D'],
        topRecruiters: ['Tata Motors', 'L&T', 'BHEL', 'ISRO', 'DRDO'],
      },
      {
        name: 'Civil Engineering',
        skills: 'AutoCAD, Structural Design, Project Management, Geotechnics.',
        careerOptions: ['Site Engineer', 'Structural Engineer', 'Surveyor', 'Government Contractor'],
        topRecruiters: ['L&T', 'DLF', 'PWD', 'CPWD', 'NHAI'],
      },
      {
        name: 'Electrical Engineering',
        skills: 'Circuits, Power Systems, Electrical Machines, Embedded Systems.',
        careerOptions: ['Electrical Design Engineer', 'Control Systems', 'PSU jobs'],
        topRecruiters: ['NTPC', 'Power Grid', 'BHEL', 'Siemens'],
      },
      {
        name: 'Electronics and Communication Engineering (ECE)',
        skills: 'Signal Processing, VLSI, Embedded Systems, IoT.',
        careerOptions: ['Telecom Engineer', 'Embedded Engineer', 'Chip Design', 'R&D'],
        topRecruiters: ['Qualcomm', 'Samsung', 'DRDO', 'ISRO'],
      },
      {
        name: 'Information Technology (IT)',
        skills: 'Software systems, Networks, Databases.',
        careerOptions: ['Web Developer', 'System Analyst', 'Network Engineer'],
        topRecruiters: ['Google', 'Microsoft', 'IBM'],
      },
      {
        name: 'Aerospace Engineering',
        skills: 'Aerodynamics, Propulsion, Flight Mechanics, Structural Analysis.',
        careerOptions: ['Aerospace Engineer', 'Aircraft Design Engineer', 'Space Researcher'],
        topRecruiters: ['NASA', 'SpaceX', 'Boeing', 'ISRO'],
      },
      {
        name: 'Biotechnology Engineering',
        skills: 'Biochemistry, Genetic Engineering, Microbiology, Pharmaceutical Engineering.',
        careerOptions: ['Biotech Engineer', 'Biomedical Engineer', 'Pharmaceutical Engineer'],
        topRecruiters: ['Biocon', 'Cipla', 'Pfizer', 'Amgen'],
      },
      {
        name: 'Chemical Engineering',
        skills: 'Process Engineering, Thermodynamics, Fluid Mechanics, Material Science.',
        careerOptions: ['Process Engineer', 'Chemical Safety Engineer', 'Petroleum Engineer'],
        topRecruiters: ['Reliance Industries', 'Shell', 'BASF', 'ONGC'],
      },
      {
        name: 'Mining Engineering',
        skills: 'Mining Processes, Mineral Processing, Rock Mechanics, Mine Planning.',
        careerOptions: ['Mine Engineer', 'Safety Engineer', 'Geotechnical Engineer'],
        topRecruiters: ['Coal India', 'Sesa Sterlite', 'Vedanta', 'Jindal Steel'],
      },
      {
        name: 'Environmental Engineering',
        skills: 'Sustainability, Waste Management, Water Treatment, Environmental Laws.',
        careerOptions: ['Environmental Consultant', 'Waste Management Engineer', 'Water Treatment Engineer'],
        topRecruiters: ['Tata Power', 'ONGC', 'Larsen & Toubro', 'EPA'],
      },
      {
        name: 'Food Technology Engineering',
        skills: 'Food Processing, Bioprocess Engineering, Packaging, Quality Control.',
        careerOptions: ['Food Scientist', 'Food Safety Specialist', 'Packaging Engineer'],
        topRecruiters: ['Nestlé', 'Coca-Cola', 'PepsiCo', 'Unilever'],
      },
      {
        name: 'Automobile Engineering',
        skills: 'Automobile Design, Engine Mechanics, Manufacturing Processes, Vehicle Dynamics.',
        careerOptions: ['Automobile Design Engineer', 'Vehicle Dynamics Engineer', 'Manufacturing Engineer'],
        topRecruiters: ['Maruti Suzuki', 'BMW', 'Ford', 'Tata Motors'],
      },
      {
        name: 'Marine Engineering',
        skills: 'Ship Design, Navigation, Marine Diesel Engines, Offshore Technology.',
        careerOptions: ['Marine Engineer', 'Ship Designer', 'Offshore Engineer'],
        topRecruiters: ['Indian Navy', 'Cochin Shipyard', 'MSC', 'Wärtsilä'],
      },
      {
        name: 'Petroleum Engineering',
        skills: 'Oil Exploration, Geophysics, Drilling Engineering, Reservoir Engineering.',
        careerOptions: ['Reservoir Engineer', 'Drilling Engineer', 'Petroleum Geologist'],
        topRecruiters: ['Shell', 'ExxonMobil', 'Halliburton', 'Baker Hughes'],
      },
    ],
    chartData: {
      labels: ['Mechanical', 'Civil', 'CSE', 'ECE', 'Electrical', 'AI/ML', 'Aerospace', 'Biotech', 'Chemical'],
      datasets: [
        {
          label: 'Past Demand (2000-2010)',
          data: [4, 3, 2, 4, 3, 1, 2, 3, 4],
          backgroundColor: '#ff9999',
        },
        {
          label: 'Present Demand (2024)',
          data: [2, 2, 5, 3, 2, 4, 4, 5, 3],
          backgroundColor: '#36a2eb',
        },
        {
          label: 'Future Demand (2030+)',
          data: [1, 1, 5, 2, 1, 5, 4, 5, 2],
          backgroundColor: '#4bc0c0',
        },
      ],
    },
  };
  
  export default engineerData;
  