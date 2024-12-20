import Head from 'next/head'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

export default function Home() {
  return (
    <div className=" bg-black">
      <Head>
        <title>Twitter</title>
        <link rel='icon' href='/favicon/ico' />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar></Sidebar>
        <Feed></Feed>
      </main>
    </div>
  );
}
