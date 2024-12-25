import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  author: string;
}

export function VideoPlayer({ videoId, title, author }: VideoPlayerProps) {
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      <Card className="video-container w-full max-w-[500px] bg-transparent border-0 relative">
        <iframe
          ref={videoRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
        <div className="absolute bottom-4 left-4 right-16 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`https://i.pravatar.cc/150?u=${author}`} />
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-300">@{author}</p>
            </div>
          </div>
        </div>
        <div className="absolute right-4 bottom-20 flex flex-col gap-4">
          <Button size="icon" variant="ghost" className="rounded-full bg-gray-800/60 hover:bg-gray-700/60">
            <Heart className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full bg-gray-800/60 hover:bg-gray-700/60">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full bg-gray-800/60 hover:bg-gray-700/60">
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </Card>
    </div>
  );
}