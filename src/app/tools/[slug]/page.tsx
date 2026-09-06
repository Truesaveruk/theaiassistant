import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupabase, type AiTool } from "@/lib/supabase";
import { ScoreBlock, PriceTag } from "@/components/ScoreBlock";
import AuthorBox from "@/components/AuthorBox";

export const revalidate = 300;

async function getTool(slug: string): Promise<AiTool | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data } = await supabase
    .from("ai_tools")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (data as AiTool) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tool = await getTool(params.slug);
  if (!tool) return { title: "Tool review" };
  return {
    title: `${tool.name} review`,
    description: tool.description ?? undefined,
  };
}

export default async function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  const tool = await getTool(params.slug);
  if (!tool) notFound();

  return (
    <article className="mx-auto max-w-content px-5 py-16">
      <Link
        href="/tools"
        className="text-[14px] text-muted underline underline-offset-4 hover:text-ink"
      >
        Back to all reviews
      </Link>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-[40px] font-extrabold leading-none tracking-tightest">
            {tool.name}
          </h1>
          {tool.vendor && (
            <p className="mt-2 text-[15px] text-muted">
              {tool.vendor} · {tool.category}
            </p>
          )}
        </div>
        <PriceTag price={tool.price} />
      </div>

      {tool.description && (
        <p className="prose-measure mt-8 text-[17px] leading-relaxed">
          {tool.description}
        </p>
      )}

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr,300px]">
        <div className="space-y-8">
          {tool.best_for && tool.best_for.length > 0 && (
            <section>
              <h2 className="text-[17px] font-bold tracking-tightest">
                What it&rsquo;s good at
              </h2>
              <ul className="mt-3 space-y-2">
                {tool.best_for.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-signalHigh pl-4 text-[15px] leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {tool.not_for && tool.not_for.length > 0 && (
            <section>
              <h2 className="text-[17px] font-bold tracking-tightest">
                What it&rsquo;s not for
              </h2>
              <ul className="mt-3 space-y-2">
                {tool.not_for.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-signalLow pl-4 text-[15px] leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside>
          <h2 className="mb-3 text-[13px] font-semibold">The rating</h2>
          <ScoreBlock
            usability={tool.usability_score}
            skill={tool.skill_level}
            outcome={tool.outcome_score}
          />
          {tool.url && (
            <a
              href={tool.url}
              rel="nofollow noopener"
              target="_blank"
              className="mt-5 block rounded border border-rule px-4 py-3 text-center text-[14px] font-medium hover:bg-panel"
            >
              Visit {tool.name}
            </a>
          )}
        </aside>
      </div>

      <AuthorBox />
    </article>
  );
}
