// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zywlsoydnttjfztbsshz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5d2xzb3lkbnR0amZ6dGJzc2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyOTI4NTIsImV4cCI6MjA2MTg2ODg1Mn0.wrjVB04OZr3laZjCAANW4dznsOXusRq1GkrZLmU_6jI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);