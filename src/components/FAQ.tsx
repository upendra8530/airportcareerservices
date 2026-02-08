import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What qualifications do I need for airport jobs?", a: "Most airport ground staff and customer service roles require 10+2 or graduation. Cabin crew roles typically require graduation. We assess your qualifications during counselling and guide you to the best-fit role." },
  { q: "Is there an age limit for airport careers?", a: "Generally, candidates between 18–28 years are preferred for most airport roles. Some positions may have different age criteria depending on the airline or airport authority." },
  { q: "Do you guarantee 100% placement?", a: "We provide 100% placement assistance, which means we prepare you thoroughly and connect you with recruiters. Final selection depends on your performance in interviews. Our placement rate is 95%." },
  { q: "What is the fee structure?", a: "Our fee varies based on the program and career path chosen. We offer transparent pricing with no hidden charges. Contact us for a detailed fee breakdown during your free counselling session." },
  { q: "How long does the training program last?", a: "Training programs typically range from 3 to 6 months depending on the career path. This includes classroom training, soft skills development, grooming, and interview preparation." },
  { q: "Can I apply if I'm from a small town?", a: "Absolutely! We welcome students from all over India. Many of our successfully placed students come from tier-2 and tier-3 cities. We also provide hostel guidance for outstation students." },
  { q: "Is this a government-approved course?", a: "We are a career guidance and placement consultancy. Our training programs are designed to make you industry-ready. We help you get placed in private airlines, airports, and ground handling companies." },
];

const FAQ = () => (
  <section className="py-20 bg-card border-t border-border">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Answers to common questions from students and parents about airport career opportunities and our placement process.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-5">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground text-sm hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
