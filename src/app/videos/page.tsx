import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata = { title: "Videos worth watching" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Videos worth watching"
      intro="A short list of genuinely useful YouTube videos, sorted by how much you already know. Nothing over twenty minutes."
      detail="Being assembled now, grouped into playlists: getting started with prompting, setting up the main tools, and real business examples."
    />
  );
}
