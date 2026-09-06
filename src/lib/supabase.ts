import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Returns a Supabase client, or null when the environment variables are not
 * set. Every page checks for null and shows an empty state, so the site builds
 * and runs before the database exists.
 */
export function getSupabase() {
  if (!url || !anon) return null;
  return createClient(url, anon);
}

export function getAdminSupabase() {
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return null;
  return createClient(url, service);
}

export type AiTool = {
  id: string;
  name: string;
  vendor: string | null;
  category: string;
  price: "Free" | "Freemium" | "Paid";
  description: string | null;
  best_for: string[] | null;
  not_for: string[] | null;
  usability_score: number | null;
  skill_level: "Beginner" | "Intermediate" | "Advanced" | null;
  outcome_score: "Low" | "Medium" | "High" | null;
  url: string | null;
  slug: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  published_at: string;
  tags: string[] | null;
  author: string | null;
};
