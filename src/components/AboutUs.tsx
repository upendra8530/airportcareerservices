import { Compass, Heart, Route, Users } from "lucide-react";

const focusPoints = [
  { icon: Compass, text: "Clear career guidance" },
  { icon: Heart, text: "Honest counselling" },
  { icon: Route, text: "Structured career path" },
  { icon: Users, text: "Dedicated placement assistance" },
];

const AboutUs = () => (
  <section id="about" className="py-20 gradient-sky">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Who We Are
          </h2>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Airport Career Services is a dedicated aviation career guidance and placement consultancy.
            We guide students step-by-step — from career selection to training and final airport job placement.
          </p>

          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Our focus is on:</h3>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {focusPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{point.text}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground italic border-l-4 border-secondary pl-4">
            We believe every student deserves the right direction before choosing an aviation career.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
