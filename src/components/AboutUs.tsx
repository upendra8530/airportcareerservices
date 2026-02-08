import { Target, Users, Award } from "lucide-react";

const AboutUs = () => (
  <section id="about" className="py-20 gradient-sky">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Guiding Students from Career Planning to Airport Job Placement
        </h2>
        <p className="text-muted-foreground text-lg">
          Airport Career Services is a trusted career guidance and placement consultancy dedicated to helping students build a clear career path in the aviation and airport industry. With years of industry knowledge, we bridge the gap between aspiring candidates and airport job opportunities across India.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Target, title: "Our Mission", desc: "To provide ethical, transparent, and result-oriented career guidance that empowers every student to achieve their airport career dream." },
          { icon: Users, title: "Student-Centric", desc: "Every student gets a personalized career roadmap, dedicated mentorship, and hands-on training to become industry-ready." },
          { icon: Award, title: "Industry Expertise", desc: "Our team comprises aviation industry veterans who understand what airports and airlines look for in candidates." },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
