"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Snackbar,
  Divider,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSnackbarMessage("Please fill in all required fields.");
      setSnackbarOpen(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarOpen(true);
      return;
    }

    // Simulate form submission
    setSnackbarMessage(
      "Thank you for your message! I'll get back to you soon."
    );
    setSnackbarOpen(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Email",
      value: "hay0823lu@gmail.com",
      link: "mailto:hay0823lu@gmail.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Phone",
      value: "+1 (445) 319-2490",
      // link: "tel:+8307399137",
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Location",
      value: "Philadelphia, PA 19103",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Icon icon="mdi:github" style={{ fontSize: 25 }} />,
      name: "GitHub",
      url: "https://github.com/hayden-lu",
      color: "#333",
    },
    {
      icon: <Icon icon="ic:baseline-telegram" style={{ fontSize: 25 }} />,
      name: "Telegram",
      url: "https://t.me/hayden0823lu",
      color: "#0077b5",
    },
    {
      icon: <Icon icon="ic:baseline-discord" style={{ fontSize: 25 }} />,
      name: "Discord",
      url: "https://discord.com/users/870198789015744573",
      color: "#1da1f2",
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
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              component="p"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Ready to discuss your next project? Let&apos;s connect and build
              something amazing together.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information */}
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
              Contact Information
            </Typography>
            <Grid container spacing={4}>
              {contactInfo.map((info, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      component={info.link ? "a" : "div"}
                      href={info.link || undefined}
                      target={info.link ? "_blank" : undefined}
                      rel={info.link ? "noopener noreferrer" : undefined}
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        display: "block",
                        p: 4,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        cursor: info.link ? "pointer" : "default",
                        "&:hover": info.link
                          ? {
                              transform: "translateY(-8px)",
                              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                            }
                          : {},
                      }}
                    >
                      <CardContent>
                        <Box sx={{ mb: 2 }}>{info.icon}</Box>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {info.value}
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

      {/* Contact Form & Social Links */}
      <Box sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {/* Contact Form */}
              <Grid size={{ xs: 12, md: 8 }}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h2"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 4 }}
                    >
                      Send Me a Message
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            multiline
                            rows={6}
                            variant="outlined"
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }} sx={{ textAlign: "right" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            startIcon={<SendIcon />}
                            sx={{
                              background:
                                "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                              px: 6,
                              py: 2,
                              borderRadius: 2,
                              textTransform: "none",
                              fontWeight: 600,
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Card>
                </motion.div>
              </Grid>

              {/* Social Links & Additional Info */}
              <Grid size={{ xs: 12, sm: 4 }}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4, height: "100%" }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 4.3 }}
                    >
                      Connect With Me
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        mb: 7,
                      }}
                    >
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          startIcon={social.icon}
                          sx={{
                            justifyContent: "flex-start",
                            p: 2,
                            borderColor: "rgba(99, 102, 241, 0.3)",
                            color: "text.primary",
                            "&:hover": {
                              borderColor: "primary.main",
                              backgroundColor: "rgba(99, 102, 241, 0.1)",
                            },
                          }}
                        >
                          {social.name}
                        </Button>
                      ))}
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      Quick Response
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      I typically respond to messages within 24 hours. For
                      urgent matters, feel free to call me directly.
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 2,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "success.main", fontSize: 20 }}
                      />
                      <Typography variant="body2" color="success.main">
                        Available for new opportunities
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
