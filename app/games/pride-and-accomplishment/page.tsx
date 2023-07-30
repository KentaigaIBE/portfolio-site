"use client";
{
  /* Vidstack requires this until version 0.8 comes out */
}

import CollapsibleBox from "@/components/common/collapsible-box";
import FloatQuote from "@/components/common/float-quote";
import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import { MediaOutlet, MediaPlayer } from "@vidstack/react";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import "vidstack/styles/base.css";

export default function PrideAndAccomplishment() {
  const h1Class = "text-3xl font-bold mb-4 text-orange-300";
  const codeString =
    'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.UI;\n\n// This class creates the new "Item" data type used for item info\npublic class Item\n{\n    public int ItemID;\n    public string Name;\n    public string Description;\n    public double Value;\n    public GameObject ItemPrefab;\n}\n\npublic class GameManager : MonoBehaviour\n{\n    // Script References\n    UIManager UI;\n    ButtonInteractions BI;\n\n    // Object References\n    [SerializeField] GameObject chestPrefab; // The chest object\n    Animator currentChestAnimator;\n    GameObject currentChest;\n    [SerializeField] Text accountValueText;\n    [SerializeField] GameObject resultTextParent;\n\n    // Global & File-Wide Variables\n    bool chestSummonAllowed = true;\n    bool chestOpenAllowed = false;\n    double chestOpenPrice = 5.00; // Cost of opening a loot box\n    int randomItemID;\n    GameObject lastItem = null;\n    bool buttonClicked = false;\n\n    public int accountValue = 1000; // Total value of the player\'s account\n    public int currentItemID;\n    public string currentItemName;\n    public string currentItemDesc;\n    public double currentItemValue;\n    public GameObject currentItemPrefab;\n\n    // Item Prefabs\n    List<Item> itemDetails;\n\n    [SerializeField] GameObject itemZeroPrefab;\n    [SerializeField] GameObject itemOnePrefab;\n    [SerializeField] GameObject itemTwoPrefab;\n    [SerializeField] GameObject itemThreePrefab;\n    [SerializeField] GameObject itemFourPrefab;\n    [SerializeField] GameObject itemFivePrefab;\n    [SerializeField] GameObject itemSixPrefab;\n\n    // Start is called before the first frame update\n    void Start()\n    {\n        // Script Connections\n        UI = GameObject.Find("Canvas").GetComponent<UIManager>();\n        BI = gameObject.GetComponent<ButtonInteractions>();\n\n        // PlayerPerf Retrievals\n        accountValue = PlayerPrefs.GetInt("Account Value", 1000);\n\n        // Item List and Details\n\t\titemDetails = new List<Item> { new Item { ItemID = 0, Name = "Absolutely Nothing", Description = "...", Value = 0.00, ItemPrefab = itemZeroPrefab },\n\t\tnew Item { ItemID = 1, Name = "A Single White Pixel", Description = "Technically not nothing...", Value = 0.01, ItemPrefab = itemOnePrefab },\n\t\tnew Item { ItemID = 2, Name = "Pride and Accomplishment", Description = "No no no, you see, it\'s not gambling, it\'s fun!", Value = 1.00, ItemPrefab =  itemTwoPrefab },\n\t\tnew Item { ItemID = 3, Name = "Hot Air", Description = "Our speciality", Value = 0.01, ItemPrefab = itemThreePrefab },\n\t\tnew Item { ItemID = 4, Name = "Legally-Distinct Diamond Sword", Description = "This would be useful for slaying monsters...if there were any in this game", Value = 5.00, ItemPrefab = itemFourPrefab },\n\t\tnew Item { ItemID = 5, Name = "A Post-Ironic Meme", Description = "We do a little trollng", Value = 1.00, ItemPrefab = itemFivePrefab },\n\t\tnew Item { ItemID = 6, Name = "A Mini Loot Box", Description = "Now that\'s meta", Value = 2.50, ItemPrefab = itemSixPrefab },\n        };\n    }\n\n    // Update is called once per frame\n    void Update()\n    {\n        // Adjacent Functions\n        SummonChest();\n        UIUpdates();\n    }\n\n    void SummonChest() // This function controls the spawning and destruction of the chest and its associated animations\n    {\n        // Local Declarations\n        IEnumerator coroutine;\n\n        Animation chestOpenAnimation;\n\n        /* ONLY ENABLE AFTER IMPLEMENTING ALL ITEMS //\n        int numberOfItems = itemDetails.Count();\n        randomItemID = Random.Range(0, numberOfItems);*/\n\n        randomItemID = Random.Range(0, 5); // DELETE AFTER IMPLEMENTING ALL ITEMS //\n\n        currentItemID = itemDetails[randomItemID].ItemID;\n        currentItemName = itemDetails[currentItemID].Name;\n        currentItemDesc = itemDetails[currentItemID].Description;\n        currentItemValue = itemDetails[currentItemID].Value;\n        currentItemPrefab = itemDetails[currentItemID].ItemPrefab;\n\n        // Spawn and Animation Control\n        if (Input.GetKeyUp(KeyCode.Mouse0) || Input.GetKeyUp(KeyCode.Space))\n        {\n            if (chestSummonAllowed && buttonClicked == true && accountValue >= chestOpenPrice) // Press left mouse or spacebar\n            {\n                // DEBUG //\n                Debug.Log("Chest spawn successful");\n\n                chestSummonAllowed = false;\n                buttonClicked = false;\n\n                Destroy(lastItem);\n                resultTextParent.SetActive(false);\n\n                currentChest = Instantiate(chestPrefab, new Vector3(13, -2.43f, -3), Quaternion.Euler(0, 90, -10)); // Spawns Chest out of bound to the left\n\n                PlayerPrefs.SetInt("Account Value", accountValue); // Write accountValue to PlayerPref key\n\n                currentChestAnimator = currentChest.GetComponent<Animator>();\n                currentChestAnimator.SetTrigger("slideInTrigger");\n\n                coroutine = ChestInteractionCooldown("PreventEarlyOpen");\n                StartCoroutine(coroutine);\n            }\n            else if (chestOpenAllowed && currentChest != null)\n            {\n                // DEBUG //\n                Debug.Log("Chest opened successfully");\n\n                chestOpenAnimation = currentChest.GetComponent<Animation>();\n                chestOpenAnimation.Play("ChestAnim");\n\n                chestOpenAllowed = false;\n                currentChest = null;\n\n                coroutine = ChestInteractionCooldown("DelayChestDestruction");\n                StartCoroutine(coroutine);\n            }\n            else if (chestSummonAllowed && buttonClicked == true && accountValue < chestOpenPrice)\n            {\n                accountValueText.text = "Congrats, you\'re bankrupt!";\n            }\n            else\n            {\n                Debug.LogWarning("SummonChest() didn\'t run any Spawn and Animation Control function. Is the cooldown active?");\n            }\n        }\n\n        // Interaction Cooldowns\n        IEnumerator ChestInteractionCooldown(string goal)\n        {\n            if(goal == "PreventEarlyOpen")\n            {\n                yield return new WaitForSeconds(2);\n                chestOpenAllowed = true;\n            }\n            else if (goal == "DelayChestDestruction")\n            {\n                yield return new WaitForSeconds(3);\n                currentChestAnimator.SetTrigger("slideOutTrigger");\n                lastItem = Instantiate(currentItemPrefab);\n                UI.UpdateItemText(currentItemID);\n                resultTextParent.SetActive(true);\n\n                yield return new WaitForSeconds(4);\n                chestSummonAllowed = true;\n                currentChestAnimator = null;\n                Destroy(currentChest);\n                BI.openChestButton.SetActive(true);\n\n                // DEBUG //\n                Debug.Log("Chest destroyed!");\n            }\n\n        }\n    }\n\n    void UIUpdates()\n    {\n        accountValueText.text = "$" + string.Format("{0:n0}", accountValue);\n    }\n\n    public void ButtonClicked()\n    {\n        buttonClicked = true;\n    }\n}';

  return (
    <main className="flex min-h-screen flex-col items-center pw-24 overflow-x-clip">
      <SimpleTopbar
        title={"Pride and Accomplishment"}
        upSrc={"/games"}
      ></SimpleTopbar>
      <TitleImage
        name={"Pride and Accomplishment"}
        textSize={"text-[25px] sm:text-[35px] md:text-[75px]"}
        textColor={"text-blue-300"}
        color={"bg-blue-200"}
        blur={"blur-[3px]"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/pride-and-accomplishment.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="text-black dark:text-white my-8 mx-4 w-screen p-4">
        <h1 className={h1Class} id="introduction">
          Introduction
        </h1>
        <p>
          The gaming industry is one of constant evolution. Looking at what was
          available to us 20 years ago and comparing that to what we have now is
          proof enough of how fast things move in the gaming sphere. Alongside
          the evolution of the games themselves, the monetization of these games
          has also changed a lot. In recent years, a newer tactic known as
          microtransactions took the industry by storm. As the name implies,
          microtransactions involve spending smaller amounts of money, typically
          under $10, to get something within a video game. The types of
          microtransactions vary based on the game, from “skins” to boosts, to
          the main topic of today: loot boxes.
        </p>
        <br></br>
        <p>
          Loot boxes are like reward packages that give you random items. They
          were first popularized in the Blizzard arena shooter game Overwatch
          released in 2016 where they rewarded players with cosmetic items.
          These loot boxes could be earned through gameplay, but they could also
          be bought with real-world money. These loot boxes were met with mixed
          reception, especially since they were in a game that already costs
          $60. Despite that, the financial success of the system led to it being
          adopted across the industry in various titles. As time went on,
          developers and publishers found more and more ways to get money out of
          their players using these loot boxes. Games like Call of Duty adopted
          a system where you could get new guns from loot boxes that had
          exceptionally low drop rates. First introduced in Black Ops III, there
          were reports of players spending tens of thousands of dollars on these
          loot boxes just to get all the guns. As someone who played this game
          myself when I was younger, it was pretty much impossible to get one of
          these weapons unless you spent money on the boxes, even though you
          could earn them in-game. This is where loot boxes began to cross the
          line from questionable inclusions to borderline predatory.
        </p>
        <br></br>
        <p>
          Another infamous example comes from the FIFA and Madden series of
          games from publisher Electronic Arts. In these games, you can obtain
          card packs that have various players from the FIFA and NFL sports
          leagues respectively. There are horror stories of people spending
          millions of dollars year after year to create the best team they can.
          What makes these systems even more egregious is that not only are
          paying players at a huge advantage, creating a pay-to-win economy
          around the product, but these loot boxes are also advertised to
          children. Research has shown that presenting children with an
          opportunity to gamble creates within them an unnaturally high
          likelihood that they will develop a gambling addiction in adulthood.
          While children do not make up the vast majority of the income of these
          microtransactions, they do make up the largest proportion of players
          by a good mile, and there is evidence that some players of these games
          can grow up to be “whales” who throw an unhealthy amount of money at
          these games, often at the detriment of the rest of their finances.
        </p>
        <br></br>
        <h1 className={h1Class} id="pride-and-accomplishment">
          Pride and Accomplishment
        </h1>
        <FloatQuote
          quote={
            "“The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.”"
          }
          attribution={"— u/EACommunityTeam on Reddit"}
          lineColor={"bg-orange-300"}
        ></FloatQuote>
        <p>
          The quote above is an infamous statement from an EA community manager
          on Reddit regarding the microtransactions seen in the game Star Wars
          Battlefront II (2017). In the game, unlocking fan-favorite characters
          like Darth Vadar used to take up to 40 hours to unlock, even if you
          bought the deluxe edition of the game for $80. This prompted users on
          Reddit to comment on this outrageous system that was built purely to
          drive sales towards the premium currency featured in the game. This
          response by EA ended up becoming the most downvoted post in Reddit
          history with over 650k downvotes. The phrase “pride and
          accomplishment” has become sort of a satirical rallying cry for people
          against the idea of over-monetization in video games, and it works as
          a perfect title for what I have made: a video game about loot boxes.
        </p>
        <br></br>
        <p>
          Pride and Accomplishment focuses on re-creating the loot box
          experience in a sandboxed environment. Players do what they do best
          and open the chest for prizes, except in this game, the prizes are a
          little different. What you get will be accurate to the real-world loot
          box experience: vapid rewards that are not worth the price of
          admission.
        </p>
        <div className="relative md:left-1/4 md:w-1/2 my-8">
          <MediaPlayer
            title="Pride and Accomplishment Demo"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/pride-and-accomplishment-demo.webm"
            load="idle"
            autoplay
            muted
            loop
          >
            <MediaOutlet />
          </MediaPlayer>
        </div>
        <h1 className={h1Class} id="the-process">
          The Process
        </h1>
        <p>
          The engine I chose to create this game in was Unity. Unity is a very
          versatile engine that allows you to build and run games quickly on a
          variety of platforms. Unity uses the C# coding language for most of
          what a game requires, so that is the language I adopted as well. I
          used Microsoft Visual Studio 2019 as my IDE (integrated development
          environment) where I wrote most of the code for this game. Photoshop
          was used to make some of the 2D assets like the background and
          textures. I also needed to make some 3D models for the project, and
          since I was going for a very simple style, I decided to use the
          program Blockbench, which is actually a 3D modeling software created
          for making models for Minecraft mods and animations, however, I took
          advantage of its OBJ export feature to port these models over to Unity
          with no real issue. All these tools were used on the Windows 11
          operating system.
        </p>
        <br></br>
        <p>
          The first order of business was to create a working prototype of the
          game. I did this by setting up a simple scene in Unity that only had
          the background and some text boxes. I then began to write some code
          that will allow for basic functionality like selecting a random item
          from a list and writing its name to the text box. Once I got that
          working, I began to make all the necessary models in Blockbench and
          texture them in Photoshop. I then wrote more complex logic for the
          chest opening process and created some animations within Unity to make
          the whole process more presentable. From here on out it was just about
          fixing bugs and trying to add as many items as I could before the
          deadline. Below is one of the final iterations of the code for the
          game. This file, in particular, handles the main logic of the project.
        </p>
        <CollapsibleBox
          title={"GameManager.cs, just one of the files I wrote for the games"}
          barColor={"bg-gray-700"}
          backgroundColor={"bg-gray-800"}
        >
          <SyntaxHighlighter
            language="csharp"
            style={tomorrowNightEighties}
            showLineNumbers={true}
            startingLineNumber={1}
            customStyle={{
              background: "none",
              width: "96vw",
              overflowX: "scroll",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </CollapsibleBox>
        <h1 className={h1Class} id="reception">
          Reception
        </h1>
        <p>
          After creating an acceptable build of the game, I shared the product
          with some of my peers, friends, and family. Below are just some of
          their reactions to what they played:
        </p>
        <br></br>
        <FloatQuote
          quote={"“Truly an unrivaled cinematic masterpiece.”"}
          attribution={"— Kevin G., a Miami University Junior"}
          lineColor={"bg-orange-300"}
        ></FloatQuote>
        <FloatQuote
          quote={"“This is definitely something only you would make.”"}
          attribution={"— My girlfriend, an Ohio Wesleyan University Sophomore"}
          lineColor={"bg-orange-300"}
        ></FloatQuote>
        <FloatQuote
          quote={"“What the heck is a loot box?”"}
          attribution={"— My mother"}
          lineColor={"bg-orange-300"}
        ></FloatQuote>
        <p>
          Just like a trailer looking at a low-quality game journalism site, I
          have cherry-picked the best quotes. On a more serious note, I had
          conversations with all of the seven people I had play this game. These
          people all had different perspectives on the gaming industry. People
          like Kevin are hardcore gamers and play games every day. He is pretty
          acutely aware of the nuances of the industry and the problems it has.
          Then there are people like Chloe, who are casual gamers and are only
          partially aware of thing things affecting the industry. And finally,
          there are people like my mother, who have absolutely no clue what is
          going on in that sphere at all. These diverse perspectives give a lot
          of insight into the general reception of monetization methods like
          loot boxes.
        </p>
        <br></br>
        <p>
          The general consensus amongst the players was that my game sucked. In
          my eyes, I consider that a win. I asked each player why they thought
          that game wasn&apos;t fun, and it mostly came down to one thing: loot
          boxes do not improve (or create) worthwhile experiences for a player.
          Talking further, I wondered how this game changed the perspective of
          loot boxes in general for the players. While it didn&apos;t leave much
          of an impact on the less experienced players, people already familiar
          with the industry noted how it gave them a new perspective on the
          absurdity of loot boxes. I pointed out how games like Overwatch, Call
          of Duty, Battlefront, and more have already tied big chunks of their
          progression systems in with loot boxes, creating little micro-games
          like mine within them, all while you still have to spend $60 on the
          base game. Needless to say, they did not appreciate that idea.
          Unfortunately, that is the reality we live in.
        </p>
        <br></br>
        <h1 className={h1Class} id="conclusion">
          Conclusion
        </h1>
        <p>
          Reflecting back on this project, it was pretty tough. I only had about
          two-and-a-half weeks to finish up the game itself to have enough time
          to get people&apos;s reactions in a timely manner. There was more I
          would&apos;ve liked to do with the game, namely adding more items and
          creating more interesting systems that really drive the point I&apos;m
          trying to make home, but unfortunately, those got left on the cutting
          room floor. However, I still think my game was able to make a
          compelling argument as to how silly it is that loot boxes have
          prevailed in the gaming industry as much as they have. No longer does
          paying for something mean you&apos;ll actually receive anything of
          note, but rather something small and ultimitely meaningless to your
          enjoyment (and likely something you didn&apos;t want at all).
        </p>
        <br></br>
        <p>
          The gaming industry is going in an interesting direction. Now more
          than ever it seems that the creativity of countless developers is
          being sacrificed for the sake of profit. Loot boxes are something that
          actively hurt the quality of the games they&apos;re included in, and
          as someone who desires to pursue a career in the industry, it is a
          little disheartening seeing the medium turn into a cash cow for
          multi-billion dollar companies. I hope that one day people can see
          what things like loot boxes are doing to the quality of the game they
          play and the harmful effects they can potentially have on some
          players.
        </p>
        <br></br>
        <h1 className={h1Class} id="download">
          Download
        </h1>
        <p>
          Pride and Accomplishment is free and available to anyone using a
          browser. The online version is powered by WebGL and thus must be run
          on an actual computer (not a phone).
        </p>
        <iframe
          className="mt-4 max-w-full"
          src="https://itch.io/embed/1311842?bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636"
          width="552"
          height="167"
        >
          <Link href="https://kentaiga.itch.io/pride-and-accomplishment">
            Pride and Accomplishment by Kentaiga
          </Link>
        </iframe>
      </div>
    </main>
  );
}
