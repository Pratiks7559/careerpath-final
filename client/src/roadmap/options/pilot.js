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

const pilotData = {
  name: 'Pilot',
  description: 'Pilots are highly trained professionals who fly aircraft and ensure the safe transportation of passengers or cargo.',

  roadmap: [
    {
      stage: 'Step 1: Complete 10+2 with Science Stream (Physics, Math)',
      description: 'Clear high school with strong marks in Physics and Mathematics (minimum 50-60% depending on country/institute).'
    },
    {
      stage: 'Step 2: Clear Pilot Medical Fitness Tests',
      description: 'Pass Class 2 and Class 1 aviation medical tests (DGCA, FAA, EASA approved). Eyesight and general health must meet aviation standards.'
    },
    {
      stage: 'Step 3: Enroll in Flying School',
      description: 'Join an approved flying school (DGCA/FAA/EASA certified) to start pilot training.'
    },
    {
      stage: 'Step 4: Obtain Student Pilot License (SPL)',
      description: 'Start with a Student Pilot License after ground schooling and basic flight training.'
    },
    {
      stage: 'Step 5: Obtain Private Pilot License (PPL)',
      description: 'Earn PPL after completing minimum flying hours (approx. 40–50 hours) and passing written and practical exams.'
    },
    {
      stage: 'Step 6: Obtain Commercial Pilot License (CPL)',
      description: 'Complete 200+ hours of flying, clear theory papers, and earn the CPL to become eligible for commercial flying jobs.'
    },
    {
      stage: 'Step 7: Type Rating (for Specific Aircraft)',
      description: 'Specialized training on specific commercial aircraft like Boeing 737, Airbus A320, etc., after CPL.'
    },
    {
      stage: 'Step 8: Apply for Jobs (Airlines/Corporate)',
      description: 'Apply for positions like First Officer (co-pilot) at airlines, private jets, cargo carriers.'
    },
    {
      stage: 'Step 9: Accumulate Flying Hours & Experience',
      description: 'Gain experience and flying hours to qualify for Captain upgrades and better aircraft.'
    },
    {
      stage: 'Step 10: Ongoing Training and License Renewals',
      description: 'Pilots must undergo regular simulator training, medical check-ups, and license renewals to maintain their flying status.'
    }
  ],

  importantSkills: [
    'Excellent Hand-Eye Coordination',
    'Situational Awareness',
    'Problem-Solving Skills',
    'Communication Skills',
    'Leadership and Teamwork',
    'Technical Knowledge of Aircraft Systems',
    'Decision Making under Pressure'
  ],

  salaryTrends: {
    global: {
      fresherPilot: {
        pastSalary: '$30K–$50K/year',
        presentSalary: '$45K–$70K/year',
        futureSalary: '$100K+ (after Captain Upgrade)'
      },
      experiencedPilot: {
        pastSalary: '$80K–$120K/year',
        presentSalary: '$120K–$250K/year',
        futureSalary: '$300K+ (International Long Haul Captains)'
      }
    }
  },

  topInstitutes: [
    { institution: 'Indira Gandhi Institute of Aeronautics', location: 'India' },
    { institution: 'CAE Global Academy', location: 'Worldwide' },
    { institution: 'Emirates Aviation University', location: 'UAE' },
    { institution: 'Embry-Riddle Aeronautical University', location: 'USA' }
  ],

  industryTrends: [
    {
      trend: 'Increase in Demand for Commercial Pilots',
      currentTrend: 'Growing airline fleets post-pandemic.',
      oldTrend: 'Shortage due to training costs.',
      futureTrend: 'Massive demand with low-cost carriers expansion.'
    },
    {
      trend: 'Technology in Aviation',
      currentTrend: 'Use of automated flight systems.',
      oldTrend: 'Manual flying with basic instruments.',
      futureTrend: 'AI-assisted and partially autonomous aircraft.'
    }
  ],

  toolsAndTech: [
    { tool: 'Flight Simulators', examples: ['Boeing Full Motion Simulators', 'X-Plane 12', 'Microsoft Flight Simulator'] },
    { tool: 'Navigation Tools', examples: ['Garmin GPS', 'ForeFlight', 'Jeppesen Charts'] }
  ],


// Chart.js Data for Pilot Career Salary Trends
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Fresher Pilot Salary (USD)',
      data: [40000, 60000, 120000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Experienced Pilot Salary (USD)',
      data: [100000, 180000, 300000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    }
  ]
},
};

// export const PilotCareerChart = () => (
//   <div>
//     <h3>Pilot Career Salary Progression</h3>
//     <Line data={pilotChartData} />
//   </div>
// );

export default pilotData;
