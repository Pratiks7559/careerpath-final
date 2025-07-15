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

const politicianData = {
  name: 'Politician',
  description: 'A politician is a leader who actively participates in governance, public service, policymaking, and law creation to serve society, lead communities, and influence national or international matters.',
  
  roadmap: [
    {
      stage: 'Step 1: Early Involvement',
      description: 'Participate in school or college-level student councils, youth parliaments, debates, and social service activities.'
    },
    {
      stage: 'Step 2: Formal Education',
      description: 'Pursue degrees like Political Science, Public Administration, Law, Economics, or Journalism to understand governance and society better.'
    },
    {
      stage: 'Step 3: Join Political Organizations',
      description: 'Engage with youth wings of political parties, NGOs, activism groups, or social movements.'
    },
    {
      stage: 'Step 4: Build Public Image and Network',
      description: 'Use social media, public speaking, rallies, and community events to build reputation and connect with people.'
    },
    {
      stage: 'Step 5: Work with Senior Politicians',
      description: 'Assist senior leaders, work in political offices, or participate in election campaigns to learn real-world politics.'
    },
    {
      stage: 'Step 6: Contest Local Elections',
      description: 'Begin political career by contesting Panchayat, Municipal, or City Council elections to build grassroots support.'
    },
    {
      stage: 'Step 7: Move to State/National Politics',
      description: 'Gain experience and gradually contest in State Assemblies, Parliament, or even national-level leadership roles.'
    },
    {
      stage: 'Step 8: Hold Ministerial or Party Leadership Positions',
      description: 'Aim for ministerial posts, CM, PM, or party president roles through leadership, performance, and public trust.'
    }
  ],

  branches: [
    {
      name: 'Local Governance',
      subBranches: ['Municipality Councillor', 'Village Sarpanch', 'Panchayat Member']
    },
    {
      name: 'State Politics',
      subBranches: ['MLA (Member of Legislative Assembly)', 'Minister in State Government', 'Chief Minister']
    },
    {
      name: 'National Politics',
      subBranches: ['MP (Member of Parliament)', 'Union Minister', 'Prime Minister', 'Party President']
    },
    {
      name: 'Special Roles',
      subBranches: ['Political Advisor', 'Campaign Manager', 'Policy Researcher']
    }
  ],

  industryTrends: [
    {
      trend: 'Digital Politics',
      currentTrend: 'Leverage social media campaigns, live sessions, and digital fundraising.',
      oldTrend: 'Traditional media dominance (newspapers, TV).',
      futureTrend: 'AI-driven voter analysis and virtual rallies.'
    },
    {
      trend: 'Grassroots Movement',
      currentTrend: 'Focus on local issues and participative governance.',
      oldTrend: 'Top-down decision making without citizen engagement.',
      futureTrend: 'Blockchain-based voting and citizen participation apps.'
    }
  ],

  salaryTrends: {
    india: {
      entryLevel: {
        pastSalary: '₹1,00,000–₹1,50,000',
        presentSalary: '₹1,50,000–₹2,00,000',
        futureSalary: '₹2,50,000–₹3,00,000+'
      },
      midLevel: {
        pastSalary: '₹2,00,000–₹3,00,000',
        presentSalary: '₹3,00,000–₹6,00,000',
        futureSalary: '₹6,00,000–₹12,00,000'
      },
      seniorLevel: {
        pastSalary: '₹5,00,000–₹10,00,000',
        presentSalary: '₹10,00,000–₹20,00,000+ (excluding other perks)',
        futureSalary: '₹20,00,000–₹50,00,000+'
      }
    },
    global: {
      entryLevel: {
        pastSalary: '$40,000–$60,000',
        presentSalary: '$60,000–$90,000',
        futureSalary: '$90,000–$130,000'
      },
      midLevel: {
        pastSalary: '$80,000–$120,000',
        presentSalary: '$120,000–$200,000',
        futureSalary: '$200,000–$400,000'
      },
      seniorLevel: {
        pastSalary: '$150,000–$300,000',
        presentSalary: '$300,000–$500,000+',
        futureSalary: '$500,000–$2 million+'
      }
    }
  },

  topInstitutes: [
    { institution: 'Indian School of Democracy', location: 'India' },
    { institution: 'O.P. Jindal Global University (Political Science)', location: 'India' },
    { institution: 'Harvard Kennedy School', location: 'USA' },
    { institution: 'London School of Economics (LSE)', location: 'UK' },
    { institution: 'Sciences Po', location: 'France' }
  ],

  toolsAndTech: [
    { tool: 'Political CRM Tools', examples: ['NationBuilder', 'NGP VAN'] },
    { tool: 'Social Media Management', examples: ['Hootsuite', 'Buffer'] },
    { tool: 'Campaign Analytics', examples: ['Google Analytics', 'Sprout Social'] },
    { tool: 'Content Creation Tools', examples: ['Canva', 'Adobe Spark'] },
    { tool: 'Virtual Events Tools', examples: ['Zoom', 'StreamYard', 'WebEx'] }
  ],

// Chart.js Data for Politician Salary Trends in India
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Entry-Level Politician Salary (INR)',
      data: [120000, 180000, 270000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    },
    {
      label: 'Mid-Level Politician Salary (INR)',
      data: [250000, 450000, 900000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Senior-Level Politician Salary (INR)',
      data: [750000, 1500000, 3000000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    }
  ]
},
};

// export const PoliticianChart = () => (
//   <div>
//     <h3>Politician Salary Trends in India</h3>
//     <Line data={politicianChartData} />
//   </div>
// );

export default politicianData;
