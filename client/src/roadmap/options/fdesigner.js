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

const fashionDesignerData = {
  name: 'Fashion Designer',
  description: 'Fashion Designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and patterns, and give instructions on how to make the products they designed.',

  roadmap: [
    {
      stage: 'Step 1: Complete 10+2 (Any Stream)',
      description: 'Preferably with Arts or Commerce; creativity and sketching skills are a bonus.'
    },
    {
      stage: 'Step 2: Bachelor’s Degree in Fashion Design',
      description: 'Pursue a degree from reputed institutes like NIFT, NID, Pearl Academy, etc.'
    },
    {
      stage: 'Step 3: Internships and Portfolio Building',
      description: 'Intern with top designers or fashion houses to gain real-world exposure and build your design portfolio.'
    },
    {
      stage: 'Step 4: Master’s Degree (Optional)',
      description: 'Specialize in Fashion Technology, Luxury Brand Management, Textile Design, etc. (for career advancement).'
    },
    {
      stage: 'Step 5: Launch Your Brand / Join a Fashion House',
      description: 'Either launch your own label or work with established brands as a designer or stylist.'
    },
    {
      stage: 'Step 6: Build a Strong Online Presence',
      description: 'Use Instagram, Pinterest, LinkedIn, and websites to showcase your work globally.'
    },
    {
      stage: 'Step 7: Continuous Learning',
      description: 'Stay updated with trends, attend fashion shows, and upgrade software skills like CLO 3D, Adobe Illustrator.'
    }
  ],

  importantSkills: [
    'Creativity and Artistic Ability',
    'Fashion Illustration and Sketching',
    'Knowledge of Fabrics and Materials',
    'Pattern Making and Sewing Techniques',
    'Fashion Technology Tools (e.g., CLO 3D, Adobe Illustrator)',
    'Trend Forecasting',
    'Business and Marketing Skills'
  ],

  salaryTrends: {
    india: {
      entryLevel: {
        pastSalary: '₹2.5L–₹3.5L PA',
        presentSalary: '₹4L–₹6L PA',
        futureSalary: '₹8L+ PA (with strong brand/portfolio)'
      },
      midLevel: {
        pastSalary: '₹5L–₹8L PA',
        presentSalary: '₹8L–₹15L PA',
        futureSalary: '₹20L+ PA'
      },
      seniorLevel: {
        pastSalary: '₹10L–₹20L PA',
        presentSalary: '₹20L–₹40L PA',
        futureSalary: '₹50L+ PA (for top designers/brands)'
      }
    }
  },

  topInstitutes: [
    { institution: 'National Institute of Fashion Technology (NIFT)', location: 'India (multiple cities)' },
    { institution: 'National Institute of Design (NID)', location: 'Ahmedabad, India' },
    { institution: 'Pearl Academy', location: 'Delhi, Mumbai, Jaipur' },
    { institution: 'Parsons School of Design', location: 'New York, USA' },
    { institution: 'London College of Fashion', location: 'London, UK' }
  ],

  industryTrends: [
    {
      trend: 'Sustainable and Ethical Fashion',
      currentTrend: 'Eco-friendly designs and slow fashion gaining momentum.',
      oldTrend: 'Fast fashion dominated earlier.',
      futureTrend: 'Circular fashion economy; upcycled and biodegradable materials.'
    },
    {
      trend: 'Tech in Fashion',
      currentTrend: 'Use of AR/VR for virtual try-ons, AI for design prediction.',
      oldTrend: 'Manual processes.',
      futureTrend: 'Metaverse fashion, digital avatars clothing.'
    }
  ],

  toolsAndTech: [
    { tool: 'Fashion Designing Software', examples: ['CLO 3D', 'TUKAcad', 'Adobe Illustrator', 'Photoshop'] },
    { tool: 'Trend Analysis Tools', examples: ['WGSN', 'Pantone Color Institute'] },
    { tool: 'E-commerce Platforms', examples: ['Shopify', 'Etsy', 'Instagram Shops'] }
  ],


// Chart.js Data for Fashion Designer Salary Trends
ChartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Entry-Level Salary (INR)',
      data: [300000, 500000, 800000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    },
    {
      label: 'Mid-Level Salary (INR)',
      data: [650000, 1200000, 2000000],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4
    },
    {
      label: 'Senior-Level Salary (INR)',
      data: [1500000, 3000000, 5000000],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      tension: 0.4
    }
  ]
},
};


export default fashionDesignerData;
