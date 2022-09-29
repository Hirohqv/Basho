import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION, avatarUrl, siteTitle } from "../consts";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-skydark-50">
      <Head>
        <title>Huy Vu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation start */}
      <div>
        <header className="flex items-center justify-center p-10 space-x-10">
          {NAVIGATION.main.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mb-auto text-lg font-medium sm:p-4"
            >
              {link.name}
            </Link>
          ))}
        </header>
      </div>

      {/* Navigation end*/}
      <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-3xl xl:px-0 flex-grow">
        {/* Welcome start*/}
        <div className="text-centerq items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 pb-8">
            <Image
              src={avatarUrl}
              alt="avatar"
              height={250}
              width={250}
              className="rounded-full"
            />
          </div>
          <div className=" pt-8 pb-8 xl:col-span-2">
            <h2 className="text-3xl text-left">Hey, my name is Huy</h2>
            <div className="mt-2 text-left">
              {/*
              I am a technical consultant who can fulfill various roles as
              project manager, product owner, advisor, scrum master, architect,
              test manager and test developer in development projects with a
              focus on agile development in autonomous development teams and
              interdisciplinary product teams.
            */}
              I am a technical consultant who can fulfill various roles as
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString("project manager")
                    .pauseFor(400)
                    .deleteAll()
                    .typeString("product owner")
                    .pauseFor(400)
                    .deleteAll()
                    .typeString("advisor")
                    .pauseFor(400)
                    .deleteAll()
                    .typeString("scrum master")
                    .pauseFor(400)
                    .deleteAll()
                    .typeString("architect")
                    .pauseFor(400)
                    .deleteAll()
                    .typeString("test manager")
                    .pauseFor(400)
                    .deleteAll()
                    .typeString("test developer")
                    .pauseFor(400)
                    .deleteAll();
                }}
              />{" "}
              in development projects with a focus on agile development in
              autonomous development teams and interdisciplinary product teams.
            </div>
            <p className="mt-3 text-left">
              In my free time, I like to do strength training, cook and other
              relaxing activities.
            </p>
          </div>
        </div>
        {/* Welcome end*/}

        {/* Things I do start*/}
        <div className="py-6">
          <div>
            <h1 className=" text-4xl text-center pb-10 pt-10">Things I do</h1>
          </div>
          <div className="margin:0 grid gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl">Discovery</h3>
              <p>Continuous customer feedback and user research practices</p>
            </div>
            <div>
              <h3 className="text-2xl">Experimentation</h3>
              <p>
                Design and orchestration of experiments to conduct hypothesis
                testing
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Growth</h3>
              <p>
                Iterative and data-driven approach to acquisition, retention and
                revenue.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Product</h3>
              <p>
                Working with engineering teams on solutioning and delivery of
                products
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Automation</h3>
              <p>
                Workflows & automation of tedious tasks with APIs, scripts and
                no-code tools
              </p>
            </div>
            <div>
              <h3 className="text-2xl">MVP</h3>
              <p>Building lean and rapid prototypes to validate ideas </p>
            </div>
          </div>
        </div>
        {/* Things I do end*/}

        {/* Clients start*/}
        <div className="py-6 pb-10 pt-10">
          <h1 className="text-center text-4xl">Clients I´ve worked with</h1>
        </div>
        <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/static/img/clients/Telenor.png"
              alt="Telenor"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/slv.svg"
              alt="Statens Legemiddelverk"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>

          <div>
            <Image
              src="/static/img/clients/nokas.png"
              alt="Nokas"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/Sb1.png"
              alt="Sparebank1 Utvikling"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/Hdir.svg"
              alt="Helsedirektoratet"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/Rema_1000.png"
              alt="Rema 1000"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/Nav.png"
              alt="NAV"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/Storebrand.png"
              alt="Storebrand"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/static/img/clients/Kongsberg_Gruppen.png"
              alt="Kongsberg Group"
              height={100}
              width={300}
              className="object-contain"
            />
          </div>
        </div>
        {/* Clients end*/}
      </main>

      <footer className="flex  h-24 w-full items-center justify-center mb-2 space-x-2 text-lg text-gray-700 mt-auto">
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <div>{siteTitle}</div>
      </footer>
    </div>
  );
};

export default Home;
