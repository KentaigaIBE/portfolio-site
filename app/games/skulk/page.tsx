import SimpleTopbar from "@/components/common/simple-topbar";

export default function Skulk() {
  return (
    <main className="flex min-h-screen flex-col items-center pw-24 h-screen animated-gradient">
      <SimpleTopbar title={"Skulk"} upSrc={"/games"}></SimpleTopbar>
    </main>
  );
}
