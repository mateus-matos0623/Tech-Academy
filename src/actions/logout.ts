'use server'

import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export default async function handleLogout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut({ scope: 'global' })
  if (error) {
    console.log('erro ao deslogar:', error)
    throw new Error(error.message)
  }
  redirect('/login')
}