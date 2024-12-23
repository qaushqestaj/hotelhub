import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://efghuqqmnrtjcjpbzjaj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZ2h1cXFtbnJ0amNqcGJ6amFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODczNTAsImV4cCI6MjA1MDI2MzM1MH0.-T5LJkN5QbM_Fa4kiz81JmtWepbQG63buRckVTKDQTA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
