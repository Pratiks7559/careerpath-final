// careers/armyOfficer.js

const armyOfficerData = {
    name: 'Army Officer',
    description: 'An Army Officer leads soldiers in defense operations, strategy, national security missions, and administrative roles, playing a crucial role in safeguarding a nation.',
    
    roadmap: [
      {
        stage: 'Step 1: Complete Higher Secondary Education (10+2)',
        description: 'Focus on Physics, Chemistry, Mathematics (for Technical Entry) or any stream (for NDA entry).'
      },
      {
        stage: 'Step 2: Qualify Competitive Exams',
        description: 'Appear for NDA (after 12th), CDS (after graduation), or TES (for technical entries).'
      },
      {
        stage: 'Step 3: Pass SSB Interview',
        description: 'Services Selection Board (SSB) evaluates intelligence, personality, leadership, and physical standards.'
      },
      {
        stage: 'Step 4: Medical Examination',
        description: 'Pass a detailed medical checkup confirming fitness and mental health standards.'
      },
      {
        stage: 'Step 5: Join Military Academy',
        description: 'Training at NDA (Dehradun), IMA (Dehradun), OTA (Chennai), or respective academies.'
      },
      {
        stage: 'Step 6: Commission as Officer',
        description: 'After successful training, get commissioned as Lieutenant in the Indian Army or your country’s army.'
      },
      {
        stage: 'Step 7: Career Growth',
        description: 'Promotions through ranks: Lieutenant → Captain → Major → Lt Colonel → Colonel → Brigadier → Major General → Lieutenant General → General.'
      }
    ],
  
    branches: [
      {
        name: 'Combat Arms',
        subBranches: ['Infantry', 'Armored Corps', 'Mechanized Infantry', 'Artillery']
      },
      {
        name: 'Combat Support Arms',
        subBranches: ['Engineers', 'Signals', 'Army Aviation']
      },
      {
        name: 'Services',
        subBranches: ['Army Service Corps', 'Army Ordnance Corps', 'Military Intelligence', 'Education Corps', 'Medical Corps']
      }
    ],
  
    importantExams: [
      'NDA (National Defence Academy)',
      'CDS (Combined Defence Services)',
      'TES (Technical Entry Scheme)',
      'TGC (Technical Graduate Course)',
      'SSC (Short Service Commission)'
    ],
  
    industryTrends: [
      {
        trend: 'Modernization of Forces',
        currentTrend: 'Use of drones, cyber warfare, AI-based surveillance.',
        oldTrend: 'Manual operations and traditional weaponry.',
        futureTrend: 'Robotics in combat, space-based defense systems, AI-controlled defense mechanisms.'
      },
      {
        trend: 'Global Cooperation',
        currentTrend: 'Joint military exercises and peacekeeping missions.',
        oldTrend: 'Country-specific operations.',
        futureTrend: 'Unified global responses to threats using multi-nation forces.'
      }
    ],
  
    salaryTrends: {
      india: {
        entryLevel: {
          pastSalary: '₹6–8 LPA',
          presentSalary: '₹10–12 LPA',
          futureSalary: '₹14–18 LPA'
        },
        midLevel: {
          pastSalary: '₹12–18 LPA',
          presentSalary: '₹20–25 LPA',
          futureSalary: '₹30–35 LPA'
        },
        seniorLevel: {
          pastSalary: '₹18–30 LPA',
          presentSalary: '₹35–45 LPA',
          futureSalary: '₹50–70 LPA+'
        }
      },
      global: {
        entryLevel: {
          pastSalary: '$35,000–$45,000',
          presentSalary: '$50,000–$65,000',
          futureSalary: '$70,000–$90,000'
        },
        midLevel: {
          pastSalary: '$60,000–$85,000',
          presentSalary: '$85,000–$120,000',
          futureSalary: '$120,000–$160,000'
        },
        seniorLevel: {
          pastSalary: '$100,000–$150,000',
          presentSalary: '$150,000–$200,000',
          futureSalary: '$200,000–$300,000+'
        }
      }
    },
  
    topInstitutes: [
      { institution: 'National Defence Academy (NDA)', location: 'Pune, India' },
      { institution: 'Indian Military Academy (IMA)', location: 'Dehradun, India' },
      { institution: 'Officer Training Academy (OTA)', location: 'Chennai, India' },
      { institution: 'United States Military Academy (West Point)', location: 'New York, USA' },
      { institution: 'Royal Military Academy Sandhurst', location: 'UK' }
    ],
  
    toolsAndTech: [
      { tool: 'Military Drones', examples: ['RQ-4 Global Hawk', 'Heron UAV'] },
      { tool: 'AI Surveillance Systems', examples: ['Clearview AI', 'Darktrace'] },
      { tool: 'Armored Vehicles', examples: ['BMP-2', 'Arjun MBT'] },
      { tool: 'Tactical Communication Systems', examples: ['Software Defined Radios', 'Tactical Data Links'] },
      { tool: 'Cyber Defense Systems', examples: ['FireEye', 'Palo Alto Networks'] }
    ],
  
    chartData: {
      labels: ['Past', 'Present', 'Future'],
      datasets: [
        {
          label: 'Entry-Level Army Salary (INR)',
          data: [700000, 1100000, 1600000],
          borderColor: 'rgb(11, 239, 239)',
          backgroundColor: 'rgba(255, 6, 155, 0.2)',
          tension: 0.4
        },
        {
          label: 'Mid-Level Army Salary (INR)',
          data: [1500000, 2300000, 3200000],
          borderColor: 'rgb(243, 53, 15)',
          backgroundColor: 'rgba(154, 245, 9, 0.2)',
          tension: 0.4
        },
        {
          label: 'Senior-Level Army Salary (INR)',
          data: [2500000, 4000000, 6000000],
          borderColor: 'rgb(255, 128, 0)',
          backgroundColor: 'rgba(249, 64, 255, 0.05)',
          tension: 0.4
        }
      ]
    }
  };
  
  export default armyOfficerData;
  