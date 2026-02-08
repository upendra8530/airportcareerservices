import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-airport.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Airport professionals walking in terminal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/30 px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground/90">Admissions Open 2025–26</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Your Career Path to{" "}
            <span className="text-secondary">Airport Jobs</span>{" "}
            Starts Here
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/75 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Career Guidance, Training & 100% Placement Assistance for Airport Careers. Join India's trusted aviation career consultancy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact">
              <Button variant="hero" size="lg" className="text-base gap-2 px-8">
                Apply Now <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+919876543210">
              <Button variant="hero-outline" size="lg" className="text-base gap-2 px-8">
                <Phone className="h-5 w-5" /> Book Free Counselling
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "5000+", label: "Students Placed" },
              { value: "50+", label: "Airport Partners" },
              { value: "95%", label: "Placement Rate" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-secondary">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
