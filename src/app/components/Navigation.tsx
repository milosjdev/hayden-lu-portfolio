"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Code as CodeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import Link from "next/link";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    { name: "About", href: "/about", icon: <PersonIcon /> },
    { name: "Projects", href: "/projects", icon: <CodeIcon /> },
    { name: "Contact", href: "/contact", icon: <EmailIcon /> },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          sx={{ width: 50, borderRadius: 50 }}
        />
        <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
          Hayden Lu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", py: 1 }}
          >
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* <Box
                component="img"
                src="/logo.png"
                sx={{ height: 50, borderRadius: 1 }}
              /> */}
              Hayden Lu
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    href={item.href}
                    color="inherit"
                    startIcon={item.icon}
                    sx={{
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "rgba(99, 102, 241, 0.1)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "background.paper",
            borderLeft: "1px solid rgba(99, 102, 241, 0.1)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
