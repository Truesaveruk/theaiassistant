import Link from "next/link";
import { getSupabase, type AiTool } from "@/lib/supabase";
import { ScoreBlock, PriceTag } from "@/components/ScoreBlock";

export const revalidate = 300;

export const metadata = {
  title: "AI tool reviews",
  description:
    "Honest ratings for the AI tools UK business owners keep hearing about. What each one is good at, and what it isn't.",
};

const CATEGORIES = [
  "Writing",
  "Image",
  "Coding",
  "Video",
  "Productivity",
  "Audio",
  "Analytics",
];

async function getTools(category?: string, price?: string): Promise<AiTool[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  let query = supabase.from("ai_tools").select("*").order("name");
  if (category) query = query.eq("category", category);
  if (price) query = query.eq("price", price);
  const { data } = await query;
  return (data as AiTool[]) ?? [];
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded border px-3 py-[6px] text-[13px] ${
        active
          ? "border-pine bg-pine text-white"
          : "border-rule text-muted hover:bg-panel hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: { category?: string; price?: string };
}) {
  const { category, price } = searchParams;
  const tools = await getTools(category, price);

  return (
    <div className="mx-auto max-w-content px-5 py-16">
      <h1 className="max-w-[18ch] text-[36px] font-extrabold leading-[1.05] tracking-tightest sm:text-[46px]">
        AI tool reviews
      </h1>
      <p className="prose-measure mt-6 text-[17px] leading-relaxed text-muted">
        Rated on how easy each tool is, who it suits, and whether it pays off.
        Every entry says what the tool is bad at as well as what it&rsquo;s good
        at, because that&rsquo;s usually the part that saves you money.
      </p>

      <div className="mt-10 space-y-3">
        <div className="flex flex-wrap gap-2">
          <FilterLink href="/tools" active={!category}>
            All categories
          </FilterLink>
          {CATEGORIES.map((c) => (
            <FilterLink
              key={c}
              href={`/tools?category=${c}${price ? `&price=${price}` : ""}`}
              active={category === c}
            >
              {c}
            </FilterLink>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterLink
            href={category ? `/tools?category=${category}` : "/tools"}
            active={!price}
          >
            Any price
          </FilterLink>
          {["Free", "Freemium", "Paid"].map((p) => (
            <FilterLink
              key={p}
              href={`/tools?${category ? `category=${category}&` : ""}price=${p}`}
              active={price === p}
            >
              {p}
            </FilterLink>
          ))}
        </div>
      </div>

      {tools.length === 0 ? (
        <div className="mt-12 border border-dashed border-rule px-6 py-14">
          <p className="prose-measure text-[15px] text-muted">
            No reviews here yet. Once the database is connected, this fills with
            rated tools — and you can filter by what you actually need.
          </p>
        </div>
      ) : (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="flex flex-col border border-rule p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-[19px] font-bold tracking-tightest">
                    <Link href={`/tools/${tool.slug}`} className="hover:text-pine">
                      {tool.name}
                    </Link>
                  </h2>
                  {tool.vendor && (
                    <p className="mt-1 text-[13px] text-muted">{tool.vendor}</p>
                  )}
                </div>
                <PriceTag price={tool.price} />
              </div>

              {tool.description && (
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {tool.description}
                </p>
              )}

              {tool.best_for && tool.best_for.length > 0 && (
                <p className="mt-4 text-[14px] leading-relaxed">
                  <span className="font-semibold">Good for </span>
                  <span className="text-muted">{tool.best_for.join(", ")}</span>
                </p>
              )}
              {tool.not_for && tool.not_for.length > 0 && (
                <p className="mt-1 text-[14px] leading-relaxed">
                  <span className="font-semibold">Not for </span>
                  <span className="text-muted">{tool.not_for.join(", ")}</span>
                </p>
              )}

              <div className="mt-6">
                <ScoreBlock
                  usability={tool.usability_score}
                  skill={tool.skill_level}
                  outcome={tool.outcome_score}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-16 border-t border-rule pt-10">
        <h2 className="max-w-[24ch] text-[24px] font-bold leading-tight tracking-tightest">
          Still not sure which of these fits how you actually work?
        </h2>
        <Link
          href={`/quiz${category ? `?category=${category}` : ""}`}
          className="mt-6 inline-block rounded bg-pine px-6 py-3 text-[15px] font-medium text-white hover:opacity-90"
        >
          Answer five questions
        </Link>
      </div>
    </div>
  );
}
