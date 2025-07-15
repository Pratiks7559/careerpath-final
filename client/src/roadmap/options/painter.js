// careers/painter.js
// import { Line } from 'react-chartjs-2';
const painterData = {
    name: 'Painter',
    description: 'Painters create visual art through painting on various surfaces, such as canvas, walls, and other materials. They use colors, shapes, and various techniques to express ideas, emotions, and artistic creativity.',
    roadmap: [
      {
        stage: 'Step 1: Complete 10+2 Education',
        description: 'Complete high school education with a focus on subjects like Art, Design, and Visual Arts if available.'
      },
      {
        stage: 'Step 2: Enroll in an Art School or Fine Arts Degree',
        description: 'Pursue a Bachelor’s degree in Fine Arts (BFA) or an equivalent course to learn about painting techniques, art history, and other visual arts forms.'
      },
      {
        stage: 'Step 3: Develop Artistic Skills and Practice',
        description: 'Spend time honing your painting skills through practice, experimenting with different styles, materials, and subjects. Participate in workshops and exhibitions.'
      },
      {
        stage: 'Step 4: Explore Different Painting Styles',
        description: 'Experiment with various painting styles such as realism, abstract, surrealism, and impressionism. Focus on developing your unique artistic voice.'
      },
      {
        stage: 'Step 5: Build a Portfolio',
        description: 'Create a diverse portfolio showcasing your best work. The portfolio should reflect your range and abilities, and it’s essential for applying for exhibitions or commissions.'
      },
      {
        stage: 'Step 6: Participate in Art Exhibitions',
        description: 'Get involved in local and international art exhibitions to gain exposure, build credibility, and network with potential buyers or galleries.'
      },
      {
        stage: 'Step 7: Establish an Online Presence',
        description: 'Create an online portfolio and social media presence (Instagram, Pinterest, etc.) to showcase your work, interact with art lovers, and attract potential clients.'
      },
      {
        stage: 'Step 8: Collaborate and Network',
        description: 'Collaborate with other artists, art galleries, and organizations. Attend art fairs, network with fellow artists and art enthusiasts to open opportunities for new projects.'
      },
      {
        stage: 'Step 9: Sell Your Artwork',
        description: 'Start selling your artwork online, in galleries, or through personal commissions. Explore different ways to monetize your work, such as licensing or print sales.'
      },
      {
        stage: 'Step 10: Keep Evolving and Innovating',
        description: 'Continue to develop your style, experiment with new techniques, and stay updated with art trends and innovations. Strive for continuous learning and artistic growth.'
      }
    ],
    branches: [
      {
        name: 'Fine Art',
        subBranches: ['Oil Painting', 'Acrylic Painting', 'Watercolor', 'Pastels']
      },
      {
        name: 'Commercial Art',
        subBranches: ['Advertising Art', 'Illustration', 'Digital Art', 'Graphic Design']
      },
      {
        name: 'Mural Art',
        subBranches: ['Wall Murals', 'Street Art', 'Architectural Art']
      },
      {
        name: 'Portraiture',
        subBranches: ['Self-Portraits', 'Family Portraits', 'Animal Portraits']
      },
      {
        name: 'Abstract Art',
        subBranches: ['Abstract Painting', 'Expressionism', 'Geometric Art']
      }
    ],
    salaryTrends: {
      india: {
        painter: {
          pastSalary: '₹10,000–₹30,000',
          presentSalary: '₹30,000–₹1L',
          futureSalary: '₹1L–₹2L'
        },
      },
      global: {
        painter: {
          pastSalary: '$10,000–$30,000',
          presentSalary: '$30,000–$70,000',
          futureSalary: '$70,000–$150,000'
        },
      }
    },
    topInstitutes: [
      { institution: 'National Institute of Design', location: 'India' },
      { institution: 'Rhode Island School of Design', location: 'USA' },
      { institution: 'Royal College of Art', location: 'UK' },
      { institution: 'École des Beaux-Arts', location: 'France' },
      { institution: 'University of the Arts London', location: 'UK' }
    ],
    toolsAndTech: [
      { tool: 'Canvas', examples: ['Cotton Canvas', 'Linen Canvas'] },
      { tool: 'Brushes', examples: ['Flat Brushes', 'Round Brushes', 'Fan Brushes'] },
      { tool: 'Paints', examples: ['Oil Paints', 'Acrylic Paints', 'Watercolors'] },
      { tool: 'Digital Tools', examples: ['Wacom Tablets', 'Adobe Photoshop', 'Procreate'] }
    ],
  

  
  // Chart.js Data Configuration for Salary Trends
  ChartData: {
    labels: ['Past', 'Present', 'Future'],
    datasets: [
      {
        label: 'Painter Salary (INR)',
        data: [
          30000, // Past salary average (₹10,000–₹30,000)
          70000, // Present salary average (₹30,000–₹1L)
          150000, // Future salary average (₹1L–₹2L)
        ],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      }
    ]
  },
};
  
//   const PainterChart = () => (
//     <div>
//       <h3>Painter Salary Trends</h3>
//       <Line data={salaryChartData} />
//     </div>
//   );
  
  export default painterData;
  