export default function ThingsIDo() {
  return (
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
  );
}
