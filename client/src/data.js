export const profile = {
  name: 'Rahul',
  fullName: 'Rahul',
  eyebrow: 'B.Tech CSE (Cyber Security)  |  IIIT Una',
  title: ['Turning Ideas Into', 'Real-World', 'Solutions.'],
  intro: 'I build intelligent and secure digital experiences with software, machine learning, and thoughtful design.',
  summary: 'Computer Science and Cyber Security undergraduate at IIIT Una with technical expertise in Machine Learning, full-stack software development, and application security. Experienced in building predictive ML models using Scikit-learn and constructing web applications with the MERN stack.',
  email: 'budhirajasujal23@gmail.com',
  github: 'https://github.com/018RAHUL',
  linkedin: 'https://linkedin.com/in/sujalbudhiraja',
  resume: '/resume.pdf'
};

export const projects = [
  {
    number: '01', title: 'GitHub PR Intelligence System',
    type: 'Machine Learning',
    description: 'Predictive analytics for reviewer recommendation, review-time estimation, and pull-request bottleneck detection across open-source repositories.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'SQLite', 'GitHub API', 'ML'],
    github: 'https://github.com/018RAHUL/github-pr-intelligence-system',
    featured: true,
    metrics: ['10 repositories', '3 prediction tasks', '8 evaluation metrics']
  },
  {
    number: '02', title: 'AI Interview Prep & Analysis Platform',
    type: 'MERN + AI',
    description: 'AI-powered interview preparation with automated evaluation, answer scoring, feedback generation, analytics, and secure authentication.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/018RAHUL',
    featured: true,
    metrics: ['50+ topics', '<2s AI analysis', 'JWT + bcrypt']
  }
];

export const skillGroups = [
  { name: 'Programming', items: ['C', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { name: 'Web Development', items: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'MERN'] },
  { name: 'Machine Learning & AI', items: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Feature Engineering'] },
  { name: 'Databases', items: ['MySQL', 'MongoDB', 'SQLite'] },
  { name: 'Cybersecurity', items: ['OWASP Top 10', 'Cryptography', 'Mobile Forensics', 'Network Security', 'JWT'] },
  { name: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Postman'] }
];

export const journey = [
  { year: '2024 — Present', title: 'B.Tech — Cyber Security', text: 'Indian Institute of Information Technology, Una', meta: 'CGPA: 8.27' },
  { year: '2025 — 2026', title: 'Secretary — Astral Club', text: 'Led a team of 12 student organizers across 5 technical events and workshops.', meta: '30% participation increase' },
  { year: 'Ongoing', title: 'Machine Learning & Full-Stack Building', text: 'Developing practical systems across ML, MERN, application security and AI.', meta: 'Projects + experimentation' }
];

export const certifications = [
  { title: 'Intermediate-level Projects using C++', issuer: 'CodeChef', date: 'Jun. 2025' },
  { title: 'Web Development using JavaScript', issuer: 'CodeChef', date: 'Jul. 2025' }
];

export const achievements = [
  { title: 'Competitive Programming', text: 'Solved 500+ algorithmic problems across LeetCode and CodeChef, maintaining a top 15% rating percentile.' },
  { title: 'Leadership', text: 'Led 12 student organizers to execute 5 technical events and workshops.' }
];

export const exploring = ['Generative AI', 'Advanced Cybersecurity', 'Blockchain & Smart Contracts', 'Deep Learning', 'Open Source'];
