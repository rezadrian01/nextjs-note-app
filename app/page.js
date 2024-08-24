import AddButton from "@/components/add-button";
import Notes from "@/components/notes/notes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-4 md:px-16 lg:px-24">
      <Notes />
      <AddButton />
    </main>
  );
}
