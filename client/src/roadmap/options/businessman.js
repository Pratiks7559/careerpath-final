// careers/businessman.js

const businessmanData = {
    name: 'Businessman',
    description: 'Businessmen run and manage businesses, making key decisions to drive growth, profitability, and innovation. They possess strong leadership, strategic planning, and entrepreneurial skills.',
    roadmap: [
      {
        stage: 'Step 1: Schooling (Class 11-12)',
        description: 'Stream: Commerce or Science. Focus on subjects like Business Studies, Economics, and Mathematics. Maintain good grades to pursue business-related courses in higher education.',
      },
      {
        stage: 'Step 2: Undergraduate Degree (BBA / BCom)',
        description: 'Bachelor of Business Administration (BBA) or Bachelor of Commerce (BCom). Courses cover areas like management, marketing, economics, accounting, and business law. You will learn key business concepts and develop practical skills for the corporate world.',
      },
      {
        stage: 'Step 3: Work Experience (Internships & Entry-Level Roles)',
        description: 'Gain hands-on experience in a corporate environment through internships or entry-level roles. Learn how businesses operate, understand management practices, and develop skills in areas like customer service, project management, or marketing.',
      },
      {
        stage: 'Step 4: MBA (Masters in Business Administration)',
        description: 'Pursue a Masters in Business Administration (MBA) to develop leadership, management, and strategic decision-making skills. Specializations can include Marketing, Finance, Operations, Human Resources, and Entrepreneurship.',
      },
      {
        stage: 'Step 5: Start Your Own Business (Entrepreneurship)',
        description: 'Start your own business or join a startup. Learn to create a business plan, raise capital, manage a team, and market your product or service. The focus is on taking risks, handling challenges, and making critical decisions to drive the business forward.',
      },
      {
        stage: 'Step 6: Business Growth & Management',
        description: 'Focus on growing your business by expanding the customer base, increasing sales, and managing resources effectively. You will need to develop leadership qualities and learn to deal with issues like finance, marketing, HR, and customer relationships.',
      },
      {
        stage: 'Step 7: Networking & Partnerships',
        description: 'Build strong networks with other business professionals, investors, and potential partners. Networking will help you get advice, investment, new clients, and opportunities for business expansion or collaboration.',
      },
      {
        stage: 'Step 8: International Expansion or Diversification',
        description: 'Expand your business internationally or diversify into new industries. Research and understand global markets and customer preferences. Explore new products or services to cater to different demographics or geographic locations.',
      },
      {
        stage: 'Step 9: Business Leadership & Innovation',
        description: 'As a seasoned businessman, focus on leading your company strategically. Innovate and stay ahead of the competition by implementing new technologies, business models, or marketing strategies. Focus on leadership, managing large teams, and setting long-term company vision.',
      },
      {
        stage: 'Step 10: Legacy Building & Mentorship',
        description: 'Establish your legacy in the business world by mentoring aspiring entrepreneurs, investing in other startups, or contributing to the community. Leave a lasting impact through innovation, leadership, and business success.',
      },
    ],
    branches: [
      {
        name: 'Entrepreneurship',
        subBranches: ['Startup Founding', 'Small Business Management', 'Venture Capital & Angel Investing'],
      },
      {
        name: 'Marketing & Sales',
        subBranches: ['Digital Marketing', 'Market Research', 'Branding', 'Product Management'],
      },
      {
        name: 'Finance & Accounting',
        subBranches: ['Corporate Finance', 'Investment Management', 'Financial Planning'],
      },
      {
        name: 'Operations & Supply Chain Management',
        subBranches: ['Logistics', 'Project Management', 'Quality Control'],
      },
      {
        name: 'Human Resources',
        subBranches: ['Talent Acquisition', 'Employee Relations', 'Leadership Development'],
      },
      {
        name: 'E-Commerce & Retail',
        subBranches: ['E-Commerce Strategy', 'Online Retail Management', 'Marketplace Operations'],
      },
      {
        name: 'Consulting & Strategy',
        subBranches: ['Management Consulting', 'Business Strategy', 'Financial Consulting'],
      },
      {
        name: 'International Business & Expansion',
        subBranches: ['Global Market Strategy', 'International Logistics', 'Cross-Cultural Management'],
      },
    ],
    chartData: {
      labels: ['Entrepreneurship', 'Marketing & Sales', 'Finance & Accounting', 'Operations', 'Human Resources', 'E-Commerce', 'Consulting', 'International Business'],
      datasets: [
        {
          label: 'Old Trend',
          data: [3, 4, 3, 3, 2, 3, 3, 2],
          backgroundColor: '#ffcccb',
        },
        {
          label: 'Current Trend (2025)',
          data: [5, 5, 4, 4, 4, 4, 5, 5],
          backgroundColor: '#4caf50',
        },
        {
          label: 'Future Trend (2030+)',
          data: [6, 6, 5, 5, 5, 6, 6, 6],
          backgroundColor: '#2196f3',
        },
      ],
    },
    salaryTrends: {
      labels: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'UAE', 'Singapore', 'Saudi Arabia', 'South Africa'],
      datasets: [
        {
          label: 'Past (2000s)',
          data: [1.2, 50, 20, 30, 45, 40, 25, 30, 40, 20],
          backgroundColor: '#d3d3d3',
        },
        {
          label: 'Present (2025)',
          data: [5, 150, 75, 100, 120, 100, 80, 110, 130, 60],
          backgroundColor: '#ffa500',
        },
        {
          label: 'Future (2030+)',
          data: [8, 200, 100, 140, 160, 140, 120, 150, 170, 80],
          backgroundColor: '#00bcd4',
        },
      ],
    },
  };
  
  export default businessmanData;
  