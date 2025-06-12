/*
  # Create identification logs table

  1. New Tables
    - `identification_logs`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `success` (boolean)
      - `species_identified` (text, optional)
      - `confidence` (numeric, optional)
      - `error_message` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `identification_logs` table
    - Add policies for users to read their own logs
    - Add policy for system to insert logs

  3. Indexes
    - Add index on user_id for faster queries
    - Add index on created_at for time-based queries
*/

-- Create identification_logs table
CREATE TABLE IF NOT EXISTS identification_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  success boolean NOT NULL DEFAULT false,
  species_identified text,
  confidence numeric CHECK (confidence >= 0 AND confidence <= 1),
  error_message text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE identification_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own identification logs"
  ON identification_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "System can insert identification logs"
  ON identification_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS identification_logs_user_id_idx ON identification_logs(user_id);
CREATE INDEX IF NOT EXISTS identification_logs_created_at_idx ON identification_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS identification_logs_success_idx ON identification_logs(success);