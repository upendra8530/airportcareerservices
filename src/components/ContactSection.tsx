import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Enquiry Submitted!", description: "Our team will contact you within 24 hours." });
    setFormData({ name: "", phone: "", email: "", qualification: "", role: "" });
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
            Fill in the enquiry form below or reach us directly. Our career counsellors will guide you through the next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
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

              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-4 w-4" /> Submit Enquiry
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground">Contact Details</h3>

              <a href="tel:+919876543210" className="flex items-center gap-3 group">
                <div className="rounded-lg bg-secondary/10 p-2.5 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call Us</div>
                  <div className="font-semibold text-foreground">+91 98765 43210</div>
                </div>
              </a>

              <a href="mailto:info@airportcareerservices.com" className="flex items-center gap-3 group">
                <div className="rounded-lg bg-secondary/10 p-2.5 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground">info@airportcareerservices.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-secondary/10 p-2.5">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Office</div>
                  <div className="font-semibold text-foreground text-sm">Airport Career Services, Sector 18, Noida, UP, India</div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="lg" className="w-full gap-2">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.32!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjAiTiA3N8KwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
