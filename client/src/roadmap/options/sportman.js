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

const sportsmanData = {
  name: 'Sportsman / Athlete',
  description: 'A sportsman is a professional who competes individually or as part of a team, showcasing physical prowess, strategy, and determination in national and international sports events.',
  roadmap: [
    {
      stage: 'Step 1: Early Interest and Basic Training',
      description: 'Start engaging in sports activities at a young age (school-level competitions, local clubs).'
    },
    {
      stage: 'Step 2: Join a Sports Academy',
      description: 'Get formal training under certified coaches at a reputed academy.'
    },
    {
      stage: 'Step 3: Focused Skill Development',
      description: 'Specialize in one sport, learn advanced techniques, and enhance physical fitness and mental resilience.'
    },
    {
      stage: 'Step 4: Participate in Tournaments',
      description: 'Compete in district, state, and national-level tournaments to build experience and visibility.'
    },
    {
      stage: 'Step 5: Pursue Formal Education (Optional)',
      description: 'Consider Bachelor’s degrees like B.P.Ed. (Bachelor of Physical Education) or Sports Science to complement training.'
    },
    {
      stage: 'Step 6: National Representation',
      description: 'Qualify for national teams, championships, and represent the country in major events like Asian Games, Olympics.'
    },
    {
      stage: 'Step 7: Endorsements and Professional Leagues',
      description: 'Sign contracts with professional clubs, leagues (IPL, ISL, Pro Kabaddi, etc.), and brand endorsements.'
    },
    {
      stage: 'Step 8: Career Transition After Retirement',
      description: 'Move into coaching, commentary, sports management, or mentorship roles.'
    }
  ],
  branches: [
    {
      name: 'Team Sports',
      subBranches: ['Cricket', 'Football', 'Basketball', 'Hockey', 'Volleyball']
    },
    {
      name: 'Individual Sports',
      subBranches: ['Tennis', 'Athletics', 'Badminton', 'Swimming', 'Boxing']
    },
    {
      name: 'Adventure Sports',
      subBranches: ['Mountaineering', 'Surfing', 'Cycling', 'Motorsports']
    }
  ],
  industryTrends: [
    {
      trend: 'Fitness and Nutrition',
      currentTrend: 'Customized diet plans, physiotherapy, and mental conditioning.',
      oldTrend: 'Focus mainly on physical strength without personalized planning.',
      futureTrend: 'AI-based personalized training programs.'
    },
    {
      trend: 'Sports Analytics',
      currentTrend: 'Using data analytics and technology to enhance performance.',
      oldTrend: 'Performance judged mainly by manual observation.',
      futureTrend: 'Real-time AI analysis and wearable technology dominating training.'
    }
  ],
  salaryTrends: {
    india: {
      entryLevel: {
        pastSalary: '₹2,00,000–₹4,00,000',
        presentSalary: '₹4,00,000–₹8,00,000',
        futureSalary: '₹8,00,000–₹12,00,000'
      },
      midLevel: {
        pastSalary: '₹5,00,000–₹10,00,000',
        presentSalary: '₹10,00,000–₹20,00,000',
        futureSalary: '₹20,00,000–₹30,00,000'
      },
      seniorLevel: {
        pastSalary: '₹15,00,000–₹25,00,000',
        presentSalary: '₹25,00,000–₹60,00,000+',
        futureSalary: '₹60,00,000–₹1 Cr+'
      }
    },
    global: {
      entryLevel: {
        pastSalary: '$30,000–$50,000',
        presentSalary: '$50,000–$80,000',
        futureSalary: '$80,000–$120,000'
      },
      midLevel: {
        pastSalary: '$70,000–$150,000',
        presentSalary: '$150,000–$300,000',
        futureSalary: '$300,000–$500,000'
      },
      seniorLevel: {
        pastSalary: '$250,000–$500,000',
        presentSalary: '$500,000–$5 million',
        futureSalary: '$5 million–$20 million+'
      }
    }
  },
  topInstitutes: [
    { institution: 'National Institute of Sports (NIS) Patiala', location: 'India' },
    { institution: 'Lakshmibai National College of Physical Education', location: 'India' },
    { institution: 'IMG Academy', location: 'USA' },
    { institution: 'Aspire Academy', location: 'Qatar' },
    { institution: 'Loughborough University', location: 'UK' }
  ],
  toolsAndTech: [
    { tool: 'Fitness Trackers', examples: ['Fitbit', 'Garmin', 'Polar'] },
    { tool: 'Sports Wearables', examples: ['Catapult GPS Trackers', 'Whoop Bands'] },
    { tool: 'Video Analysis Tools', examples: ['Dartfish', 'Hudl', 'Coach’s Eye'] },
    { tool: 'Training Equipment', examples: ['Resistance Bands', 'Agility Ladders', 'Plyometric Boxes'] },
    { tool: 'Nutrition Apps', examples: ['MyFitnessPal', 'Cronometer', 'Eat2Win'] }
  ]
,

// Chart.js Data for Sportsman Salary Trends in India
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Entry-Level Sportsman Salary (INR)',
      data: [300000, 600000, 1000000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    },
    {
      label: 'Mid-Level Sportsman Salary (INR)',
      data: [750000, 1500000, 2500000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Senior-Level Sportsman Salary (INR)',
      data: [2000000, 4500000, 8000000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    }
  ]
},
};

// export const SportsmanChart = () => (
//   <div>
//     <h3>Sportsman Salary Trends in India</h3>
//     <Line data={sportsmanChartData} />
//   </div>
// );

export default sportsmanData;
