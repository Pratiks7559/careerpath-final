// careers/doctor.js

const doctorData = {
    name: 'Doctor',
    description: 'Doctors diagnose, treat, and care for patients, improving lives across communities with deep expertise in medical science.',
    roadmap: [
      {
        stage: 'Step 1: Schooling (Class 11–12)',
        description: 'Stream: Science (PCB - Physics, Chemistry, Biology). Maintain 85%+ marks. Focus on NEET preparation.',
      },
      {
        stage: 'Step 2: Medical Entrance Exam (NEET-UG)',
        description: 'Appear for NEET. Top ranks secure admission in AIIMS, AFMC, JIPMER, and Govt. medical colleges.',
      },
      {
        stage: 'Step 3: MBBS (5.5 years)',
        description: '4.5 years of academic study + 1 year internship. Covers core subjects like Anatomy, Surgery, Medicine, Pediatrics, etc.',
      },
      {
        stage: 'Step 3: BDS (Bachelor of Dental Surgery) (5 years)',
        description: 'Similar to MBBS but focused on dental sciences, including subjects like Oral Pathology, Orthodontics, and Periodontics.',
      },
      {
        stage: 'Step 4: BAMS (Bachelor of Ayurvedic Medicine & Surgery) (5.5 years)',
        description: 'Learn Ayurvedic medicine alongside basic medical sciences. Includes theory and practical training.',
      },
      {
        stage: 'Step 5: BUMS (Bachelor of Unani Medicine & Surgery) (5.5 years)',
        description: 'Focus on Unani medicine, combining practical training and study of traditional medical science.',
      },
      {
        stage: 'Step 6: BHMS (Bachelor of Homeopathic Medicine & Surgery) (5.5 years)',
        description: 'Learn homeopathic medicine, combining theory, practical, and clinical training.',
      },
      {
        stage: 'Step 7: Postgraduate Specialization (MD, MS, DNB)',
        description: 'Choose specialization after MBBS, including MD (Medicine), MS (Surgery), or DNB (Diplomate of National Board). Duration: 3 years.',
      },
      {
        stage: 'Step 8: Super Specialization (optional)',
        description: 'DM / MCh in super specialties like Cardiology, Neurosurgery, Gastroenterology.',
      },
      {
        stage: 'Step 9: Fellowships / Research / Practice / Abroad',
        description: 'Do fellowships, practice privately, join hospitals, or appear for USMLE, PLAB for abroad opportunities.',
      },
    ],
    branches: [
      {
        name: 'Medicine',
        subBranches: ['Cardiology', 'Gastroenterology', 'Neurology', 'Nephrology', 'Rheumatology', 'Endocrinology'],
      },
      {
        name: 'Surgery',
        subBranches: ['Neurosurgery', 'Cardiothoracic Surgery', 'Orthopedic Surgery', 'Plastic Surgery'],
      },
      {
        name: 'Pediatrics',
        subBranches: ['Neonatology', 'Pediatric Oncology', 'Pediatric Surgery'],
      },
      {
        name: 'Gynecology',
        subBranches: ['Maternal-Fetal Medicine', 'Reproductive Endocrinology'],
      },
      {
        name: 'Radiology',
        subBranches: ['Interventional Radiology', 'Diagnostic Radiology'],
      },
      {
        name: 'Psychiatry',
        subBranches: ['Child Psychiatry', 'Forensic Psychiatry'],
      },
      {
        name: 'Anesthesia',
        subBranches: ['Critical Care', 'Pain Medicine'],
      },
      {
        name: 'Pathology',
        subBranches: ['Histopathology', 'Hematopathology'],
      },
      {
        name: 'Dermatology',
        subBranches: ['Cosmetic Dermatology', 'Dermato-surgery'],
      },
    ],
    chartData: {
      labels: ['Medicine', 'Surgery', 'Radiology', 'Pediatrics', 'Psychiatry', 'Anesthesia', 'Dermatology'],
      datasets: [
        {
          label: 'Old Trend',
          data: [3, 4, 2, 2, 1, 2, 2],
          backgroundColor: '#ffcccb',
        },
        {
          label: 'Current Trend (2025)',
          data: [5, 4, 4, 3, 3, 4, 4],
          backgroundColor: '#4caf50',
        },
        {
          label: 'Future Trend (2030+)',
          data: [5, 5, 5, 4, 5, 5, 5],
          backgroundColor: '#2196f3',
        },
      ],
    },
    salaryTrends: {
      labels: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'UAE', 'Singapore', 'Saudi Arabia', 'South Africa'],
      datasets: [
        {
          label: 'Past (2000s)',
          data: [0.6, 120, 50, 60, 90, 80, 50, 70, 80, 30],
          backgroundColor: '#d3d3d3',
        },
        {
          label: 'Present (2025)',
          data: [3, 300, 120, 150, 200, 180, 120, 160, 180, 70],
          backgroundColor: '#ffa500',
        },
        {
          label: 'Future (2030+)',
          data: [6, 450, 160, 200, 250, 230, 160, 200, 230, 100],
          backgroundColor: '#00bcd4',
        },
      ],
    },
  };
  
  export default doctorData;
  