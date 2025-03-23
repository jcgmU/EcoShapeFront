import Image from "next/image";
import Link from "next/link";
import CardVolumenMaceta from "@/components/cards/CardVolumenMaceta";
import CardResistenciaMaceta from "@/components/cards/CardResistenciaMaceta";
import CardVolumenCono from "@/components/cards/CardVolumenCono";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardVolumenMaceta />
          <CardResistenciaMaceta />
          <CardVolumenCono />
        </div>
      </main>
    </div>
  );
}
