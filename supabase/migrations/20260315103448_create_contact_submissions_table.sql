/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `full_name` (text, not null) - Full name of the person submitting
      - `company` (text, not null) - Company name
      - `machine_type` (text, not null) - Type of machinery needed
      - `estimated_budget` (text, not null) - Budget range
      - `message` (text) - Additional message or details
      - `created_at` (timestamp) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - All submissions are insertable by the public (no auth required for lead generation)
    - SELECT access restricted to authenticated users only (for internal review)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  machine_type text NOT NULL,
  estimated_budget text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
