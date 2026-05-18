export interface WorkExperience {
    id: string
    role: string
    company: string
    period: string
    type: string
    description: string
    tags: string[]
  }
  
  export interface Project {
    id: string
    name: string
    description: string
    icon: string
    tags: string[]
    url: string
    featured?: boolean
    github?: string
  }
  
  export interface Certificate {
    id: string
    name: string
    issuer: string
    date: string
  }
  
  export interface Skill {
    name: string
    level: number
  }
  
  export interface SkillGroup {
    category: string
    skills: Skill[]
  }