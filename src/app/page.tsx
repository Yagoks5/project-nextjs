import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Olá</h1>
      <hr />
      <Link href={"/about"}> Ir para a página sobre</Link>
      <hr />
      <hr />
      <Link href={"/products"}> Ir para a página de produtos</Link>
      <hr />
      <Link href={"/dashboard"}> Ir para a página de dashboard</Link>
    </>
  );
}
