import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../components/Welcome";
import ThingsIDo from "../components/ThingsIDo";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-skydark-50">
      <Head>
        <title>Huy Vu — Senior Tech Consultant | Norway</title>
        <meta name="description" content="Huy Vu — Senior tech consultant with 11+ years helping Norwegian enterprises modernize through cloud, AI and hands-on delivery. Available for consultant, tech lead and interim roles." />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hqv.no/" />
        <meta property="og:title" content="Huy Vu — Senior Tech Consultant | Norway" />
        <meta property="og:description" content="11+ years helping Norwegian enterprises modernize through cloud, AI and hands-on delivery. Available for consultant, tech lead and interim roles." />
        <meta property="og:image" content="https://www.hqv.no/static/img/avatar.jpeg" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Huy Vu — Senior Tech Consultant | Norway" />
        <meta name="twitter:description" content="11+ years helping Norwegian enterprises modernize through cloud, AI and hands-on delivery. Available for consultant, tech lead and interim roles." />
        <meta name="twitter:image" content="https://www.hqv.no/static/img/avatar.jpeg" />
      </Head>
      <main className="mx-auto max-w-5xl px-4 sm:px-6 xl:px-0 flex-grow pt-8">
        <Welcome />
        <ThingsIDo />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
