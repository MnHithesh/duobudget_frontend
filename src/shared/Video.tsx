type Props = {
  videoIdOrUrl: string;
  title?: string;
  start?: number; 
};

const getId = (input: string) => {
  const m = input.match(
    /(?:youtu\.be\/|v=|shorts\/|embed\/)([A-Za-z0-9_-]{6,})/
  );
  return m ? m[1] : input; 
};

export default function Video({ videoIdOrUrl, title = "YouTube video", start }: Props) {
  const id = getId(videoIdOrUrl);
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1${start ? `&start=${start}` : ""}`;

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}
