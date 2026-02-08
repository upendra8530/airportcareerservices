import { Shield, Eye, Heart, Headphones, Award, Clock } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experienced Career Guidance", desc: "Decade of experience placing students in airport and aviation roles across India." },
  { icon: Eye, title: "Transparent Process", desc: "No hidden charges, no fake promises — just honest, clear career guidance." },
  { icon: Heart, title: "Student-Focused Approach", desc: "We treat every student as an individual and tailor guidance to their strengths." },
  { icon: Headphones, title: "Dedicated Placement Support", desc: "A dedicated placement coordinator stays with you from enrolment to job offer." },
  { icon: Shield, title: "Trusted by 5000+ Students", desc: "Our track record speaks for itself — thousands of successful placements." },
  { icon: Clock, title: "Ongoing Career Support", desc: "Even after placement, we provide career growth guidance and upskilling opportunities." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 gradient-sky">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          India's Trusted Airport Career Consultancy
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((item) => (
          <div key={item.title} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
            <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
