import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Hello, Web</p>
      <Image width={100} height={100} src="/Tistory.svg" alt="티스토리 로고" />
    </>
  );
}
