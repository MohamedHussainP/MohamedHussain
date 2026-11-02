export const portfolio = {
  name: 'Mohamed Hussain P',
  role: 'Senior Programmer Analyst',
  location: 'Tirunelveli, Tamil Nadu, India',
  email: 'hussain241990@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hussain241990/',
  summary:
    'Senior Programmer Analyst with 14+ years of experience building and maintaining enterprise CRM, ERP and billing applications. I work across the Microsoft stack and modern front ends, designing REST APIs, improving database performance and modernizing legacy applications.',
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'jQuery'] },
    { category: 'Backend', items: ['C#', 'ASP.NET', '.NET Core', 'REST APIs', 'Web Services'] },
    { category: 'Databases', items: ['SQL Server', 'T-SQL', 'MySQL'] },
    { category: 'Tools & architecture', items: ['Electron', 'Git', 'Bitbucket', 'MVC', 'Single-page applications'] },
  ],
  experience: [
    {
      company: 'APA Engineering Pvt Ltd',
      location: 'Chennai',
      role: 'Senior Programmer Analyst',
      dates: 'Aug 2014 – Present',
      summary:
        'Build and maintain enterprise CRM and B2B/B2C e-commerce capabilities for GoCadence (Cadence CRM) and the MONDIAL Automotive platform.',
      highlights: [
        'Built and enhanced shopping cart, invoicing, dispatch, purchasing, stock management, accounting, credit note and payment-processing modules.',
        'Contribute to a senior-team-led modernization initiative, moving a legacy ASP.NET application to a React front end and .NET Core Web APIs in hybrid mode alongside the existing system.',
        'Developed business modules for quote management, payment gateway integration, bulk uploads and part search.',
        'Built and maintain multiple B2C e-commerce microsites managed through the core GoCadence platform.',
        'Engineered an Electron and React desktop app that uses web APIs online, falls back to local SQL Server Express offline and syncs on reconnection.',
        'Improved database performance for high-volume transactional data by redesigning queries, stored procedures and indexes.',
      ],
      technologies: ['C#', 'ASP.NET', '.NET Core', 'React', 'TypeScript', 'Electron', 'SQL Server', 'REST APIs'],
    },
    {
      company: 'Sami Technology Solutions',
      location: 'Chennai',
      role: 'Associate .NET Developer',
      dates: 'Dec 2012 – Jul 2014',
      summary: 'Developed ERP, desktop billing and business website features.',
      highlights: [
        'Built ERP modules for sales, HR, finance and procurement, including customer records, quotations, sales orders, invoicing, employee records and purchase orders.',
        'Created a C# WinForms billing system with invoice generation, payment tracking and accounting reports.',
        'Developed AirWorldGroup.com, a business website for travel and courier services.',
      ],
      technologies: ['ASP.NET', 'C#', 'WinForms', 'SQL Server'],
    },
    {
      company: 'Orange Lab IT Solutions',
      location: 'Chennai',
      role: 'Junior PHP Developer',
      dates: 'Jun 2012 – Dec 2012',
      summary: 'Developed ePacific Mall, an e-commerce platform with product management, shopping cart and order processing.',
      highlights: [],
      technologies: ['Core PHP', 'MySQL'],
    },
  ],
  projects: [
    {
      name: 'GoCadence / Cadence CRM',
      type: 'Enterprise CRM & B2B/B2C e-commerce',
      description:
        'Enterprise platform modules spanning shopping cart, quote management, invoicing, dispatch, purchasing, inventory, accounting and payments.',
      details: 'Includes B2C microsites and a hybrid desktop client with offline SQL Server Express storage and synchronization on reconnect.',
      technologies: ['ASP.NET', '.NET Core', 'React', 'TypeScript', 'Electron', 'SQL Server'],
    },
    {
      name: 'Vibgyor ERP',
      type: 'Enterprise resource planning',
      description:
        'Multi-module ERP application with sales, HR, finance and procurement features, including quotations, orders, invoicing and vendor management.',
      details: 'Developed as an Associate .NET Developer at Sami Technology Solutions.',
      technologies: ['ASP.NET', 'C#', 'SQL Server'],
    },
    {
      name: 'Invoice Billing System',
      type: 'Desktop billing',
      description:
        'Multi-client desktop billing solution supporting item and customer masters, tax-based invoices, payment receipts and outstanding tracking.',
      details: 'Generated client-wise billing, payment and outstanding reports.',
      technologies: ['C# WinForms', 'SQL Server'],
    },
    {
      name: 'ePacific Mall',
      type: 'E-commerce',
      description: 'E-commerce platform with product management, shopping cart and order processing.',
      details: 'Developed at Orange Lab IT Solutions.',
      technologies: ['Core PHP', 'MySQL'],
    },
  ],
  education: [
    {
      qualification: 'Bachelor’s in Information Technology',
      institution: 'National College of Engineering, Tirunelveli',
      detail: 'First Class, 70% · 2011',
    },
  ],
  certification: 'Diploma in .NET 4.0 · IGENIESES Technology Solutions, Chennai · Jan 2012',
} as const;
