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

const entrepreneurData = {
  name: 'Entrepreneur',
  description: 'Entrepreneurs are innovators who create and scale businesses, bringing new ideas, products, or services to the market.',

  roadmap: [
    {
      stage: 'Step 1: Build Core Skills (During School/College)',
      description: 'Focus on communication, problem-solving, creativity, critical thinking, and leadership skills.'
    },
    {
      stage: 'Step 2: Choose an Industry/Niche',
      description: 'Identify your passion area: Tech, Fashion, Education, Health, Food, Environment, etc.'
    },
    {
      stage: 'Step 3: Learn Business Fundamentals',
      description: 'Understand basics of Marketing, Finance, Operations, HR, and Entrepreneurship (take online/offline courses).'
    },
    {
      stage: 'Step 4: Solve a Real Problem',
      description: 'Find a real-world gap or pain point; ideate an innovative solution (product/service).'
    },
    {
      stage: 'Step 5: Create a Business Plan & MVP',
      description: 'Develop a Minimum Viable Product (MVP) and a lean business model to test your idea quickly.'
    },
    {
      stage: 'Step 6: Network & Find Mentors',
      description: 'Connect with entrepreneurs, VCs, accelerators, join startup events, hackathons.'
    },
    {
      stage: 'Step 7: Launch, Fail Fast, Iterate',
      description: 'Launch the idea, gather feedback, pivot/improve quickly based on customer needs.'
    },
    {
      stage: 'Step 8: Scale & Build a Team',
      description: 'Once the idea is validated, scale up operations, hire a founding team, raise investments if needed.'
    },
    {
      stage: 'Step 9: Continuous Learning & Growth',
      description: 'Adapt to market changes, innovate continuously, build leadership and global mindset.'
    }
  ],

  importantSkills: [
    'Leadership and Decision-Making',
    'Financial Literacy',
    'Sales and Marketing Skills',
    'Innovation and Problem Solving',
    'Networking and Communication',
    'Adaptability and Resilience',
    'Technical Skills (optional depending on startup)'
  ],

  salaryTrends: {
    global: {
      startupFounder: {
        pastSalary: '$0 to $20K/year (initial)',
        presentSalary: '$30K to $100K/year',
        futureSalary: '$100K+ (after Series A/Profitability)'
      },
      scaledEntrepreneur: {
        pastSalary: '$50K–$100K/year',
        presentSalary: '$100K–$500K/year',
        futureSalary: '$500K+ (acquisition/IPO)'
      }
    }
  },

  topInstitutes: [
    { institution: 'Y Combinator Startup School', location: 'Online' },
    { institution: 'Harvard Business School (Entrepreneurship Program)', location: 'USA' },
    { institution: 'Indian School of Business (ISB)', location: 'Hyderabad, India' },
    { institution: 'Stanford Graduate School of Business', location: 'USA' },
    { institution: 'IIM Ahmedabad - CIIE.CO', location: 'India' }
  ],

  industryTrends: [
    {
      trend: 'Tech Startups (AI, Blockchain, SaaS)',
      currentTrend: 'Generative AI startups, FinTech, HealthTech growing.',
      oldTrend: 'Web 2.0, Mobile apps boom (2010s)',
      futureTrend: 'Web3, Metaverse, ClimateTech dominance.'
    },
    {
      trend: 'Impact Entrepreneurship',
      currentTrend: 'Startups solving environmental, social, governance (ESG) issues.',
      oldTrend: 'Profit-centric businesses.',
      futureTrend: 'Sustainability and social impact becoming mainstream.'
    }
  ],

  toolsAndTech: [
    { tool: 'Business Tools', examples: ['Stripe', 'Shopify', 'Notion', 'Airtable', 'Quickbooks'] },
    { tool: 'Marketing Tools', examples: ['Canva', 'Google Ads', 'Mailchimp', 'Hubspot'] },
    { tool: 'Productivity Tools', examples: ['Slack', 'Asana', 'Trello', 'Zapier'] }
  ],


// Chart.js Data for Entrepreneur Journey Salary Trends
chartData:{
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Startup Founder Salary (USD)',
      data: [10000, 50000, 120000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    },
    {
      label: 'Scaled Entrepreneur Salary (USD)',
      data: [75000, 200000, 600000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    }
  ]
},

};

export default entrepreneurData;
