import { Plane, Users, Headphones, Package, Settings, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const careers = [
  { icon: Users, title: "Airport Ground Staff", desc: "Assist passengers with check-in, boarding, and airport navigation. A dynamic role at the heart of airport operations.", salary: "₹15,000 – ₹30,000/mo" },
  { icon: Plane, title: "Cabin Crew", desc: "Ensure passenger safety and comfort onboard flights. Requires excellent communication and grooming standards.", salary: "₹25,000 – ₹60,000/mo" },
  { icon: Headphones, title: "Customer Service Executive", desc: "Handle passenger queries, complaints, and provide information at airport service desks.", salary: "₹12,000 – ₹25,000/mo" },
  { icon: Package, title: "Cargo Handling", desc: "Manage freight operations including loading, unloading, and documentation of air cargo.", salary: "₹12,000 – ₹22,000/mo" },
  { icon: Settings, title: "Airport Operations", desc: "Coordinate day-to-day airport activities including ramp handling, flight scheduling, and resource management.", salary: "₹18,000 – ₹35,000/mo" },
  { icon: UserCheck, title: "Airline Support Staff", desc: "Provide backend support in ticketing, reservations, and airline administrative functions.", salary: "₹12,000 – ₹20,000/mo" },
];

const CareerPaths = () => (
  <section id="careers" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Career Paths</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Explore Airport Career Opportunities
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover rewarding career paths in India's fast-growing aviation sector. We guide you to the role that matches your skills and aspirations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {careers.map((career) => (
          <div key={career.title} className="group bg-card rounded-xl border border-border p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
            <div className="rounded-lg bg-secondary/10 p-3 w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
              <career.icon className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{career.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{career.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">{career.salary}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#contact">
          <Button variant="default" size="lg" className="gap-2">
            Get Career Guidance <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CareerPaths;
