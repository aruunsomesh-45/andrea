-- Drop previous table if exists to start fresh with new types
drop table if exists project_leads;

-- Drop types if they exist to allow updates
drop type if exists project_type_enum;
drop type if exists budget_enum;
drop type if exists timeline_enum;

-- 1. Create ENUM types
create type project_type_enum as enum (
  'personal_portfolio',
  'business_company',
  'ecommerce',
  'landing_page',
  'web_app_saas',
  'redesign',
  'other'
);

create type budget_enum as enum (
  'less_300',
  '300_600',
  '600_1000',
  '1000_3000',
  'plus_3000',
  'unknown'
);

create type timeline_enum as enum (
  'asap',
  '1_2_weeks',
  '3_4_weeks',
  '1_2_months',
  'flexible'
);

-- 2. Create Table with structured types and constraints
create table project_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  email text not null check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text,
  company_name text,
  project_type project_type_enum not null,
  description text,
  features text[],
  budget budget_enum not null,
  timeline timeline_enum not null,
  existing_url text,
  status text default 'new'
);

-- 3. Enable Security
alter table project_leads enable row level security;

-- 4. Policy: Allow potential clients to insert data (Public)
create policy "Allow inserts for everyone" 
on project_leads 
for insert 
with check (true);

-- 5. Policy: Allow admins to view data (Authenticated only)
create policy "Allow access for admins" 
on project_leads 
for select 
using (auth.role() = 'authenticated');

-- 6. Policy: Allow admins to delete data (Authenticated only)
create policy "Allow deletion for admins" 
on project_leads 
for delete 
using (auth.role() = 'authenticated');

-- 7. EXPLICIT GRANTS (Fix for 'schema cache' error)
-- Ensure the API roles can correctly access the table
grant usage on schema public to anon, authenticated, service_role;
grant all on table project_leads to anon, authenticated, service_role;

-- 8. REFRESH SCHEMA CACHE
-- Note: You may need to click "Reload schema cache" in Supabase settings if this script doesn't trigger it automatically.
notify pgrst, 'reload schema';
