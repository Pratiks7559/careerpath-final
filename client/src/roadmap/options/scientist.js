// careers/scientist.js

const scientistData = {
    name: 'Scientist',
    description: 'Scientists explore, discover, and innovate to expand human knowledge in various fields like Physics, Biology, Chemistry, Space, and Technology.',
    roadmap: [
      {
        stage: 'Stage 1: School Level (Class 8–10)',
        description: 'Develop strong basics in Science and Mathematics. Participate in science fairs, Olympiads (like NSEJS, NSEA, NSEC), and innovation competitions.',
      },
      {
        stage: 'Stage 2: Senior Secondary (Class 11–12)',
        description: 'Choose the Science stream (PCM or PCB depending on interest). Focus on subjects like Physics, Chemistry, Biology, Mathematics, and Computer Science. Appear for entrance exams like KVPY, JEE, NEET (depending on specialization).',
      },
      {
        stage: 'Stage 3: Undergraduate Degree (B.Sc./B.Tech.)',
        description: 'Pursue a Bachelor’s degree in a specialization: Physics, Chemistry, Biology, Mathematics, Environmental Science, Computer Science, Engineering, etc. Engage in internships, research assistant programs, and scientific projects.',
      },
      {
        stage: 'Stage 4: Postgraduate Degree (M.Sc./M.Tech.)',
        description: 'Pursue a Master’s degree to deepen your specialization. Get involved in publishing research papers, assisting professors, attending conferences, and clearing national-level exams like GATE, CSIR-NET, JEST.',
      },
      {
        stage: 'Stage 5: Doctorate (Ph.D.) and Research Career',
        description: 'Enroll in a Ph.D. program. Work on real-world problems and research innovation. After Ph.D., work as a Research Scientist, Postdoctoral Fellow, or Scientist at institutes, labs, and organizations.',
      },
    ],
    fields: [
      {
        name: 'Physics',
        skills: 'Theoretical Physics, Astrophysics, Quantum Mechanics, Experimental Physics',
        careerOptions: ['Research Scientist', 'Astrophysicist', 'Particle Physicist', 'Quantum Researcher'],
        topRecruiters: ['ISRO', 'NASA', 'CERN', 'DRDO', 'BARC'],
      },
      {
        name: 'Biology',
        skills: 'Genetics, Microbiology, Biotechnology, Ecology, Immunology',
        careerOptions: ['Microbiologist', 'Genetic Engineer', 'Ecologist', 'Biomedical Scientist'],
        topRecruiters: ['ICMR', 'WHO', 'Biocon', 'Amgen', 'Pfizer'],
      },
      {
        name: 'Chemistry',
        skills: 'Organic Chemistry, Inorganic Chemistry, Analytical Chemistry, Chemical Research',
        careerOptions: ['Research Chemist', 'Pharmaceutical Scientist', 'Materials Scientist'],
        topRecruiters: ['Indian Institute of Chemical Technology (IICT)', 'BASF', 'Pfizer', 'Novartis'],
      },
      {
        name: 'Environmental Science',
        skills: 'Climate Studies, Pollution Control, Renewable Energy, Environmental Impact Research',
        careerOptions: ['Environmental Scientist', 'Sustainability Consultant', 'Conservation Scientist'],
        topRecruiters: ['UNEP', 'WWF', 'Greenpeace', 'Environmental NGOs'],
      },
      {
        name: 'Computer Science (Research)',
        skills: 'AI/ML Research, Data Science, Cybersecurity, Quantum Computing',
        careerOptions: ['AI Research Scientist', 'Data Scientist', 'Quantum Computing Researcher'],
        topRecruiters: ['Google DeepMind', 'OpenAI', 'IBM Research', 'Microsoft Research'],
      },
      {
        name: 'Space Science',
        skills: 'Astronomy, Astrophysics, Planetary Science, Space Exploration',
        careerOptions: ['Astronomer', 'Space Research Scientist', 'Satellite Researcher'],
        topRecruiters: ['ISRO', 'NASA', 'ESA', 'SpaceX'],
      },
    ],
    chartData: {
      labels: ['Physics', 'Biology', 'Chemistry', 'Environmental Science', 'Computer Science', 'Space Science'],
      datasets: [
        {
          label: 'Past Demand (2000-2010)',
          data: [3, 4, 3, 2, 2, 3],
          backgroundColor: '#ffcc99',
        },
        {
          label: 'Present Demand (2024)',
          data: [4, 5, 4, 4, 5, 5],
          backgroundColor: '#66b3ff',
        },
        {
          label: 'Future Demand (2030+)',
          data: [5, 5, 5, 5, 5, 5],
          backgroundColor: '#99ff99',
        },
      ],
    },
  };
  
  export default scientistData;
  