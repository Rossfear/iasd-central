export interface Pastor {
  id: string
  name: string
  photo: string
  period: string
  message: string
  isCurrentPastor?: boolean
}

export interface Department {
  id: string
  name: string
  description: string
  activities: Activity[]
  photos: string[]
  coordinator: string
}

export interface Activity {
  id: string
  name: string
  description: string
  date: string
  time: string
  location: string
}

export interface ProgramEvent {
  id: string
  time: string
  title: string
  description: string
  speaker?: string
  type: "worship" | "presentation" | "music" | "prayer" | "special"
}

export interface Memory {
  id: string
  title: string
  description: string
  photo: string
  date: string
  category: "construction" | "celebration" | "community" | "worship"
}
