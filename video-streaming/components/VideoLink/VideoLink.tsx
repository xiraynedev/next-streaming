interface VideoProps {
  src: string;
}

export default function VideoLink(video: VideoProps) {
  return (
    <video width={400} className="hover:scale-105 transition-all">
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
