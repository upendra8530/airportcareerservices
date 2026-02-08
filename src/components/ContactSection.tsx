import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const locations = [
  { city: "Mumbai", address: "Address coming soon", phone: "+91 98765 43210" },
  { city: "Kolkata", address: "Address coming soon", phone: "+91 98765 43211" },
  { city: "Chennai", address: "Address coming soon", phone: "+91 98765 43212" },
  { city: "Visakhapatnam", address: "Address coming soon", phone: "+91 98765 43213" },
  { city: "Pune", address: "Address coming soon", phone: "+91 98765 43214" },
  { city: "Nagpur", address: "Address coming soon", phone: "+91 98765 43215" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    role: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Enquiry Submitted!", description: "Our team will contact you within 24 hours." });
    setFormData({ name: "", phone: "", email: "", qualification: "", role: "", location: "" });
  };

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in airport career guidance. Please share more details.");

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Start Your Airport Career Today
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill in the enquiry form below or visit one of our offices across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground">Student Enquiry Form</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} maxLength={100} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} maxLength={15} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} maxLength={255} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Select value={formData.qualification} onValueChange={(v) => setFormData({ ...formData, qualification: v })}>
                    <SelectTrigger><SelectValue placeholder="Select qualification" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10th">10th Pass</SelectItem>
                      <SelectItem value="12th">12th Pass</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="postgraduate">Post Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Interested Role</Label>
                  <Select value={formData.role} onValueChange={(v) => setFormData({ ...formData, role: v })}>
                    <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ground-staff">Airport Ground Staff</SelectItem>
                      <SelectItem value="cabin-crew">Cabin Crew</SelectItem>
                      <SelectItem value="customer-service">Customer Service</SelectItem>
                      <SelectItem value="cargo">Cargo Handling</SelectItem>
                      <SelectItem value="operations">Airport Operations</SelectItem>
                      <SelectItem value="support">Airline Support Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Select value={formData.location} onValueChange={(v) => setFormData({ ...formData, location: v })}>
                  <SelectTrigger><SelectValue placeholder="Select nearest office" /></SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc.city} value={loc.city.toLowerCase()}>{loc.city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-4 w-4" /> Submit Enquiry
              </Button>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button type="button" variant="gold" size="lg" className="w-full gap-2">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </Button>
              </a>
            </form>
          </div>

          {/* Locations Grid */}
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-5">Our Offices Across India</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((loc) => (
                <div key={loc.city} className="bg-card rounded-xl border border-border p-5 hover:border-secondary/50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-secondary/10 p-2 shrink-0">
                      <MapPin className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{loc.city}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{loc.address}</p>
                      <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-sm text-secondary hover:underline">
                        <Phone className="h-3.5 w-3.5" /> {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="mt-6 bg-card rounded-xl border border-border p-5">
              <a href="mailto:info@airportcareerservices.com" className="flex items-center gap-3 group">
                <div className="rounded-lg bg-secondary/10 p-2.5 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email Us</div>
                  <div className="font-semibold text-foreground">info@airportcareerservices.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
