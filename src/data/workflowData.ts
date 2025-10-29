export const workflowData = {
  "calling-agent": {
    id: "calling-agent",
    title: "Calling Agent for Appointment Booking",
    description: "AI-powered voice assistant that takes demo bookings automatically, checks availability, and prevents double-bookings.",
    icon: "📞",
    problem: "Managing demo bookings through calls, forms, or emails often leads to double-booking, missed follow-ups, and lost opportunities. Manual scheduling wastes sales reps' time and frustrates prospects.",
    solution: "Enable an AI-powered voice assistant (via ElevenLabs) to take demo bookings automatically. It checks availability in Google Sheets, prevents double-bookings, and instantly confirms the slot with the customer — saving your team effort and ensuring no lead slips through the cracks.",
    apps: ["ElevenLabs", "Google Sheets", "n8n Webhook"],
    benefits: [
      "Voice AI handles customer bookings 24/7",
      "Prevents double-booking with real-time slot check",
      "Automated entry into Google Sheets",
      "Instant confirmation to customer",
      "Sales reps get clean, qualified bookings"
    ],
    timeSaved: "10-15 hours"
  },
  "whatsapp-bot": {
    id: "whatsapp-bot",
    title: "WhatsApp Appointment/Personal Bot",
    description: "WhatsApp bot that handles appointment booking, personal assistant tasks, FAQs, and reminders with calendar integration.",
    icon: "💬",
    problem: "Clients prefer WhatsApp for communication, but businesses still rely on manual scheduling and messaging. This causes delays and lost opportunities.",
    solution: "A WhatsApp bot that handles appointment booking, personal assistant tasks, FAQs, and reminders. Integrates with calendars and CRMs for seamless scheduling.",
    apps: ["WhatsApp Business API", "Google Calendar", "Zoho CRM", "HubSpot"],
    benefits: [
      "Appointment booking directly in WhatsApp",
      "Handles FAQs & customer queries instantly",
      "Automated reminders and confirmations",
      "Works 24/7 without human effort"
    ],
    timeSaved: "10-15 hours"
  },
  "interactive-ai-agent": {
    id: "interactive-ai-agent",
    title: "AI Avatar Hub",
    description: "Bring human-like conversations to your business with AI-powered avatars that combine speech, facial expressions, and real-time intelligence.",
    icon: "🤖",
    problem: "Businesses struggle to engage customers in real time. Traditional chatbots feel robotic and lack personalization. Live agents can't be available 24/7, leading to missed opportunities and poor user experience.",
    solution: "Our AI Avatars combine speech, facial expressions, and real-time intelligence to deliver natural conversations. They can handle customer support, onboarding, sales demos, or training—seamlessly blending automation with a human touch.",
    apps: ["Email", "WhatsApp / Messenger", "Slack / Microsoft Teams"],
    benefits: [
      "24/7 availability with human-like interaction",
      "Reduce support costs by up to 60%",
      "Personalized experiences at scale",
      "Easy integration with your favorite apps",
      "Smart fallback to human agents when needed",
      "Complete conversation tracking and analytics"
    ],
    timeSaved: "30+ hours"
  },
  "customer-support-bot": {
    id: "customer-support-bot",
    title: "Customer Support Bot with Jira + Email",
    description: "AI-powered support bot that auto-replies to emails, creates tickets in Jira, and assigns issues to developers automatically.",
    icon: "🎧",
    problem: "Customer support teams spend hours manually responding to emails, creating tickets, and assigning issues. Delays frustrate customers.",
    solution: "An AI-powered support bot that auto-replies to customer emails, creates support tickets, logs issues in Jira, assigns them to developers, and sends resolution updates back to customers.",
    apps: ["Gmail/Outlook", "Jira", "Zendesk", "Slack", "Microsoft Teams"],
    benefits: [
      "Instant automated replies to customers",
      "Automatic ticket creation in Jira",
      "Smart assignment to right team members",
      "Customer notified when issue is resolved"
    ],
    timeSaved: "25-30 hours"
  },
  "social-media-bot": {
    id: "social-media-bot",
    title: "Social Media Content & Engagement Bot",
    description: "AI-powered bot that generates posts, schedules them across platforms, auto-replies to comments, and tracks performance.",
    icon: "📱",
    problem: "Businesses struggle to consistently post content and respond to followers. Manual posting & engagement drains time and hurts growth.",
    solution: "AI-powered bot that generates posts, schedules them across platforms, auto-replies to comments/DMs, and tracks performance with weekly insights.",
    apps: ["Instagram", "LinkedIn", "Facebook", "Twitter/X", "Canva", "Buffer"],
    benefits: [
      "Consistent posting without effort",
      "Automated audience engagement",
      "Data-driven insights & reporting",
      "Boosts online presence and brand trust"
    ],
    timeSaved: "15-20 hours"
  },
  "ai-report-generator": {
    id: "ai-report-generator",
    title: "AI Report & Summary Generator",
    description: "Upload documents and meeting transcripts. AI generates concise summaries, highlights key decisions, and extracts action items.",
    icon: "📄",
    problem: "Professionals waste hours reading long documents, reports, and meeting notes. Critical insights are often missed.",
    solution: "Upload or connect documents and meeting transcripts. AI generates concise summaries, highlights key decisions, and extracts action items instantly.",
    apps: ["Google Drive", "OneDrive", "Notion", "Slack", "Zoom", "MS Teams"],
    benefits: [
      "Saves hours of manual reading",
      "Structured, concise summaries",
      "Action items automatically extracted",
      "Works across legal, medical, and IT files"
    ],
    timeSaved: "20-25 hours"
  }
};