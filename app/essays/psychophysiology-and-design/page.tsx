import FloatQuote from "@/components/common/float-quote";
import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import Image from "next/image";

export default function PsychophysiologyAndDesign() {
  const h1Class = "text-3xl font-bold mb-4 text-amber-300";
  const h2Class = "text-lg font-bold mb-4 text-amber-200";

  return (
    <main className="flex min-h-screen bg-white dark:bg-black flex-col">
      <SimpleTopbar
        title={"Psychophysiology and Design"}
        upSrc={"/essays"}
      ></SimpleTopbar>
      <TitleImage
        name={"Psychophysiology and Design"}
        textSize={"text-[20px] sm:text-[25px] md:text-[65px]"}
        textColor={"text-amber-300"}
        color={"bg-blue-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/eyetracking_header.webp"
        }
        className="mt-8 md:mt-12"
      ></TitleImage>
      {/* Body conent */}
      <div className="my-8 mx-4 w-3/4 self-center">
        <h1 className={h1Class} id="introduction">
          Introduction
        </h1>
        <p>
          One of the most important aspects of designing anything is user
          experience testing. In a typical scenario, designers might choose to
          perform usability tests to see how users navigate through their
          product, or they might conduct interviews with prospective customers
          and gauge what direction their product should take. As is expected of
          this type of research, most of the data we collect will be
          qualitative. This makes sense, you are trying to gauge a user&apos;s
          experience, something that you typically wouldn&apos;t explain with
          numbers. However, an emerging subfield in user research can allow us
          to greatly improve the collection of quantitative data. This field is
          known as biometrics.
        </p>
        <br></br>
        <p>
          After conducting those tests, we began phase two, which saw our small
          groups performing research independently on four new pieces of media.
          Similar to the first part, we compared two sites, this time Sephora
          and Ulta. We also analyzed the site Elite Daily in a similar fashion
          to Khan Academy. Additionally, we added a video segment to our testing
          where we explored the 2014 video advertisement “Maddie” by Chevrolet.
          Unlike the previous section, all the tasks we had our users perform
          were entirely ideated by our team.
        </p>
        <br></br>
        <h1 className={h1Class} id="project-overview">
          Project Overview
        </h1>
        <p>
          Our research is split into two sections. Firstly, we explored
          biosensor technology with a more guided approach. Our team was given
          the opportunity to observe biometric analysis in action through tests
          run on the sites Crutchfield, Turntable Lab, and Khan Academy. For
          Crutchfield and Turntable Lab, back-to-back comparisons were performed
          where we had participants complete tasks on one site and then repeat
          on the other, attempting to see which site was better. As for Khan
          Academy, we instead focused on certain elements of the page we saw as
          problematic and had users try and work through them. All of these
          tasks were created by having the whole class of peers come together to
          determine what we wanted to see users do each step of the way.
        </p>
        <br></br>
        <p>
          After conducting those tests, we began phase two, which saw our small
          groups performing research independently on four new pieces of media.
          Similar to the first part, we compared two sites, this time Sephora
          and Ulta. We also analyzed the site Elite Daily in a similar fashion
          to Khan Academy. Additionally, we added a video segment to our testing
          where we explored the 2014 video advertisement “Maddie” by Chevrolet.
          Unlike the previous section, all the tasks we had our users perform
          were entirely ideated by our team.
        </p>
        <br></br>
        <h1 className={h1Class} id="tools-of-the-trade">
          Tools of the Trade
        </h1>
        <h2 className={h2Class} id="tobii-eye-tracker">
          Tobii Eye Tracker
        </h2>
        <p>
          The Tobii Eye Tracker does what it says on the tin: it tracks people’s
          eyes. In UX testing, we can use the eye tracker to see where users are
          looking while they perform their tests. Using another program, we can
          not only track the eye movements, but see other data like how long
          someone lingered on a certain point or how long it took for someone to
          focus in on a specified area.
        </p>
        <br></br>
        <h2 className={h2Class} id="galvanic-skin-response-device">
          Galvanic Skin Response Device
        </h2>
        <p>
          A galvanic skin response (GSR) device measures the tiny amounts of
          sweat you produce when experiencing an emotional reaction. This device
          allows us to measure a participant’s true reactions to whatever we
          show them without having to worry about people trying to keep a
          straight face or people with lower amounts of emotional valence.
        </p>
        <br></br>
        <h2 className={h2Class} id="imotions-lab">
          iMotions Lab
        </h2>
        <p>
          The iMotions Lab tool is built to collect data from biosensors and
          create reports with them. The program has a variety of applications
          for which it can be used, but for the purposes of UX research, we took
          advantage of Lab to display our user&apos;s eye tracking data,
          generate emotional analysis data from a video of the
          participant&apos;s face, and graph the user&apos;s level of sweat.
        </p>
        <br></br>
        <h1 className={h1Class} id="project-a">
          Project A: Of Turntables and Khans
        </h1>
        <p>
          For our first project, the group performed one test split into two
          parts. The first focused on the comparison between an item page on
          Crutchfield and a corresponding page of the same item on Turntable
          Lab. The second section focused on detecting problems with Khan
          Academy without any comparison. Both sections follow the same general
          format of asking users to perform specific tasks and then observing
          them, however, each section follows a different protocol for how our
          users should convey information.
        </p>
        <br></br>
        <h2 className={h2Class} id="crutchfield-and-turntable-lab-findings">
          Crutchfield and Turntable Lab Findings
        </h2>
        <p>
          Through our testing, the team was able to find a couple of areas where
          Crutchfield outdid Turntable Lab, especially on the dissemination of
          information. Participants were given the following task:
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"You want to see how big the turntable is. LMWWYWD (let me watch what you would do) and tell us what those dimensions are when you are done."'
          italicize
        />
        <p>
          We found that most participants were able to find the relevant
          information much quicker on Crutchfield compared to Turntable Lab.
          After further analysis, we concluded that this is a “target
          findability” issue with Turntable Lab and would be best remedied by
          using a clearer layout as Crutchfield does.
        </p>
        <br></br>
        <p>
          Consistent with the previous test, there are other target findability
          issues with Turntable Lab. When asking users to find the reviews
          section, Crutchfield provided multiple paths to arrive and
          participants were much quicker to arrive a the correct destination.
          There are also some areas where both sites struggled with findability,
          such as with financing options and the return policy.
        </p>
        <br></br>
        <h2 className={h2Class} id="khan-academy">
          Khan Academy
        </h2>
        <p>
          For Khan Academy, we also found plenty of issues with noticeability
          and unintuitive design that caused users to struggle. Take for example
          the following task:
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"Imagine the first thing you want to do is get an overview of the Khan Academy process. LMWWYWD. Be sure to stay on the homepage and don&apos;t forget to think aloud. Tell us when you are done."'
          italicize
        />
        <p>
          When watching users complete this task, we witnessed with the eye
          tracker that while they look directly at the target section of the
          page, that being the “Why Khan Academy Works” portion, they simply
          glanced right over it and scrolled right through it more often than
          not. This showed to us an issue of target perception. Testers simply
          didn&apos;t notice the relevant information was right in front of
          them.
        </p>
        <br></br>
        <p>
          Similar to the last task, the task where we asked users the following
          also proved problematic:
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"Click on the Courses link in the top left corner to find the AP College Statistics class. Don&apos;t forget to think aloud, and tell us when you are done."'
          italicize
        />
        <p>
          Using our eye tracker, we were able to see how users sifted through
          the course list on the website. We found that the layout of the list
          made it much harder to find the correct content than it had to be. We
          compiled the “time to first fixation” on the area of interest we
          created around the correct class (something you can set up in
          iMotions) into a chart, where we saw how different users performed. We
          witnessed that users would all read the list in different ways. Some
          went down and up, some read left to right, some went all over the
          place, and some got lucky and went right to the correct result. This
          told us that the content, which was essentially a wall of links, was
          overwhelming and hard to sift through and would benefit from a
          redesign.
        </p>
        <br></br>
        <h1 className={h1Class} id="project-b">
          Project B: Makeup, News, and Dogs
        </h1>
        <p>
          Similar to the previous project, this project focuses on a comparison
          between two rival sites and one standalone study. The comparison is
          between Ulta Beauty and Sephora. Same as before, we are comparing the
          exact same product, with the difference being how each website
          displays the page. The standalone study is with the news site Elite
          Daily, where after giving users an initial look at the site, we told
          them their tasks and asked them to speak aloud so we knew what was
          going through their minds as we watched them. Finally, we showed our
          users an advertisement that was going for a specific emotional
          response, and using our facial expressions analysis and GSR data we
          sought to find out if the video had the effect it desired.
        </p>
        <br></br>
        <h2 className={h2Class} id="ulta-and-sephora">
          Ulta & Sephora
        </h2>
        <p>
          First let&apos;s start with something both sites get wrong: the review
          filter bar. Given the following task, not a single one of our
          participants completed it successfully.
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"You want to read a review that includes an image. Without actually clicking on an image, show us how you would navigate to the review. LMWWYWD."'
          italicize
        />
        <p>
          After reviewing our eye-tracking data, we witnessed that most of our
          participants didn&apos;t even look at the filter bar at all, let alone
          the content filter that would allow them to complete the task
          successfully. Obviously, this is a target findability issue, and both
          sites would need to improve the way they present their filters.
        </p>
        <br></br>
        <p>
          Another finding on these two sites was that Sephora does a better job
          than Ulta at highlighting key ingredients that may be important to
          users. For our testing, we asked users to complete the following task:
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"You have a sensitivity to hyaluronic acid and want to find out if the product includes it. LMWWYWD."'
          italicize
        />
        <p>
          On Sephora, all five of our participants were able to finish the task
          in under 12 seconds, correctly identifying where the ingredient is on
          the page. Ulta, on the other hand, tells a different tale. three out
          of our five couldn&apos;t finish the task at all. The two that did
          found it in a less convenient spot (the ingredients list) than they
          otherwise could&apos;ve, since they knew no better way to find the
          answer. The reason for this discrepancy is simple. Ulta has an
          at-a-glance key ingredients section that tells you using icons and
          larger text what is within the product. Whereas on Ulta, you have to
          read through the small texts under the details dropdown in order to
          find the hyaluronic acid. The ingredients list is a long string of
          text that is very difficult to sift through, but it is another avenue
          for finding the right answer. We would suggest Ulta adopt
          Sephora&apos;s idea of a key ingredients section to improve user
          experience.
        </p>
        <br></br>
        <h1 className={h1Class} id="project-c">
          Elite Daily
        </h1>
        <p>
          When testing on this site, we had users follow the speak-aloud
          protocol, where they were to give us a running stream of their
          thoughts as we went through the tests. This allowed us to gather the
          more typical qualitative data associated with UX testing while still
          being able to obtain our quantitative data.
        </p>
        <br></br>
        <p>
          The first finding we discovered was that users have a difficult time
          finding important content on the homepage due to problematic and
          overwhelming pieces of information. Our best evidence comes from one
          of our tasks where we ask users to find something in particular
          further down the page. During the journey down, almost all of our
          users got hung up on a particular section of the site, that being the
          large scrolling wall of headlines. Below our some quotes from our
          participants as they were passing by the monstrosity:
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"Woah this is really confusing, it needs to stop moving so I can read it"'
          attribution="— Participant Kaitlyn"
        />
        <FloatQuote
          lineColor="bg-blue-300"
          quote="&quot;I don't even like know what that means and like it's just a lot&quot;"
          attribution="— Participant Nina"
        />
        <p>
          Note that this section had nothing to do with our target, it just so
          happened to be in the way. Eye tracking data showed how upon
          encountering this section, users&apos; eyes zipped all around the area
          trying desperately to read all the headlines as they flew off to the
          right and reappeared on the left. This caused a significant slowdown
          in the quest of completing the task. We suggest that the section be
          reworked from the ground up so as to not overwhelm readers on the
          site.
        </p>
        <br></br>
        <p>Our second finding comes from the following task:</p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"Starting on the Elite Daily home page, search for content about food. Tell us when you&apos;re done. LMWWYWD"'
          italicize
        />
        <p>
          We found after testing that the vertical menu that serves as a form of
          navigation is not as helpful as it could be due to its placement at
          the bottom of the homepage. When presented with this task, almost all
          of our users decided it would be more efficient to just search for
          food rather than try hunting for it on the homepage, despite there
          being a dedicated tab for it. The following quote sums up quite well
          the philosophy behind this decision:
        </p>
        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"Already having been on the website, I feel like it was kind of chaotic to scroll through, so I&apos;m going to go to menu and search."'
          attribution="— Participant Taylor"
        />
        <p>
          Now obviously the results of this test were skewed by the users&apos;
          previous experiences in the task performed immediately beforehand.
          That being said, I think it&apos;s telling that the site pigeonholes
          users into one area due to their unwillingness to brave the actual
          content on the page. We suggested that they should just remove the
          section where the food articles were contained since it served no
          purpose besides cluttering up the page.
        </p>
        <br></br>
        <h1 className={h1Class} id="project-d">
          “Maddie” by Chevrolet
        </h1>
        <p>
          Our final test was simple: watch this ad. No commentary is needed,
          there are no tasks to do, just act naturally. The data will be
          collected through all of the previously explained methods.
        </p>
        <br></br>
        <p>
          Going into this test, we settled on some expectations in our data. We
          identified four areas where we thought the strongest emotional
          reactions would occur, most notably when sad or funny moments are on
          screen. After the test, we compared our predictions with the actual
          results and used them to judge how effective the ad was rhetorically.
          What we found was quite interesting.
        </p>
        <br></br>
        <span className="flex flex-col justify-evenly sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 items-center">
          <Image
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/maddie-chart-2.webp"
            alt=""
            width={250}
            height={200}
            className="h-fit sm:w-[40%] border-blue-200 border-8 rounded-xl hover:scale-110 transition-transform duration-200"
          ></Image>
          <Image
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/maddie-chart-1.webp"
            alt=""
            width={250}
            height={200}
            className="h-fit sm:w-[40%] border-blue-200 border-8 rounded-xl hover:scale-110 transition-transform duration-200"
          ></Image>
        </span>
        <br></br>
        <p>
          The first chart on the left shows GSR data for the moment when the dog
          growls at the boyfriend in the ad, a funny scene. We see here that
          three out of the five participants experienced an elevation of sweat
          levels at this point, indicating an emotional response. The same can
          not be said for the sad parts of the video. On the right, this shows
          the same GSR data towards the end of the video where we see the dog
          grow old and its owner being affectionate. This moment generate only
          one peak, and it was from a user who was experiencing a high level of
          sweat as a baseline.
        </p>

        <br></br>
        <FloatQuote
          lineColor="bg-blue-300"
          quote='"For a second I thought the video was going to be a dog shelter, super sad video."'
          attribution="— Participant Jack"
        />
        <p>
          As you can see, people&apos;s expectations of the ad were not exactly
          met, and the ad fails to achieve the emotional response it was going
          for. In short, it wasn&apos;t sad enough to illicit any substantial
          feelings.
        </p>
        <br></br>
        <h1 className={h1Class} id="conclusion">
          Conclusion
        </h1>
        <p>
          Looking back on my experience on this project, I&apos;ve learned a lot
          about the tools and methods behind biometric user research. I learned
          how to use these tools to collect data and then use that data to
          create findings. I learned the different types of areas of interest
          and how to use them when eye tracking. I learned how to write
          effective tasks. I learned the difference between summative and
          formative testing. All of these things are now a part of my arsenal
          and can certainly be applied to future UX tests I conduct or oversee
          in the future.
        </p>
      </div>
    </main>
  );
}
