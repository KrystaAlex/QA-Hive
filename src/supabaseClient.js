import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jpsscmbaeilyphkfbaow.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwc3NjbWJhZWlseXBoa2ZiYW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5ODQyOTgsImV4cCI6MjA2OTU2MDI5OH0.vTw1gACwNX-7GKK1oI1KXYgr5GhTR_J13bCjcIb5ADI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)