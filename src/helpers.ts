import {FilterType} from "./features/todos/todos.types";

export const getNoTasksMessage = (filter: FilterType): string => {
    switch (filter) {
        case 'completed':
            return 'No completed tasks.';
        case 'current':
            return 'No current tasks.';
        default:
            return 'No tasks found. Add a new task above!';
    }
};