import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "lasya@example.com",
      href: "mailto:lasya@example.com",
      gradient: "from-pastel-pink to-pastel-lavender",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lasyapriya",
      href: "https://linkedin.com",
      gradient: "from-pastel-blue to-pastel-cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/lasyapriya",
      href: "https://github.com",
      gradient: "from-pastel-lavender to-pastel-blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Arizona, USA",
      href: "#",
      gradient: "from-pastel-cyan to-pastel-mint",
    },
  ];

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-pink mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities in AI/ML, research collaborations, 
                or interesting projects. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 hover-lift group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-5 h-5 text-foreground/80" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{link.label}</h4>
                      <p className="text-xs text-muted-foreground">{link.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-pink text-foreground hover:opacity-90 rounded-full px-8 shadow-pastel"
              >
                <Send className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8 shadow-pastel">
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="Your first name"
                      className="rounded-xl border-border/50 focus:border-pastel-lavender bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Your last name"
                      className="rounded-xl border-border/50 focus:border-pastel-lavender bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border-border/50 focus:border-pastel-lavender bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    className="rounded-xl border-border/50 focus:border-pastel-lavender bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or just say hello..."
                    rows={4}
                    className="rounded-xl border-border/50 focus:border-pastel-lavender bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pastel-lavender to-pastel-cyan text-foreground hover:opacity-90 rounded-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
