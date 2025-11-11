import { Users, LineChart, MessageSquare, TrendingUp } from "lucide-react"
import type { Feature } from "./types"

export const hrAssistantFeature: Feature = {
  label: "HR Module",
  title: "AI-Driven HR Assistant",
  description:
    "Revolutionize your recruitment process with our AI-powered HR assistant that automates tedious tasks and enhances candidate evaluation.",
  bulletPoints: [
    "Automates recruitment tasks including candidate communication via SMS and email",
    "Generates tailored interview questions based on job requirements",
    "Screens and evaluates candidates using AI scoring models",
    "Enriches LinkedIn profiles for comprehensive candidate insights",
    "Queries documents like resumes using RAG-based retrieval",
  ],
  icon: <Users className="h-8 w-8 text-cyan-400" />,
  actionLink: "https://nextusautomate.app.n8n.cloud/webhook/5dff281f-ab84-499a-8b1d-a87f7a77991e/chat",
  actionText: "Open HR Assistant",
}

export const salesAgentFeature: Feature = {
  label: "Sales Module",
  title: "AI Sales Agent",
  description:
    "Enhance your sales processes with our intelligent AI agent that automates research and provides comprehensive lead insights.",
  bulletPoints: [
    "Automates prospect research to save valuable time",
    "Utilizes Google Search automation for real-time discovery",
    "Extracts website content for contextual understanding",
    "Provides comprehensive lead insights for informed decisions",
    "Enables personalized outreach at scale for better conversion",
  ],
  icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
  actionText: "Learn More",
}

export const dataAnalysisFeature: Feature = {
  label: "Data Module",
  title: "AI-Powered Data Analysis Bot",
  description:
    "Transform your data analysis with our NLP-powered bot that delivers insights directly from natural language prompts.",
  bulletPoints: [
    "Provides NLP-based data insights directly from user prompts",
    "Integrates with databases like Google Sheets and NocoDB without code",
    "Offers advanced query processing for complex data analysis",
    "Enables comparative analysis across multiple data sources",
    "Automates data visualization for clear insights presentation",
  ],
  icon: <LineChart className="h-8 w-8 text-cyan-400" />,
  actionLink: "https://nextusautomate.app.n8n.cloud/webhook/cd05f517-9aec-4e7d-bba8-3747bc8f5ddb/chat",
  actionText: "Open Data Analyst",
}

export const feedbackAnalysisFeature: Feature = {
  label: "Feedback Module",
  title: "AI Customer Feedback Sentiment Analysis",
  description:
    "Gain valuable insights from customer feedback with our AI-powered sentiment analysis tool that automatically classifies and tracks feedback.",
  bulletPoints: [
    "Automatically classifies feedback sentiment for quick understanding",
    "Integrates with Google Sheets for comprehensive tracking",
    "Utilizes customizable forms for efficient data collection",
    "Provides real-time sentiment insights for immediate action",
    "Easy to set up and integrate with existing systems",
  ],
  icon: <MessageSquare className="h-8 w-8 text-purple-400" />,
  actionText: "Learn More",
}
