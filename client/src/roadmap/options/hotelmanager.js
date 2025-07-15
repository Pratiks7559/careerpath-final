// careers/hotelManager.js

const hotelManagerData = {
    name: 'Hotel Manager',
    description: 'Hotel Managers oversee the daily operations of hotels and other accommodation facilities, ensuring exceptional guest experiences and efficient management of resources.',
    roadmap: [
      {
        stage: 'Step 1: Complete 10+2 education',
        description: 'Complete 10+2 education in any stream (preferably Arts, Commerce, or Science).',
      },
      {
        stage: 'Step 2: Pursue a Degree or Diploma in Hotel Management',
        description: 'Enroll in a Bachelor\'s in Hotel Management (BHM) or B.Sc. in Hospitality and Hotel Administration.',
      },
      {
        stage: 'Step 3: Internships',
        description: 'Work in various hotel departments like front desk, food service, kitchen, and guest relations. Intern with top hotels like Taj, Oberoi, or Marriott.',
      },
      {
        stage: 'Step 4: Specializations',
        description: 'Focus on areas like Marketing, Operations, Food & Beverage, or Human Resources. Consider a Post Graduate Diploma (PGDM) in specific fields.',
      },
      {
        stage: 'Step 5: Work Experience',
        description: 'Begin with roles like Assistant Manager or Operations Supervisor. Aim for 5–7 years of experience before becoming a Hotel Manager.',
      },
      {
        stage: 'Step 6: Networking & Industry Events',
        description: 'Attend career fairs, conferences, and networking events to connect with industry professionals.',
      },
      {
        stage: 'Step 7: Continue Professional Development',
        description: 'Pursue certifications in areas like Revenue Management, Sustainable Hospitality, or Digital Marketing.',
      },
      {
        stage: 'Step 8: Job Search',
        description: 'Apply for managerial roles in mid-to-large-scale hotels, resorts, or event venues.',
      }
    ],
    branches: [
      {
        name: 'Luxury Hotels',
        roles: ['General Manager'],
      },
      {
        name: 'Boutique Hotels',
        roles: ['Operations Manager'],
      },
      {
        name: 'Resorts & Spas',
        roles: ['Director of Operations'],
      },
      {
        name: 'Business Hotels',
        roles: ['Hotel Sales & Marketing Manager'],
      },
      {
        name: 'Budget Hotels',
        roles: ['Front Office Manager'],
      }
    ],
    industryTrends: [
      {
        trend: 'Digitalization',
        currentTrend: 'AI-based room service, mobile apps for guest requests, online check-ins.',
        oldTrend: 'Manual operations, phone-based bookings, manual check-in/check-out.',
        futureTrend: 'Smart hotels, IoT-enabled smart rooms, contactless check-ins, and eco-friendly technology.',
      },
      {
        trend: 'Sustainability',
        currentTrend: 'Green hotels focusing on sustainable sourcing, energy-saving technology, and eco-friendly practices.',
        oldTrend: 'Luxury was defined by plush amenities without much focus on sustainability.',
        futureTrend: 'Rise in green certifications, eco-friendly building materials, and sustainable operational practices.',
      },
      {
        trend: 'Experience-based Hospitality',
        currentTrend: 'Personalized guest experiences using data, customer behavior modeling.',
        oldTrend: 'Standardized offerings with less customization for guest experiences.',
        futureTrend: 'Hyper-personalized guest experiences with predictive analytics and AI-driven services.',
      }
    ],
    salaryTrends: {
      india: {
        hotelManager: {
          pastSalary: '₹40,000–₹80,000',
          presentSalary: '₹1L–₹3L',
          futureSalary: '₹3L–₹5L',
        },
        assistantManager: {
          pastSalary: '₹25,000–₹45,000',
          presentSalary: '₹60,000–₹1L',
          futureSalary: '₹1.5L–₹2L',
        },
        operationsManager: {
          pastSalary: '₹30,000–₹50,000',
          presentSalary: '₹80,000–₹2L',
          futureSalary: '₹2L–₹4L',
        },
        generalManager: {
          pastSalary: '₹1L–₹2L',
          presentSalary: '₹2L–₹5L',
          futureSalary: '₹5L–₹10L',
        }
      },
      global: {
        hotelManager: {
          pastSalary: '$50,000–$80,000',
          presentSalary: '$100,000–$150,000',
          futureSalary: '$180,000–$250,000',
        },
        generalManager: {
          pastSalary: '$60,000–$100,000',
          presentSalary: '$150,000–$200,000',
          futureSalary: '$250,000–$300,000',
        }
      }
    },
    topInstitutes: [
      { institution: 'Institute of Hotel Management (IHM)', locations: ['Pune', 'Delhi', 'Mumbai', 'Kolkata'] },
      { institution: 'Les Roches Global Hospitality Education', location: 'Switzerland' },
      { institution: 'EHL (Ecole hôtelière de Lausanne)', location: 'Switzerland' },
      { institution: 'Cornell University', location: 'USA' },
      { institution: 'Swiss Hotel Management School', location: 'Switzerland' },
      { institution: 'Manipal University', location: 'India' }
    ],
    toolsAndTech: [
      { tool: 'Property Management Systems (PMS)', examples: ['Opera', 'Hotelogix', 'Cloudbeds'] },
      { tool: 'Revenue Management Software', examples: ['RoomRaccoon', 'Revinate'] },
      { tool: 'Customer Feedback', examples: ['TrustYou', 'Revinate'] },
      { tool: 'Data Analytics', examples: ['Google Analytics', 'STR Global', 'Expedia Analytics'] },
      { tool: 'HR & Payroll Systems', examples: ['Zoho HR', 'ADP'] },
      { tool: 'Digital Marketing Tools', examples: ['Google Ads', 'Social Media Tools (Hootsuite)'] }
    ],
    chartData: {
      labels: ['Luxury Hotels', 'Boutique Hotels', 'Resorts & Spas', 'Business Hotels', 'Budget Hotels'],
      datasets: [
        {
          label: 'Hotel Manager Salary (INR)',
          data: [60000, 120000, 180000, 220000, 300000],
          backgroundColor: '#4caf50',
        },
        {
          label: 'Hotel Manager Salary Future (INR)',
          data: [200000, 250000, 300000, 350000, 400000],
          backgroundColor: '#2196f3',
        }
      ],
    },
  };
  
  export default hotelManagerData;
  