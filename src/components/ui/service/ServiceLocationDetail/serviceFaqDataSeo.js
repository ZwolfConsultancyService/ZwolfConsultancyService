// ─────────────────────────────────────────────────────────────────────────────
// serviceFaqData.js — FAQ Data for All 10 Services
// Location dynamically inject hota hai har question/answer mein
// Usage: getFaqData(serviceSlug, locationName)
// ─────────────────────────────────────────────────────────────────────────────

export const serviceFaqData = {

  // ─── 1. WEBSITE DEVELOPMENT ───────────────────────────────────────────────
  "website-development-company": [
    {
      question: (loc) =>
        `What website development services do you offer in ${loc}?`,
      answer: (loc) =>
        `We offer complete website development services in ${loc} including custom web design, e-commerce development, WordPress/CMS websites, landing pages, and web application development — all mobile-responsive and SEO-optimized.`,
    },
    {
      question: (loc) =>
        `How much does website development cost in ${loc}?`,
      answer: (loc) =>
        `Website development cost in ${loc} varies by project scope. Basic websites start from ₹8,000–₹15,000, business websites from ₹20,000–₹50,000, and e-commerce stores from ₹40,000 onwards. Contact us for a free custom quote.`,
    },
    {
      question: (loc) =>
        `How long does it take to build a website in ${loc}?`,
      answer: (loc) =>
        `A standard business website takes 7–14 days, e-commerce websites take 15–30 days, and complex web applications may take 30–60 days. We work with your timeline to deliver on time in ${loc}.`,
    },
    {
      question: (loc) =>
        `Do you provide website maintenance after delivery in ${loc}?`,
      answer: (loc) =>
        `Yes! We offer ongoing website maintenance, security updates, content updates, and technical support for all websites delivered in ${loc}. We ensure your website stays fast, secure, and up-to-date.`,
    },
    {
      question: (loc) =>
        `Why choose Zwolf Consultancy for website development in ${loc}?`,
      answer: (loc) =>
        `We are a trusted local website development company in ${loc} with 5+ years of experience, 200+ projects delivered, 24/7 support, and dedicated local account managers who understand your business needs.`,
    },
  ],

  // ─── 2. MOBILE APP DEVELOPMENT ────────────────────────────────────────────
  "mobile-app-development": [
    {
      question: (loc) =>
        `What mobile app development services do you offer in ${loc}?`,
      answer: (loc) =>
        `We offer end-to-end mobile app development services in ${loc} including native Android & iOS apps, cross-platform apps using Flutter and React Native, Progressive Web Apps (PWAs), API integration, and ongoing app maintenance.`,
    },
    {
      question: (loc) =>
        `How much does mobile app development cost in ${loc}?`,
      answer: (loc) =>
        `Mobile app development cost in ${loc} depends on complexity. Simple apps start from ₹30,000–₹60,000, medium-complexity apps range from ₹80,000–₹2,00,000, and feature-rich enterprise apps can go higher. Contact us for a free quote tailored to your requirements.`,
    },
    {
      question: (loc) =>
        `How long does it take to develop a mobile app in ${loc}?`,
      answer: (loc) =>
        `A basic mobile app typically takes 4–8 weeks in ${loc}. Medium-complexity apps take 8–16 weeks, and advanced apps with custom features may take 4–6 months. We provide a detailed timeline after understanding your project.`,
    },
    {
      question: (loc) =>
        `Do you develop apps for both Android and iOS in ${loc}?`,
      answer: (loc) =>
        `Yes! We develop apps for both Android and iOS platforms for businesses in ${loc}. We also offer cross-platform development using Flutter and React Native — one codebase for both platforms — which saves time and cost.`,
    },
    {
      question: (loc) =>
        `Do you provide support after app launch for businesses in ${loc}?`,
      answer: (loc) =>
        `Absolutely! We provide comprehensive post-launch support including bug fixes, OS updates, feature additions, and performance monitoring for all apps developed for ${loc} businesses. Your app is never left unsupported.`,
    },
  ],

  // ─── 3. GRAPHIC DESIGNING ─────────────────────────────────────────────────
  "graphic-designing": [
    {
      question: (loc) =>
        `What graphic design services do you offer in ${loc}?`,
      answer: (loc) =>
        `We offer complete graphic design services in ${loc} including logo design, brand identity, social media creatives, banners, brochures, flyers, packaging design, UI/UX design, infographics, and marketing materials for businesses of all sizes.`,
    },
    {
      question: (loc) =>
        `How much does logo and brand design cost in ${loc}?`,
      answer: (loc) =>
        `Logo design in ${loc} starts from ₹2,500 for a basic logo with 3 concepts, ₹5,000–₹10,000 for premium branding with brand guidelines, and custom pricing for full brand identity packages. We offer flexible packages to suit every budget.`,
    },
    {
      question: (loc) =>
        `How many revisions do you offer on design projects in ${loc}?`,
      answer: (loc) =>
        `We offer 3 free revisions on all design projects in ${loc} to ensure you are 100% satisfied with the final output. Additional revisions are available at a minimal cost. We work until you love your design.`,
    },
    {
      question: (loc) =>
        `What file formats will I receive after the design is complete in ${loc}?`,
      answer: (loc) =>
        `You will receive print-ready and digital-ready files in all major formats including AI, EPS, SVG (vector), PNG, JPG, and PDF. These formats are suitable for printing, website use, social media, and signage for your ${loc} business.`,
    },
    {
      question: (loc) =>
        `Do you design social media posts and creatives for businesses in ${loc}?`,
      answer: (loc) =>
        `Yes! We design branded social media posts, Instagram reels thumbnails, story templates, YouTube channel art, Facebook covers, and ad creatives for businesses in ${loc} — all sized and optimized for each platform's requirements.`,
    },
  ],

  // ─── 4. DIGITAL MARKETING ─────────────────────────────────────────────────
  "digital-marketing-agency": [
    {
      question: (loc) =>
        `What digital marketing services do you provide in ${loc}?`,
      answer: (loc) =>
        `We offer complete digital marketing services in ${loc} including SEO, Google Ads (PPC), Social Media Marketing, Content Marketing, Email Marketing, Influencer Marketing, and Online Reputation Management to grow your business online.`,
    },
    {
      question: (loc) =>
        `How long does it take to see results from digital marketing in ${loc}?`,
      answer: (loc) =>
        `SEO results typically take 3–6 months in ${loc}, while paid ads (Google/Facebook) can show results within 1–2 weeks. Social media growth takes 2–3 months for consistent traction. We provide monthly reports so you can track your growth transparently.`,
    },
    {
      question: (loc) =>
        `How much do digital marketing services cost in ${loc}?`,
      answer: (loc) =>
        `Digital marketing packages in ${loc} start from ₹10,000/month for basic SEO, ₹15,000/month for social media management, and custom packages for full-service campaigns. We offer flexible, transparent plans with no hidden fees.`,
    },
    {
      question: (loc) =>
        `Do you run Google Ads and Meta Ads campaigns for businesses in ${loc}?`,
      answer: (loc) =>
        `Yes! We manage Google Ads, Facebook Ads, Instagram Ads, and other paid campaigns for businesses in ${loc}. Our certified experts optimize your ad spend to maximize ROI and bring quality leads directly to your business.`,
    },
    {
      question: (loc) =>
        `Why is digital marketing important for businesses in ${loc}?`,
      answer: (loc) =>
        `With more customers searching and buying online in ${loc}, digital marketing helps your business get found first. It builds brand awareness, drives targeted traffic, and generates leads at a fraction of traditional advertising costs — with measurable results.`,
    },
  ],

  // ─── 5. BUSINESS CONSULTATION ─────────────────────────────────────────────
  "business-consultation": [
    {
      question: (loc) =>
        `What business consultation services do you offer in ${loc}?`,
      answer: (loc) =>
        `We offer comprehensive business consultation services in ${loc} including business strategy & planning, process optimization, market research, competitor analysis, growth & scaling strategies, and financial & operational advisory for startups and established businesses.`,
    },
    {
      question: (loc) =>
        `How can business consultation help my company in ${loc}?`,
      answer: (loc) =>
        `Our business consultants in ${loc} help identify operational challenges, uncover growth opportunities, optimize your processes, and implement strategies that lead to higher profitability. Whether you are a startup or an established business, we provide practical, actionable guidance.`,
    },
    {
      question: (loc) =>
        `How much does business consultation cost in ${loc}?`,
      answer: (loc) =>
        `Business consultation fees in ${loc} vary based on the scope and duration of engagement. We offer one-time consultation sessions starting from ₹3,000–₹10,000, and ongoing retainer packages for long-term advisory. Contact us for a customized quote.`,
    },
    {
      question: (loc) =>
        `Is business consultation suitable for small businesses in ${loc}?`,
      answer: (loc) =>
        `Absolutely! Our business consultation services in ${loc} are designed for businesses of all sizes — from solo entrepreneurs and small businesses to large enterprises. We tailor our approach to your specific stage, budget, and growth goals.`,
    },
    {
      question: (loc) =>
        `Do you offer market research services for businesses in ${loc}?`,
      answer: (loc) =>
        `Yes! We conduct detailed market research and competitor analysis for businesses in ${loc} to help you understand your target audience, identify market gaps, and build strategies that give you a competitive edge in your local market.`,
    },
  ],

  // ─── 6. CLOUD & HOSTING SERVICES ──────────────────────────────────────────
  "cloud-hosting-services": [
    {
      question: (loc) =>
        `What cloud and hosting services do you provide in ${loc}?`,
      answer: (loc) =>
        `We provide complete cloud and hosting solutions in ${loc} including shared & dedicated hosting, cloud infrastructure (AWS, Azure, Google Cloud), domain registration, website migration, server monitoring, regular backups, and disaster recovery planning.`,
    },
    {
      question: (loc) =>
        `Which cloud platforms do you work with for businesses in ${loc}?`,
      answer: (loc) =>
        `We work with all major cloud platforms for businesses in ${loc} including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. We recommend the best platform based on your business size, budget, and technical requirements.`,
    },
    {
      question: (loc) =>
        `How much do hosting services cost for businesses in ${loc}?`,
      answer: (loc) =>
        `Hosting packages for businesses in ${loc} start from ₹2,500/year for shared hosting, ₹8,000–₹20,000/year for VPS hosting, and custom pricing for dedicated or cloud-based solutions. We provide transparent pricing with no hidden renewal charges.`,
    },
    {
      question: (loc) =>
        `Do you offer website migration services in ${loc}?`,
      answer: (loc) =>
        `Yes! We handle complete website migration for businesses in ${loc} — from your old host to a new, faster server — with zero downtime, full data safety, and thorough testing post-migration. Your business stays live throughout the entire process.`,
    },
    {
      question: (loc) =>
        `Is my website data safe and backed up with your hosting in ${loc}?`,
      answer: (loc) =>
        `Yes! All hosting plans we manage for ${loc} businesses include regular automated backups, SSL certificates, firewall protection, and 24/7 server monitoring. We maintain a 99.9% uptime guarantee so your business is always online and secure.`,
    },
  ],

  // ─── 7. ACCOUNTING & FINANCIAL SERVICES ───────────────────────────────────
  "accounting-financial-services": [
    {
      question: (loc) =>
        `What accounting and financial services do you offer in ${loc}?`,
      answer: (loc) =>
        `We offer complete accounting and financial services in ${loc} including bookkeeping, GST filing, TDS filing, Income Tax returns, payroll management, financial statements, ROC compliance, budgeting, and financial planning for businesses and individuals.`,
    },
    {
      question: (loc) =>
        `Do you handle GST and income tax filing for businesses in ${loc}?`,
      answer: (loc) =>
        `Yes! We handle complete GST registration, monthly/quarterly GSTR filing, TDS returns, and annual Income Tax filing for businesses and individuals in ${loc}. We ensure 100% compliance, timely submission, and help you avoid penalties.`,
    },
    {
      question: (loc) =>
        `How much do accounting services cost for a small business in ${loc}?`,
      answer: (loc) =>
        `Accounting service packages in ${loc} start from ₹3,000–₹5,000/month for basic bookkeeping and GST filing. Comprehensive packages including payroll, TDS, and audit support are available from ₹8,000–₹20,000/month based on your business size.`,
    },
    {
      question: (loc) =>
        `Can you manage payroll for my business employees in ${loc}?`,
      answer: (loc) =>
        `Absolutely! We offer complete payroll management services for businesses in ${loc} including salary processing, PF/ESI calculations, payslip generation, and statutory compliance — ensuring your employees are paid accurately and on time every month.`,
    },
    {
      question: (loc) =>
        `Is my financial data kept confidential with your firm in ${loc}?`,
      answer: (loc) =>
        `Yes, 100%. All financial data shared with us by ${loc} businesses is handled with strict confidentiality, secure data storage, and professional ethics. We sign NDAs on request and follow best practices to ensure complete privacy of your financial records.`,
    },
  ],

  // ─── 8. LEAD GENERATION ───────────────────────────────────────────────────
  "lead-generation-services": [
    {
      question: (loc) =>
        `What lead generation services do you provide for businesses in ${loc}?`,
      answer: (loc) =>
        `We offer targeted lead generation services in ${loc} including SEO-driven organic leads, Google & Facebook paid ad campaigns, social media lead gen, email outreach, landing page optimization, and CRM integration to capture, nurture, and convert quality leads for your business.`,
    },
    {
      question: (loc) =>
        `How quickly can I start getting leads for my business in ${loc}?`,
      answer: (loc) =>
        `With paid ad campaigns, you can start receiving leads within 24–48 hours of campaign launch in ${loc}. Organic strategies like SEO and content marketing take 2–3 months to build momentum but deliver consistent, long-term leads with lower cost per acquisition.`,
    },
    {
      question: (loc) =>
        `How much do lead generation services cost in ${loc}?`,
      answer: (loc) =>
        `Lead generation packages in ${loc} start from ₹10,000/month for basic paid campaigns. Full-service packages including landing pages, CRM setup, and multi-channel campaigns range from ₹20,000–₹50,000/month. We focus on cost per lead to maximize your ROI.`,
    },
    {
      question: (loc) =>
        `What industries do you generate leads for in ${loc}?`,
      answer: (loc) =>
        `We generate leads for a wide range of industries in ${loc} including real estate, education, healthcare, financial services, e-commerce, manufacturing, hospitality, and professional services. Our strategies are customized to your specific industry and target audience.`,
    },
    {
      question: (loc) =>
        `How do you ensure lead quality for businesses in ${loc}?`,
      answer: (loc) =>
        `We focus on quality over quantity for all ${loc} lead generation campaigns. We use precise audience targeting, intent-based keywords, verified contact forms, and lead scoring to ensure the leads you receive are genuinely interested in your products or services — reducing your sales cycle significantly.`,
    },
  ],

  // ─── 9. SOFTWARE DEVELOPMENT ──────────────────────────────────────────────
  "software-development-company": [
    {
      question: (loc) =>
        `What software development services do you offer in ${loc}?`,
      answer: (loc) =>
        `We offer complete custom software development services in ${loc} including desktop & web applications, ERP & CRM systems, API development & integration, SaaS product development, automation tools, and ongoing software maintenance & upgrades tailored to your business needs.`,
    },
    {
      question: (loc) =>
        `How much does custom software development cost in ${loc}?`,
      answer: (loc) =>
        `Custom software development cost in ${loc} depends on complexity and features. Small business tools start from ₹50,000–₹1,50,000, mid-range applications range from ₹2,00,000–₹5,00,000, and enterprise-level software is priced based on detailed scoping. We provide free estimates after requirement gathering.`,
    },
    {
      question: (loc) =>
        `How long does software development take for businesses in ${loc}?`,
      answer: (loc) =>
        `Simple automation tools take 4–6 weeks in ${loc}. Mid-complexity software like CRMs or ERPs take 3–6 months. Large enterprise systems may take 6–12 months. We follow agile methodology with regular milestone deliveries so you can track progress throughout development.`,
    },
    {
      question: (loc) =>
        `Do you develop ERP and CRM software for businesses in ${loc}?`,
      answer: (loc) =>
        `Yes! We develop fully customized ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) software for businesses in ${loc}. These systems are built to your specific workflows, scalable as you grow, and far more effective than generic off-the-shelf solutions.`,
    },
    {
      question: (loc) =>
        `Do you provide maintenance and support after software delivery in ${loc}?`,
      answer: (loc) =>
        `Yes! We provide dedicated post-delivery maintenance, bug fixes, security updates, feature enhancements, and technical support for all software we develop for ${loc} businesses. Our support contracts ensure your software continues to perform as your business evolves.`,
    },
  ],

  // ─── 10. SEO SERVICES ─────────────────────────────────────────────────────
  "seo-services-company": [
    {
      question: (loc) =>
        `What SEO services do you offer for businesses in ${loc}?`,
      answer: (loc) =>
        `We provide complete SEO services in ${loc} including keyword research & strategy, on-page SEO optimization, technical SEO, high-quality link building, local SEO & Google Maps optimization, and monthly SEO audits & performance reporting — all designed to rank your website higher on Google.`,
    },
    {
      question: (loc) =>
        `How long does SEO take to show results for businesses in ${loc}?`,
      answer: (loc) =>
        `SEO in ${loc} typically shows noticeable improvement within 3–4 months, with strong, consistent rankings building over 6–12 months. The timeline depends on your industry competition and website's current state. We focus on sustainable, long-term results rather than quick, risky shortcuts.`,
    },
    {
      question: (loc) =>
        `What is local SEO and do you offer it for businesses in ${loc}?`,
      answer: (loc) =>
        `Local SEO helps your business appear in Google Maps and "near me" searches specifically in ${loc}. Yes, we offer full local SEO services including Google Business Profile (GMB) optimization, local citations, geo-targeted content, and review management to dominate local search results.`,
    },
    {
      question: (loc) =>
        `How much do SEO services cost for businesses in ${loc}?`,
      answer: (loc) =>
        `Our SEO packages in ${loc} start from ₹8,000/month for local SEO, ₹15,000–₹25,000/month for competitive business SEO, and custom pricing for national or e-commerce SEO campaigns. All packages come with transparent monthly reporting and no hidden fees.`,
    },
    {
      question: (loc) =>
        `Why does my business in ${loc} need SEO?`,
      answer: (loc) =>
        `Without SEO, your competitors in ${loc} rank higher on Google and get the customers who should be yours. Our SEO services ensure your business appears at the top when local customers search for your products or services — driving consistent organic traffic, building credibility, and generating leads without paying for every click.`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// getFaqData — Returns 5 FAQs for a given service + location
// ─────────────────────────────────────────────────────────────────────────────
export const getFaqData = (serviceSlug, locationName) => {
  const faqs = serviceFaqData[serviceSlug];
  if (!faqs || !locationName) return [];
  return faqs.map((faq) => ({
    question: faq.question(locationName),
    answer: faq.answer(locationName),
  }));
};