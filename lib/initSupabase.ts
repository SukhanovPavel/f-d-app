import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://ptglhmftlrkjmjcvbxal.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Z2xobWZ0bHJram1qY3ZieGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0Njk5NzYsImV4cCI6MjA1NjA0NTk3Nn0.dpET2GT8NJl0tKjukVx1t8bphNdzJLmbHWRG0Yosk-A'
)