// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const policeOfficerData = {
  name: 'Police Officer',
  description: 'A police officer is responsible for maintaining public order, enforcing laws, preventing crime, and protecting citizens within a community.',

  roadmap: [
    {
      stage: 'Step 1: Education Qualification',
      description: 'Complete 10+2 (Higher Secondary) or a Bachelor\'s Degree depending on the level of police service you aim for (Constable, Sub-Inspector, IPS Officer).'
    },
    {
      stage: 'Step 2: Physical and Medical Fitness',
      description: 'Maintain strong physical fitness and good health. Meet minimum height, chest, and endurance standards.'
    },
    {
      stage: 'Step 3: Appear for Competitive Exams',
      description: 'Take exams like SSC GD (Constable), SSC CPO (Sub-Inspector), State PSC, or UPSC Civil Services (for IPS).'
    },
    {
      stage: 'Step 4: Physical Efficiency Test (PET) and Physical Standards Test (PST)',
      description: 'Clear PET and PST rounds that test your endurance, sprinting, high jump, long jump, etc.'
    },
    {
      stage: 'Step 5: Interview and Medical Exam',
      description: 'Pass the personal interview and thorough medical examination.'
    },
    {
      stage: 'Step 6: Training Academy',
      description: 'Complete training at police academies like Sardar Vallabhbhai Patel National Police Academy (for IPS), State Police Academies, etc.'
    },
    {
      stage: 'Step 7: Probation and Posting',
      description: 'Serve a probation period with real-world field experience. After successful completion, get a permanent posting.'
    },
    {
      stage: 'Step 8: Career Growth',
      description: 'Promotion to higher ranks: Inspector, Superintendent, Deputy Commissioner, Commissioner, or even DGP (Director General of Police).'
    }
  ],

  branches: [
    {
      name: 'State Police Service',
      subBranches: ['Constable', 'Sub-Inspector', 'Inspector', 'DSP', 'SP', 'DIG', 'IG', 'DGP']
    },
    {
      name: 'Central Police Forces',
      subBranches: ['CRPF', 'BSF', 'CISF', 'ITBP', 'SSB']
    },
    {
      name: 'Specialized Forces',
      subBranches: ['NIA (National Investigation Agency)', 'CBI', 'Anti-Terrorism Squad', 'Cyber Cell', 'Economic Offences Wing']
    }
  ],

  importantExams: [
    'SSC GD Constable',
    'SSC CPO (Sub-Inspector)',
    'State Public Service Commission (PSC) Exams',
    'UPSC Civil Services Exam (for IPS)',
    'CAPF (Assistant Commandant) Exam'
  ],

  industryTrends: [
    {
      trend: 'Technology in Policing',
      currentTrend: 'Use of CCTVs, body cameras, forensic technology, cybercrime units.',
      oldTrend: 'Manual records, traditional patrolling.',
      futureTrend: 'AI surveillance, predictive policing, drone patrolling, bodycam AI analysis.'
    },
    {
      trend: 'Community Policing',
      currentTrend: 'Citizen partnership, outreach programs, smart policing apps.',
      oldTrend: 'Command and control policing.',
      futureTrend: 'Collaborative law enforcement with AI citizen feedback systems.'
    }
  ],

  salaryTrends: {
    india: {
      entryLevel: {
        pastSalary: '₹2.5–4 LPA',
        presentSalary: '₹4–6 LPA',
        futureSalary: '₹6–8 LPA'
      },
      midLevel: {
        pastSalary: '₹6–8 LPA',
        presentSalary: '₹8–12 LPA',
        futureSalary: '₹12–18 LPA'
      },
      seniorLevel: {
        pastSalary: '₹10–15 LPA',
        presentSalary: '₹15–25 LPA',
        futureSalary: '₹25–40 LPA+'
      }
    },
    global: {
      entryLevel: {
        pastSalary: '$30,000–$40,000',
        presentSalary: '$40,000–$55,000',
        futureSalary: '$55,000–$75,000'
      },
      midLevel: {
        pastSalary: '$50,000–$70,000',
        presentSalary: '$70,000–$100,000',
        futureSalary: '$100,000–$150,000'
      },
      seniorLevel: {
        pastSalary: '$80,000–$120,000',
        presentSalary: '$120,000–$180,000',
        futureSalary: '$180,000–$250,000+'
      }
    }
  },

  topInstitutes: [
    { institution: 'Sardar Vallabhbhai Patel National Police Academy', location: 'Hyderabad, India' },
    { institution: 'Central Detective Training Institute (CDTI)', location: 'Chandigarh, India' },
    { institution: 'Police Training College', location: 'States like Maharashtra, UP, Karnataka' },
    { institution: 'John Jay College of Criminal Justice', location: 'New York, USA' }
  ],

  toolsAndTech: [
    { tool: 'Body Cameras', examples: ['Axon Body 3', 'Reveal Media'] },
    { tool: 'Forensic Analysis Software', examples: ['Autopsy', 'FTK Imager'] },
    { tool: 'Cybercrime Investigation Tools', examples: ['Wireshark', 'Kali Linux'] },
    { tool: 'Patrolling Apps', examples: ['Beatbook', 'SmartCOP'] },
    { tool: 'Facial Recognition Software', examples: ['Clearview AI'] }
  ]
,

// Chart.js Data for Police Officer Salary Trends in India
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Entry-Level Police Salary (INR)',
      data: [350000, 500000, 700000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    },
    {
      label: 'Mid-Level Police Salary (INR)',
      data: [700000, 1000000, 1500000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Senior-Level Police Salary (INR)',
      data: [1200000, 2000000, 3500000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    }
  ]
},
};

// export const PoliceOfficerChart = () => (
//   <div>
//     <h3>Police Officer Salary Trends in India</h3>
//     <Line data={policeOfficerChartData} />
//   </div>
// );

export default policeOfficerData;
