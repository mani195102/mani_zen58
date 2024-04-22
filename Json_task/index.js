
const resume = {
    "name": "Manimuthu",
    "title": "Json-task",
    "contact": {
    "email": "mani195102@gmail.com",
    "phone": "8778976319",
    "address": "84 c/1 kaliamman kovil street,pasumpon-nagar,palaganatham,madurai-625003"
    },
    "summary": "I am an enthusiastic fullstack developer looking for new challenges and to grow my careers with great level of opportunities.",
    "skills": {
    "languages": ["JavaScript"],
    "frameworks": ["Bootstrap","React"],
    "tools": ["Git", "Bitbucket"],
    "other": ["Full stack developer"]
    },
    "experience": [
    {
    "position": "Front-end Developer",
    "company": "Sharesoft Technology",
    "location": "Madurai",
    "dates": "2021 - 2023",
    "description": "Developed and trained across the mobile and website application and worked in shopify and bigcommerce,oscommerce."
    }
    ],
    "education": [
    {
    "degree": "B.tech",
    "institution": "Anna university",
    "location": "Trichy",
    "dates": "2011 - 2015",
    "description": "Studied advancement in biotechnology."
    },
    {
    "degree": "12",
    "institution": "M.N.U.Jeyaraj Nadar Hr.Sec.School",
    "location": "Madurai",
    "dates": "2010 - 2011",
    "description": "Studied Bio-maths"
    },
    {
        "degree": "10",
        "institution": "M.N.U.Jeyaraj Nadar Hr.Sec.School",
        "location": "Madurai",
        "dates": "2009",
        "description": "Science group"
        }
    ]
     }

     // Using for loop
console.log("Using for loop:");
for (let i = 0; i < resume.experience.length; i++) {
  console.log(resume.experience[i].position);
}

// Using forEach
console.log("\nUsing forEach:");
resume.education.forEach(edu => {
  console.log(edu.degree);
});

// Using for...in
console.log("\nUsing for...in:");
for (const key in resume.contact) {
  console.log(`${key}: ${resume.contact[key]}`);
}

// Using for...of
console.log("\nUsing for...of:");
for (const skill of resume.skills.languages) {
  console.log(skill);
}