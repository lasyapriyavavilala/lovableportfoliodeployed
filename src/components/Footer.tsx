import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 gradient-pastel-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Jahnavi Lasyapriya Vavilala</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              AI/ML Engineer passionate about building intelligent systems 
              across computer vision, optimization, and agentic AI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Experience", "Projects", "Education", "Contact"].map(link => <a key={link} href={`#${link.toLowerCase()}`} className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {link}
                </a>)}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[{
              icon: Github,
              href: "#",
              label: "GitHub"
            }, {
              icon: Linkedin,
              href: "#",
              label: "LinkedIn"
            }, {
              icon: Mail,
              href: "#",
              label: "Email"
            }].map(({
              icon: Icon,
              href,
              label
            }) => <a key={label} href={href} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-pastel transition-all hover:scale-110 text-muted-foreground hover:text-foreground" aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>)}
            </div>
            <p className="text-muted-foreground text-sm">
              Arizona, USA
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">Made with  by Lasyapriya Vavilala by adapting AI trends!<Heart className="w-4 h-4 text-pastel-pink" /> by Lasya Priya Vavilala
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;