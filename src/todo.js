export const todoItem = (title, description, dueDate, priority, notes) => {
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    }
}

export const project = (title) => {
    return {
        title
    }
}