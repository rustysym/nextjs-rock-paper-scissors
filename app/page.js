import Header from "@/components/header";
import Items from "@/containers/selection";
import Rules from "@/components/rules";
import GameProvider from "@/context/GameContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <GameProvider>
        <Header />
        <Items />
        <Rules />
      </GameProvider>
    </main>
  );
}
