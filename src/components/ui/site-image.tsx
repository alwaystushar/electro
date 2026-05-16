import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

export function SiteImage({
  src,
  alt,
  className = "",
  width = 1200,
  height = 800,
  fill = false,
  sizes,
  priority = false,
}: SiteImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
