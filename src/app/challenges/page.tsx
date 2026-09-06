import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata = { title: "This week's challenge" };

export default function Page() {
  return (
    <PagePlaceholder
      title="This week's challenge"
      intro="One small thing to try each week. Fifteen minutes, a real result, and you keep whatever you make."
      detail="The first challenges are being written. Each one is a task you would have had to do anyway, done a faster way."
    />
  );
}
