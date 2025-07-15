// careers/farmer.js

// import React from 'react'; 
// import { Line } from 'react-chartjs-2'; // Importing the Line component from Chart.js

const farmerData = {
    name: 'Farmer',
    description: 'Farmers cultivate crops, raise livestock, and engage in agricultural practices to produce food and raw materials, playing a critical role in food security and the economy.',
    roadmap: [
      {
        stage: 'Step 1: Complete 10+2 education',
        description: 'Complete high school education with a focus on subjects like Biology, Chemistry, and Mathematics. Choose Agriculture-related subjects if available.'
      },
      {
        stage: 'Step 2: Pursue an Agricultural Degree/Diploma',
        description: 'Enroll in a Bachelor’s degree in Agricultural Science, Horticulture, or Agronomy, or a diploma in Agriculture from recognized institutes.'
      },
      {
        stage: 'Step 3: Gain Practical Knowledge and Experience',
        description: 'Work on farms or join internships to understand various farming techniques, equipment use, and modern agricultural practices.'
      },
      {
        stage: 'Step 4: Specialization',
        description: 'Choose a specialization in one of the areas such as Crop Production, Livestock Management, Organic Farming, or Agricultural Engineering.'
      },
      {
        stage: 'Step 5: Invest in Land & Resources',
        description: 'Purchase or lease land and acquire necessary farming equipment or livestock for agricultural activities. Focus on sustainable farming practices.'
      },
      {
        stage: 'Step 6: Adopt Technology',
        description: 'Utilize modern farming technology like drones, automated irrigation, and crop monitoring systems to increase efficiency and reduce resource consumption.'
      },
      {
        stage: 'Step 7: Establish a Farming Business',
        description: 'Start your own farm or agricultural business. Consider different business models such as organic farming, farm-to-table, or dairy farming.'
      },
      {
        stage: 'Step 8: Focus on Sustainability and Innovation',
        description: 'Adopt sustainable farming techniques, like crop rotation, agroforestry, and organic practices. Explore the integration of renewable energy sources like solar-powered irrigation.'
      },
      {
        stage: 'Step 9: Scale Up and Diversify',
        description: 'Expand your operations by diversifying crops or livestock. You can also explore agro-processing or agri-business ventures for added income.'
      },
      {
        stage: 'Step 10: Keep Learning and Evolving',
        description: 'Stay updated with new agricultural research, join farmer associations, attend agricultural fairs, and explore funding opportunities for innovation in agriculture.'
      }
    ],
    branches: [
      {
        name: 'Crop Production',
        subBranches: ['Cereal Farming', 'Vegetable Farming', 'Fruit Orchards', 'Flower and Plant Cultivation']
      },
      {
        name: 'Livestock Management',
        subBranches: ['Dairy Farming', 'Poultry Farming', 'Animal Husbandry', 'Beekeeping']
      },
      {
        name: 'Agroforestry',
        subBranches: ['Forest Farming', 'Silvopasture', 'Alley Cropping']
      },
      {
        name: 'Aquaculture',
        subBranches: ['Fish Farming', 'Shrimp Farming', 'Seaweed Farming']
      },
      {
        name: 'Agri-Business',
        subBranches: ['Farm Management', 'Agro Processing', 'Agricultural Machinery', 'Food Production & Packaging']
      }
    ],
    industryTrends: [
      {
        trend: 'Sustainability in Agriculture',
        currentTrend: 'Organic farming, water conservation techniques, crop rotation, and reducing chemical usage in farming.',
        oldTrend: 'High pesticide usage, over-irrigation, monoculture farming practices.',
        futureTrend: 'Regenerative agriculture, climate-smart farming, and eco-friendly farming technologies.'
      },
      {
        trend: 'Technology in Farming',
        currentTrend: 'Use of drones, automated irrigation systems, and AI-based crop monitoring to improve yields and reduce waste.',
        oldTrend: 'Manual farming, less efficient equipment and techniques.',
        futureTrend: 'Smart farms using Internet of Things (IoT) sensors, big data analytics, and fully automated systems for crop monitoring and harvest optimization.'
      },
      {
        trend: 'Vertical Farming and Urban Agriculture',
        currentTrend: 'Urban farming and vertical farms using hydroponics, aquaponics, and indoor farming techniques.',
        oldTrend: 'Traditional rural farming methods with dependence on large plots of land.',
        futureTrend: 'Large-scale urban farming systems that can feed city populations using limited space and resources.'
      }
    ],
    salaryTrends: {
      india: {
        cropFarmer: {
          pastSalary: '₹15,000–₹30,000',
          presentSalary: '₹30,000–₹70,000',
          futureSalary: '₹70,000–₹1L'
        },
        livestockFarmer: {
          pastSalary: '₹20,000–₹50,000',
          presentSalary: '₹50,000–₹1L',
          futureSalary: '₹1L–₹2L'
        },
        agriculturalEngineer: {
          pastSalary: '₹30,000–₹60,000',
          presentSalary: '₹70,000–₹2L',
          futureSalary: '₹2L–₹4L'
        },
        agribusinessManager: {
          pastSalary: '₹30,000–₹70,000',
          presentSalary: '₹1L-₹3L',
          futureSalary: '₹3L–₹5L'
        }
      },
      global: {
        cropFarmer: {
          pastSalary: '$15,000–$30,000',
          presentSalary: '$35,000–$70,000',
          futureSalary: '$70,000–$120,000'
        },
        livestockFarmer: {
          pastSalary: '$20,000–$45,000',
          presentSalary: '$50,000–$100,000',
          futureSalary: '$100,000–$200,000'
        },
        agriculturalEngineer: {
          pastSalary: '$30,000–$60,000',
          presentSalary: '$70,000–$120,000',
          futureSalary: '$120,000–$200,000'
        },
        agribusinessManager: {
          pastSalary: '$40,000–$80,000',
          presentSalary: '$90,000–$150,000',
          futureSalary: '$150,000–$250,000'
        }
      }
    },
    topInstitutes: [
      { institution: 'Indian Agricultural Research Institute (IARI)', location: 'India' },
      { institution: 'University of California, Davis', location: 'USA' },
      { institution: 'Wageningen University', location: 'Netherlands' },
      { institution: 'Cornell University', location: 'USA' },
      { institution: 'University of Queensland', location: 'Australia' }
    ],
    toolsAndTech: [
      { tool: 'Tractors', examples: ['John Deere', 'Massey Ferguson', 'New Holland'] },
      { tool: 'Irrigation Systems', examples: ['Drip Irrigation', 'Sprinkler Systems', 'Rainwater Harvesting'] },
      { tool: 'Drones for Crop Monitoring', examples: ['DJI Agriculture Drones'] },
      { tool: 'Farm Management Software', examples: ['Ag Leader', 'Cropio', 'FarmLogs'] },
      { tool: 'Weather Forecasting Tools', examples: ['Weather.com API', 'Agriculture Weather Stations'] }
    ],


// Chart.js Data Configuration for Salary Trends
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Farmer Salary (INR)',
      data: [
        30000, // Past salary average (₹15,000–₹30,000)
        70000, // Present salary average (₹30,000–₹70,000)
        150000, // Future salary average (₹70,000–₹1L)
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
    }
  ]
},
};



export default farmerData;
