"use client";

// app 라우터에서는 useRouter를 next/navigation에서 가져온다
// 클라이언트 컴포넌트에서는 환경변수 바로 받아올 수 없다 => 환경변수는 서버 컴포넌트에서만 접속 가능
// => 클라이언트에서도 쓰려면 환경변수 이름 앞에 NEXT_PUBLIC_를 붙여야된다
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastId = result.id;
            router.push(`/read/${lastId}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title"></input>
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create"></input>
      </p>
    </form>
  );
}
