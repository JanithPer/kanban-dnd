// types/task.ts
export type Task = {
    id: string
    title: string
    description: string
    status: 'todo' | 'in-progress' | 'done'
  }