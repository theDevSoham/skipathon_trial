import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt">;

const Logo = (props: LogoProps) => {
  return (
    <Image
      src="/images/logo.svg"
      alt="logo"
      width={800}
      height={800}
      {...props}
    />
  );
};

export default Logo;
