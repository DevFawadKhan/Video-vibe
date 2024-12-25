import { useState } from "react";
import { AuthForm } from "@/components/AuthForm";
import { VideoPlayer } from "@/components/VideoPlayer";

const videos = [
  {
    videoId: "pCxo8WpZQOM",
    title: "Educational Video 1",
    author: "educator1"
  },
  {
    videoId: "2j2D_XFixB8",
    title: "Educational Video 2",
    author: "educator2"
  },
  {
    videoId: "d4M1jkB-Cqw",
    title: "Educational Video 3",
    author: "educator3"
  },
  {
    videoId: "TZ7KFU-63MA",
    title: "Educational Video 4",
    author: "educator4"
  }
];

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSkipAuth = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/20">
        <div className="flex flex-col items-center gap-4 animate-fade-up">
          <AuthForm />
          <button
            onClick={handleSkipAuth}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="video-scroll-snap overflow-y-auto">
      {videos.map((video) => (
        <div key={video.videoId} className="w-full h-full">
          <VideoPlayer {...video} />
        </div>
      ))}
    </div>
  );
};

export default Index;