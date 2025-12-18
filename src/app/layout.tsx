import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { theme } from "./theme/theme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayden Lu - Senior Software Engineer",
  description:
    "Seasoned Software Engineer with 8+ years of experience in developing scalable enterprise integrations and cloud-based solutions.",
  keywords:
    "Python Developer, AWS, API Development, Cloud Solutions, Enterprise Integration",
  authors: [{ name: "Hayden Lu" }],
  openGraph: {
    title: "Hayden Lu - Senior Software Engineer",
    description:
      "Seasoned Software Engineer with 8+ years of experience in developing scalable enterprise integrations and cloud-based solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              background:
                "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
            }}
          >
            <Navigation />
            <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
              {children}
            </Box>
            <Footer />
            <ScrollToTop />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
