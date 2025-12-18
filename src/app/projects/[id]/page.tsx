"use client";

import React, { ReactElement, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Chip,
  Grid,
  Divider,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  Api as ApiIcon,
  GitHub as GitHubIcon,
  OpenInNew as OpenInNewIcon,
  PlayArrow as PlayIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProjectImages } from "../../utils/imageUtils";

interface IProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  videos: string[];
  technologies: string[];
  metrics: string;
  category: string;
  icon?: ReactElement;
  challenges: string[];
  solutions: string[];
  codeSnippets: {
    title: string;
    language: string;
    code: string;
  }[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectDetailPage = () => {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const projects = {
    1: {
      id: 1,
      title: "Enterprise API Connectors",
      description:
        "Scalable API-driven connectors integrating Salesforce and GitHub platforms with comprehensive error handling and monitoring.",
      longDescription:
        "Developed a comprehensive API integration platform that seamlessly connects Salesforce CRM with GitHub repositories, enabling automated workflow management and real-time data synchronization. The system handles complex data transformations, implements robust error handling, and provides real-time monitoring capabilities.",
      images: [
        "/projects/project_1.png",
        "/projects/project_1.png",
        "/projects/project_1.png",
      ],
      videos: ["/api-connectors-demo.mp4"],
      technologies: [
        "Python",
        "AWS",
        "REST API",
        "Docker",
        "PostgreSQL",
        "FastAPI",
        "Redis",
      ],
      metrics: "30% reduction in manual tasks",
      category: "API Development",
      icon: <ApiIcon />,
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
        # Remove old requests outside window
        self.requests = [req for req in self.requests if now - req < self.window]
        
        if len(self.requests) >= self.max_requests:
            sleep_time = self.window - (now - self.requests[0])
            await asyncio.sleep(sleep_time)
            return False
        return True
    
    async def make_request(self, func, *args, **kwargs):
        if await self.can_make_request():
            self.requests.append(time.time())
            return await func(*args, **kwargs)
        return None`,
        },
        {
          title: "Error Handling with Retry Logic",
          language: "python",
          code: `import asyncio
from functools import wraps

def retry_with_backoff(max_retries=3, base_delay=1):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            for attempt in range(max_retries):
                try:
                    return await func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_retries - 1:
                        raise e
                    
                    delay = base_delay * (2 ** attempt)
                    await asyncio.sleep(delay)
            return None
        return wrapper
    return decorator

@retry_with_backoff(max_retries=5, base_delay=2)
async def sync_salesforce_to_github(data):
    # Implementation here
    pass`,
        },
      ],
      githubUrl: "https://github.com/brightdev0814/ayafly",
      liveUrl: "https://ayafly.com/flights",
    },
    2: {
      id: 2,
      title: "AI-Powered Developer Tools",
      description:
        "Intelligent automation tools that improved code review efficiency using machine learning algorithms and natural language processing.",
      longDescription:
        "Built an AI-powered code review system that automatically detects potential issues, suggests improvements, and provides intelligent recommendations to developers. The system uses advanced NLP techniques and machine learning models to understand code context and provide meaningful feedback.",
      images: [
        "/projects/project_2.png",
        "/projects/project_2.png",
        "/projects/project_2.png",
      ],
      videos: ["/ai-tools-demo.mp4"],
      technologies: [
        "Python",
        "AI/ML",
        "FastAPI",
        "PostgreSQL",
        "TensorFlow",
        "OpenAI",
        "Docker",
      ],
      metrics: "50% efficiency improvement",
      category: "AI/ML",
      icon: <PsychologyIcon />,
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
        
        return self._classify_issues(embeddings)
    
    def _classify_issues(self, embeddings):
        # Classification logic here
        return {
            "complexity": self._calculate_complexity(embeddings),
            "security_issues": self._detect_security_issues(embeddings),
            "performance_concerns": self._analyze_performance(embeddings)
        }`,
        },
        {
          title: "Real-time Code Review Pipeline",
          language: "python",
          code: `async def process_code_review(pull_request):
    # Extract code changes
    changes = await extract_code_changes(pull_request)
    
    # Analyze each file
    results = []
    for file_change in changes:
        analysis = await analyze_file(file_change)
        results.append({
            "file": file_change.filename,
            "issues": analysis.issues,
            "suggestions": analysis.suggestions,
            "confidence": analysis.confidence
        })
    
    # Generate summary and recommendations
    summary = await generate_review_summary(results)
    
    # Post review comments
    await post_review_comments(pull_request, results, summary)
    
    return results`,
        },
      ],
      githubUrl: "https://github.com/brightdev0814/citizen_vcapi_backend",
      liveUrl: "https://collectivelabs.com",
    },
    3: {
      id: 3,
      title: "Cloud-Native CI/CD Pipeline",
      description:
        "Designed automated deployment pipeline with comprehensive testing, security scanning, and rollback capabilities.",
      longDescription:
        "Created a robust CI/CD pipeline that automates the entire software delivery process from code commit to production deployment with zero-downtime updates. The pipeline includes automated testing, security scanning, performance testing, and blue-green deployments.",
      images: [
        "/projects/project_3.png",
        "/projects/project_3.png",
        "/projects/project_3.png",
      ],
      videos: ["/cicd-demo.mp4"],
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Helm",
        "Prometheus",
      ],
      metrics: "40% faster deployments",
      category: "DevOps",
      icon: <SpeedIcon />,
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
              key: database-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10`,
        },
        {
          title: "Jenkins Pipeline Script",
          language: "groovy",
          code: `pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPOSITORY = 'api-service'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                sh 'python -m pytest tests/ --cov=src/ --cov-report=xml'
            }
        }
        
        stage('Security Scan') {
            steps {
                sh 'bandit -r src/ -f json -o security-report.json'
            }
        }
        
        stage('Build & Push') {
            steps {
                script {
                    def image = docker.build("\${ECR_REPOSITORY}:\${BUILD_NUMBER}")
                    docker.withRegistry('https://123456789.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1') {
                        image.push("\${BUILD_NUMBER}")
                        image.push("latest")
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/'
                sh 'kubectl rollout status deployment/api-service'
            }
        }
    }
}`,
        },
      ],
      githubUrl: "https://github.com/brightdev0814/oldstcafe",
      liveUrl: "https://oldstcafe.co.uk",
    },
    4: {
      id: 4,
      title: "ETL Data Processing System",
      description:
        "Optimized data pipelines with real-time processing, data validation, and comprehensive monitoring dashboards.",
      longDescription:
        "Developed a scalable ETL system that processes millions of records daily, transforming raw data into actionable insights with automated quality checks.",
      images: [
        "/projects/project_4.png",
        "/projects/project_4.png",
        "/projects/project_4.png",
      ],
      videos: ["/etl-demo.mp4"],
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
      githubUrl: "https://github.com/brightdev0814/nutritrace",
      liveUrl: "https://nutritracer.ir",
    },
    5: {
      id: 5,
      title: "Microservices Architecture",
      description:
        "Constructed scalable microservices with service discovery, load balancing, and distributed tracing capabilities.",
      longDescription:
        "Architected a microservices-based system that improved scalability and maintainability while reducing system complexity and deployment risks.",
      images: [
        "/projects/project_5.png",
        "/projects/project_5.png",
        "/projects/project_5.png",
      ],
      videos: ["/microservices-demo.mp4"],
      technologies: ["Python", "FastAPI", "Docker", "Redis", "Consul", "Kong"],
      metrics: "45% less maintenance",
      category: "Architecture",
      icon: <CloudIcon />,
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
      githubUrl: "https://github.com/brightdev0814/instructorsdash",
      liveUrl: "https://instructorsdash.com",
    },
    6: {
      id: 6,
      title: "Security Monitoring Platform",
      description:
        "Automated security scanning with real-time threat detection, vulnerability assessment, and compliance reporting.",
      longDescription:
        "Built a comprehensive security monitoring platform that continuously scans for vulnerabilities and provides real-time alerts for potential security threats.",
      images: [
        "/projects/project_6.png",
        "/projects/project_6.png",
        "/projects/project_6.png",
      ],
      videos: ["/security-demo.mp4"],
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
      githubUrl: "https://github.com/brightdev0814/baladiakut",
      liveUrl: "https://baladiakut.gov.iq/",
    },
    7: {
      id: 7,
      title: "React E-Commerce Platform",
      description:
        "Modern e-commerce platform built with React, Next.js, and TypeScript featuring real-time inventory management and payment processing.",
      longDescription:
        "Developed a full-stack e-commerce solution with modern React patterns, server-side rendering, and optimized performance for mobile and desktop users. The platform features real-time inventory management, secure payment processing with Stripe, and a responsive design that works seamlessly across all devices.",
      images: [
        "/projects/project_7.png",
        "/projects/project_7.png",
        "/projects/project_7.png",
      ],
      videos: ["/react-ecommerce-demo.mp4"],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
      metrics: "40% faster page loads",
      category: "Frontend Development",
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
        {
          title: "Next.js API Route",
          language: "typescript",
          code: `import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { items, customerId } = req.body;
    
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: \`\${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}\`,
      cancel_url: \`\${req.headers.origin}/cart\`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}`,
        },
      ],
      githubUrl: "https://github.com/brightdev0814/alghadeer",
      liveUrl: "https://www.alghadeer.co.uk",
    },
    8: {
      id: 8,
      title: "Node.js Microservices API",
      description:
        "Scalable microservices architecture built with Node.js, Express, and TypeScript for high-performance API services.",
      longDescription:
        "Architected and developed a microservices-based API platform that handles millions of requests with high availability and fault tolerance. The system uses event-driven architecture with message queues, implements centralized logging, and provides comprehensive monitoring and health checks.",
      images: [
        "/projects/project_8.png",
        "/projects/project_8.png",
        "/projects/project_8.png",
      ],
      videos: ["/nodejs-microservices-demo.mp4"],
      technologies: [
        "Node.js",
        "Express",
        "TypeScript",
        "MongoDB",
        "Redis",
        "Docker",
        "Consul",
      ],
      metrics: "60% improved response times",
      category: "Backend Development",
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
        {
          title: "MongoDB Service Layer",
          language: "typescript",
          code: `import { MongoClient, Db, Collection } from 'mongodb';
import { User, CreateUserDto, UpdateUserDto } from '../types/user';

class UserService {
  private db: Db;
  private collection: Collection<User>;

  constructor() {
    const client = new MongoClient(process.env.MONGODB_URI!);
    this.db = client.db('ecommerce');
    this.collection = this.db.collection<User>('users');
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    try {
      const user: User = {
        ...userData,
        id: this.generateId(),
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      };

      const result = await this.collection.insertOne(user);
      
      if (!result.insertedId) {
        throw new Error('Failed to create user');
      }

      return user;
    } catch (error) {
      logger.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  async getUserById(id: string): Promise<User | null> {
    try {
      const user = await this.collection.findOne({ id, isActive: true });
      return user;
    } catch (error) {
      logger.error('Error fetching user:', error);
      throw new Error('Failed to fetch user');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default new UserService();`,
        },
      ],
      githubUrl: "https://github.com/brightdev0814/iranvisa.online",
      liveUrl: "https://iranvisa.online/",
    },
    9: {
      id: 9,
      title: "Laravel Admin Dashboard",
      description:
        "Comprehensive admin dashboard built with Laravel, featuring user management, analytics, and real-time notifications.",
      longDescription:
        "Developed a feature-rich admin dashboard using Laravel with modern PHP practices, providing comprehensive management tools for business operations. The system includes role-based access control, real-time notifications, and optimized database queries for handling large datasets.",
      images: [
        "/projects/project_9.png",
        "/projects/project_9.png",
        "/projects/project_9.png",
      ],
      videos: ["/laravel-admin-demo.mp4"],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Vue.js",
        "Bootstrap",
        "Redis",
        "WebSockets",
      ],
      metrics: "50% faster admin operations",
      category: "Full-Stack Development",
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
        {
          title: "Laravel Model with Relationships",
          language: "php",
          code: `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Spatie\\Permission\\Traits\\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'is_active',
        'last_login_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'last_login_at' => 'datetime',
        'is_active' => 'boolean',
    ];

    // Relationships
    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    // Accessors & Mutators
    public function getAvatarUrlAttribute()
    {
        return $this->avatar 
            ? asset('storage/' . $this->avatar)
            : 'https://ui-avatars.com/api/?name=' . urlencode($this->name);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeWithRole($query, $role)
    {
        return $query->whereHas('roles', function($q) use ($role) {
            $q->where('name', $role);
        });
    }
}`,
        },
      ],
      githubUrl: "https://github.com/brightdev0814/entiajmal.com",
      liveUrl: "https://entiajmal.online/",
    },
  };

  const project: IProject = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" textAlign="center">
          Project not found
        </Typography>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            component={Link}
            href="/projects"
            startIcon={<ArrowBackIcon />}
          >
            Back to Projects
          </Button>
        </Box>
      </Container>
    );
  }

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
      {/* Hero Section with Parallax */}
      <Box
        sx={{
          py: 8,
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
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
              "radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Box sx={{ mb: 4 }}>
              <Button
                component={Link}
                href="/projects"
                startIcon={<ArrowBackIcon />}
                sx={{ mb: 4, color: "text.secondary" }}
              >
                Back to Projects
              </Button>
            </Box>

            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{ color: "primary.main", "& svg": { fontSize: 40 } }}
                    >
                      {project?.icon}
                    </Box>
                    <Chip
                      label={project.category}
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                      background:
                        "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 700,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background:
                          "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<OpenInNewIcon />}
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "rgba(99, 102, 241, 0.1)",
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                    }}
                  >
                    <Box
                      component="img"
                      src={project.images[selectedImage]}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: 300,
                        objectFit: "cover",
                        filter: "brightness(0.5)",
                        cursor: "pointer",
                      }}
                      onClick={() => setVideoOpen(true)}
                    />
                    {/* {project.videos.length > 0 && (
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                        onClick={() => setVideoOpen(true)}
                      >
                        <PlayIcon sx={{ fontSize: 40 }} />
                      </IconButton>
                    )} */}
                  </Box>

                  {/* Image Thumbnails */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mt: 2,
                      justifyContent: "center",
                    }}
                  >
                    {project.images.map((image, index) => (
                      <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        sx={{
                          width: 60,
                          height: 60,
                          objectFit: "cover",
                          borderRadius: 1,
                          cursor: "pointer",
                          border:
                            selectedImage === index
                              ? "2px solid"
                              : "2px solid transparent",
                          borderColor:
                            selectedImage === index
                              ? "primary.main"
                              : "transparent",
                          opacity: selectedImage === index ? 1 : 0.7,
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Project Details */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={6}>
              {/* Project Description */}
              <Grid size={{ xs: 12, md: 8 }}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4, mb: 4 }}>
                    <Typography
                      variant="h4"
                      component="h2"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 3 }}
                    >
                      Project Overview
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {project.longDescription}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      Key Achievements
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h3"
                        color="primary.main"
                        sx={{ fontWeight: 700 }}
                      >
                        {project.metrics}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>

                {/* Challenges & Solutions */}
                <motion.div variants={itemVariants}>
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Card sx={{ p: 3, height: "100%" }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          sx={{ fontWeight: 600, color: "error.main" }}
                        >
                          Challenges
                        </Typography>
                        <Box>
                          {project.challenges.map((challenge, index) => (
                            <Typography
                              key={index}
                              variant="body2"
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1,
                                mb: 1,
                                "&::before": {
                                  content: '"•"',
                                  color: "error.main",
                                  fontWeight: "bold",
                                  mr: 1,
                                },
                              }}
                            >
                              {challenge}
                            </Typography>
                          ))}
                        </Box>
                      </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Card sx={{ p: 3, height: "100%" }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          sx={{ fontWeight: 600, color: "success.main" }}
                        >
                          Solutions
                        </Typography>
                        <Box>
                          {project.solutions.map((solution, index) => (
                            <Typography
                              key={index}
                              variant="body2"
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1,
                                mb: 1,
                                "&::before": {
                                  content: '"•"',
                                  color: "success.main",
                                  fontWeight: "bold",
                                  mr: 1,
                                },
                              }}
                            >
                              {solution}
                            </Typography>
                          ))}
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>

              {/* Technologies & Links */}
              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4, mb: 4 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 3 }}
                    >
                      Technologies Used
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            backgroundColor: "rgba(99, 102, 241, 0.1)",
                            color: "primary.main",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 3 }}
                    >
                      Project Links
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                          fontWeight: 500,
                        }}
                      >
                        View Source Code
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<OpenInNewIcon />}
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                          fontWeight: 500,
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Code Snippets */}
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
              Code Snippets
            </Typography>
            <Grid container spacing={4}>
              {project.codeSnippets.map((snippet, index) => (
                <Grid size={{ xs: 12 }} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card
                      sx={{
                        p: 0,
                        overflow: "hidden",
                        position: "relative",
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
                      }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          backgroundColor: "background.paper",
                          borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 600 }}
                          >
                            {snippet.title}
                          </Typography>
                          <Chip
                            label={snippet.language}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(99, 102, 241, 0.1)",
                              color: "primary.main",
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              backgroundColor: "#ff5f56",
                            }}
                          />
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              backgroundColor: "#ffbd2e",
                            }}
                          />
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              backgroundColor: "#27ca3f",
                            }}
                          />
                        </Box>
                      </Box>
                      <Box
                        component="pre"
                        sx={{
                          p: 4,
                          backgroundColor: "#0d1117",
                          color: "#e6edf3",
                          overflow: "auto",
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          m: 0,
                          fontFamily:
                            'Monaco, Consolas, "Courier New", monospace',
                          position: "relative",
                          zIndex: 2,
                          "&::-webkit-scrollbar": {
                            width: "8px",
                            height: "8px",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "#161b22",
                          },
                          "&::-webkit-scrollbar-thumb": {
                            background: "#6366f1",
                            borderRadius: "4px",
                          },
                          "&::-webkit-scrollbar-thumb:hover": {
                            background: "#4f46e5",
                          },
                        }}
                      >
                        <code>{snippet.code}</code>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Video Dialog */}
      <Dialog
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div">
            {project.title} - Demo Video
          </Typography>
          <IconButton onClick={() => setVideoOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            component="video"
            controls
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 1,
            }}
          >
            <source src={project.videos[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProjectDetailPage;
