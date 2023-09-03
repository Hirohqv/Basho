import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../components/Welcome";
import ThingsIDo from "../components/ThingsIDo";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-skydark-50">
      <Head>
        <title>Huy Vu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-3xl xl:px-0 flex-grow pt-24">
        <Welcome />
        <ThingsIDo />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
