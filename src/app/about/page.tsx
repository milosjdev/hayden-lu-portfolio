"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Work as WorkIcon,
  School as SchoolIcon,
  Flag as MilitaryIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const experience = [
    {
      company: "NimbusOps Technologies",
      position: "Senior Software Engineer",
      duration: "Feb 2023 ~ Jun 2025",
      location: "Remote",
      achievements: [
        "Led development of scalable API-driven connectors integrating Salesforce and GitHub",
        "Implemented AWS automation scripts leading to 30% reduction in manual cloud infrastructure tasks",
        "Designed CI/CD pipeline increasing deployment frequency by 40% with enhanced reliability",
        "Developed AI-powered developer tools improving code review efficiency by 50%",
        "Optimized data pipelines reducing ETL processing time by 35% with enhanced data accuracy",
        "Utilized CloudWatch and WAF for effective monitoring reducing downtime incidents by 20%",
      ],
    },
    {
      company: "Artemis",
      position: "Senior Software Engineer",
      duration: "Jan 2022 ~ Mar 2023",
      location: "New York, NY",
      achievements: [
        "Spearheaded integration of enterprise tools enhancing team productivity by 40%",
        "Developed custom CI/CD solutions resulting in 30% improvement in deployment speed",
        "Led API development projects improving data exchange efficiency amongst enterprise applications",
        "Utilized AWS cloud services designing redundant architecture increasing service uptime by 99.9%",
        "Advanced API-driven solutions to automate task management between Jira and GitLab",
        "Oversaw security protocols using automated security scanning reducing vulnerabilities by 30%",
      ],
    },
    {
      company: "Whoosh",
      position: "Software Engineer",
      duration: "Aug 2020 ~ Nov 2021",
      location: "Remote",
      achievements: [
        "Designed and implemented RESTful APIs improving backend data processing efficiency by 50%",
        "Engaged in development of ETL solutions streamlining data flow between multiple systems",
        "Contributed to cloud migration projects moving services to AWS enhancing scalability",
        "Developed automated testing framework reducing bugs in production by 25%",
        "Constructed microservices architecture leading to 45% decrease in system maintenance efforts",
      ],
    },
    {
      company: "Centric Mortgage",
      position: "Software Developer",
      duration: "Aug 2019 ~ Jun 2020",
      location: "Bensalem, PA",
      achievements: [
        "Engineered scalable backend solutions using Python for secure data transaction processes",
        "Strengthened data integration pipelines achieving 50% reduction in data processing time",
        "Collaborated on improving cloud-based server management enhancing processing efficiency",
        "Applied Python scripting for automation tasks reducing manual processing errors by 30%",
        "Developed internal tools enhancing team workflows and boosting productivity by 15%",
      ],
    },
    {
      company: "Titus",
      position: "Full-Stack Web Developer",
      duration: "Jul 2018 ~ Jun 2019",
      location: "Chatsworth, CA",
      achievements: [
        "Designed and developed full-stack web applications using C#, ASP.NET, Ruby, and modern best practices, delivering reliable and scalable features from backend logic to UI implementation.",
        "Built and customized WordPress sites and plugins, integrating backend services and optimizing themes for performance, accessibility, and maintainability.",
        "Developed RESTful APIs, implemented business logic, and optimized database queries using PostgreSQL, ensuring efficient data modeling and high-performance application workflows.",
        "Collaborated closely with designers and cross-functional teams to translate requirements into clean, user-friendly interfaces and robust backend solutions.",
        "Improved application stability and performance through code refactoring, database tuning, caching strategies, and adherence to secure development patterns.",
      ],
    },
    {
      company: "Titus",
      position: "Frontend Engineering Intern",
      duration: "Aug 2017 ~ Jul 2018",
      location: "Chatsworth, CA",
      achievements: [
        "Developed and customized responsive websites and e-commerce experiences using Shopify, WordPress, and modern front-end tools, ensuring clean structure, maintainability, and cross-browser compatibility.",
        "Built dynamic UI components with HTML, CSS, Bootstrap, JavaScript, and jQuery, improving usability and overall user experience across multiple client projects.",
        "Implemented smooth, lightweight CSS and jQuery animations to enhance interactivity and visual appeal while maintaining strong performance and accessibility standards.",
        "Collaborated with designers and backend engineers to translate mockups and business requirements into functional, polished front-end features with a strong attention to detail.",
        "Optimized page load speed and front-end performance through asset minification, image optimization, DOM cleanup, and reusable component patterns.",
      ],
    },
  ];

  const education = [
    {
      institution: "Flatiron School",
      degree: "Intensive Full Stack Software Engineering Certificate",
      duration: "Feb 2018 ~ Jul 2020",
      location: "Remote",
      description:
        "Completed an intensive full-stack software engineering program focused on building production-ready applications using modern technologies. Gained hands-on experience with both frontend and backend development, including JavaScript, React, Ruby on Rails, C#, Shopify, SQL, and RESTful API design. Strengthened my ability to write clean, maintainable code and deliver scalable solutions in collaborative, Agile environments. The curriculum emphasized practical skills through project-based learning, code reviews, and pair programming. Developed a strong foundation in computer science principles, data structures, and algorithms, preparing me for real-world software development challenges. Graduated with a portfolio of projects demonstrating proficiency in full-stack development and a commitment to continuous learning in the tech industry.",
    },
    {
      institution: "The Hong Kong University of Science and Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "Apr 2012 ~ Sep 2016",
      location: "Hong Kong, SAR",
      description:
        "Studied a comprehensive curriculum covering core areas of computer science, including algorithms, data structures, software engineering, databases, computer networks, and operating systems. Gained extensive hands-on experience through practical projects, laboratory work, and industry internships, allowing the application of theoretical knowledge to real-world problems. The program emphasized emerging technologies such as artificial intelligence, machine learning, cybersecurity, data science, and cloud computing, equipping students with skills relevant to modern technology-driven industries. Engaged in interdisciplinary coursework, research opportunities, and collaborative projects that fostered critical thinking, problem-solving, and innovation. Graduates are prepared for a variety of technology careers, including software development, systems engineering, AI research, and further advanced studies in computer science.",
    },
  ];

  const keySkills = [
    {
      name: "Python Programming",
      level: 95,
      icon: <Icon icon="skill-icons:python-light" />,
    },
    {
      name: "React & Next.js",
      level: 92,
      icon: <Icon icon="skill-icons:nextjs-light" />,
    },
    {
      name: "TypeScript",
      level: 90,
      icon: <Icon icon="skill-icons:typescript" />,
    },
    {
      name: "Node.js",
      level: 88,
      icon: <Icon icon="skill-icons:nodejs-light" />,
    },
    {
      name: "C# & .NET",
      level: 85,
      icon: <Icon icon="skill-icons:dotnet" />,
    },
    {
      name: "Laravel (PHP)",
      level: 85,
      icon: <Icon icon="skill-icons:laravel-light" />,
    },
    {
      name: "AWS Cloud Services",
      level: 90,
      icon: <Icon icon="skill-icons:aws-light" />,
    },
    {
      name: "API Development",
      level: 92,
      icon: <Icon icon="ic:baseline-api" />,
    },
    {
      name: "CI/CD Pipelines",
      level: 88,
      icon: <Icon icon="material-icon-theme:azure-pipelines" />,
    },
    { name: "Security Scanning", level: 85, icon: <SecurityIcon /> },
    { name: "AI/ML Tools", level: 80, icon: <PsychologyIcon /> },
    { name: "MySQL", level: 92, icon: <Icon icon="skill-icons:mysql-light" /> },
    {
      name: "PostgreSQL",
      level: 86,
      icon: <Icon icon="skill-icons:postgresql-light" />,
    },
    { name: "Mongo DB", level: 90, icon: <Icon icon="skill-icons:mongodb" /> },
    {
      name: "Docker & Kubernetes",
      level: 84,
      icon: <Icon icon="skill-icons:docker" />,
    },
    {
      name: "GraphQL",
      level: 80,
      icon: <Icon icon="skill-icons:graphql-light" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{
                background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              component="p"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Seasoned Software Engineer with 8+ years of experience in
              developing scalable enterprise integrations and cloud-based
              solutions.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Summary Section */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Professional Summary
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    I am a seasoned Software Engineer with over 8 years of
                    experience in developing scalable enterprise integrations
                    and cloud-based solutions. My expertise lies in AI-powered
                    automation and building API-driven platforms to optimize
                    developer productivity.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    Throughout my career, I have consistently delivered
                    high-impact solutions that improve efficiency, reduce costs,
                    and enhance system reliability. I specialize in transforming
                    legacy systems into cloud-native architectures while
                    maintaining the highest standards of security and
                    performance.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    My military background as an Avionics Technician has
                    instilled in me a strong attention to detail,
                    problem-solving skills, and the ability to work under
                    pressure in high-stakes environments.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4, height: "100%" }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      Key Achievements
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Typography
                          variant="h3"
                          color="primary.main"
                          sx={{ fontWeight: 700 }}
                        >
                          30%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Reduction in manual cloud infrastructure tasks
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Typography
                          variant="h3"
                          color="primary.main"
                          sx={{ fontWeight: 700 }}
                        >
                          50%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Improvement in code review efficiency
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Typography
                          variant="h3"
                          color="primary.main"
                          sx={{ fontWeight: 700 }}
                        >
                          40%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Increase in deployment frequency
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Typography
                          variant="h3"
                          color="primary.main"
                          sx={{ fontWeight: 700 }}
                        >
                          35%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Reduction in ETL processing time
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{
                mb: 6,
                fontWeight: 600,
                background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technical Skills
            </Typography>
            <Grid container spacing={2.5}>
              {keySkills.map((skill, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3, xl: 2.4 }} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card
                      sx={{
                        p: 2,
                        textAlign: "center",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          zIndex: 1,
                        },
                        "&:hover::before": {
                          opacity: 1,
                        },
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          mb: 1,
                          "& svg": {
                            fontSize: 50,
                            transition: "all 0.3s ease",
                          },
                          display: "flex",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          height: 8,
                          backgroundColor: "rgba(99, 102, 241, 0.1)",
                          borderRadius: 4,
                          overflow: "hidden",
                          mt: 1,
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          style={{
                            height: "100%",
                            background:
                              "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                            borderRadius: 4,
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mt: 0,
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        {skill.level}%
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Experience Timeline */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 600 }}
            >
              Professional Experience
            </Typography>
            <Timeline position="alternate">
              {experience.map((job, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: "primary.main" }}>
                      <WorkIcon />
                    </TimelineDot>
                    {index < experience.length - 1 && (
                      <TimelineConnector
                        sx={{ backgroundColor: "primary.main" }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <motion.div variants={itemVariants}>
                      <Card sx={{ mb: 2 }}>
                        <CardContent sx={{ position: "relative" }}>
                          <Typography variant="h5" component="h3" gutterBottom>
                            {job.position}
                          </Typography>
                          <Chip
                            label="Remote"
                            size="small"
                            sx={{
                              px: 2,
                              position: "absolute",
                              top: 20,
                              right: 18,
                            }}
                          />
                          <Typography
                            variant="h6"
                            color="primary.main"
                            gutterBottom
                          >
                            {job.company}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                          >
                            {job.duration} • {job.location}
                          </Typography>
                          <Box>
                            {job.achievements.map((achievement, idx) => (
                              <Typography
                                key={idx}
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 1,
                                  mb: 1,
                                  "&::before": {
                                    content: '"•"',
                                    color: "primary.main",
                                    fontWeight: "bold",
                                    mr: 1,
                                  },
                                }}
                              >
                                {achievement}
                              </Typography>
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </Container>
      </Box>

      {/* Education & Military */}
      <Box sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 12 }}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4, height: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <SchoolIcon
                        sx={{ fontSize: 40, color: "primary.main" }}
                      />
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{ fontWeight: 600 }}
                      >
                        Education
                      </Typography>
                    </Box>
                    {education.map((edu, index) => (
                      <Box key={index}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {edu.degree}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          gutterBottom
                        >
                          {edu.institution}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3 }}
                        >
                          {edu.duration} • {edu.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.description}
                        </Typography>
                      </Box>
                    ))}
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
