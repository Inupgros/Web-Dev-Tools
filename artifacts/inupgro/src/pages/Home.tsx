import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  MessageCircle, 
  Search, 
  Smartphone, 
  TrendingDown, 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck, 
  Star
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
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">I</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">Inupgro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#problems" className="hover:text-primary transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-primary transition-colors">Our Solution</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
          </div>
          <Button data-testid="nav-cta-demo" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 shadow-sm">
            Book Free Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/80"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-blue-100 mb-4">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                Trusted by 100+ Institutes in India
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Get a Professional Website for Your Institute <br/>
                <span className="text-secondary inline-block mt-4">Just ₹50,000 for 10 Years.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-blue-100/90 font-medium max-w-2xl mx-auto">
                No hidden costs | Domain + Hosting + Maintenance Included
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button data-testid="hero-cta-demo" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20">
                  Book Free Demo
                </Button>
                <Button data-testid="hero-cta-start" size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Get Started Now <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why Institutes Struggle Online</h2>
            <p className="text-lg text-gray-600">The digital landscape is changing. Traditional offline marketing isn't enough to attract modern students and parents.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "No/Outdated Website", desc: "Your website looks like it was built in 2010, driving parents away.", color: "text-red-500", bg: "bg-red-50" },
              { icon: TrendingDown, title: "No Online Enquiries", desc: "0 leads generated from the internet despite having a website.", color: "text-orange-500", bg: "bg-orange-50" },
              { icon: Users, title: "Offline Dependence", desc: "Relying purely on expensive newspaper ads and banners.", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Zap, title: "Losing to Competitors", desc: "Competitors with better online presence are stealing admissions.", color: "text-purple-500", bg: "bg-purple-50" }
            ].map((prob, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className={`w-14 h-14 ${prob.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <prob.icon className={`w-7 h-7 ${prob.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{prob.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">The Complete Website & Admissions Engine</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just build websites; we build admission generation machines. Inupgro provides an end-to-end digital solution designed specifically for educational institutes in India.
              </p>
              <ul className="space-y-5">
                {[
                  { title: "Designed for Admissions", text: "Optimized landing pages that convert visitors into leads." },
                  { title: "WhatsApp Enquiry Integration", text: "Instant connection with parents directly on your WhatsApp." },
                  { title: "100% Mobile Responsive", text: "Looks perfect on all devices, where 90% of parents browse." },
                  { title: "Lightning Fast Loading", text: "Zero drop-offs due to slow loading speeds." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2 w-full relative">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border-8 border-gray-100 bg-gray-50">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">New Enquiry</p>
                      <p className="font-bold text-gray-900">Parent from WhatsApp</p>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Stop Paying Yearly Renewal Fees</h2>
            <p className="text-lg text-blue-100">Compare our 10-year package with traditional agency models.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Old Method */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-300 mb-2">Traditional Agencies</h3>
              <div className="text-3xl font-bold mb-6 text-gray-400">₹1.5L<span className="text-lg font-normal"> - ₹2.5L</span></div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><span>❌</span> Recurring yearly costs</li>
                <li className="flex items-center gap-3"><span>❌</span> Hidden maintenance fees</li>
                <li className="flex items-center gap-3"><span>❌</span> Slow support</li>
                <li className="flex items-center gap-3"><span>❌</span> Not optimized for admissions</li>
              </ul>
            </div>

            {/* Inupgro */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform md:-translate-y-4 border-2 border-secondary relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                BEST VALUE
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Inupgro Plan</h3>
              <div className="text-5xl font-extrabold mb-2 text-primary">₹50,000</div>
              <div className="text-sm font-bold text-green-600 mb-8 uppercase tracking-wider">For 10 Full Years</div>
              <ul className="space-y-4 text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> One-time payment only</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> Free domain & hosting included</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> Premium VIP support</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> WhatsApp integration</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary" /> Admission-focused design</li>
              </ul>
              <Button data-testid="pricing-cta" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                Choose This Plan
              </Button>
            </div>

            {/* Basic Model */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-300 mb-2">Basic Freelancers</h3>
              <div className="text-3xl font-bold mb-6 text-gray-400">₹15,000<span className="text-lg font-normal">/yr</span></div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><span>❌</span> Yearly domain/hosting fees</li>
                <li className="flex items-center gap-3"><span>❌</span> Unreliable availability</li>
                <li className="flex items-center gap-3"><span>❌</span> Generic templates</li>
                <li className="flex items-center gap-3"><span>❌</span> No SEO setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results / ROI */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">The ROI is Undeniable</h2>
          <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto border-2 border-primary/20 bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
            "Even <span className="font-extrabold text-primary">5–10 new admissions</span> generated from the website will result in <span className="font-extrabold text-primary">full cost recovery</span> for the entire 10 years."
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Everything You Need. Nothing You Don't.</h2>
            <p className="text-lg text-gray-600">The complete package to establish authority and drive enrolments.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium Design", desc: "Custom designed to reflect your institute's brand.", icon: Star },
              { title: "10 Yrs Domain", desc: ".com or .in domain registered for a full decade.", icon: Globe },
              { title: "10 Yrs Hosting", desc: "Ultra-fast cloud hosting with 99.9% uptime.", icon: Zap },
              { title: "Free SSL", desc: "Bank-level security for parent trust.", icon: ShieldCheck },
              { title: "WhatsApp Int.", desc: "Direct chat button for instant parent queries.", icon: MessageCircle },
              { title: "Enquiry Forms", desc: "Custom forms that email you leads instantly.", icon: Users },
              { title: "Basic SEO", desc: "Rank higher on Google when parents search.", icon: Search },
              { title: "Mobile Ready", desc: "Flawless experience on smartphones & tablets.", icon: Smartphone }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-secondary/50 transition-colors">
                <feat.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h4>
                <p className="text-sm text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Launch in 4 Simple Steps</h2>
            <p className="text-lg text-gray-600">We handle the technical heavy lifting so you can focus on education.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>
            {[
              { num: "1", title: "Share Details", desc: "Send us your logo, photos, and basic info via WhatsApp." },
              { num: "2", title: "We Design", desc: "Our team builds a beautiful, fast website for you." },
              { num: "3", title: "You Review", desc: "Check the design and suggest any changes you need." },
              { num: "4", title: "Go Live", desc: "Your website is live for the world to see for 10 years!" }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">Trusted by Educators</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", inst: "Sunshine Public School", text: "Inupgro completely transformed our online presence. We used to get 1-2 enquiries a month online. Now we get that daily via WhatsApp. Best investment for our school." },
              { name: "Priya Sharma", inst: "Excel Coaching Institute", text: "Paying once for 10 years was what sold me. No more chasing freelancers every year for renewal. The website is incredibly fast and looks premium." },
              { name: "Dr. A. Verma", inst: "Global Degree College", text: "The design is very professional and perfectly suited for an educational institution. The support team is highly responsive. Highly recommended." }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">Do I really need to pay only once?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Yes! The ₹50,000 fee covers your website design, domain registration, and hosting for a full 10 years. There are no hidden yearly maintenance or renewal fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">Can I use my existing domain name?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Absolutely. If you already own a domain name (like yourschool.com), we can map our newly designed website to it seamlessly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">Do you provide support after the website goes live?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Yes. We provide technical support to ensure your website stays up and running smoothly. Minor content updates (like changing a phone number or adding a notice) are handled promptly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">Is SEO included in the package?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                We include foundational On-Page SEO (meta tags, fast loading speeds, mobile responsiveness) to ensure Google can properly index and rank your site for local searches.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Start Your Digital Journey Today</h2>
          <p className="text-xl text-blue-100 mb-10">Limited onboarding slots available this month. Don't let your competitors capture your admissions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button data-testid="final-cta-demo" size="lg" className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
              Book Free Demo
            </Button>
            <Button data-testid="final-cta-call" size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Call Now: +91 82096 47142
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg leading-none">I</span>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">Inupgro</span>
              </div>
              <p className="mb-6">Empowering Indian educational institutes with powerful, admission-focused digital presence.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>Email: hello@inupgro.com</li>
                <li>Phone: +91 82096 47142</li>
                <li>Address: Jaipur, Rajasthan</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Links</h4>
              <ul className="space-y-3">
                <li><a href="#problems" className="hover:text-white transition-colors">The Problem</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">Our Solution</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Inupgro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/918209647142" 
        target="_blank" 
        rel="noopener noreferrer"
        data-testid="fab-whatsapp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors hover:scale-110 duration-300"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
