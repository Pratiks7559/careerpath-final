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

const pharmacistData = {
  name: 'Pharmacist',
  description: 'Pharmacists are healthcare professionals who prepare, dispense, and advise patients on medications. They ensure the safe and effective use of pharmaceuticals.',
  roadmap: [
    {
      stage: 'Step 1: Complete 10+2 with Science',
      description: 'Finish your 10+2 education with Physics, Chemistry, and Biology/Mathematics as core subjects.'
    },
    {
      stage: 'Step 2: Enroll in a Pharmacy Program',
      description: 'Pursue a Diploma in Pharmacy (D.Pharm) or a Bachelor of Pharmacy (B.Pharm) from a recognized institute.'
    },
    {
      stage: 'Step 3: Internships & Practical Experience',
      description: 'Gain hands-on training through internships in hospitals, community pharmacies, or pharmaceutical companies.'
    },
    {
      stage: 'Step 4: Get Licensed',
      description: 'Register with the State Pharmacy Council and obtain a license to practice as a pharmacist.'
    },
    {
      stage: 'Step 5: Pursue Advanced Studies (Optional)',
      description: 'Consider a Master’s degree (M.Pharm) or Pharm.D to specialize in Clinical Pharmacy, Pharmacology, or Industrial Pharmacy.'
    },
    {
      stage: 'Step 6: Choose a Career Path',
      description: 'Pick a domain like hospital pharmacy, retail pharmacy, clinical research, pharmaceutical sales, or academia.'
    },
    {
      stage: 'Step 7: Stay Updated & Certified',
      description: 'Attend CME (Continuing Medical Education) programs, certifications, and stay updated with new drugs and healthcare trends.'
    }
  ],
  branches: [
    {
      name: 'Hospital Pharmacy',
      subBranches: ['Clinical Pharmacist', 'Dispensing Pharmacist']
    },
    {
      name: 'Retail Pharmacy',
      subBranches: ['Community Pharmacist', 'Chain Pharmacy Manager']
    },
    {
      name: 'Industrial Pharmacy',
      subBranches: ['Drug Manufacturing', 'Quality Control', 'R&D']
    },
    {
      name: 'Pharmaceutical Sales',
      subBranches: ['Medical Representative', 'Product Manager']
    },
    {
      name: 'Academia & Research',
      subBranches: ['Lecturer', 'Pharmaceutical Scientist']
    }
  ],
  industryTrends: [
    {
      trend: 'Digital Prescriptions',
      currentTrend: 'Widespread use of e-prescriptions in hospitals and clinics.',
      oldTrend: 'Manual, handwritten prescriptions with error risks.',
      futureTrend: 'AI-driven medication management systems.'
    },
    {
      trend: 'Pharmacy Automation',
      currentTrend: 'Automated dispensing machines and robotics.',
      oldTrend: 'Manual dispensing with high workload.',
      futureTrend: 'Fully automated pharmacy chains and personalized meds via 3D printing.'
    }
  ],
  salaryTrends: {
    india: {
      retailPharmacist: {
        pastSalary: '₹10,000–₹20,000',
        presentSalary: '₹20,000–₹40,000',
        futureSalary: '₹40,000–₹80,000'
      },
      hospitalPharmacist: {
        pastSalary: '₹15,000–₹25,000',
        presentSalary: '₹30,000–₹50,000',
        futureSalary: '₹50,000–₹90,000'
      },
      industrialPharmacist: {
        pastSalary: '₹20,000–₹35,000',
        presentSalary: '₹40,000–₹70,000',
        futureSalary: '₹70,000–₹1L'
      }
    },
    global: {
      retailPharmacist: {
        pastSalary: '$30,000–$45,000',
        presentSalary: '$50,000–$90,000',
        futureSalary: '$90,000–$120,000'
      },
      hospitalPharmacist: {
        pastSalary: '$35,000–$50,000',
        presentSalary: '$60,000–$100,000',
        futureSalary: '$100,000–$130,000'
      },
      industrialPharmacist: {
        pastSalary: '$40,000–$60,000',
        presentSalary: '$70,000–$110,000',
        futureSalary: '$110,000–$150,000'
      }
    }
  },
  topInstitutes: [
    { institution: 'National Institute of Pharmaceutical Education and Research (NIPER)', location: 'India' },
    { institution: 'Jamia Hamdard University', location: 'India' },
    { institution: 'University of Nottingham', location: 'UK' },
    { institution: 'University of North Carolina – Chapel Hill', location: 'USA' },
    { institution: 'Monash University', location: 'Australia' }
  ],
  toolsAndTech: [
    { tool: 'Pharmacy Management Software', examples: ['Marg ERP', 'PharmaTrader', 'GoFrugal'] },
    { tool: 'Pill Counters & Dispensers', examples: ['Kirby Lester KL1', 'TCGRx ATP'] },
    { tool: 'Drug Interaction Checker Tools', examples: ['Epocrates', 'Drugs.com Interaction Checker'] },
    { tool: 'Barcode Scanners & Label Printers', examples: ['Zebra Scanner', 'Dymo Label Printer'] },
    { tool: 'EHR Systems Integration', examples: ['Cerner', 'Allscripts', 'Epic'] }
  ]
,

// Chart.js Data for Pharmacist Salary (India, Retail Pharmacist)
chartData: {
  labels: ['Past', 'Present', 'Future'],
  datasets: [
    {
      label: 'Retail Pharmacist Salary (INR)',
      data: [15000, 30000, 60000],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      tension: 0.4
    }
  ]
},
}
// export const PharmacistChart = () => (
//   <div>
//     <h3>Retail Pharmacist Salary Trends (India)</h3>
//     <Line data={salaryChartData} />
//   </div>
// );

export default pharmacistData;
