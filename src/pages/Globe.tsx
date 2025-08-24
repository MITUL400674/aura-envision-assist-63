import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  MessageSquare, 
  Mic, 
  Globe2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Layers,
  Eye,
  Thermometer,
  Wind,
  Cloud
} from "lucide-react";
import { AIChatSystem } from "@/components/AIChatSystem";
import { VoiceChatSystem } from "@/components/VoiceChatSystem";
import weatherWiseLogo from "@/assets/aurasphere-logo.png";
import globeBackground from "@/assets/globe-background.jpg";

const Globe = () => {
  const navigate = useNavigate();
  const [showAIChat, setShowAIChat] = useState(false);
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState("temperature");

  const globeLayers = [
    {
      id: "temperature",
      name: "Temperature",
      icon: Thermometer,
      color: "from-blue-500 to-red-500",
      description: "Global temperature patterns"
    },
    {
      id: "pressure",
      name: "Air Pressure",
      icon: Wind,
      color: "from-purple-500 to-yellow-500",
      description: "Atmospheric pressure systems"
    },
    {
      id: "precipitation",
      name: "Precipitation",
      icon: Cloud,
      color: "from-gray-300 to-blue-600",
      description: "Rainfall and snow patterns"
    },
    {
      id: "visibility",
      name: "Visibility",
      icon: Eye,
      color: "from-green-400 to-gray-600",
      description: "Air quality and visibility"
    }
  ];

  const globalStats = [
    {
      label: "Global Average Temp",
      value: "15.2°C",
      change: "+0.8°C",
      trend: "up"
    },
    {
      label: "Active Weather Systems",
      value: "347",
      change: "+12",
      trend: "up"
    },
    {
      label: "Satellite Connections",
      value: "1,847",
      change: "Active",
      trend: "stable"
    },
    {
      label: "Data Points/Hour",
      value: "10.2M",
      change: "+2.1M",
      trend: "up"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${globeBackground})`
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/85" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-3">
                  <img src={weatherWiseLogo} alt="WeatherWise" className="w-6 h-6" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold bg-gradient-aurora bg-clip-text text-transparent">
                      WeatherWise Globe
                    </span>
                    <span className="text-xs text-muted-foreground">3D Climate Visualization</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="glass" size="sm" onClick={() => navigate('/map')}>
                  <Globe2 className="w-4 h-4 mr-2" />
                  Map View
                </Button>
                <Button variant="cosmic" size="sm" onClick={() => setShowAIChat(true)}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  AI Assistant
                </Button>
                <Button variant="voice" size="sm" onClick={() => setShowVoiceChat(true)}>
                  <Mic className="w-4 h-4 mr-2" />
                  Voice Chat
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20 p-6">
          <div className="container mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">3D Climate Globe</h1>
              <p className="text-muted-foreground">
                Explore global climate patterns with interactive 3D Earth visualization
              </p>
            </div>

            {/* Global Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {globalStats.map((stat, index) => (
                <Card key={index} className="glass-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                    <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Globe Visualization */}
              <div className="lg:col-span-3">
                <Card className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Interactive 3D Globe</h2>
                    <div className="flex items-center gap-2">
                      <Button variant="glass" size="sm">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset View
                      </Button>
                      <Button variant="glass" size="sm">
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="sm">
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Globe Container */}
                  <div className="relative h-[500px] bg-gradient-to-b from-indigo-900/20 to-blue-900/20 rounded-lg border border-white/10 flex items-center justify-center">
                    <div className="relative w-80 h-80 rounded-full bg-gradient-earth shadow-data">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-blue-500/20 to-green-500/20 animate-pulse" />
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/30 to-green-600/30" />
                      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-700/40 to-green-700/40" />
                      
                      {/* Climate Data Overlay */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${globeLayers.find(l => l.id === selectedLayer)?.color} opacity-30 rounded-full`} />
                      </div>
                      
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe2 className="w-16 h-16 text-white/80" />
                      </div>
                    </div>
                    
                    {/* Floating Data Points */}
                    <div className="absolute top-20 left-20 w-3 h-3 bg-status-excellent rounded-full animate-ping" />
                    <div className="absolute bottom-32 right-24 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-40 right-32 w-2.5 h-2.5 bg-status-moderate rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Layer Selection */}
                <Card className="glass-card p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    Climate Layers
                  </h3>
                  <div className="space-y-3">
                    {globeLayers.map((layer) => {
                      const IconComponent = layer.icon;
                      const isSelected = selectedLayer === layer.id;
                      return (
                        <Button
                          key={layer.id}
                          variant={isSelected ? "cosmic" : "glass"}
                          className="w-full justify-start text-left"
                          onClick={() => setSelectedLayer(layer.id)}
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          <div className="flex-1">
                            <div className="font-medium">{layer.name}</div>
                            <div className="text-xs opacity-80">{layer.description}</div>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </Card>

                {/* Globe Controls */}
                <Card className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Globe Controls</h3>
                  <div className="space-y-3">
                    <Button variant="glass" className="w-full justify-start">
                      <Globe2 className="w-4 h-4 mr-2" />
                      Auto Rotate
                    </Button>
                    <Button variant="glass" className="w-full justify-start">
                      <Eye className="w-4 h-4 mr-2" />
                      Day/Night Cycle
                    </Button>
                    <Button variant="cosmic" className="w-full justify-start" onClick={() => navigate('/dashboard')}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Dashboard
                    </Button>
                  </div>
                </Card>

                {/* Current Layer Info */}
                <Card className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Layer Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Layer</span>
                      <Badge variant="default">
                        {globeLayers.find(l => l.id === selectedLayer)?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Resolution</span>
                      <span className="text-sm text-muted-foreground">1km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Update Frequency</span>
                      <span className="text-sm text-muted-foreground">15 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Source</span>
                      <span className="text-sm text-muted-foreground">NASA</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Modal */}
        {showAIChat && (
          <AIChatSystem onClose={() => setShowAIChat(false)} selectedProfile="" />
        )}

        {/* Voice Chat Modal */}
        {showVoiceChat && (
          <VoiceChatSystem onClose={() => setShowVoiceChat(false)} />
        )}
      </div>
    </div>
  );
};

export default Globe;