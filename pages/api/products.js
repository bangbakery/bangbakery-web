import { supabase } from '../../lib/supabase'

export default async function products(req, res) {
  const { data: products, error } = await supabase.from('products').select('*')

  res.status(200).json(products)
}
