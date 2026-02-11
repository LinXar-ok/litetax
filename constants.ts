import { FAQItem, Testimonial } from "./types";

export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_123456"; // Placeholder

export const BOOK_DETAILS = {
  title: "The SME Guide to Ghana Tax Compliance",
  subtitle: "Stop Overpaying. Start Growing. The definitive playbook for small business owners.",
  price: "GHS 150",
  originalPrice: "GHS 299",
  author: "LiteTax Experts",
};

export const FAQS: FAQItem[] = [
  {
    question: "Is this book suitable for complete beginners?",
    answer: "Absolutely. We stripped away the legal jargon and explained everything in plain English tailored for business owners, not accountants."
  },
  {
    question: "Does it cover the latest GRA updates for 2024?",
    answer: "Yes, the digital edition is updated quarterly. Your purchase includes free updates for the first year."
  },
  {
    question: "Is this a physical book or an eBook?",
    answer: "This is a digital eBook (PDF & ePub). You will receive an instant download link immediately after purchase."
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee. If you don't save at least the cost of the book in tax optimizations, we'll refund you."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kwame Asante",
    role: "CEO",
    company: "Asante Logistics",
    content: "I was terrified of the GRA audits. This book clarified exactly what records I needed to keep. It saved me thousands in potential penalties.",
    avatar: "https://picsum.photos/seed/kwame/100/100"
  },
  {
    id: 2,
    name: "Sarah Mensah",
    role: "Founder",
    company: "Bloom Cafe",
    content: "Finally, a tax guide that doesn't put me to sleep. It's practical, direct, and actually helped me restructure my payroll taxes efficiently.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 3,
    name: "Emmanuel Ofori",
    role: "Freelance Developer",
    company: "TechAccra",
    content: "As a sole proprietor, I didn't know where to start. The 'Solo-preneur' chapter was a lifesaver. Highly recommended.",
    avatar: "https://picsum.photos/seed/emmanuel/100/100"
  }
];

export const SYSTEM_INSTRUCTION = `You are a helpful sales assistant for the book "${BOOK_DETAILS.title}". 
Your goal is to answer questions about the book to help the user decide if they should buy it.
Key Selling Points:
- Written specifically for Ghanaian SMEs.
- Covers VAT, CIT, and Pay-As-You-Earn (PAYE).
- Includes templates for record-keeping.
- Price: ${BOOK_DETAILS.price}.
- Money-back guarantee.
Tone: Professional, encouraging, concise.
If asked about price, mention the discount.
If asked to buy, direct them to click the big yellow button.`;