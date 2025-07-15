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

const ipsOfficerData = {
  name: 'IPS Officer',
  description: 'An IPS Officer is one of the top civil services positions in India, responsible for public safety, law enforcement, crime prevention, and national security management.',

  roadmap: [
    {
      stage: 'Step 1: Graduate in Any Discipline',
      description: 'Complete your Bachelor’s degree (any field is eligible) from a recognized university.'
    },
    {
      stage: 'Step 2: Start UPSC CSE Preparation',
      description: 'Focus on General Studies, Current Affairs, Optional Subject, CSAT; physical fitness is important too.'
    },
    {
      stage: 'Step 3: Appear for UPSC Prelims',
      description: 'Objective type screening test. You must clear the Prelims to move to Mains.'
    },
    {
      stage: 'Step 4: Clear UPSC Mains Exam',
      description: 'Written examination (9 descriptive papers) including optional subjects and essays.'
    },
    {
      stage: 'Step 5: Clear UPSC Interview',
      description: 'Final personality test to evaluate leadership, decision-making, integrity, and presence of mind.'
    },
    {
      stage: 'Step 6: Clear Medical Test',
      description: 'Height, vision, chest expansion, and physical endurance tests are mandatory for IPS.'
    },
    {
      stage: 'Step 7: Training at SVPNPA, Hyderabad',
      description: 'Undergo specialized police training at Sardar Vallabhbhai Patel National Police Academy (SVPNPA).'
    },
    {
      stage: 'Step 8: Career Growth',
      description: 'Start as Assistant Superintendent of Police (ASP) → Superintendent of Police (SP) → Deputy Inspector General (DIG) → Inspector General (IGP) → Director General of Police (DGP).'
    }
  ],

  importantExams: [
    'UPSC CSE Prelims',
    'UPSC CSE Mains',
    'UPSC CSE Interview',
    'IPS Medical Test'
  ],

  salaryTrends: {
    india: {
      entryLevel: {
        pastSalary: '₹40,000–₹50,000',
        presentSalary: '₹56,100 (Level 10) + allowances',
        futureSalary: '₹75,000–₹85,000 (future revisions expected)'
      },
      midLevel: {
        pastSalary: '₹80,000–₹1,00,000',
        presentSalary: '₹78,800–₹1,18,500 (Level 11-12)',
        futureSalary: '₹1,20,000–₹1,50,000'
      },
      seniorLevel: {
        pastSalary: '₹1.2L–₹1.5L',
        presentSalary: '₹1,44,200–₹2,18,200 (Level 13-14)',
        futureSalary: '₹2.5L+ (Director General, IB/RAW/Security Advisor)'
      }
    }
  },

  topInstitutes: [
    { institution: 'Sardar Vallabhbhai Patel National Police Academy (SVPNPA)', location: 'Hyderabad, India' },
    { institution: 'National Institute of Criminology and Forensic Science (NICFS)', location: 'Delhi, India' },
    { institution: 'LNJN National Institute of Criminology', location: 'New Delhi, India' }
  ],

  industryTrends: [
    {
      trend: 'Cybersecurity and Cybercrime Management',
      currentTrend: 'Dealing with cyber terrorism, online financial frauds, and cyberbullying.',
      oldTrend: 'Focus mainly on physical crime control.',
      futureTrend: 'AI-based predictive policing, Blockchain for crime record security.'
    },
    {
      trend: 'Smart Policing and Bodycams',
      currentTrend: 'Use of drones, CCTVs, body cameras, and GPS tagging.',
      oldTrend: 'Manual patrolling and reporting.',
      futureTrend: 'IoT Surveillance, Automated Real-time Reporting.'
    }
  ],

  toolsAndTech: [
    { tool: 'Cyber Crime Investigation Tools', examples: ['EnCase Forensic', 'FTK Imager'] },
    { tool: 'Digital Policing Platforms', examples: ['CCTNS (Crime and Criminal Tracking Network and Systems)', 'ICJS (Interoperable Criminal Justice System)'] },
    { tool: 'Surveillance Tools', examples: ['CCTV Monitoring', 'Facial Recognition Systems'] },
    { tool: 'Communication Systems', examples: ['Digital Walkie-Talkies', 'Encrypted Radios'] }
  ]
,

// Chart.js Data for IPS Officer Salary Trends
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Entry-Level IPS Salary (INR)',
      data: [45000, 56100, 80000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    },
    {
      label: 'Mid-Level IPS Salary (INR)',
      data: [90000, 118500, 150000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Senior-Level IPS Salary (INR)',
      data: [130000, 200000, 250000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    }
  ]
},
};

// export const IPSOfficerChart = () => (
//   <div>
//     <h3>IPS Officer Salary Trends in India</h3>
//     <Line data={ipsOfficerChartData} />
//   </div>
// );

export default ipsOfficerData;
