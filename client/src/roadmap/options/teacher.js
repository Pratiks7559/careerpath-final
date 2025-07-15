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

const teacherData = {
  name: 'Teacher',
  description: 'Teachers educate and inspire students across academic subjects and age groups, shaping the foundation of society.',
  roadmap: [
    {
      stage: 'Step 1: Complete 10+2 Education',
      description: 'Choose relevant streams (Arts, Science, or Commerce) based on the subject you want to teach.'
    },
    {
      stage: 'Step 2: Pursue a Bachelor’s Degree',
      description: 'Complete a Bachelor’s degree (e.g., B.A., B.Sc., B.Com) in your chosen subject.'
    },
    {
      stage: 'Step 3: Enroll in a B.Ed Program',
      description: 'Join a Bachelor of Education (B.Ed) program (2 years), mandatory for school teaching roles.'
    },
    {
      stage: 'Step 4: Qualify Eligibility Exams',
      description: 'Clear exams like CTET (Central Teacher Eligibility Test), TET (State Level), or NET for higher education roles.'
    },
    {
      stage: 'Step 5: Internship / Teaching Practice',
      description: 'Undertake classroom training or internship in a school to gain practical experience.'
    },
    {
      stage: 'Step 6: Get Certified & Apply',
      description: 'Apply to private/public schools, and obtain relevant state teaching certifications.'
    },
    {
      stage: 'Step 7: Advanced Studies (Optional)',
      description: 'Pursue M.Ed or M.A. (Education) for higher education teaching, administration, or education policy roles.'
    }
  ],
  branches: [
    {
      name: 'School Teaching',
      subBranches: ['Primary Teacher', 'Secondary Teacher', 'Special Educator']
    },
    {
      name: 'Higher Education',
      subBranches: ['College Lecturer', 'University Professor']
    },
    {
      name: 'Online & EdTech',
      subBranches: ['Online Tutor', 'Content Creator', 'Instructional Designer']
    },
    {
      name: 'Coaching & Training',
      subBranches: ['Exam Trainer', 'Corporate Trainer']
    },
    {
      name: 'Educational Administration',
      subBranches: ['Principal', 'Academic Coordinator', 'Curriculum Developer']
    }
  ],
  industryTrends: [
    {
      trend: 'Digital Classrooms',
      currentTrend: 'Use of smart boards, video lectures, and hybrid models.',
      oldTrend: 'Traditional chalk-and-board teaching.',
      futureTrend: 'AI-driven adaptive learning platforms and AR/VR classrooms.'
    },
    {
      trend: 'Gamification & EdTech',
      currentTrend: 'Learning through games, simulations, and mobile apps.',
      oldTrend: 'Textbook-only learning with fixed curriculums.',
      futureTrend: 'Gamified platforms with real-time performance analytics.'
    }
  ],
  salaryTrends: {
    india: {
      primaryTeacher: {
        pastSalary: '₹10,000–₹15,000',
        presentSalary: '₹20,000–₹35,000',
        futureSalary: '₹40,000–₹60,000'
      },
      secondaryTeacher: {
        pastSalary: '₹15,000–₹25,000',
        presentSalary: '₹30,000–₹50,000',
        futureSalary: '₹60,000–₹90,000'
      },
      professor: {
        pastSalary: '₹30,000–₹50,000',
        presentSalary: '₹70,000–₹1L',
        futureSalary: '₹1.2L–₹2L'
      }
    },
    global: {
      primaryTeacher: {
        pastSalary: '$25,000–$35,000',
        presentSalary: '$40,000–$55,000',
        futureSalary: '$60,000–$80,000'
      },
      secondaryTeacher: {
        pastSalary: '$30,000–$40,000',
        presentSalary: '$50,000–$70,000',
        futureSalary: '$75,000–$100,000'
      },
      professor: {
        pastSalary: '$50,000–$80,000',
        presentSalary: '$90,000–$120,000',
        futureSalary: '$130,000–$180,000'
      }
    }
  },
  topInstitutes: [
    { institution: 'Tata Institute of Social Sciences (TISS)', location: 'India' },
    { institution: 'Banaras Hindu University (BHU)', location: 'India' },
    { institution: 'Delhi University (DU)', location: 'India' },
    { institution: 'University of Cambridge', location: 'UK' },
    { institution: 'Harvard Graduate School of Education', location: 'USA' }
  ],
  toolsAndTech: [
    { tool: 'LMS Platforms', examples: ['Google Classroom', 'Moodle', 'Canvas'] },
    { tool: 'Presentation Tools', examples: ['PowerPoint', 'Prezi', 'Canva'] },
    { tool: 'Virtual Class Tools', examples: ['Zoom', 'Google Meet', 'Microsoft Teams'] },
    { tool: 'Assessment Tools', examples: ['Kahoot!', 'Quizizz', 'Edmodo'] },
    { tool: 'Curriculum Planning Tools', examples: ['Planbook', 'Common Curriculum'] }
  ],


// Chart.js Data for Secondary School Teacher Salary (India)
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Secondary School Teacher Salary (INR)',
      data: [20000, 40000, 75000],
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      tension: 0.4
    }
  ]
},
};

// export const TeacherChart = () => (
//   <div>
//     <h3>Secondary Teacher Salary Trends (India)</h3>
//     <Line data={teacherChartData} />
//   </div>
// );

export default teacherData;
