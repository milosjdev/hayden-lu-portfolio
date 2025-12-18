"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Code as CodeIcon,
  Cloud as CloudIcon,
  Api as ApiIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProfileImage, generateProjectImage } from "./utils/imageUtils";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const skills = [
    {
      name: "Python Programming",
      icon: <Icon icon="skill-icons:python-light" />,
      color: "#3776ab",
    },
    {
      name: "React & Next.js",
      icon: <Icon icon="skill-icons:nextjs-light" />,
      color: "#61dafb",
    },
    {
      name: "TypeScript",
      icon: <Icon icon="skill-icons:typescript" />,
      color: "#3178c6",
    },
    {
      name: "Node.js",
      icon: <Icon icon="skill-icons:nodejs-light" />,
      color: "#68d391",
    },
    {
      name: "C# & .NET",
      icon: <Icon icon="skill-icons:dotnet" />,
      color: "#68d391",
    },
    {
      name: "Laravel (PHP)",
      icon: <Icon icon="skill-icons:laravel-light" />,
      color: "#f56565",
    },
    {
      name: "Wordpress",
      icon: <Icon icon="skill-icons:wordpress" />,
      color: "#f56565",
    },
    {
      name: "AWS Cloud Services",
      icon: <Icon icon="skill-icons:aws-light" />,
      color: "#ff9900",
    },
    {
      name: "API Development",
      icon: <Icon icon="ic:baseline-api" />,
      color: "#61dafb",
    },
    { name: "Security Scanning", icon: <SecurityIcon />, color: "#ff6b6b" },
    {
      name: "CI/CD Pipelines",
      icon: <Icon icon="material-icon-theme:azure-pipelines" />,
      color: "#4ecdc4",
    },
    { name: "AI/ML Tools", icon: <PsychologyIcon />, color: "#9b59b6" },
  ];

  const projects = [
    {
      id: 1,
      title: "Enterprise API Connectors",
      description:
        "Scalable API-driven connectors integrating Salesforce and GitHub platforms with comprehensive error handling and monitoring.",
      image: "/projects/project_1.png",
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
        <h3 className="text-lg font-semibold">{'{product.name}'}</h3>
        <p className="text-gray-600">${"{product.price}"}</p>
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
      success_url: \`\\\${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}\`,
      cancel_url: \`\\\${req.headers.origin}/cart\`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}`,
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
  logger.info(\`Server running on port \\\${PORT}\`);
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

  async updateUser(id: string, updateData: UpdateUserDto): Promise<User | null> {
    try {
      const result = await this.collection.findOneAndUpdate(
        { id, isActive: true },
        { 
          $set: { 
            ...updateData, 
            updatedAt: new Date() 
          } 
        },
        { returnDocument: 'after' }
      );

      return result.value;
    } catch (error) {
      logger.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default new UserService();`,
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
    
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => ['sometimes', 'email', Rule::unique('users')->ignore($user->id)],
            'password' => 'sometimes|string|min:8|confirmed',
            'roles' => 'array',
            'roles.*' => 'exists:roles,id'
        ]);
        
        $user->update($validated);
        
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

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
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

    // Methods
    public function hasPermission($permission)
    {
        return $this->can($permission);
    }

    public function updateLastLogin()
    {
        $this->update(['last_login_at' => now()]);
    }
}`,
        },
      ],
      githubUrl: "https://github.com/bleeclark/laravel-admin-dashboard",
      liveUrl: "https://admin-demo.com",
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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
            zIndex: 0,
            animation: "pulse 4s ease-in-out infinite",
          }}
        />

        {/* Floating Particles */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "20%",
              left: "10%",
              width: "4px",
              height: "4px",
              background: "rgba(99, 102, 241, 0.6)",
              borderRadius: "50%",
              animation: "float 6s ease-in-out infinite",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: "60%",
              right: "15%",
              width: "6px",
              height: "6px",
              background: "rgba(236, 72, 153, 0.6)",
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite 2s",
            },
          }}
        />

        {/* Additional floating elements */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: `${2 + i}px`,
              height: `${2 + i}px`,
              background: `rgba(${99 + i * 20}, ${102 + i * 15}, ${
                241 - i * 10
              }, 0.4)`,
              borderRadius: "50%",
              animation: `float ${6 + i}s ease-in-out infinite ${i * 0.5}s`,
              zIndex: 1,
            }}
          />
        ))}

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
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
                    Hayden Lu
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{ color: "text.secondary", fontWeight: 300 }}
                  >
                    Senior Software Developer
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    paragraph
                    sx={{ color: "text.secondary", maxWidth: 850, mb: 4 }}
                  >
                    Senior Full Stack Engineer with 8+ years of experience
                    building scalable, high-impact web applications across
                    modern JavaScript and Python frameworks. Skilled in
                    architecting robust backend systems and crafting intuitive,
                    performant frontends that drive business value. Passionate
                    about delivering production-ready solutions through clean
                    architecture, DevOps best practices, and continuous
                    innovation.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      size="large"
                      component={Link}
                      href="/projects"
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
                      View My Work
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component={Link}
                      href="/contact"
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
                      Get In Touch
                    </Button>
                  </Box>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Avatar
                      src={getProfileImage()}
                      alt="Brandon Clark"
                      sx={{
                        width: isMobile ? 200 : 300,
                        height: isMobile ? 200 : 300,
                        border: "4px solid",
                        borderColor: "primary.main",
                        boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                      }}
                    />
                    {/* Floating elements */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "10%",
                        right: "10%",
                        animation: "float 6s ease-in-out infinite",
                      }}
                    >
                      <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "20%",
                        left: "10%",
                        animation: "float 6s ease-in-out infinite 2s",
                      }}
                    >
                      <CloudIcon
                        sx={{ fontSize: 40, color: "secondary.main" }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 600 }}
            >
              Core Expertise
            </Typography>
            <Grid container spacing={2.5}>
              {skills.map((skill, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}
                  key={index}
                >
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        p: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            color: skill.color,
                            mb: 2,
                            "& svg": { fontSize: 60 },
                          }}
                        >
                          {skill.icon}
                        </Box>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {skill.name}
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

      {/* Featured Projects Section */}
      <Box sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 600 }}
            >
              Featured Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card
                      component={Link}
                      href={`/projects/${project.id}`}
                      sx={{
                        height: "100%",
                        textDecoration: "none",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
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
                            "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          zIndex: 1,
                        },
                        "&:hover": {
                          transform: "translateY(-12px)",
                          boxShadow: "0 25px 50px rgba(99, 102, 241, 0.3)",
                          "&::before": {
                            opacity: 1,
                          },
                          "& .project-icon": {
                            transform: "scale(1.2) rotate(5deg)",
                          },
                          "& .project-title": {
                            color: "primary.main",
                          },
                        },
                      }}
                    >
                      <CardMedia
                        component="div"
                        image={project.image}
                        sx={{
                          height: 200,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundSize: "cover",
                          color: "white",
                          position: "relative",
                          overflow: "hidden",
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "#0f0f2396",
                            zIndex: 1,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            zIndex: 3,
                          }}
                        >
                          <Chip
                            label={project.category}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              color: "white",
                              fontWeight: 600,
                              backdropFilter: "blur(10px)",
                            }}
                          />
                        </Box>
                      </CardMedia>
                      <CardContent sx={{ position: "relative", zIndex: 2 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          className="project-title"
                          sx={{
                            fontWeight: 600,
                            transition: "color 0.3s ease",
                          }}
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
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                                  transform: "scale(1.05)",
                                },
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
                          <Typography
                            variant="body2"
                            sx={{
                              color: "primary.main",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            View Details →
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/projects"
                sx={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                  px: 6,
                  py: 2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                View All Projects
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Testimonials />
    </Box>
  );
};

export default HomePage;
