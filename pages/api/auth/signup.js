import { supabase } from '../../../lib/supabase'

export default async function apiSignUp(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (email && password) {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      })

      res.end(`Signed up!`)
    } else {
      res.end(`Failed to sign up!`)
    }
  } else {
    res.end('Sorry, not allowed!')
  }
}
