import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center m-12">
      <div className="text-center rounded-lg p-6 bg-gray-200">
        <h1 className="text-3xl font-bold m-12 text-center">Welcome to the Odense Ward Sacrament Meetings App</h1>
        <Image className="rounded-lg m-12 mx-auto" src="/odense-menighed.jpg" alt="Odense Ward" width={700} height={549} />
      </div>
    </main>
  );
}