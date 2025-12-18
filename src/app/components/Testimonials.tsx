"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
      text: "Hayden's expertise in Python and cloud architecture transformed our development process. His AI-powered tools increased our team's productivity by 50%.",
    },
    {
      id: 2,
      name: "Vishaal Melwani",
      role: "Lead Developer at DataFlow",
      text: "Working with Hayden was exceptional. His ETL solutions reduced our data processing time by 35% and his attention to detail is unmatched.",
      rating: 5,
      avatar: "/avatars/michael.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "DevOps Manager at CloudScale",
      text: "Hayden's CI/CD pipeline implementation was flawless. We achieved 40% faster deployments with zero downtime. Highly recommended!",
      rating: 5,
      avatar: "/avatars/emily.jpg",
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
            What Clients Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
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
                    <CardContent sx={{ position: "relative", zIndex: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            mr: 2,
                            background:
                              "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                          }}
                        >
                          {testimonial.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" component="h3" gutterBottom>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{ mb: 2 }}
                      />
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontStyle: "italic" }}
                      >
                        &quot;{testimonial.text}&quot;
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials;
