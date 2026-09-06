import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata = { title: "Prompt library" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Prompt library"
      intro="Prompts you can copy straight into ChatGPT or Claude, each with a short note on why it works so you can write your own next time."
      detail="The library is being written now. Every prompt gets tested before it goes in, and none of them are the kind you have already seen on LinkedIn."
    />
  );
}
