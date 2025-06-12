/*
  # Fix profiles table foreign key reference

  1. Changes
    - Update foreign key constraint to reference auth.users instead of users
    - Ensure proper cascade behavior for user deletion

  2. Security
    - Maintain existing RLS policies
    - No changes to authentication flow
*/

-- Drop the existing foreign key constraint if it exists
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_id_fkey;

-- Add the correct foreign key constraint referencing auth.users
ALTER TABLE profiles ADD CONSTRAINT profiles_id_fkey 
  FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;