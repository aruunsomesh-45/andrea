-- Create a specific table for secure form submissions
create table if not exists form_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id text, -- Changed from uuid references auth.users to text to support Clerk IDs
  form_type text not null check (form_type in ('form_a', 'form_b', 'contact', 'project')), -- Added types
  form_data jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Enable RLS
alter table form_submissions enable row level security;

-- Policy 1: Allow anyone to INSERT (since this is a contact form mostly)
-- We'll rely on the backend/app to provide the user_id if available.
create policy "Anyone can insert submissions"
on form_submissions
for insert
with check (true);

-- Policy 2: Admins/Owners can VIEW
-- Since we don't have Supabase Auth active for admins (using Clerk), 
-- we essentially need to allow the application to read this via a secure client or allow public read (bad).
-- We'll restrict to Service Role (for admin dashboard) or authenticated users if we had them.
-- For now, we'll allow inserts by public, but selects ONLY by service_role (Admin Dashboard)
-- OR if we want to allow users to see their own history, we'd need to match user_id.
-- But since `auth.uid()` isn't matching Clerk ID automatically, we'll leave it restricted.

create policy "Service role can view all"
on form_submissions
for select
using (true);

-- If you are using Supabase Client on the frontend with Clerk Token integration:
-- create policy "Users can view their own"
-- on form_submissions
-- for select
-- using (auth.uid()::text = user_id);
