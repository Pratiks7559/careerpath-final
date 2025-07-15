
const caData = {
  name: 'Chartered Accountant (CA)',
  description: 'Chartered Accountants specialize in finance, taxation, audit, and management accounting, ensuring the financial health and regulatory compliance of organizations.',

  roadmap: [
    {
      stage: 'Step 1: Complete 10+2 (Preferably Commerce Stream)',
      description: 'Focus on subjects like Accounting, Economics, Business Studies, and Mathematics during higher secondary education.'
    },
    {
      stage: 'Step 2: Register for CA Foundation Course',
      description: 'Register with ICAI and start preparing for CA Foundation (earlier called CPT).'
    },
    {
      stage: 'Step 3: Clear CA Foundation Exam',
      description: 'Qualify the Foundation exam to move to the Intermediate level.'
    },
    {
      stage: 'Step 4: Register for CA Intermediate Course',
      description: 'Enroll and prepare for both groups of CA Intermediate after clearing Foundation.'
    },
    {
      stage: 'Step 5: Undergo 4 Weeks of ICITSS Training',
      description: 'Complete Information Technology and Soft Skills training before starting articleship.'
    },
    {
      stage: 'Step 6: Complete 3 Years of Articleship Training',
      description: 'Practical on-the-job training under a practicing Chartered Accountant.'
    },
    {
      stage: 'Step 7: Clear Both Groups of CA Intermediate',
      description: 'Clear Group 1 and Group 2 exams of Intermediate while continuing articleship.'
    },
    {
      stage: 'Step 8: Register for CA Final Course',
      description: 'After completing Intermediate, register for the CA Final.'
    },
    {
      stage: 'Step 9: Undergo 4 Weeks of AICITSS Training',
      description: 'Advanced Integrated Course on Information Technology and Soft Skills before appearing for Final exam.'
    },
    {
      stage: 'Step 10: Clear CA Final Exam',
      description: 'Pass both groups of the Final examination and complete articleship successfully.'
    },
    {
      stage: 'Step 11: Become a Member of ICAI',
      description: 'Apply for membership of the Institute of Chartered Accountants of India (ICAI) to officially become a CA.'
    }
  ],

  importantSkills: [
    'Financial Reporting',
    'Auditing and Assurance',
    'Taxation (Direct and Indirect)',
    'Corporate Laws',
    'Cost Management',
    'Ethics and Professionalism',
    'Problem Solving and Analytical Thinking'
  ],

  salaryTrends: {
    global: {
      fresherCA: {
        pastSalary: '$5K to $10K/year',
        presentSalary: '$8K to $20K/year',
        futureSalary: '$30K+ (Post 5 years of experience)'
      },
      experiencedCA: {
        pastSalary: '$20K–$40K/year',
        presentSalary: '$50K–$100K/year',
        futureSalary: '$120K+ (Global exposure, CFO roles)'
      }
    }
  },

  topInstitutes: [
    { institution: 'The Institute of Chartered Accountants of India (ICAI)', location: 'India' },
    { institution: 'Association of Chartered Certified Accountants (ACCA)', location: 'Global' },
    { institution: 'CPA Australia', location: 'Australia' },
    { institution: 'ICAEW (Institute of Chartered Accountants in England and Wales)', location: 'UK' }
  ],

  industryTrends: [
    {
      trend: 'Automation of Accounting Processes',
      currentTrend: 'Adoption of AI in auditing and financial reporting.',
      oldTrend: 'Manual ledger management.',
      futureTrend: 'Blockchain-based audits and AI-driven tax compliance.'
    },
    {
      trend: 'Globalization of Finance Roles',
      currentTrend: 'Remote financial consulting opportunities.',
      oldTrend: 'Localized accounting firms only.',
      futureTrend: 'Global CA networks and decentralized finance roles.'
    }
  ],

  toolsAndTech: [
    { tool: 'Accounting Software', examples: ['Tally', 'Zoho Books', 'QuickBooks', 'SAP FICO'] },
    { tool: 'Audit Tools', examples: ['CaseWare', 'ACL Analytics', 'IDEA'] },
    { tool: 'Taxation Software', examples: ['ClearTax', 'TurboTax'] }
  ]
,

// Chart.js Data for CA Career Salary Trends
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Fresher CA Salary (USD)',
      data: [7000, 15000, 35000],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      tension: 0.4
    },
    {
      label: 'Experienced CA Salary (USD)',
      data: [30000, 75000, 150000],
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      tension: 0.4
    }
  ]
},
};


export default caData;
