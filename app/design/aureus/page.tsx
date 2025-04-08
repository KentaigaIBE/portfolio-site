import InteractiveImage from "@/components/common/interactive-image";
import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";

export default function Aureus() {
  const h1Class = "text-3xl font-bold mb-4 text-red-300";

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SimpleTopbar title={"Aureus"} upSrc={"/design"}></SimpleTopbar>
      <TitleImage
        name={"Aureus"}
        textSize={"text-[35px] sm:text-[50px] md:text-[125px]"}
        textColor={"text-white"}
        color={"bg-red-300"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusBanner.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="text-black dark:text-white my-8 mx-4 w-2/3 self-center">
        <h1 className={h1Class} id="about-aureus">
          Aureus
        </h1>
        <p>
          Aureus is an financial assistance app designed to help users manage
          and grow their skills in saving, investing, spedning, and more.
          Designed to be simple to use for all users of all levels of financial
          literacy, Aureus is perfect for all levels of knowledge. It is the
          goal of the app to give users the confidence to take control of their
          finances and make informed decisions about their money.
        </p>
        <br></br>
        <h1 className={h1Class} id="features">
          Features
        </h1>
        <p>
          The app is separated into multiple sections, each with a unique
          purpose to help develop financial responsibility. Beyond the overview
          screen, which shows a view of all your connected accounts and their
          value, there are three more sections: lessons, health, and bills.
        </p>
        <br></br>
        <p>
          The lessons section is designed to help users learn about various
          financial topics, such as budgeting, saving, and investing. Each
          lesson is broken down into bite-sized chunks, making it easy to
          digest. Users have a choice on watching videos or reading an article
          to learn. A small quiz will be at the end of each lesson to solidify
          the user&apos;s knowledge. They can then track their progress and earn
          rewards for completing lessons and being consistent.
        </p>
        <br></br>
        <p>
          The health section is built to analyze your finances and give you
          suggestions as to what your options are to improve your monetary
          health and get yourself into a better economic position. For example,
          if you are a recnet grad with student loans to pay off, the app can
          suggest refinancing options, or even provide tips on how to budget
          effectively to pay off your loans faster. This section can also help
          you build an effective financial portfolio The app uses machine
          learning to analyze your spending habits and provide personalized
          recommendations tailored to your financial situation. Importantly,
          Aureus will never suggest that you take any particular action with
          your money, and will merely tell you what your options are and what
          those who were once in your situation have done.
        </p>
        <br></br>
        <p>
          In the bills section, you can track your repeating payments and
          subscriptions. Not only does this provide you with a clear view of
          what you&apos;re paying for each month, but it also allows you to
          cancel these subscriptions from the app itself. In situations where
          that&apos;s not possible, links to the relevant pages of the service
          are provided to make the process as easy as possible. This section
          also provides its own rewards for paying down bills and debt,
          encouraging good financial habits.
        </p>
        <br></br>
        <p>
          The rewards mentioned previoously are a key part of the app. Using
          gamification, the rewards system encourages users to complete lessons,
          pay down bills, and improve their financial health. You can earn
          ribbons and trophies to show off on your profile. Earning a lot of
          rewards is a sign to the user that they are growing and becoming a
          master of their financial journey.
        </p>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-4">
          <InteractiveImage
            image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusGoalsAndRewards.webp"
            imageWidth={856}
            imageHeight={1852}
            text={"Spending goals"}
          />
          <InteractiveImage
            image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusProfile.webp"
            imageWidth={856}
            imageHeight={1852}
            text={"Profile view"}
          />
          <InteractiveImage
            image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusRibbon.webp"
            imageWidth={856}
            imageHeight={1852}
            text={"Example of a reward"}
          />
        </div>
        <br></br>
        <h1 className={h1Class} id="design-tenets">
          Design Tenets
        </h1>
        <p>
          In order to align with the goals of the app, Aureus required a design
          system focused around a few key principles:
        </p>
        <ul className="list-disc list-inside py-4">
          <li>Easy to read and understand</li>
          <li>Accessible to all users</li>
          <li>Easily digestible</li>
          <li>Responsive</li>
          <li>Consistent</li>
        </ul>
        <p>
          Now it&apos;s one thing to have these principles, but it&apos;s
          another to actually implement them, so let&apos;s get into how I
          turned each other these into tangible design choices in the app.
        </p>
        <br></br>
        <p>
          In order to ensure the app is readable, I first ensured that high
          contrast meeting WCAG standards was used on all text and that, in
          areas where contrast was lower, used bigger text. You can see in the
          screenshots below that the high contrast default theme is very easy to
          read even from a distance and on a small device. Drop shadows on text
          are used on lower contrast themes to help with readability.
        </p>
        <InteractiveImage
          image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusOverviewScreen.webp"
          imageWidth={856}
          imageHeight={1852}
          text={"Aureus overview screen"}
        />
        <br></br>
        <p>
          To facilitate accessibility, I also added additional features to make
          the app even easier to use. You can customize the theme of the app to
          match your preferences and make it easier for you to see content, with
          an additional high-contrast mode that is able to be swtiched to on the
          very first onboarding screen. The app also responds to OS-level text
          scaling and dark mode making it even more responsive to user
          preferences.
        </p>
        <br></br>
        <p>
          To make the app digestible and straightforward, I included an
          onboarding section for new users that let&apos;s them set essential
          settings and walks them through the core features of the app. I also
          added screens that explain in detail the various actions you can take
          and letting you confirm before taking them.
        </p>
        <InteractiveImage
          image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusCancelSubscription.webp"
          imageWidth={856}
          imageHeight={1852}
          text={"Cancelling a subscription"}
        />
        <p>
          Responsivenss is a two-way street. You need to make it so what the
          user wants, they get as soon as possible, but they also need to know
          that what they&apos;ve done is what they want. If you don&apos;t
          communicate back to them about what they&apos;re doing, they may make
          a mistake, and in an app that deals with finances it&apos;s especially
          important to avoid that. To facilitate this, all actions are performed
          as soon as the user requests them, with visibile feedback to
          communicate to the user that what they want is being done. When
          someone hits the &quot;cancel subscription&quot; button, that is
          exactly what happens. Something simple like a checkmark popping up is
          enough to communciate to our user that what they wanted was achieved,
          which is a must when it comes to something like cancelling a bill or
          making an investment. If for some reason that action can&apos;t be
          performed, the user is informed why and what steps they can take to
          fix it.
        </p>
        <br></br>
        <p>
          To maintain consistency, I used two design systems meant to mimic the
          overall feeling of the iOS and Android operating systems while keeping
          the apps personal aesthetic. The iOS designs implement the San
          Francisco font and uses other stock iOS iconography when possible. As
          for Android, Google&apos;s Material Design 3 was the baseline,
          following its rigid standards for text, elevation, iconography, and
          color. Embracing these design systems ensure the absolute highest
          amount of consistency, making the app just as natural feeling to use
          as the OS it is installed on. Additionally, the design throughout all
          screens and components is similar, meaning that once you understand
          how one section of Aureus functions, the rest will be very easy to
          pick up.
        </p>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-4">
          <InteractiveImage
            image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusBiilsScreen.webp"
            imageWidth={856}
            imageHeight={1852}
            text={"Aureus on iOS"}
          />
          <InteractiveImage
            image="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusBillsScreenAndroid.webp"
            imageWidth={856}
            imageHeight={1852}
            text={"Aureus on Android"}
          />
        </div>
        <h1 className={h1Class} id="prototype">
          Prototype
        </h1>
        <p>
          Below is the Figma prototype for Aureus. It is fully interactive and
          demonstrates some of the basic workflows available to you.
        </p>
        <iframe
          src="https://embed.figma.com/proto/tKcuWSYaCgYJLXTNmG1SRL/Aureus?node-id=118-2385&viewport=1022%2C877%2C0.37&t=g5atz0IKaEgs4p52-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=118%3A2385&embed-host=Kentaiga"
          allowFullScreen
          className="w-full h-[80vh] md:h-[90vh] my-8"
        />
      </div>
    </main>
  );
}
