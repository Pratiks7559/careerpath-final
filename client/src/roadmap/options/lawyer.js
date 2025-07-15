// careers/lawyer.js

const lawyerData = {
    name: 'Lawyer',
    description: 'Lawyers represent clients in legal matters, offering advice, drafting legal documents, and appearing in court to argue cases, ensuring justice and fairness.',
    roadmap: [
      {
        stage: 'Step 1: Schooling (Class 11–12)',
        description: 'Stream: Arts/Commerce. Focus on subjects like Political Science, History, and English. Maintain good grades to secure a law entrance exam seat.',
      },
      {
        stage: 'Step 2: Law Entrance Exam (CLAT, LSAT)',
        description: 'Appear for CLAT (Common Law Admission Test) or LSAT (Law School Admission Test) for admission into top law colleges.',
      },
      {
        stage: 'Step 3: LLB (5 years) or BA LLB (5 years)',
        description: 'Complete a 5-year law degree from a recognized institution. It includes courses on Constitutional Law, Criminal Law, Civil Procedure, etc.',
      },
      {
        stage: 'Step 4: Internship',
        description: 'Intern with law firms, courts, or corporate legal departments to gain practical experience and develop skills in handling real cases.',
      },
      {
        stage: 'Step 5: Practice or LLM (Master of Laws)',
        description: 'Start practicing law in courts or law firms, or pursue LLM for specialization in fields like International Law, Corporate Law, Criminal Law, etc.',
      },
      {
        stage: 'Step 6: Specialization (optional)',
        description: 'Specialize in specific areas of law like Constitutional Law, Criminal Law, Corporate Law, Intellectual Property, Taxation, etc.',
      },
      {
        stage: 'Step 7: Higher Education / Judicial Exams',
        description: 'Further studies or appear for judicial exams to become a judge, or advance to senior roles in the legal profession.',
      },
      {
        stage: 'Step 8: Establishing Practice or Corporate Role',
        description: 'Work independently as a lawyer, open your own practice, or take up senior roles in corporate or government legal departments.',
      },
    ],
    branches: [
      {
        name: 'Criminal Law',
        subBranches: ['Criminal Defense', 'Prosecution', 'Cybercrime'],
      },
      {
        name: 'Corporate Law',
        subBranches: ['Mergers & Acquisitions', 'Intellectual Property', 'Contract Law'],
      },
      {
        name: 'Family Law',
        subBranches: ['Divorce', 'Child Custody', 'Domestic Violence'],
      },
      {
        name: 'Constitutional Law',
        subBranches: ['Human Rights', 'Civil Rights'],
      },
      {
        name: 'Taxation Law',
        subBranches: ['Income Tax', 'Indirect Tax', 'GST'],
      },
      {
        name: 'Environmental Law',
        subBranches: ['Climate Change', 'Conservation', 'Pollution Control'],
      },
      {
        name: 'International Law',
        subBranches: ['Public International Law', 'Private International Law'],
      },
      {
        name: 'Intellectual Property Law',
        subBranches: ['Patent Law', 'Trademark Law', 'Copyright Law'],
      },
      {
        name: 'Labour Law',
        subBranches: ['Employment Contracts', 'Workplace Safety', 'Industrial Relations'],
      },
    ],
    chartData: {
      labels: ['Criminal Law', 'Corporate Law', 'Family Law', 'Constitutional Law', 'Taxation Law', 'Environmental Law', 'Intellectual Property Law'],
      datasets: [
        {
          label: 'Old Trend',
          data: [4, 5, 3, 2, 3, 2, 2],
          backgroundColor: '#ffcccb',
        },
        {
          label: 'Current Trend (2025)',
          data: [5, 6, 4, 3, 4, 3, 3],
          backgroundColor: '#4caf50',
        },
        {
          label: 'Future Trend (2030+)',
          data: [6, 7, 5, 4, 5, 4, 4],
          backgroundColor: '#2196f3',
        },
      ],
    },
    salaryTrends: {
      labels: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'UAE', 'Singapore', 'Saudi Arabia', 'South Africa'],
      datasets: [
        {
          label: 'Past (2000s)',
          data: [0.4, 100, 45, 60, 80, 75, 55, 65, 70, 25],
          backgroundColor: '#d3d3d3',
        },
        {
          label: 'Present (2025)',
          data: [1.5, 150, 70, 90, 120, 110, 80, 100, 120, 50],
          backgroundColor: '#ffa500',
        },
        {
          label: 'Future (2030+)',
          data: [3, 250, 100, 120, 150, 140, 100, 130, 150, 70],
          backgroundColor: '#00bcd4',
        },
      ],
    },
  };
  
  export default lawyerData;
  