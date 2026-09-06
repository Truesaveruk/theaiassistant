import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata = { title: "Where are you with AI?" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Where are you with AI?"
      intro="Five questions, about two minutes. You get a straight read on where you stand and three things to do next. No email needed to see it."
      detail="The quiz is being built. It scores five answers, places you on a beginner to advanced scale, and recommends tools and reading that match rather than whatever is trending."
    />
  );
}
