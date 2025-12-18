"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  Api as ApiIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import { generateProjectImage } from "../utils/imageUtils";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Enterprise API Connectors",
      description:
        "Scalable API-driven connectors integrating Salesforce and GitHub platforms with comprehensive error handling and monitoring.",
      image: '/projects/project_1.png',
      technologies: [
        "Python",
        "AWS",
        "REST API",
        "Docker",
        "PostgreSQL",
        "FastAPI",
      ],
      metrics: "30% reduction in manual tasks",
      category: "API Development",
      icon: <ApiIcon />,
      longDescription:
        "Developed a comprehensive API integration platform that seamlessly connects Salesforce CRM with GitHub repositories, enabling automated workflow management and real-time data synchronization.",
      challenges: [
        "Handling rate limiting and API quotas across different platforms",
        "Implementing robust error handling and retry mechanisms",
        "Ensuring data consistency during high-volume synchronization",
        "Managing authentication and authorization across multiple systems",
      ],
      solutions: [
        "Implemented exponential backoff and circuit breaker patterns",
        "Created comprehensive logging and monitoring system",
        "Used database transactions and idempotent operations",
        "Developed OAuth 2.0 integration with token refresh mechanisms",
      ],
      codeSnippets: [
        {
          title: "API Rate Limiting Handler",
          language: "python",
          code: `class RateLimitHandler:
    def __init__(self, max_requests=100, window=60):
        self.max_requests = max_requests
        self.window = window
        self.requests = []
    
    async def can_make_request(self):
        now = time.time()
        self.requests = [req for req in self.requests if now - req < self.window]
        
        if len(self.requests) >= self.max_requests:
            sleep_time = self.window - (now - self.requests[0])
            await asyncio.sleep(sleep_time)
            return False
        return True`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/enterprise-api-connectors",
      liveUrl: "https://api-connectors-demo.com",
    },
    {
      id: 2,
      title: "AI-Powered Developer Tools",
      description:
        "Intelligent automation tools that improved code review efficiency using machine learning algorithms and natural language processing.",
      image: "/projects/project_2.png",
      technologies: [
        "Python",
        "AI/ML",
        "FastAPI",
        "PostgreSQL",
        "TensorFlow",
        "OpenAI",
      ],
      metrics: "50% efficiency improvement",
      category: "AI/ML",
      icon: <PsychologyIcon />,
      longDescription:
        "Built an AI-powered code review system that automatically detects potential issues, suggests improvements, and provides intelligent recommendations to developers.",
      challenges: [
        "Training models to understand code context and patterns",
        "Handling different programming languages and frameworks",
        "Providing actionable feedback without overwhelming developers",
        "Ensuring low latency for real-time code analysis",
      ],
      solutions: [
        "Used transformer-based models fine-tuned on code datasets",
        "Implemented language-specific parsers and analyzers",
        "Created intelligent filtering and prioritization system",
        "Optimized model inference with caching and batch processing",
      ],
      codeSnippets: [
        {
          title: "Code Analysis Model",
          language: "python",
          code: `import torch
from transformers import AutoTokenizer, AutoModel

class CodeAnalysisModel:
    def __init__(self, model_name="microsoft/codebert-base"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModel.from_pretrained(model_name)
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model.to(self.device)
    
    def analyze_code(self, code_snippet, language="python"):
        inputs = self.tokenizer(
            code_snippet,
            return_tensors="pt",
            padding=True,
            truncation=True,
            max_length=512
        ).to(self.device)
        
        with torch.no_grad():
            outputs = self.model(**inputs)
            embeddings = outputs.last_hidden_state.mean(dim=1)
        
        return self._classify_issues(embeddings)`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/ai-code-reviewer",
      liveUrl: "https://ai-code-reviewer-demo.com",
    },
    {
      id: 3,
      title: "Cloud-Native CI/CD Pipeline",
      description:
        "Designed automated deployment pipeline with comprehensive testing, security scanning, and rollback capabilities.",
      image: "/projects/project_3.png",
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Helm",
      ],
      metrics: "40% faster deployments",
      category: "DevOps",
      icon: <SpeedIcon />,
      longDescription:
        "Created a robust CI/CD pipeline that automates the entire software delivery process from code commit to production deployment with zero-downtime updates.",
      challenges: [
        "Implementing zero-downtime deployments",
        "Managing secrets and environment variables securely",
        "Handling database migrations safely",
        "Monitoring pipeline health and performance",
      ],
      solutions: [
        "Used blue-green deployment strategy with health checks",
        "Integrated AWS Secrets Manager and HashiCorp Vault",
        "Created automated migration scripts with rollback capabilities",
        "Implemented comprehensive monitoring with Prometheus and Grafana",
      ],
      codeSnippets: [
        {
          title: "Kubernetes Deployment Configuration",
          language: "yaml",
          code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  labels:
    app: api-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-service
  template:
    metadata:
      labels:
        app: api-service
    spec:
      containers:
      - name: api-service
        image: api-service:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: api-secrets
              key: database-url`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/cloud-cicd-pipeline",
      liveUrl: "https://cicd-pipeline-demo.com",
    },
    {
      id: 4,
      title: "ETL Data Processing System",
      description:
        "Optimized data pipelines with real-time processing, data validation, and comprehensive monitoring dashboards.",
      image: "/projects/project_4.png",
      technologies: [
        "Python",
        "Apache Airflow",
        "AWS S3",
        "Redshift",
        "Spark",
        "Pandas",
      ],
      metrics: "35% faster processing",
      category: "Data Engineering",
      icon: <CodeIcon />,
      longDescription:
        "Developed a scalable ETL system that processes millions of records daily, transforming raw data into actionable insights with automated quality checks.",
      challenges: [
        "Handling large-scale data processing efficiently",
        "Ensuring data quality and consistency",
        "Managing complex data transformations",
        "Implementing real-time monitoring and alerting",
      ],
      solutions: [
        "Used Apache Spark for distributed data processing",
        "Implemented comprehensive data validation pipelines",
        "Created reusable transformation components",
        "Built real-time monitoring dashboards with Grafana",
      ],
      codeSnippets: [
        {
          title: "Data Processing Pipeline",
          language: "python",
          code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import *

def process_data_pipeline():
    spark = SparkSession.builder.appName("ETLPipeline").getOrCreate()
    
    # Read data from S3
    raw_data = spark.read.parquet("s3://data-lake/raw/")
    
    # Apply transformations
    processed_data = raw_data \
        .filter(col("status") == "active") \
        .withColumn("processed_at", current_timestamp()) \
        .withColumn("data_hash", sha2(col("id"), 256))
    
    # Write to Redshift
    processed_data.write \
        .format("jdbc") \
        .option("url", "jdbc:redshift://cluster.amazonaws.com:5439/db") \
        .option("dbtable", "processed_data") \
        .mode("append") \
        .save()`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/etl-data-pipeline",
      liveUrl: "https://etl-pipeline-demo.com",
    },
    {
      id: 5,
      title: "Microservices Architecture",
      description:
        "Constructed scalable microservices with service discovery, load balancing, and distributed tracing capabilities.",
      image: "/projects/project_5.png",
      technologies: ["Python", "FastAPI", "Docker", "Redis", "Consul", "Kong"],
      metrics: "45% less maintenance",
      category: "Architecture",
      icon: <CloudIcon />,
      longDescription:
        "Architected a microservices-based system that improved scalability and maintainability while reducing system complexity and deployment risks.",
      challenges: [
        "Designing service boundaries and communication patterns",
        "Implementing service discovery and load balancing",
        "Managing distributed transactions and data consistency",
        "Setting up comprehensive monitoring and logging",
      ],
      solutions: [
        "Used domain-driven design principles for service boundaries",
        "Implemented service mesh with Consul and Kong",
        "Used event-driven architecture for loose coupling",
        "Integrated distributed tracing with Jaeger",
      ],
      codeSnippets: [
        {
          title: "Service Discovery Configuration",
          language: "python",
          code: `from fastapi import FastAPI
from consul import Consul
import consul

app = FastAPI()
consul_client = consul.Consul()

@app.on_event("startup")
async def register_service():
    consul_client.agent.service.register(
        name="user-service",
        service_id="user-service-1",
        address="localhost",
        port=8000,
        check=consul.Check.http("http://localhost:8000/health", "10s")
    )

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    # Service logic here
    return {"user_id": user_id, "name": "John Doe"}`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/microservices-architecture",
      liveUrl: "https://microservices-demo.com",
    },
    {
      id: 6,
      title: "Security Monitoring Platform",
      description:
        "Automated security scanning with real-time threat detection, vulnerability assessment, and compliance reporting.",
      image: "/projects/project_6.png",
      technologies: [
        "Python",
        "AWS WAF",
        "CloudWatch",
        "Security Tools",
        "ELK Stack",
        "Grafana",
      ],
      metrics: "30% fewer vulnerabilities",
      category: "Security",
      icon: <SecurityIcon />,
      longDescription:
        "Built a comprehensive security monitoring platform that continuously scans for vulnerabilities and provides real-time alerts for potential security threats.",
      challenges: [
        "Implementing real-time security monitoring",
        "Integrating multiple security tools and platforms",
        "Creating actionable security alerts",
        "Ensuring compliance with security standards",
      ],
      solutions: [
        "Used ELK stack for centralized logging and analysis",
        "Integrated with AWS Security Hub and GuardDuty",
        "Created automated remediation workflows",
        "Implemented compliance reporting dashboards",
      ],
      codeSnippets: [
        {
          title: "Security Alert Handler",
          language: "python",
          code: `import boto3
from datetime import datetime
import json

class SecurityAlertHandler:
    def __init__(self):
        self.cloudwatch = boto3.client('cloudwatch')
        self.sns = boto3.client('sns')
    
    def process_security_event(self, event):
        severity = event.get('severity', 'medium')
        
        if severity in ['high', 'critical']:
            self.send_alert(event)
            self.create_cloudwatch_metric(event)
    
    def send_alert(self, event):
        message = {
            "alert_type": "security_incident",
            "timestamp": datetime.utcnow().isoformat(),
            "severity": event['severity'],
            "description": event['description'],
            "source": event['source']
        }
        
        self.sns.publish(
            TopicArn="arn:aws:sns:us-east-1:123456789012:security-alerts",
            Message=json.dumps(message)
        )`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/security-monitoring-platform",
      liveUrl: "https://security-platform-demo.com",
    },
    {
      id: 7,
      title: "React E-Commerce Platform",
      description:
        "Modern e-commerce platform built with React, Next.js, and TypeScript featuring real-time inventory management and payment processing.",
      image: "/projects/project_7.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      metrics: "40% faster page loads",
      category: "Frontend Development",
      icon: <CodeIcon />,
      longDescription:
        "Developed a full-stack e-commerce solution with modern React patterns, server-side rendering, and optimized performance for mobile and desktop users.",
      challenges: [
        "Implementing complex state management across multiple components",
        "Optimizing performance for large product catalogs",
        "Integrating secure payment processing",
        "Ensuring responsive design across all devices",
      ],
      solutions: [
        "Used Redux Toolkit for predictable state management",
        "Implemented Next.js Image optimization and lazy loading",
        "Integrated Stripe for secure payment processing",
        "Applied mobile-first responsive design principles",
      ],
      codeSnippets: [
        {
          title: "React Component with TypeScript",
          language: "typescript",
          code: `interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await onAddToCart(product.id);
      toast.success('Added to cart!');
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">\${product.name}</h3>
        <p className="text-gray-600">\${product.price}</p>
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/react-ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
    },
    {
      id: 8,
      title: "Node.js Microservices API",
      description:
        "Scalable microservices architecture built with Node.js, Express, and TypeScript for high-performance API services.",
      image: "/projects/project_8.png",
      technologies: [
        "Node.js",
        "Express",
        "TypeScript",
        "MongoDB",
        "Redis",
        "Docker",
      ],
      metrics: "60% improved response times",
      category: "Backend Development",
      icon: <CodeIcon />,
      longDescription:
        "Architected and developed a microservices-based API platform that handles millions of requests with high availability and fault tolerance.",
      challenges: [
        "Designing service communication patterns",
        "Implementing distributed logging and monitoring",
        "Managing data consistency across services",
        "Handling service discovery and load balancing",
      ],
      solutions: [
        "Used event-driven architecture with message queues",
        "Implemented centralized logging with ELK stack",
        "Applied CQRS pattern for data consistency",
        "Used Consul for service discovery and health checks",
      ],
      codeSnippets: [
        {
          title: "Express Server with TypeScript",
          language: "typescript",
          code: `import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error handling
app.use(errorHandler);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(\`Server running on port \${PORT}\`);
});`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/nodejs-microservices-api",
      liveUrl: "https://api-demo.com",
    },
    {
      id: 9,
      title: "Laravel Admin Dashboard",
      description:
        "Comprehensive admin dashboard built with Laravel, featuring user management, analytics, and real-time notifications.",
      image: "/projects/project_9.png",
      technologies: ["Laravel", "PHP", "MySQL", "Vue.js", "Bootstrap", "Redis"],
      metrics: "50% faster admin operations",
      category: "Full-Stack Development",
      icon: <CodeIcon />,
      longDescription:
        "Developed a feature-rich admin dashboard using Laravel with modern PHP practices, providing comprehensive management tools for business operations.",
      challenges: [
        "Implementing role-based access control",
        "Building real-time notification system",
        "Optimizing database queries for large datasets",
        "Creating responsive admin interface",
      ],
      solutions: [
        "Used Laravel Spatie Permission package for RBAC",
        "Implemented WebSocket connections for real-time updates",
        "Applied database indexing and query optimization",
        "Used Laravel Livewire for dynamic components",
      ],
      codeSnippets: [
        {
          title: "Laravel Controller with API Resources",
          language: "php",
          code: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Resources\\UserResource;
use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;
use Illuminate\\Validation\\Rule;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::with(['roles', 'permissions']);
        
        // Search functionality
        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }
        
        // Filter by role
        if ($request->has('role')) {
            $query->whereHas('roles', function($q) use ($request) {
                $q->where('name', $request->get('role'));
            });
        }
        
        $users = $query->paginate(15);
        
        return UserResource::collection($users);
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'roles' => 'array',
            'roles.*' => 'exists:roles,id'
        ]);
        
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);
        
        if (isset($validated['roles'])) {
            $user->roles()->sync($validated['roles']);
        }
        
        return new UserResource($user->load('roles'));
    }
}`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/laravel-admin-dashboard",
      liveUrl: "https://admin-demo.com",
    },
  ];

  const categories = [
    { name: "All", icon: <CodeIcon />, count: projects.length },
    {
      name: "API Development",
      icon: <ApiIcon />,
      count: projects.filter((p) => p.category === "API Development").length,
    },
    {
      name: "AI/ML",
      icon: <PsychologyIcon />,
      count: projects.filter((p) => p.category === "AI/ML").length,
    },
    {
      name: "DevOps",
      icon: <SpeedIcon />,
      count: projects.filter((p) => p.category === "DevOps").length,
    },
    {
      name: "Data Engineering",
      icon: <CodeIcon />,
      count: projects.filter((p) => p.category === "Data Engineering").length,
    },
    {
      name: "Architecture",
      icon: <CloudIcon />,
      count: projects.filter((p) => p.category === "Architecture").length,
    },
    {
      name: "Security",
      icon: <SecurityIcon />,
      count: projects.filter((p) => p.category === "Security").length,
    },
    {
      name: "Frontend Development",
      icon: <CodeIcon />,
      count: projects.filter((p) => p.category === "Frontend Development")
        .length,
    },
    {
      name: "Backend Development",
      icon: <CodeIcon />,
      count: projects.filter((p) => p.category === "Backend Development")
        .length,
    },
    {
      name: "Full-Stack Development",
      icon: <CodeIcon />,
      count: projects.filter((p) => p.category === "Full-Stack Development")
        .length,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              My Projects
            </Typography>
            <Typography
              variant="h5"
              component="p"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
            >
              A collection of projects showcasing my expertise in Python
              development, cloud architecture, and AI-powered solutions.
            </Typography>

            {/* Search and Filter */}
            <Box sx={{ maxWidth: 700, mx: "auto" }}>
              <TextField
                fullWidth
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ maxWidth: 850, mx: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {categories.map((category) => (
                  <Chip
                    key={category.name}
                    label={`${category.name} (${category.count})`}
                    onClick={() => setSelectedCategory(category.name)}
                    variant={
                      selectedCategory === category.name ? "filled" : "outlined"
                    }
                    sx={{
                      backgroundColor:
                        selectedCategory === category.name
                          ? "primary.main"
                          : "transparent",
                      color:
                        selectedCategory === category.name
                          ? "white"
                          : "primary.main",
                      borderColor: "primary.main",
                      "&:hover": {
                        backgroundColor:
                          selectedCategory === category.name
                            ? "primary.dark"
                            : "rgba(99, 102, 241, 0.1)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={3.5}>
              {filteredProjects.map((project) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
                  <Card
                    component={Link}
                    href={`/projects/${project.id}`}
                    sx={{
                      height: "100%",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      image={project.image}
                      sx={{
                        height: 240,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        backgroundSize: "cover",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "3rem",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "#0f0f2396",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                      </Box>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                    </CardMedia>
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 2, minHeight: 60 }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(99, 102, 241, 0.1)",
                              color: "primary.main",
                              fontWeight: 500,
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3} more`}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(99, 102, 241, 0.1)",
                              color: "primary.main",
                              fontWeight: 500,
                            }}
                          />
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "success.main",
                            fontWeight: 600,
                            fontStyle: "italic",
                          }}
                        >
                          {project.metrics}
                        </Typography>
                        <Button
                          size="small"
                          fullWidth
                          sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            textTransform: "none",
                          }}
                        >
                          View Details →
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {filteredProjects.length === 0 && (
              <Paper sx={{ p: 6, textAlign: "center", mt: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  No projects found matching your search criteria.
                </Typography>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  sx={{ mt: 2 }}
                >
                  Clear Filters
                </Button>
              </Paper>
            )}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
