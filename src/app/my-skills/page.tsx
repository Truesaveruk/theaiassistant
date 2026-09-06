import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata = { title: "Skill tracker" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Skill tracker"
      intro="Keep a record of what you have learned, and see how far you have come rather than how far there is to go."
      detail="This one is coming later. The rest of the site works without an account, and that is deliberate — nothing here should need a login to be useful."
    />
  );
}
