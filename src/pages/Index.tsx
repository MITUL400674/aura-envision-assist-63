import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Map, Users, Zap, Shield, BarChart3, Satellite, Eye, Brain, ChevronRight, Play, Calendar, Mountain, Wheat, Settings, User, MessageSquare, Mic } from "lucide-react";
import heroWeather from "@/assets/hero-weather.jpg";
import weatherWiseLogo from "@/assets/aurasphere-logo.png";
import nasaSatellite from "@/assets/nasa-satellite.jpg";
import aiWeatherBrain from "@/assets/ai-weather-brain.jpg";
import weatherDashboard from "@/assets/weather-dashboard.jpg";
import climateAnalytics from "@/assets/climate-analytics.jpg";
import { AIChatSystem } from "@/components/AIChatSystem";
import { VoiceChatSystem } from "@/components/VoiceChatSystem";
const Index = () => {
  console.log("WeatherWise Index component loaded successfully!");
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<string>("");
  const [showAIChat, setShowAIChat] = useState(false);
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const userProfiles = [{
    id: "outdoor-enthusiast",
    title: "Outdoor Enthusiast",
    description: "Hiking, camping, sports events",
    details: ["UV Index", "Air Quality", "Wind Conditions"],
    icon: Mountain,
    color: "from-blue-500 to-cyan-500"
  }, {
    id: "event-planner",
    title: "Event Planner",
    description: "Weddings, festivals, gatherings",
    details: ["Weather Forecast", "Guest Comfort", "Venue Conditions"],
    icon: Calendar,
    color: "from-yellow-500 to-orange-500"
  }, {
    id: "farmer",
    title: "Agriculture",
    description: "Farming, gardening, crops",
    details: ["Soil Moisture", "Rainfall", "Temperature"],
    icon: Wheat,
    color: "from-green-500 to-emerald-500"
  }];
  const features = [{
    icon: Satellite,
    title: "Real-Time Weather Data",
    description: "Live satellite data and weather stations providing accurate, up-to-the-minute conditions"
  }, {
    icon: Brain,
    title: "AI Weather Predictions",
    description: "Machine learning models analyze 30+ years of climate data for precise forecasting"
  }, {
    icon: Shield,
    title: "Weather Alerts",
    description: "Intelligent early warning system for severe weather and changing conditions"
  }, {
    icon: BarChart3,
    title: "Climate Analytics",
    description: "Comprehensive weather analysis with personalized insights for your activities"
  }];
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={weatherWiseLogo} alt="WeatherWise" className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-aurora bg-clip-text text-transparent">
                  WeatherWise
                </span>
                <span className="text-xs text-muted-foreground">Weather Intelligence</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="glass" size="sm" onClick={() => navigate('/map')}>
                <Map className="w-4 h-4 mr-2" />
                Weather Map
              </Button>
              <Button variant="glass" size="sm" onClick={() => navigate('/globe')}>
                <Globe className="w-4 h-4 mr-2" />
                Climate Globe
              </Button>
              <Button variant="cosmic" size="sm" onClick={() => setShowAIChat(true)}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Weather AI
              </Button>
              <Button variant="voice" size="sm" onClick={() => setShowVoiceChat(true)}>
                <Mic className="w-4 h-4 mr-2" />
                Voice Weather
              </Button>
              <div className="flex items-center gap-2 bg-sky-400 hover:bg-sky-300">
                <Button variant="ghost" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-sky-400 hover:bg-sky-300">
                  <User className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroWeather})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-8 pt-24 mt-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 cosmic-float">
              <span className="bg-gradient-aurora bg-clip-text text-transparent">
                Weather Intelligence
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-foreground/80">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-4xl mx-auto font-medium mt-8">
              Advanced weather forecasting and climate intelligence for smarter outdoor decisions and perfect planning
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="hero" size="lg" onClick={() => navigate('/dashboard')}>
                <Satellite className="w-5 h-5 mr-2" />
                Get Forecast
              </Button>
              <Button variant="glass" size="lg" onClick={() => navigate('/map')}>
                <Map className="w-5 h-5 mr-2" />
                Weather Map
              </Button>
            </div>
          </div>

          {/* Profile Selection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Activity</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized weather insights tailored to your specific outdoor activities and needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {userProfiles.map(profile => {
              const IconComponent = profile.icon;
              const isSelected = selectedProfile === profile.id;
              return <Card key={profile.id} className={`glass-card p-6 cursor-pointer transition-all duration-500 hover:scale-105 ${isSelected ? 'border-primary shadow-glow' : 'hover:border-accent/50'}`} onClick={() => navigate(`/${profile.id}`)}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center shadow-data`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-center">{profile.title}</h3>
                    <p className="text-muted-foreground text-center mb-4 text-sm">{profile.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {profile.details.map((detail, index) => <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-status-excellent mr-2"></div>
                          {detail}
                        </div>)}
                    </div>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="outline" className="bg-gradient-aurora text-white border-white/20 px-4 py-2">
                <Satellite className="w-4 h-4 mr-2" />
                Powered by NASA Satellites
              </Badge>
            </div>
            <h2 className="text-4xl font-bold mb-6">Advanced Weather Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by satellite data, AI predictions, and real-time atmospheric monitoring
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-aurora rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src={nasaSatellite} 
                  alt="NASA satellite capturing weather data" 
                  className="relative rounded-2xl shadow-data w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-earth flex items-center justify-center shadow-data">
                    <Satellite className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Real-Time Weather Data</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Live satellite data and weather stations providing accurate, up-to-the-minute conditions. 
                  Our network processes over 10 million data points hourly from NASA satellites and global monitoring stations.
                </p>
              </div>
            </div>

            {/* Feature 2 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-aurora flex items-center justify-center shadow-data">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">AI Weather Predictions</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Machine learning models analyze 30+ years of climate data for precise forecasting. 
                  Our neural networks process atmospheric patterns to deliver 97% accuracy in 7-day forecasts.
                </p>
              </div>
              <div className="relative group lg:order-2">
                <div className="absolute inset-0 bg-gradient-aurora rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src={aiWeatherBrain} 
                  alt="AI analyzing weather patterns" 
                  className="relative rounded-2xl shadow-data w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Feature 3 - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-safe rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src={weatherDashboard} 
                  alt="Weather monitoring dashboard" 
                  className="relative rounded-2xl shadow-data w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-safe flex items-center justify-center shadow-data">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Weather Alerts</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Intelligent early warning system for severe weather and changing conditions. 
                  Get personalized alerts 24 hours before weather events impact your specific location and activities.
                </p>
              </div>
            </div>

            {/* Feature 4 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-earth flex items-center justify-center shadow-data">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Climate Analytics</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive weather analysis with personalized insights for your activities. 
                  Historical trends, seasonal patterns, and micro-climate analysis tailored to your specific needs.
                </p>
              </div>
              <div className="relative group lg:order-2">
                <div className="absolute inset-0 bg-gradient-earth rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src={climateAnalytics} 
                  alt="Climate analytics visualization" 
                  className="relative rounded-2xl shadow-data w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className="py-32 bg-background/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">AI-Powered Weather Assistance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience intelligent weather guidance with AI assistants and voice-powered atmospheric insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <Card className="glass-card p-10 hover:border-accent/50 transition-all duration-300 group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-aurora flex items-center justify-center shadow-data group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Smart Weather Assistant</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get personalized weather insights, activity recommendations, and climate advice tailored to your specific needs and location. 
                  Our AI understands context and provides actionable guidance for any weather scenario.
                </p>
                <Button variant="cosmic" size="lg" onClick={() => setShowAIChat(true)} className="group-hover:shadow-glow transition-all duration-300">
                  Try Weather AI
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>

            <Card className="glass-card p-10 hover:border-accent/50 transition-all duration-300 group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-safe flex items-center justify-center shadow-data group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Voice Weather Guide</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Natural voice interactions for weather inquiries. Ask questions about conditions, forecasts, and climate - get instant spoken responses. 
                  Perfect for hands-free weather guidance while outdoors or planning activities.
                </p>
                <Button variant="voice" size="lg" onClick={() => setShowVoiceChat(true)} className="group-hover:shadow-glow transition-all duration-300">
                  Start Voice Weather
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <Card className="glass-card p-12 text-center max-w-4xl mx-auto border-primary/30">
            <h2 className="text-3xl font-bold mb-4">Ready for Perfect Weather Planning?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users making smarter decisions with AI-powered weather intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigate('/dashboard')}>
                <Satellite className="w-5 h-5 mr-2" />
                Start Forecasting
              </Button>
              <Button variant="glass" size="lg" onClick={() => navigate('/globe')}>
                <Globe className="w-5 h-5 mr-2" />
                Explore Climate
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src={weatherWiseLogo} alt="WeatherWise" className="w-6 h-6" />
              <span className="font-semibold bg-gradient-aurora bg-clip-text text-transparent">
                WeatherWise
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Powered Weather Intelligence • Perfect Conditions, Every Time
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chat Modal */}
      {showAIChat && <AIChatSystem onClose={() => setShowAIChat(false)} selectedProfile={selectedProfile} />}

      {/* Voice Chat Modal */}
      {showVoiceChat && <VoiceChatSystem onClose={() => setShowVoiceChat(false)} />}
    </div>;
};
export default Index;