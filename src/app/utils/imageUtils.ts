// Utility functions for handling images and placeholders

export const generateProjectImage = (
  projectId: number,
  projectTitle: string,
  width: number = 400,
  height: number = 300
): string => {
  const projectImages = {
    1: {
      title: "Enterprise API Connectors",
      icon: "🔗",
      gradient: ["#6366f1", "#8b5cf6"],
      tech: ["Python", "AWS", "REST API", "Docker"],
      description: "Scalable API Integration Platform",
    },
    2: {
      title: "AI-Powered Developer Tools",
      icon: "🤖",
      gradient: ["#ec4899", "#f59e0b"],
      tech: ["AI/ML", "TensorFlow", "OpenAI", "FastAPI"],
      description: "Intelligent Code Analysis",
    },
    3: {
      title: "Cloud-Native CI/CD Pipeline",
      icon: "⚡",
      gradient: ["#06b6d4", "#3b82f6"],
      tech: ["Kubernetes", "Jenkins", "Docker", "AWS"],
      description: "Automated Deployment System",
    },
    4: {
      title: "ETL Data Processing System",
      icon: "📊",
      gradient: ["#10b981", "#059669"],
      tech: ["Apache Spark", "Airflow", "S3", "Redshift"],
      description: "Real-time Data Pipeline",
    },
    5: {
      title: "Microservices Architecture",
      icon: "🏗️",
      gradient: ["#8b5cf6", "#ec4899"],
      tech: ["FastAPI", "Docker", "Redis", "Consul"],
      description: "Scalable Service Architecture",
    },
    6: {
      title: "Security Monitoring Platform",
      icon: "🛡️",
      gradient: ["#ef4444", "#dc2626"],
      tech: ["AWS WAF", "CloudWatch", "ELK Stack", "Grafana"],
      description: "Real-time Security Analytics",
    },
    7: {
      title: "React E-Commerce Platform",
      icon: "🛒",
      gradient: ["#61dafb", "#21a0c4"],
      tech: ["React", "Next.js", "TypeScript", "Stripe"],
      description: "Modern E-Commerce Solution",
    },
    8: {
      title: "Node.js Microservices API",
      icon: "⚙️",
      gradient: ["#68d391", "#38a169"],
      tech: ["Node.js", "Express", "MongoDB", "Redis"],
      description: "Scalable API Architecture",
    },
    9: {
      title: "Laravel Admin Dashboard",
      icon: "📊",
      gradient: ["#f56565", "#e53e3e"],
      tech: ["Laravel", "PHP", "MySQL", "Vue.js"],
      description: "Comprehensive Admin Panel",
    },
  };

  const project = projectImages[projectId as keyof typeof projectImages];
  if (!project) {
    return generatePlaceholderImage(width, height, projectTitle);
  }

  // Check if we're in a browser environment
  if (typeof window === "undefined" || typeof document === "undefined") {
    // Return a data URL for server-side rendering
    return `data:image/svg+xml;base64,${Buffer.from(
      `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${
              project.gradient[0]
            };stop-opacity:1" />
            <stop offset="100%" style="stop-color:${
              project.gradient[1]
            };stop-opacity:1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        
        <!-- Background Pattern -->
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
        
        <!-- Main Icon -->
        <text x="50%" y="35%" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.9)" filter="url(#glow)">${
          project.icon
        }</text>
        
        <!-- Project Title -->
        <text x="50%" y="55%" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white">${
          project.title
        }</text>
        
        <!-- Description -->
        <text x="50%" y="65%" font-family="Inter, sans-serif" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.8)">${
          project.description
        }</text>
        
        <!-- Tech Stack -->
        <text x="50%" y="75%" font-family="Inter, sans-serif" font-size="10" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.7)">${project.tech.join(
          " • "
        )}</text>
        
        <!-- Decorative Elements -->
        <circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.3)"/>
        <circle cx="${width - 20}" cy="20" r="2" fill="rgba(255,255,255,0.2)"/>
        <circle cx="20" cy="${height - 20}" r="2" fill="rgba(255,255,255,0.2)"/>
        <circle cx="${width - 20}" cy="${
        height - 20
      }" r="3" fill="rgba(255,255,255,0.3)"/>
      </svg>
    `
    ).toString("base64")}`;
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) return "";

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, project.gradient[0]);
  gradient.addColorStop(1, project.gradient[1]);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add grid pattern
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= width; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = 0; i <= height; i += 40) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }

  // Add main icon
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.font = "bold 48px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(project.icon, width / 2, height * 0.35);

  // Add project title
  ctx.fillStyle = "white";
  ctx.font = "bold 18px Inter, sans-serif";
  ctx.fillText(project.title, width / 2, height * 0.55);

  // Add description
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.font = "12px Inter, sans-serif";
  ctx.fillText(project.description, width / 2, height * 0.65);

  // Add tech stack
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "10px Inter, sans-serif";
  ctx.fillText(project.tech.join(" • "), width / 2, height * 0.75);

  // Add decorative circles
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.beginPath();
  ctx.arc(20, 20, 3, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.beginPath();
  ctx.arc(width - 20, 20, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(20, height - 20, 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.beginPath();
  ctx.arc(width - 20, height - 20, 3, 0, 2 * Math.PI);
  ctx.fill();

  return canvas.toDataURL();
};

export const generatePlaceholderImage = (
  width: number,
  height: number,
  text: string,
  bgColor: string = "#6366f1",
  textColor: string = "#ffffff"
): string => {
  // Check if we're in a browser environment
  if (typeof window === "undefined" || typeof document === "undefined") {
    // Return a data URL for server-side rendering
    return `data:image/svg+xml;base64,${Buffer.from(
      `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
      </svg>
    `
    ).toString("base64")}`;
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) return "";

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, bgColor);
  gradient.addColorStop(1, "#ec4899");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = textColor;
  ctx.font = "bold 24px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  return canvas.toDataURL();
};

export const getProjectImage = (
  imagePath: string,
  fallbackText: string,
  width: number = 400,
  height: number = 300
): string => {
  // Extract project ID from the path or use fallback
  const projectId = parseInt(imagePath.match(/\d+/)?.[0] || "1");
  return generateProjectImage(projectId, fallbackText, width, height);
};

export const getProjectImages = (
  projectId: number,
  projectTitle: string
): string[] => {
  const baseImages = [
    generateProjectImage(projectId, `${projectTitle} - Overview`),
    generateProjectImage(projectId, `${projectTitle} - Architecture`),
    generateProjectImage(projectId, `${projectTitle} - Implementation`),
  ];
  return baseImages;
};

export const getProfileImage = (): string => {
  return "/photo.png";
};
