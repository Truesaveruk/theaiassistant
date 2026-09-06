-- The AI Assistant — database schema
-- Paste this whole file into Supabase > SQL Editor > New query > Run.
-- Safe to run more than once.

create table if not exists ai_tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  vendor text,
  category text not null,
  price text check (price in ('Free','Freemium','Paid')),
  description text,
  best_for text[],
  not_for text[],
  usability_score int check (usability_score between 1 and 5),
  skill_level text check (skill_level in ('Beginner','Intermediate','Advanced')),
  outcome_score text check (outcome_score in ('Low','Medium','High')),
  url text,
  pros text[],
  cons text[],
  slug text unique not null,
  featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists prompts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  tool_category text,
  prompt_category text,
  why_it_works text,
  slug text unique not null,
  created_at timestamptz default now()
);

create table if not exists playlists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  order_index int default 0,
  created_at timestamptz default now()
);

create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  youtube_id text not null,
  creator text,
  duration_mins int,
  skill_level text check (skill_level in ('Beginner','Intermediate','Advanced')),
  playlist_id uuid references playlists(id),
  topic_tags text[],
  description text,
  created_at timestamptz default now()
);

create table if not exists glossary (
  id uuid primary key default gen_random_uuid(),
  term text not null,
  definition text not null,
  analogy text,
  business_impact text,
  related_terms text[],
  slug text unique not null,
  difficulty_level text,
  created_at timestamptz default now()
);

create table if not exists use_cases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  problem text,
  solution text,
  tools_needed text[],
  time_before_mins int,
  time_after_mins int,
  steps jsonb,
  slug text unique not null,
  created_at timestamptz default now()
);

create table if not exists challenges (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  objective text,
  instructions jsonb,
  difficulty text,
  tool text,
  category text,
  week_start date,
  slug text unique not null,
  created_at timestamptz default now()
);

create table if not exists challenge_submissions (
  id uuid primary key default gen_random_uuid(),
  challenge_id uuid references challenges(id),
  email text not null,
  submission_text text,
  created_at timestamptz default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content_html text,
  tags text[],
  author text default 'The AI Assistant',
  ai_generated boolean default true,
  source_url text,
  source_name text,
  source_published_at timestamptz,
  published boolean default true,
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

create table if not exists quiz_responses (
  id uuid primary key default gen_random_uuid(),
  q1 text, q2 text, q3 text, q4 text, q5 text,
  score int,
  maturity_level text check (maturity_level in ('Beginner','Intermediate','Advanced')),
  created_at timestamptz default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  quiz_response_id uuid references quiz_responses(id),
  name text,
  email text not null,
  phone text,
  subscribe_newsletter boolean default false,
  source text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text,
  created_at timestamptz default now()
);

-- Public read access for the content tables. Writes happen server-side only.
alter table ai_tools enable row level security;
alter table prompts enable row level security;
alter table videos enable row level security;
alter table playlists enable row level security;
alter table glossary enable row level security;
alter table use_cases enable row level security;
alter table challenges enable row level security;
alter table posts enable row level security;

do $$
declare t text;
begin
  foreach t in array array['ai_tools','prompts','videos','playlists','glossary','use_cases','challenges','posts']
  loop
    execute format(
      'drop policy if exists public_read on %I; create policy public_read on %I for select using (true);', t, t
    );
  end loop;
end $$;
