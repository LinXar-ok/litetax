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
    question: "Do I have to live in Georgia to benefit from the 1% tax rate?",
    answer: "No. The 'Small Business Status' (1% tax) applies to Georgian tax residents and non-residents alike. You do not need to live in Georgia to maintain your company or the tax status. However, to be a tax resident of Georgia (and stop paying tax elsewhere), you generally need to spend 183 days there, OR use our 'High Net Worth' program."
  },
  {
    question: "Is the 1% tax rate guaranteed forever?",
    answer: "The 1% rate is codified in the Tax Code of Georgia (Article 88). It is not a temporary promotion. While no tax law is 'forever', Georgia has a constitutional ban on raising taxes without a referendum, making it one of the most stable fiscal environments in the world."
  },
  {
    question: "What if my turnover exceeds 500,000 GEL (~€170,000)?",
    answer: "If you exceed the 500,000 GEL limit in a calendar year, you will be taxed at 3% on the excess amount for that year. You do not lose the status immediately. If you exceed it for 2 consecutive years, you may transition to the standard 20% regime, but we can help you restructure before that happens."
  },
  {
    question: "Can I open a bank account remotely?",
    answer: "Generally, no. Top-tier Georgian banks (TBC, Bank of Georgia) require a physical presence for the initial opening to comply with KYC/AML laws. Our 1% Foundation package includes full support for your banking visit (1-2 days required in Tbilisi)."
  },
  {
    question: "Does this work for US Citizens?",
    answer: "Yes, but US citizens are taxed on worldwide income. You can use the Foreign Earned Income Exclusion (FEIE) to exclude ~$120k of income if you meet the physical presence test. The Georgian 1% tax is a valid foreign tax credit. We recommend speaking with a US tax specialist in addition to our services."
  },
  {
    question: "What activities are NOT eligible for 1% tax?",
    answer: "Consulting (in some specific definitions), financial services, gambling, and medical services are typically excluded. Software development, marketing, design, e-commerce (goods), and most digital services are fully eligible. Our Strategic Audit verifies your specific eligibility."
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