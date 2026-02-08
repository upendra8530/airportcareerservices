import { Compass, GraduationCap, Briefcase, Mic } from "lucide-react";

const highlights = [
  { icon: Compass, title: "Career Path Guidance", desc: "Personalized career roadmap for aviation industry" },
  { icon: GraduationCap, title: "Airport Job Training", desc: "Industry-relevant training programs" },
  { icon: Briefcase, title: "Placement Support", desc: "Direct placement assistance at major airports" },
  { icon: Mic, title: "Interview Preparation", desc: "Mock interviews with aviation HR experts" },
];

const Highlights = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item) => (
          <div key={item.title} className="flex items-start gap-4 group">
            <div className="rounded-xl bg-secondary/10 p-3 group-hover:bg-secondary/20 transition-colors shrink-0">
              <item.icon className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
