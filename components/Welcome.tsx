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
          As an IT consultant, I am adept at fulfilling multiple roles such as
          <div className="text-xl">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("Technical Product Owner")
                  .pauseFor(400)
                  .deleteAll()
                  .typeString("Team lead and Agile Coach")
                  .pauseFor(400)
                  .deleteAll()
                  .typeString("QA and DevOps Engineer")
                  .pauseFor(400)
                  .deleteAll()
                  .typeString("Solution Architect")
                  .pauseFor(400)
                  .deleteAll();
              }}
            />{" "}
          </div>
          My expertise is centered around agile development processes, 
          particularly within self-sufficient development teams and interdisciplinary product units.
        </div>
        <p className="mt-3 text-left">
          During my downtime, I take pleasure in pursuing strength training and
          exploring new culinary creations.
        </p>
      </div>
    </div>
  );
}
