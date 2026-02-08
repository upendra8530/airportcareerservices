import { MessageSquare, BookOpen, UserCheck, Briefcase, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Career Counselling", desc: "One-on-one session to understand your goals, qualifications, and interests." },
  { icon: BookOpen, step: "02", title: "Training & Documentation", desc: "Industry-relevant training, resume building, and documentation support." },
  { icon: UserCheck, step: "03", title: "Interview Preparation", desc: "Mock interviews, grooming sessions, and personality development training." },
  { icon: Briefcase, step: "04", title: "Airport Job Placement", desc: "Direct placement assistance with our network of aviation recruiters and airports." },
];

const PlacementSupport = () => (
  <section id="placement" className="py-20 gradient-navy">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Placement Process</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mt-2 mb-4">
          Your Journey to an Airport Career
        </h2>
        <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
          Our structured 4-step placement process ensures you're fully prepared and supported from counselling to your first day at work.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((item, i) => (
          <div key={item.step} className="relative group">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 h-full">
              <span className="text-4xl font-heading font-extrabold text-secondary/30">{item.step}</span>
              <div className="rounded-lg bg-secondary/20 p-2.5 w-fit my-3">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-secondary/40">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl mx-auto bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-1">Industry Partnerships</h4>
            <p className="text-sm text-primary-foreground/60">
              We work with aviation recruiters and airport management companies across India. Our partnerships are built on trust and consistent delivery of qualified, job-ready candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlacementSupport;
