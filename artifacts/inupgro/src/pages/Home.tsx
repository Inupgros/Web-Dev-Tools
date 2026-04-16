import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  MessageCircle,
  TrendingUp,
  Users,
  Zap,
  Star,
  Newspaper,
  Target,
  BarChart3,
  BookOpen,
  UserPlus,
  FileCheck,
  GraduationCap,
  Wallet,
  ArrowRight,
  Phone,
  MapPin,
  Compass,
  Map,
  Lightbulb,
  Building2,
  ShieldCheck,
  Clock,
  Gift
} from "lucide-react";
import careerHomeSrc from "@assets/screenshots/dev-frontend-inupgro-career-pathway_vercel_app.png";
import careerExploreSrc from "@assets/screenshots/dev-frontend-inupgro-career-pathway_vercel_app_public-explore.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative font-sans">
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">I</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">INUPGRO</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#why" className="hover:text-primary transition-colors">Why Inupgro</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#career" className="hover:text-primary transition-colors">Career Pathway</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
          </div>
          <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
            <Button data-testid="nav-cta-contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 shadow-sm">
              Contact Us
            </Button>
          </a>
        </div>
      </nav>

      <section className="relative pt-24 pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/80"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-blue-100 mb-4">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                Building an Educational Ecosystem
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Empower Your School with{" "}
                <span className="text-secondary inline-block mt-2">INUPGRO</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-blue-100/90 font-medium max-w-2xl mx-auto">
                Effortlessly manage your school, college or coaching centre with a single, powerful platform.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="hero-cta-join" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20">
                    Get Started Today
                  </Button>
                </a>
                <a href="#pricing">
                  <Button data-testid="hero-cta-learn" size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    View Plans <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="why" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why INUPGRO?</h2>
            <p className="text-lg text-gray-600">Education shapes futures and inspires young minds, but managing a school is challenging. Inupgro makes it smarter and more efficient, giving you a trusted partner to simplify management and enhance learning.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, title: "Empowering Education", desc: "Enabling meaningful learning, so educators can focus on student growth.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: TrendingUp, title: "Boosting Presence", desc: "Strengthening your school, college or coaching centre's recognition and community ties.", color: "text-green-600", bg: "bg-green-50" },
              { icon: Users, title: "Fostering Connections", desc: "Uniting teachers, students, and parents for shared learning success.", color: "text-purple-600", bg: "bg-purple-50" }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } } }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className={`w-16 h-16 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-12">
            <p className="text-lg font-semibold text-primary italic">Inupgro -- Transforming Education, Empowering Schools.</p>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Offerings</h2>
            <p className="text-lg text-blue-100">Three powerful solutions designed to transform your school, college or coaching centre's digital presence and management.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-secondary relative text-gray-900 md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                CORE OFFERING
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Website Development</h3>
              <p className="text-sm text-gray-500 mb-6">Professional website for your school, college or coaching centre</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold text-primary">₹50,000</span>
              </div>
              <p className="text-sm font-semibold text-green-600 mb-8 uppercase tracking-wider">One-Time Payment for 10 Years</p>
              <ul className="space-y-3 text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Custom website design</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Domain for 10 years</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Hosting for 10 years</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Free SSL certificate</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> WhatsApp integration</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Enquiry forms</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Basic SEO setup</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Maintenance & support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Mobile responsive</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                  <Gift className="w-4 h-4" /> Website contract unlocks Career Pathway Tool + 1 Year Free Platform Access
                </p>
              </div>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20Website%20Development" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-website-cta" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1 } } }} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                FREE WITH WEBSITE
              </div>
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Career Pathway Tool</h3>
              <p className="text-sm text-blue-200 mb-6">AI-powered career guidance for students</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold text-white">FREE</span>
              </div>
              <p className="text-sm text-blue-200 mb-8">For schools & students with website contract</p>
              <ul className="space-y-3 text-blue-100 font-medium mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> 600+ career paths</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> Personalized roadmaps</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> College recommendations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> Market trends & salary data</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> Expert pro-tips</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> 24/7 AI support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" /> Showcase your school, college or coaching centre</li>
              </ul>
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4 mb-6">
                <p className="text-sm font-semibold text-purple-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Requires website contract with Inupgro (website is mandatory)
                </p>
              </div>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Career%20Pathway%20Tool" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-career-cta" variant="outline" className="w-full h-12 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> LAUNCHING SOON
              </div>
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-amber-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">9 Platform Features</h3>
              <p className="text-sm text-blue-200 mb-6">Complete school management ecosystem</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-extrabold text-white">1 Year FREE</span>
              </div>
              <p className="text-sm text-blue-200 mb-8">For schools, colleges & coaching centres with website contract</p>
              <ul className="space-y-3 text-blue-100 font-medium mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Enhanced School Visibility</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Educational School News</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Targeted Marketing</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Track Performance</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Knowledge to Income</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> One-Click Onboarding</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Admission Results</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Scholarship Framework</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Smart Fee Ecosystem</li>
              </ul>
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6">
                <p className="text-sm font-semibold text-amber-200 flex items-center gap-2">
                  <Gift className="w-4 h-4" /> Free for 1 year with website contract, then subscription pricing
                </p>
              </div>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Platform%20Features" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-features-cta" variant="outline" className="w-full h-12 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Join Waitlist <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-12">
            <p className="text-blue-100 text-lg font-medium">Sign up for website development and unlock <span className="text-secondary font-bold">all three offerings</span> -- the smartest investment for your school, college or coaching centre.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">The Complete Package</h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto border-2 border-primary/20 bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
            Get a <span className="font-extrabold text-primary">₹50,000 website</span> + <span className="font-extrabold text-primary">Free Career Pathway</span> + <span className="font-extrabold text-primary">1 Year Free Platform</span> -- all with a single contract.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">From sign-up to a complete digital ecosystem in 4 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>
            {[
              { num: "1", title: "Contact Us", desc: "Reach out via WhatsApp or call. Share your school, college or coaching centre details and requirements." },
              { num: "2", title: "Website Built", desc: "We design and develop a professional, admission-focused website for you." },
              { num: "3", title: "Go Live", desc: "Your website goes live and Career Pathway Tool is activated. Platform features available at launch." },
              { num: "4", title: "Grow", desc: "Attract more students, manage admissions, and grow your school, college or coaching centre digitally." }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } } }} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
              <Compass className="w-4 h-4" />
              FREE with Website Contract
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Career Pathway Tool</h2>
            <p className="text-lg text-gray-600">Explore 600+ career paths with personalized step-by-step roadmaps, college recommendations, and market trends. Free for schools and students who partner with Inupgro.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "600+", label: "Career Paths" },
                  { value: "15k+", label: "Colleges" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24/7", label: "AI Support" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-5">
                {[
                  { icon: Map, title: "Step-by-Step Roadmaps", desc: "Clear sequence of skills, courses, and milestones to reach any dream career." },
                  { icon: Lightbulb, title: "Expert Pro-Tips", desc: "Insider advice from top professionals who have paved the way." },
                  { icon: Building2, title: "College Matching", desc: "Find the right college based on career goals and academic profile." },
                  { icon: TrendingUp, title: "Market Trends", desc: "Real-time data on salary growth and job demand across India." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-purple-800 mb-1">How to Get Access?</p>
                <p className="text-sm text-purple-700">Contract with Inupgro for website development (₹50,000) and get the Career Pathway Tool absolutely free. Your school, college or coaching centre will also be showcased on the platform to attract students.</p>
              </div>

              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Career%20Pathway%20Tool" target="_blank" rel="noopener noreferrer">
                <Button data-testid="career-cta-explore" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg shadow-purple-200 mt-4">
                  Get Career Pathway Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <img src={careerHomeSrc} alt="Inupgro Career Pathway - Your Future, Mapped Out" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-3/4 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white hidden lg:block">
                <img src={careerExploreSrc} alt="Explore 600+ Career Paths on Inupgro" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mt-16 lg:mt-24">
            {[
              { title: "For Students", desc: "Discover your ideal career path from Class 6 onwards. Get personalized roadmaps, college recommendations, and salary insights.", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "For Schools", desc: "Offer world-class career guidance to your students. Your school, college or coaching centre gets showcased on the Inupgro platform to attract enrollments.", icon: Building2, color: "text-green-600", bg: "bg-green-50" },
              { title: "For Parents", desc: "Help your child make informed career decisions backed by data, expert advice, and real market trends.", icon: Users, color: "text-purple-600", bg: "bg-purple-50" }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 ${card.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              Launching Soon -- Free for 1 Year with Website Contract
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">9 Cutting Edge Platform Features</h2>
            <p className="text-lg text-gray-600">A complete school management ecosystem. All 9 features will be free for 1 year for schools, colleges and coaching centres who contract with Inupgro for website development.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Globe, title: "Enhanced School Visibility", desc: "Boost your online presence, making it easier for students and parents to connect.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Newspaper, title: "Educational School News", desc: "Engage your community with updates, achievements, and important announcements.", color: "text-indigo-600", bg: "bg-indigo-50" },
              { icon: Target, title: "Targeted Marketing", desc: "Use AI insights to attract the right students and optimize enrollments efficiently.", color: "text-rose-600", bg: "bg-rose-50" },
              { icon: BarChart3, title: "Track School Performance", desc: "Analyze student and teacher performance to improve curriculum and teaching methods.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: BookOpen, title: "Turn Knowledge into Income", desc: "Earn ₹2,000 per topic shared while enhancing education quality across the platform.", color: "text-amber-600", bg: "bg-amber-50" },
              { icon: UserPlus, title: "One-Click Onboarding", desc: "Simplify school and teacher registration with an easy, time-saving process.", color: "text-cyan-600", bg: "bg-cyan-50" },
              { icon: FileCheck, title: "Dynamic Admission Result Publishing", desc: "Automate result publishing for faster, hassle-free admissions.", color: "text-violet-600", bg: "bg-violet-50" },
              { icon: GraduationCap, title: "Comprehensive Scholarship Framework", desc: "Streamline applications and distribution for easy access to financial aid.", color: "text-teal-600", bg: "bg-teal-50" },
              { icon: Wallet, title: "Smart Fee Ecosystem", desc: "Automate invoicing, track payments, and improve financial organization.", color: "text-orange-600", bg: "bg-orange-50" }
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary/50 hover:shadow-md transition-all group relative">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                </div>
                <div className={`w-14 h-14 ${feat.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feat.icon className={`w-7 h-7 ${feat.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">Trusted by Educators</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", inst: "Sunshine Public School, Jaipur", text: "Inupgro built us a stunning website and the Career Pathway tool is a game-changer for our students. Parents love that we offer career guidance as part of the school experience." },
              { name: "Priya Sharma", inst: "Excel Coaching Institute", text: "Paying ₹50,000 once for 10 years was the best investment. Plus getting the Career Pathway tool free and upcoming platform features -- it's incredible value." },
              { name: "Dr. A. Verma", inst: "Global Degree College", text: "The website drives real enquiries via WhatsApp daily. We can't wait for the 9 platform features to launch -- the scholarship framework alone will save us hours." }
            ].map((test, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="text-secondary text-4xl font-serif absolute top-6 left-6 opacity-20">"</div>
                <p className="text-gray-700 italic mb-8 relative z-10 pt-4">"{test.text}"</p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{test.name}</div>
                    <div className="text-sm text-gray-500">{test.inst}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-1" className="text-lg font-semibold hover:no-underline">What does the ₹50,000 website package include?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                The ₹50,000 one-time payment covers custom website design, domain registration, hosting, SSL certificate, WhatsApp integration, enquiry forms, basic SEO setup, and full maintenance and support -- all for 10 years. No hidden or recurring fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-2" className="text-lg font-semibold hover:no-underline">How do I get the Career Pathway Tool for free?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                The Career Pathway Tool is free for schools and students, but requires a website development contract with Inupgro. Once you sign up for the website (₹50,000), your school, college or coaching centre gets access to the Career Pathway platform at no additional cost. Your school, college or coaching centre is also showcased on the platform. Website is mandatory to join.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-3" className="text-lg font-semibold hover:no-underline">What are the 9 platform features and when do they launch?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                The 9 features include Enhanced School Visibility, Educational News, Targeted Marketing, Performance Tracking, Knowledge-to-Income, One-Click Onboarding, Admission Result Publishing, Scholarship Framework, and Smart Fee Ecosystem. They are launching soon and will be free for 1 year for all schools, colleges and coaching centres who have a website contract with Inupgro.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-4" className="text-lg font-semibold hover:no-underline">Can I use my existing domain name?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Absolutely. If you already own a domain name (like yourschool.com), we can map our newly designed website to it seamlessly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-5" className="text-lg font-semibold hover:no-underline">Do you provide support after the website goes live?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Yes. We provide ongoing technical support to ensure your website stays up and running smoothly. Minor content updates (like changing a phone number or adding a notice) are handled promptly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build a Smarter Future for Education -- Together!</h2>
            <p className="text-xl text-blue-100 mb-4">Transform your school's digital presence with a professional website, free career guidance for students, and a complete management ecosystem.</p>
            <p className="text-lg text-secondary font-bold mb-10">₹50,000 one-time investment unlocks it all.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
                <Button data-testid="final-cta-join" size="lg" className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                  Join INUPGRO Today
                </Button>
              </a>
              <a href="tel:+918441879640">
                <Button data-testid="final-cta-call" size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Phone className="mr-2 w-5 h-5" /> Call: +91 84418 79640
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg leading-none">I</span>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">INUPGRO</span>
              </div>
              <p className="mb-6">Transforming Education, Empowering Schools. Building an educational ecosystem for smarter, more efficient school management.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> +91 84418 79640</li>
                <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-secondary" /> www.inupgro.com</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> Jhalana Gram, Malviya Nagar, Jaipur (Raj)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#why" className="hover:text-white transition-colors">Why Inupgro</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#career" className="hover:text-white transition-colors">Career Pathway</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Platform Features</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} INUPGRO. All rights reserved.
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918441879640"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="fab-whatsapp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors hover:scale-110 duration-300"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
