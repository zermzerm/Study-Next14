import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Hello HOME</p>
      <Image
        width={300}
        height={300}
        priority
        src="/background.jpg"
        alt="티스토리 로고"
      />
    </>
  );
}
