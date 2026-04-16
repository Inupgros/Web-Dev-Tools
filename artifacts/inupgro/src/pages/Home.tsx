import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  MessageCircle,
  Search,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  ShieldCheck,
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
  Mail,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
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
                Effortlessly manage your institution with a single, powerful platform.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="hero-cta-join" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20">
                    Join INUPGRO Today
                  </Button>
                </a>
                <a href="#features">
                  <Button data-testid="hero-cta-learn" size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    Explore Features <ChevronRight className="ml-2 w-5 h-5" />
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
              {
                icon: GraduationCap,
                title: "Empowering Education",
                desc: "Enabling meaningful learning, so educators can focus on student growth.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: TrendingUp,
                title: "Boosting Presence",
                desc: "Strengthening your institution's recognition and community ties.",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: Users,
                title: "Fostering Connections",
                desc: "Uniting teachers, students, and parents for shared learning success.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              }
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

      <section id="features" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Cutting Edge Features to Transform Your School</h2>
            <p className="text-lg text-gray-600">Everything you need to manage, grow, and elevate your educational institution.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Enhanced School Visibility",
                desc: "Boost your online presence, making it easier for students and parents to connect.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Newspaper,
                title: "Educational School News",
                desc: "Engage your community with updates, achievements, and important announcements.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              },
              {
                icon: Target,
                title: "Targeted Marketing",
                desc: "Use AI insights to attract the right students and optimize enrollments efficiently.",
                color: "text-rose-600",
                bg: "bg-rose-50"
              },
              {
                icon: BarChart3,
                title: "Track School Performance",
                desc: "Analyze student and teacher performance to improve curriculum and teaching methods.",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              {
                icon: BookOpen,
                title: "Turn Knowledge into Income",
                desc: "Earn ₹2,000 per topic shared while enhancing education quality across the platform.",
                color: "text-amber-600",
                bg: "bg-amber-50"
              },
              {
                icon: UserPlus,
                title: "One-Click Onboarding",
                desc: "Simplify school and teacher registration with an easy, time-saving process.",
                color: "text-cyan-600",
                bg: "bg-cyan-50"
              },
              {
                icon: FileCheck,
                title: "Dynamic Admission Result Publishing",
                desc: "Automate result publishing for faster, hassle-free admissions.",
                color: "text-violet-600",
                bg: "bg-violet-50"
              },
              {
                icon: GraduationCap,
                title: "Comprehensive Scholarship Framework",
                desc: "Streamline applications and distribution for easy access to financial aid.",
                color: "text-teal-600",
                bg: "bg-teal-50"
              },
              {
                icon: Wallet,
                title: "Smart Fee Ecosystem",
                desc: "Automate invoicing, track payments, and improve financial organization.",
                color: "text-orange-600",
                bg: "bg-orange-50"
              }
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary/50 hover:shadow-md transition-all group">
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

      <section id="pricing" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Payment Plans</h2>
            <p className="text-lg text-blue-100">Choose a plan that works for your institute. Upgrade, downgrade, or cancel at any time -- no hidden fees.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-secondary relative text-gray-900">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Yearly Plan</h3>
              <p className="text-sm text-gray-500 mb-6">Best value for long-term growth</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold text-primary">₹6,000</span>
                <span className="text-lg text-gray-500 font-medium">+ GST</span>
              </div>
              <p className="text-sm text-gray-400 mb-8 line-through">₹24,000 + GST after launch offer ends</p>
              <ul className="space-y-4 text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Full platform access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> All 9 cutting-edge features</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Priority support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Cancel anytime</li>
              </ul>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Yearly%20Plan" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-yearly-cta" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }} className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Half-Yearly Plan</h3>
              <p className="text-sm text-blue-200 mb-6">Flexible shorter commitment</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-extrabold text-white">₹18,000</span>
                <span className="text-lg text-blue-200 font-medium">+ GST</span>
              </div>
              <p className="text-sm text-blue-300/60 mb-8">Billed every 6 months</p>
              <ul className="space-y-4 text-blue-100 font-medium mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> Full platform access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> All 9 cutting-edge features</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> Standard support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> Cancel anytime</li>
              </ul>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Half-Yearly%20Plan" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-half-yearly-cta" variant="outline" className="w-full h-12 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Empower Your School with Smart Solutions</h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto border-2 border-primary/20 bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
            Empower your school with smart, efficient solutions for <span className="font-extrabold text-primary">seamless education</span>.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-lg text-gray-600">We handle the complexity so you can focus on education.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>
            {[
              { num: "1", title: "Register", desc: "One-click school registration with an easy, time-saving process." },
              { num: "2", title: "Set Up", desc: "Configure your school profile, add teachers, and customize settings." },
              { num: "3", title: "Go Live", desc: "Your school ecosystem is live and ready for students and parents." },
              { num: "4", title: "Grow", desc: "Track performance, manage admissions, and grow your institution." }
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

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">Trusted by Educators</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", inst: "Sunshine Public School, Jaipur", text: "Inupgro completely transformed how we manage our school. The admission result publishing and fee ecosystem saved us countless hours every month." },
              { name: "Priya Sharma", inst: "Excel Coaching Institute", text: "The targeted marketing feature helped us reach the right students. Our enrollments increased significantly within the first semester of using Inupgro." },
              { name: "Dr. A. Verma", inst: "Global Degree College", text: "The performance tracking and scholarship framework are game-changers. We finally have a unified platform for everything. Highly recommended." }
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

      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-1" className="text-lg font-semibold hover:no-underline">What plans are available?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                We offer a Yearly Plan at ₹6,000 + GST and a Half-Yearly Plan at ₹18,000 + GST. You can upgrade, downgrade, or cancel at any time with no hidden fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-2" className="text-lg font-semibold hover:no-underline">How does the Knowledge-to-Income feature work?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Teachers and educators can share their expertise by publishing topic content on the platform. You earn ₹2,000 per topic shared, creating an additional income stream while enhancing education quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-3" className="text-lg font-semibold hover:no-underline">Is onboarding difficult for my school?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Not at all. Our one-click onboarding process makes school and teacher registration simple and time-saving. You can get started within minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-4" className="text-lg font-semibold hover:no-underline">Can I cancel my subscription?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Yes. You can upgrade, downgrade, or cancel your plan at any time. There are no hidden fees or long-term lock-in contracts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger data-testid="faq-trigger-5" className="text-lg font-semibold hover:no-underline">Do you provide support?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Yes. All plans include support to ensure your platform runs smoothly. The Yearly Plan comes with priority support for faster resolution.
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
            <p className="text-xl text-blue-100 mb-10">Transform your school's operational ecosystem, elevate the learning experience, and stay ahead in the education sector with INUPGRO.</p>
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
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
