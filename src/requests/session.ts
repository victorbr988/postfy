import { ILogin } from "./interfaces/login";

export async function getSession({ email, password}: ILogin) {
  const body = JSON.stringify({ email, password })
  const url = process.env.NEXT_PUBLIC_API_URL + "session/create"
  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body,
    })

    if (!response.ok) {
      throw new Error("Erro ao tentar fazer login")
    }
  } catch (error) {
    throw error
  }
} 