interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodosState {
    todos: Todo[];
    filter: 'all' | 'completed' | 'current';
}

export type FilterType = 'all' | 'completed' | 'current';