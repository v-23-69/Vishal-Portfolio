import React, { useEffect, useState } from 'react';
import { portfolioData } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useTheme } from '../context/ThemeProvider';
import { 
  Monitor, 
  Brain, 
  Workflow, 
  Rocket, 
  MessageSquare, 
  Globe, 
  Moon, 
  Sun,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  CheckCircle2,
  Upload,
  Smartphone,
  Monitor as Desktop
} from 'lucide-react';
import { toast } from '../hooks/use-toast';

const iconMap = {
  Monitor,
  Brain,
  Workflow,
  Rocket,
  MessageSquare,
  Globe
};

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend integration
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    
    // Store in localStorage for now
    const existing = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    localStorage.setItem('contact_submissions', JSON.stringify([...existing, submission]));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (projectId) => {
    // Prevent re-triggering during animation
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If clicking the same project, close it
    if (selectedProject === projectId) {
      setSelectedProject(null);
    } else {
      // If another project is open, close it first
      if (selectedProject !== null) {
        setSelectedProject(null);
        // Wait for close animation before opening new one
        setTimeout(() => {
          setSelectedProject(projectId);
        }, 250);
      } else {
        setSelectedProject(projectId);
      }
    }
    
    // Release animation lock after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="font-mono text-xl font-bold text-primary">VW</div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Contact</button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-light tracking-tight">
                {portfolioData.hero.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                {portfolioData.hero.role}
              </p>
            </div>
            
            <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
              {portfolioData.hero.tagline}
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {portfolioData.hero.description}
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-8">
              <Button size="lg" onClick={() => scrollToSection('projects')} className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-24 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">About Me</h2>
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {portfolioData.about.summary}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-animate className={`py-24 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.categories.map((category, idx) => (
              <Card 
                key={idx} 
                className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="secondary" className="font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-animate className={`py-24 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Real-world solutions built for production</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <Card 
                key={project.id}
                className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer group overflow-hidden"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.subtitle}</CardDescription>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Problem Statement</h4>
                    <p className="text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  {selectedProject === project.id && (
                    <div className="space-y-4 animate-in slide-in-from-top duration-300">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features</h4>
                        <ul className="space-y-1">
                          {project.keyFeatures.map((feature, featureIdx) => (
                            <li key={featureIdx} className="text-sm flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <Badge key={techIdx} className="font-mono text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Impact</h4>
                        <p className="text-sm leading-relaxed">{project.impact}</p>
                      </div>
                      
                      {/* UI Screenshots Section */}
                      {project.imageSlots && project.imageSlots.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-3 text-muted-foreground">UI Screenshots</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {project.imageSlots.map((slot, slotIdx) => (
                              <div 
                                key={slotIdx} 
                                className={`relative border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors group cursor-pointer ${
                                  slot.type === 'mobile' ? 'aspect-[9/16]' : 'aspect-video col-span-2 md:col-span-3'
                                }`}
                              >
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                                  {slot.type === 'mobile' ? (
                                    <Smartphone className="h-8 w-8" />
                                  ) : (
                                    <Desktop className="h-8 w-8" />
                                  )}
                                  <span className="text-xs font-medium">{slot.label}</span>
                                  <Upload className="h-4 w-4 opacity-50" />
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            * Image upload slots for actual screenshots
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4"
                  >
                    {selectedProject === project.id ? 'Show Less' : 'Read More'}
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${selectedProject === project.id ? 'rotate-90' : ''}`} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Capabilities */}
          <div className="mt-16">
            <h3 className="text-2xl font-light mb-6 text-center">Additional Capabilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.additionalCapabilities.map((capability, idx) => (
                <Card key={idx} className="border-border/50 bg-card/50 backdrop-blur text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate className={`py-24 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.services.map((service, idx) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card 
                  key={idx}
                  className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-24 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-4">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
            </div>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex justify-center gap-6">
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 {portfolioData.hero.name}. Built with React & FastAPI.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Designed for impact. Engineered for scale.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
