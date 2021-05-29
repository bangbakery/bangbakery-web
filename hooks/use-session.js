import { useState, useEffect } from 'react'

import { supabase } from '../lib/supabase'

export default function useSession() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const supabaseSession = supabase.auth.session()
    setSession(supabaseSession)
  })

  if (session) {
    return session
  }
  return null
}
