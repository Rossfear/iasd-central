
export interface News {
  id: number
  title: string
  date: string
  excerpt: string
  content?: string
  image?: string
  category: "construccion" | "evento" | "anuncio"
}
