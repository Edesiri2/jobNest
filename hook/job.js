const jobs = [
    {
        "id": "1",
        "title": "Software Engineer",
        "company": "Access Bank",
        "location": "Lagos",
        "type": "Full Time",
        "salary": "$100,000",
        "posted": "2 days ago",
        "description": {
            "shortDescription": "We are seeking to hire a highly skilled Frontend Developer proficient in Next.js, React, and Tailwind CSS to help us build and maintain sophisticated web applications.",
            "fullDescription": {
                "benefits": "Performance, productivity, and security",
                "responsibilities": "Frontend development, API development, and design",
                "requirements": "Experience with Next.js, React, and Tailwind CSS"
            }
        }
    },
    {
        "id": "2",
        "title": "Backend Engineer",
        "company": "GTB Bank",
        "location": "Lagos",
        "type": "Full Time",
        "salary": "$100,000",
        "posted": "2 days ago",
        "description": {
            "shortDescription": "The Frontend Developer role is open to graduates who are interested in joining a thriving organization to work and improve their programming skills.",
            "fullDescription": {
                "benefits": "Performance, productivity, and security",
                "responsibilities": "Frontend development, API development, and design",
                "requirements": "Experience with Next.js, React, and Tailwind CSS"
            }
        }
    },
    {
        "id": "3",
        "title": "Full Stack Developer",
        "company": "Zenith Bank",
        "location": "Abuja",
        "type": "Contract",
        "salary": "$80,000",
        "posted": "3 days ago",
        "description": {
            "shortDescription": "Zenith Bank is looking for a versatile Full Stack Developer with expertise in Node.js, React, and MongoDB.",
            "fullDescription": {
                "benefits": "Health insurance, remote work option, and continuous learning opportunities",
                "responsibilities": "Building full-stack applications, managing databases, and collaborating with the design team",
                "requirements": "Proficiency in Node.js, React, MongoDB, and RESTful API development"
            }
        }
    },
    {
        "id": "4",
        "title": "Data Scientist",
        "company": "First Bank",
        "location": "Lagos",
        "type": "Part Time",
        "salary": "$70,000",
        "posted": "1 day ago",
        "description": {
            "shortDescription": "We are seeking a Data Scientist to join our analytics team. The ideal candidate will have a deep understanding of statistical analysis and experience with Python, R, and SQL.",
            "fullDescription": {
                "benefits": "Flexible working hours, health insurance, and professional development",
                "responsibilities": "Analyzing large datasets, building predictive models, and presenting insights to stakeholders",
                "requirements": "Expertise in Python, R, SQL, and statistical modeling techniques"
            }
        }
    },
    {
        "id": "5",
        "title": "DevOps Engineer",
        "company": "Union Bank",
        "location": "Port Harcourt",
        "type": "Full Time",
        "salary": "$90,000",
        "posted": "4 days ago",
        "description": {
            "shortDescription": "Union Bank is hiring a DevOps Engineer with a strong background in CI/CD pipelines, Docker, and Kubernetes.",
            "fullDescription": {
                "benefits": "Competitive salary, work-from-home options, and career growth opportunities",
                "responsibilities": "Maintaining CI/CD pipelines, managing containerized applications, and ensuring system uptime",
                "requirements": "Experience with Docker, Kubernetes, Jenkins, and cloud platforms (AWS, Azure, GCP)"
            }
        }
    },
    {
        "id": "6",
        "title": "Mobile App Developer",
        "company": "Sterling Bank",
        "location": "Lagos",
        "type": "Full Time",
        "salary": "$85,000",
        "posted": "5 days ago",
        "description": {
            "shortDescription": "We are looking for a Mobile App Developer proficient in React Native to join our dynamic team.",
            "fullDescription": {
                "benefits": "Health insurance, remote work, and career growth opportunities",
                "responsibilities": "Developing and maintaining mobile applications, collaborating with the UX/UI team, and integrating APIs",
                "requirements": "Experience with React Native, JavaScript, and mobile app development"
            }
        }
    },
    {
        "id": "7",
        "title": "Cloud Engineer",
        "company": "UBA",
        "location": "Lagos",
        "type": "Full Time",
        "salary": "$110,000",
        "posted": "3 days ago",
        "description": {
            "shortDescription": "UBA is seeking a Cloud Engineer with experience in AWS and Azure to manage and scale our cloud infrastructure.",
            "fullDescription": {
                "benefits": "Competitive salary, health insurance, and learning opportunities",
                "responsibilities": "Managing cloud infrastructure, automating deployment processes, and ensuring security and compliance",
                "requirements": "Expertise in AWS, Azure, Terraform, and cloud security"
            }
        }
    },
    {
        "id": "8",
        "title": "Business Analyst",
        "company": "FCMB",
        "location": "Lagos",
        "type": "Full Time",
        "salary": "$75,000",
        "posted": "2 days ago",
        "description": {
            "shortDescription": "We are looking for a Business Analyst to help us streamline our business processes and improve decision-making.",
            "fullDescription": {
                "benefits": "Health insurance, flexible working hours, and professional development",
                "responsibilities": "Analyzing business requirements, creating reports, and collaborating with stakeholders",
                "requirements": "Experience in business analysis, data analysis, and reporting tools"
            }
        }
    },
    {
        "id": "9",
        "title": "Cybersecurity Specialist",
        "company": "Access Bank",
        "location": "Lagos",
        "type": "Full Time",
        "salary": "$120,000",
        "posted": "1 week ago",
        "description": {
            "shortDescription": "We are seeking a Cybersecurity Specialist with experience in network security, incident response, and threat management.",
            "fullDescription": {
                "benefits": "Comprehensive health benefits, retirement plans, and career advancement opportunities",
                "responsibilities": "Managing security operations, responding to security incidents, and conducting vulnerability assessments",
                "requirements": "Expertise in cybersecurity frameworks, incident response, and security tools"
            }
        }
    },
    {
        "id": "10",
        "title": "Product Designer",
        "company": "EcoBank",
        "location": "Lagos",
        "type": "Part Time",
        "salary": "$95,000",
        "posted": "3 days ago",
        "description": {
            "shortDescription": "EcoBank is looking for a creative Product Designer with a strong background in UX/UI design and user research.",
            "fullDescription": {
                "benefits": "Flexible working hours, health insurance, and design tool subscriptions",
                "responsibilities": "Designing user-friendly interfaces, conducting user research, and collaborating with product teams",
                "requirements": "Proficiency in Figma, Sketch, Adobe XD, and user research methodologies"
            }
        }
    },
    {
        "id": "11",
        "title": "Network Engineer",
        "company": "Zenith Bank",
        "location": "Lagos",
        "type": "Part Time",
        "salary": "$100,000",
        "posted": "4 days ago",
        "description": {
            "shortDescription": "We are looking for a Network Engineer to manage and optimize our network infrastructure.",
            "fullDescription": {
                "benefits": "Health insurance, pension, and continuous learning opportunities",
                "responsibilities": "Managing network infrastructure, troubleshooting network issues, and ensuring high availability",
                "requirements": "Experience with Cisco, Juniper, firewalls, and network security"
            }
        }
    },
    {
        "id": "12",
        "title": "Project Manager",
        "company": "Union Bank",
        "location": "Lagos",
        "type": "Part Time",
        "salary": "$105,000",
        "posted": "5 days ago",
        "description": {
            "shortDescription": "Union Bank is hiring a Project Manager with a track record of delivering IT projects on time and within budget.",
            "fullDescription": {
                "benefits": "Health insurance, performance bonuses, and career growth opportunities",
                "responsibilities": "Managing project timelines, coordinating with stakeholders, and ensuring project deliverables",
                "requirements": "Experience in project management, agile methodologies, and software development lifecycle"
            }
        }
    },
    {
        "id": "13",
        "title": "IT Support Specialist",
        "company": "GTB Bank",
        "location": "Lagos",
        "type": "Part Time",
        "salary": "$60,000",
        "posted": "6 days ago",
        "description": {
            "shortDescription": "We are seeking an IT Support Specialist to provide technical support and troubleshooting for our internal teams.",
            "fullDescription": {
                "benefits": "Health insurance, professional development, and work-life balance",
                "responsibilities": "Providing technical support, troubleshooting hardware and software issues, and maintaining IT documentation",
                "requirements": "Experience with Windows, macOS, and IT support tools"
            }
        }
    },
    {
        "id": "14",
        "title": "UI/UX Designer",
        "company": "FCMB",
        "location": "Lagos",
        "type": "Contract",
        "salary": "$90,000",
        "posted": "1 week ago",
        "description": {
            "shortDescription": "FCMB is looking for a UI/UX Designer with a passion for creating intuitive and visually appealing user interfaces.",
            "fullDescription": {
                "benefits": "Health insurance, flexible working hours, and design tool subscriptions",
                "responsibilities": "Designing user interfaces, conducting usability testing, and collaborating with product teams",
                "requirements": "Proficiency in Figma, Sketch, Adobe XD, and design principles"
            }
        }
    },
    {
        "id": "15",
        "title": "Product Manager",
        "company": "Sterling Bank",
        "location": "Lagos",
        "type": "Contract",
        "salary": "$130,000",
        "posted": "2 days ago",
        "description": {
            "shortDescription": "Sterling Bank is seeking a Machine Learning Engineer with experience in developing and deploying machine learning models.",
            "fullDescription": {
                "benefits": "Health insurance, remote work options, and continuous learning opportunities",
                "responsibilities": "Building and deploying machine learning models, working with data scientists, and optimizing model performance",
                "requirements": "Expertise in Python, TensorFlow, PyTorch, and machine learning algorithms"
            }
        }
    }
];

export default jobs;
