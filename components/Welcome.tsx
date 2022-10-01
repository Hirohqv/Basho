import { avatarUrl } from "../consts";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <div className="text-centerq items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8 pb-8">
        <Image
          src={avatarUrl}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-3xl"
        />
      </div>
      <div className=" pt-8 pb-8 xl:col-span-2">
        <h2 className="text-3xl text-left">Hey, my name is Huy</h2>
        <div className="mt-2 text-left">
          I am a technical consultant who can fulfill various roles as
          <div className="text-xl">
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
          </div>
          in development projects with a focus on agile development in
          autonomous development teams and interdisciplinary product teams.
        </div>
        <p className="mt-3 text-left">
          In my free time, I like to do strength training, cook and other
          relaxing activities.
        </p>
      </div>
    </div>
  );
}
