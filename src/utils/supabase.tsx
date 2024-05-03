import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://xbepsvnmfjoczbakxrli.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZXBzdm5tZmpvY3piYWt4cmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTM1NDQsImV4cCI6MjAyODg2OTU0NH0.wXibqavxV96MBjsBGqDG2JXHLiL1xEjYMSI2GdtD1cM'
);

export default supabase;