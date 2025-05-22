export interface Task {
  id: string
  title: string
  description: string
  status: string
  priority: string
  dueDate: string
  assignee: string
}

export interface Column {
  id: string
  title: string
  color: string
}
