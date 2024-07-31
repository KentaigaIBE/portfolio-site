import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";

export default function Virtualso() {
  const h1Class = "text-3xl font-bold mb-4 text-blue-300";
  const h2Class = "text-lg font-bold mb-4 text-blue-200";

  return (
    <main className="flex min-h-screen bg-white dark:bg-black flex-col">
      <SimpleTopbar title={"Virtualso"} upSrc={"/design"}></SimpleTopbar>
      <TitleImage
        name={"Virtualso"}
        textSize={"text-[35px] sm:text-[50px] sm:text-[75px] md:text-[125px]"}
        textColor={"text-blue-300"}
        color={"bg-blue-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/virtualso-scope-analysis.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="text-black dark:text-white my-8 mx-4 w-3/4 self-center">
        <h1 className={h1Class} id="what-is-virtualso">
          What is Virtualso?
        </h1>
        <p>
          Virtualso is a project managment tool build for creative teams. This
          app seeks to rethink the typical approach to Agile development by
          redesigning the interfaces we use everyday while creating. Virtualso
          provides several tools covering multiple aspects of the creative
          process with the ultimate goal of making operations more efficent and
          pushing projects to completion.
        </p>
        <br></br>
        <h1 className={h1Class}>Findings</h1>
        <p>
          The idea behind Virtualso stems from promient issues in the video game
          industry. In 2022 alone, at least 60 games were reported to have been
          delayed, with likely many more delayed internally or cancelled
          entirely. Research into the reasosns behind this led to several key
          discoveries.
        </p>
        <br></br>
        <h2 className={h2Class}>Organization</h2>
        <p>
          The current realities of product development have become so accepted
          in the minds of the average production team due to decades of
          reinforcement that the programs adopted by creative industries have
          become sandboxed and disorganized rather than serving as hubs for
          teams to come together, leading to reduced levels of cohesion and
          increased production time and spending.
        </p>
        <br></br>
        <h2 className={h2Class}>Agile Integration</h2>
        <p>
          As product development strategies get more and more refined, they
          consistently forget to implement these processes into the tools
          developers use, leading to disparities between teams and causing
          projects to be less realized as a result, instead of reinforcing the
          project pipeline by shaping tools around those strategies.
        </p>
        <br></br>
        <h2 className={h2Class}>The Convivence/Cohesion Dichotomy</h2>
        <p>
          There is a dichotomy between convivence and cohesion, with most tools
          leaning heavily into convenience which, while allowing teams to
          communicate despite their size and location, causes a disconnect among
          team members, leading to lower rapport and less teamwork, which could
          be solved by creating tools that create more natural interactions.
        </p>
        <br></br>
        <h2 className={h2Class}>Too Many Tools</h2>
        <p>
          We exist in an era where there are millions of tools to solve millions
          of problems, making it so teams will need to adopt dozens to fulfil
          their needs, instead of being able to use a single tool that can serve
          multiple needs.
        </p>
        <br></br>
        <h1 className={h1Class} id="solution">
          Solution
        </h1>
        <p>
          In order to solve this multi-faceted problem, I have developed a
          project management platform that reinvents the way we manage projects.
          With Virtualso, teams can manage their projects, communicate with
          their team, and track their progress all in one place. What makes this
          web app unique compared to competitors is our focus on optimizing the
          creative process by providing tools that are designed to not only
          manage who does what, but also help them do it.
        </p>
        <br></br>
        <p>
          The app is split into multiple sections, each focusing on different
          aspects of project management. At current, four categories are in
          prototyping: Tasks Stacks, Scope Analysis, Artifacts, and Tools.
        </p>
        <br></br>
        <h2 className={h2Class}>Tasks Stacks</h2>
        <p>
          Tasks Stacks are the blood of Virtualso. They run through the
          application and are what connects people to projects and to each
          other. The Task Stack is a reinvention of the tradtional Kanban-style
          board we see in most project management tools. In a normal Kanban
          board, you would simply drag an item from one column to the next,
          perhaps assigning some people to the tasks, setting a due date, and
          creating some subtasks, but with Tasks Stacks, you can control much
          more while keeping everything organized. A Task Stack is a collection
          of subtasks that contain relevant information spaning across multiple
          teams. In addition to the standard Kanban features, Tasks Stacks let
          you link to pertinent files, quickly communicate with fellow
          assignees, overview progress on the task on a team-by-team basis, and
          see how long the tasks is estimated to take based on the typical
          performace from yours and other organizations.
        </p>
        <br></br>
        <h2 className={h2Class}>Scope Analysis</h2>
        <p>
          Scope Anaysis is an extension of the Task Stack. It is a managerial
          tool that concatenates all the currently active and upcoming Task
          Stacks and displays them in a way that allows you to see the big
          picture. Scope Analysis is designed to get products out the door and
          prevent crunch by giving you realistic estimates as to when your
          project will get completed. Want to know how much your project will be
          affected by adding a new task? Just create a new Proto Stack, which
          will add the task on top of your current Task Stacks, allowing you to
          see the change is estimated delivery date. Want to know what needs to
          be cut? Just take a look at the Biggest Contributors section of the
          page to see what is taking the most amout of time. Not sure if you
          need to hire more developers? See which departments are falling behind
          the most based on their Task Stack performace and make a more informed
          decison. Remember, everything here is built to serve the ultimate goal
          of getting your project out the door and keeping your team happy.
        </p>
        <br></br>
        <h2 className={h2Class}>Artifacts</h2>
        <p>
          Built to fulfil the need of simple project storage, Artifacts bring
          the power of source control to all your team&apos;s assets. In this
          section, you can upload any file you need or links to outside URLs.
          Artifacts can be hooked into a Task Stack so the relevant people have
          quick and easy access to them. Artifacts are also versioned, so you
          can always go back to a previous version or compare two version if
          needed. Certain file types, such as images and videos, can also be
          previewed in-app so you don&apps;t need to download them to your
          computer. Clicking on an Artifact preview will also allow you to
          comment on a specific area or timestamp, which is especially useful
          during the iterative design process.
        </p>
        <br></br>
        <h2 className={h2Class}>Tools</h2>
        <p>
          As the name suggests, the Tools section of the app stores the various
          tools your organization is using for your project, separated into
          sections based on function. Your most recent tools will be displayed
          right on top for easy access. Want to know what tools your team is
          using? Just naviagte to relevant sections to see (great for speeding
          up onboarding). Are you struggling to find a tool that fits a specific
          need? Use the search bar powered by AI to find just what you need, or
          use the filters to narrow down your search. You can also create your
          own tools and add them to the app, allowing you to keep everything in
          one place. The goal with this feature is to keep things more organized
          and cohesive.
        </p>
        <br></br>
        <h1 className={h1Class} id="whats-next">
          What&apos;s Next?
        </h1>
        <p>
          As this is an in-development project, there are still a ton of
          features being ideated on.
        </p>
        <br></br>
        <h2 className={h2Class}>Game Engine Plugins</h2>
        <p>
          Since Virtualso is built with game developers in mind, a highly
          desireable feature would be to integrate certain parts of the app into
          game engines. Imagine being able to update your Task Stacks directly
          from Unreal. Or being able to leave comment nodes in a 3D environment
          and see those comments in the Artifacts section. There are a ton of
          potential use cases for this feature, and I believe it will allow for
          even more efficient developing.
        </p>
        <br></br>
        <h1 className={h1Class} id="demo">
          Demo
        </h1>
        <p>
          A live demo site is currently in the works for Virtualso. Check back
          later for updates!
        </p>
      </div>
    </main>
  );
}
