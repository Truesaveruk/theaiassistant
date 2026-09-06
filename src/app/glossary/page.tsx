import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata = { title: "Plain English glossary" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Plain English glossary"
      intro="Every AI term you keep nodding along to, explained properly, with an everyday comparison and a line on why it matters to your business."
      detail="Being written now. If a definition needs another bit of jargon to explain it, it is not finished."
    />
  );
}
