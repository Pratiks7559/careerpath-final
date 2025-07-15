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

const iasOfficerData = {
  name: 'IAS Officer',
  description: 'An IAS Officer is one of the most prestigious and powerful positions in India, responsible for implementing government policies, administration, and ensuring the smooth governance of districts, states, and the nation.',

  roadmap: [
    {
      stage: 'Step 1: Complete Graduation',
      description: 'A Bachelor’s degree in any field (Arts, Science, Commerce, Engineering, etc.) is mandatory.'
    },
    {
      stage: 'Step 2: Prepare for UPSC Civil Services Exam',
      description: 'Start focused preparation for the UPSC CSE — General Studies, Optional Subject, CSAT, and Current Affairs.'
    },
    {
      stage: 'Step 3: Appear for UPSC Prelims',
      description: 'Qualify the Preliminary exam — Objective type General Studies Paper I and CSAT Paper II.'
    },
    {
      stage: 'Step 4: Clear UPSC Mains',
      description: 'Qualify the Mains exam — 9 papers (Essay, GS Papers I-IV, Optional Papers I-II, Language papers).'
    },
    {
      stage: 'Step 5: Face UPSC Interview (Personality Test)',
      description: 'Final stage testing communication, decision-making, attitude, leadership, and presence of mind.'
    },
    {
      stage: 'Step 6: Join LBSNAA (Lal Bahadur Shastri National Academy of Administration)',
      description: 'Undergo 2 years of rigorous training at LBSNAA, Mussoorie.'
    },
    {
      stage: 'Step 7: Career Progression',
      description: 'Start as Assistant Collector → SDM → ADM → DM → Commissioner → Principal Secretary → Chief Secretary → Cabinet Secretary.'
    }
  ],

  importantExams: [
    'UPSC CSE Prelims',
    'UPSC CSE Mains',
    'UPSC CSE Personality Test (Interview)'
  ],

  salaryTrends: {
    india: {
      entryLevel: {
        pastSalary: '₹40,000–₹50,000',
        presentSalary: '₹56,100 (Level 10 Pay Matrix) + allowances',
        futureSalary: '₹80,000+ (after future 7th CPC revisions)'
      },
      midLevel: {
        pastSalary: '₹70,000–₹90,000',
        presentSalary: '₹78,800 (Level 11-12) to ₹1,18,500',
        futureSalary: '₹1,20,000–₹1,60,000'
      },
      seniorLevel: {
        pastSalary: '₹1.2L–₹1.5L',
        presentSalary: '₹1,44,200–₹2,18,200 (Level 13–14)',
        futureSalary: '₹2.5L+ (Cabinet Secretary Grade)'
      }
    }
  },

  topInstitutes: [
    { institution: 'Lal Bahadur Shastri National Academy of Administration (LBSNAA)', location: 'Mussoorie, India' },
    { institution: 'IIPA (Indian Institute of Public Administration)', location: 'New Delhi, India' },
    { institution: 'State Administrative Academies', location: 'Across Indian states' }
  ],

  industryTrends: [
    {
      trend: 'E-Governance',
      currentTrend: 'Digital India, Online Public Services, RTI Act implementations.',
      oldTrend: 'Manual paperwork and traditional file processing.',
      futureTrend: 'AI-based governance, Blockchain-enabled transparency, Smart Cities Management.'
    },
    {
      trend: 'Citizen-Centric Administration',
      currentTrend: 'Schemes like Direct Benefit Transfers (DBT), JAM Trinity (Jan Dhan, Aadhaar, Mobile).',
      oldTrend: 'Government-controlled delivery models.',
      futureTrend: 'Proactive service delivery models, predictive administration.'
    }
  ],

  toolsAndTech: [
    { tool: 'Digital Management Tools', examples: ['eOffice', 'SPARROW', 'PFMS'] },
    { tool: 'Public Grievance Redressal Systems', examples: ['CPGRAMS', 'MyGov'] },
    { tool: 'Analytics Tools', examples: ['Big Data Analytics for Governance', 'Aadhaar Analytics'] },
    { tool: 'Smart City Control Platforms', examples: ['SCADA systems', 'IoT Platforms'] }
  ],


// Chart.js Data for IAS Officer Salary Trends
chartdata: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Entry-Level IAS Salary (INR)',
      data: [45000, 56100, 80000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Mid-Level IAS Salary (INR)',
      data: [80000, 118500, 160000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    },
    {
      label: 'Senior-Level IAS Salary (INR)',
      data: [120000, 200000, 250000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4
    }
  ]
},
};


export default iasOfficerData;
