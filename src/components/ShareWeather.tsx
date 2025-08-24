import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Share, Copy, Twitter, Facebook, Mail, MessageCircle } from "lucide-react";

interface ShareWeatherProps {
  location?: string;
  weatherData?: {
    temperature?: number;
    condition?: string;
    forecast?: string;
  };
}

const ShareWeather = ({ location = "Current Location", weatherData }: ShareWeatherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentUrl = window.location.href;
  const shareTitle = `Weather in ${location}`;
  const shareText = weatherData 
    ? `Check out the weather in ${location}: ${weatherData.temperature}°, ${weatherData.condition}`
    : `Check out the weather forecast for ${location}`;
  const shareUrl = `${currentUrl}?location=${encodeURIComponent(location)}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const shareOptions = [
    {
      name: "Copy Link",
      icon: Copy,
      action: copyToClipboard,
      color: "text-gray-600 hover:text-gray-800"
    },
    {
      name: "Twitter",
      icon: Twitter,
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
      },
      color: "text-blue-500 hover:text-blue-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
      },
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      action: () => {
        const url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        window.open(url, '_blank');
      },
      color: "text-green-500 hover:text-green-600"
    },
    {
      name: "Email",
      icon: Mail,
      action: () => {
        const url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
        window.open(url, '_blank');
      },
      color: "text-red-500 hover:text-red-600"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="glass" size="sm">
          <Share className="w-4 h-4 mr-2" />
          Share Weather
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md glass-card border-white/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Share Weather</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Share URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Share Link</label>
            <div className="flex gap-2">
              <Input 
                value={shareUrl}
                readOnly
                className="flex-1 bg-background/50 border-white/20"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="border-white/20 hover:bg-white/10"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Share Options */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">Share via</label>
            <div className="grid grid-cols-2 gap-3">
              {shareOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <Button
                    key={option.name}
                    variant="outline"
                    className="justify-start gap-3 p-4 h-auto border-white/20 hover:bg-white/10"
                    onClick={option.action}
                  >
                    <IconComponent className={`w-5 h-5 ${option.color}`} />
                    <span className="text-sm">{option.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Weather Preview */}
          {weatherData && (
            <div className="p-4 rounded-lg bg-background/30 border border-white/20">
              <h4 className="font-medium mb-2">Preview</h4>
              <p className="text-sm text-muted-foreground">
                {shareText}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareWeather;