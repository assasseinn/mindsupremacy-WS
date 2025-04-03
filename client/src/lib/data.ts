export interface Principle {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  applications: string[];
  caseStudy: {
    name: string;
    story: string;
  };
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  initial: string;
  category: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const principles: Principle[] = [
  {
    id: 1,
    title: "3 Feet from Gold Principle",
    description: "Learn how most people give up just moments before their breakthrough, and how to identify when you're closer than you think.",
    longDescription: "This principle reveals the hidden pattern behind why so many people fail just before achieving success. Based on the true story of a gold miner who quit three feet from a massive gold seam, you'll learn to recognize the subtle signs that indicate you're on the verge of breakthrough.",
    applications: [
      "How to accurately assess whether to persist or pivot",
      "The three psychological indicators of impending breakthrough",
      "Developing resilience through strategic persistence"
    ],
    caseStudy: {
      name: "Vijay Shekhar Sharma",
      story: "Before founding Paytm, Vijay faced crushing setbacks and was nearly bankrupt. Using this principle, he recognized he was at the edge of breakthrough despite overwhelming evidence to quit."
    }
  },
  {
    id: 2,
    title: "Taming Your Two Selves",
    description: "Discover the battle between your conscious and subconscious mind, and how to align them for unstoppable momentum.",
    longDescription: "Your mind is divided against itself – your conscious desires and your subconscious programming. This principle reveals the ancient techniques for identifying and resolving this internal conflict, creating alignment that automatically attracts success.",
    applications: [
      "The mirror technique for subconscious reprogramming",
      "Identifying and neutralizing limiting beliefs at their source",
      "Creating mental state anchors for peak performance"
    ],
    caseStudy: {
      name: "Kiran Mazumdar-Shaw",
      story: "As India's first female brewery master facing gender discrimination, Kiran used these exact techniques to overcome internal doubts that mirrored external resistance, eventually building Biocon into a pharmaceutical giant."
    }
  },
  {
    id: 3,
    title: "Hypnotic Rhythm of Success",
    description: "Master the secret patterns of thought that automatically attract prosperity and achievement.",
    longDescription: "The mind operates according to hypnotic rhythms - patterns of thought that, once established, become automatic. This principle reveals how to intentionally establish success-producing rhythms that make achievement automatic rather than forced.",
    applications: [
      "Setting up positive mental feedback loops",
      "Breaking negative thought cycles permanently",
      "Establishing prosperity consciousness"
    ],
    caseStudy: {
      name: "Dr. Devi Shetty",
      story: "Before revolutionizing cardiac care in India, Dr. Shetty applied this principle to overcome the rhythm of scarcity thinking that dominated healthcare, creating a new pattern of abundance that attracts resources and innovations."
    }
  },
  {
    id: 4,
    title: "Definiteness of Purpose Formula",
    description: "Learn the exact method to define your purpose with such clarity that failure becomes impossible.",
    longDescription: "Most goals fail because they lack definiteness - precise clarity in all dimensions. This principle provides the forgotten formula for defining purpose with such extraordinary precision that your mind cannot help but achieve it.",
    applications: [
      "The 7-dimension goal clarity framework",
      "Aligning purpose with innate abilities",
      "Creating purpose statements with magnetic power"
    ],
    caseStudy: {
      name: "Ritesh Agarwal",
      story: "At just 19, Ritesh applied this formula to clarify his vision for OYO Rooms with such precision that investors and partners were magnetically drawn to support what seemed impossible for his age and experience."
    }
  },
  {
    id: 5,
    title: "Adversity Alchemy System",
    description: "Transform every obstacle into an opportunity for growth and advancement using this forgotten technique.",
    longDescription: "The ancient alchemists sought to transform lead into gold. This principle teaches the mental equivalent - a systematic approach to transmuting obstacles, failures and setbacks into advantages and opportunities through specific mental frameworks.",
    applications: [
      "The 4-step adversity transmutation process",
      "Finding the seed of opportunity in disaster",
      "Developing antifragility through challenge"
    ],
    caseStudy: {
      name: "Kunal Shah",
      story: "After his first startup failed, Kunal applied this system to transform his setbacks into CRED's foundational insights, turning his greatest failures into the blueprint for billion-dollar success."
    }
  },
  {
    id: 6,
    title: "Time Wealth Framework",
    description: "Maximize your productivity while reducing effort through strategic time allocation and mental energy management.",
    longDescription: "True wealth is not money but time freedom. This principle reveals the counterintuitive framework for maximizing productive output while simultaneously reducing hours worked - the exact opposite of conventional time management.",
    applications: [
      "Identifying your Biological Prime Time for 10x output",
      "Energy management vs. time management",
      "Strategic elimination vs. endless optimization"
    ],
    caseStudy: {
      name: "Falguni Nayar",
      story: "Before founding Nykaa, Falguni mastered this framework to accomplish in her 50s what most couldn't achieve in their entire careers, by focusing on energy optimization rather than time expansion."
    }
  },
  {
    id: 7,
    title: "Decision Immunity Training",
    description: "Build unshakeable confidence in your decisions, eliminating second-guessing and regret.",
    longDescription: "Decision paralysis and second-guessing drain more mental energy than almost any other psychological pattern. This principle teaches the lost art of developing decision immunity - making choices with such clarity and conviction that doubt becomes impossible.",
    applications: [
      "The 3-filter decision framework for perfect clarity",
      "Eliminating decision fatigue permanently",
      "Developing unwavering self-trust"
    ],
    caseStudy: {
      name: "Nikhil Kamath",
      story: "As co-founder of Zerodha, Nikhil applied these exact techniques to make rapid, high-stakes trading decisions with complete confidence, eventually scaling this decision framework across an entire organization."
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "After 15 years of struggling in my career, the Definiteness of Purpose Formula completely changed my life. Within 3 months, I landed my dream job with double the salary.",
    name: "Rahul Sharma",
    location: "Mumbai",
    initial: "R",
    category: "Career Success"
  },
  {
    id: 2,
    quote: "The Adversity Alchemy System taught me how to convert my biggest business failure into an opportunity. Now my startup is valued at 10 crores.",
    name: "Priya Malhotra",
    location: "Bangalore",
    initial: "P",
    category: "Business Growth"
  },
  {
    id: 3,
    quote: "I was ready to give up on my dreams when I discovered the 3 Feet from Gold Principle. Six weeks later I achieved what I had been struggling with for 5 years.",
    name: "Arjun Patel",
    location: "Delhi NCR",
    initial: "A",
    category: "Personal Achievement"
  },
  {
    id: 4,
    quote: "The Time Wealth Framework allowed me to double my productivity while working 15 fewer hours per week. I finally have time for my family without sacrificing success.",
    name: "Meera Joshi",
    location: "Hyderabad",
    initial: "M",
    category: "Work-Life Balance"
  },
  {
    id: 5,
    quote: "Decision Immunity Training eliminated my analysis paralysis. I now make confident decisions in minutes that used to take me weeks of anxiety and doubt.",
    name: "Vikram Singh",
    location: "Pune",
    initial: "V",
    category: "Productivity"
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How is this different from other success programs?",
    answer: "Unlike most modern success programs that focus on tactics, MindSupremacy reveals the foundational mental principles behind all achievement. These are the same principles that powered the greatest success stories of the 20th century but were deliberately obscured from public knowledge. This isn't motivation—it's reprogramming your mind at its deepest level."
  },
  {
    id: 2,
    question: "What if I've failed repeatedly before?",
    answer: "Previous failure is often the strongest indicator that you're on the verge of breakthrough. The 3 Feet from Gold Principle specifically addresses why most people fail right before their moment of transformation. Many of our most successful students had decades of failure before discovering these principles."
  },
  {
    id: 3,
    question: "Is this just another motivational program?",
    answer: "Absolutely not. Motivation fades quickly, which is why most programs fail. MindSupremacy focuses on permanent mental repatterning through the 7 Forbidden Principles. These aren't techniques—they're fundamental laws of mental operation that, once understood, permanently change how your mind processes reality."
  },
  {
    id: 4,
    question: "How quickly will I see results?",
    answer: "Many students report their first \"mental shift\" within 48 hours of beginning the program. Tangible results typically emerge within 2-3 weeks as the principles take root in your subconscious. Complete transformation usually occurs within 60-90 days with consistent application of the daily exercises."
  },
  {
    id: 5,
    question: "What makes this knowledge 'forbidden'?",
    answer: "These principles were originally taught to the industrial elite of the 1930s, who recognized their power and deliberately limited their distribution. The original manuscript was suppressed multiple times. Even today, these concepts are typically only shared in closed mastermind groups at costs of thousands of dollars. We're making them accessible to change this paradigm."
  },
  {
    id: 6,
    question: "What if it doesn't work for me?",
    answer: "We offer a 60-day, no-questions-asked refund guarantee. These principles have worked for thousands across virtually every demographic and background, but if you don't experience a transformation, simply email us for a complete refund. We're confident these principles will work for anyone committed to applying them."
  }
];

export const programDetails = {
  originalPrice: 1000,
  currentPrice: 199,
  savings: 801,
  copiesLeft: 23,
  includes: [
    "7 High-Quality Audio Recordings - Uncover each forbidden principle in detail",
    "Mind Control Resistance Guide - Protect yourself from harmful influence",
    "Success Journaling Templates - Track your transformation journey",
    "30 Days of Success Exercises - Practical implementation steps"
  ]
};
