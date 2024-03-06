import React from 'react';
import Button from '@mui/material/Button';
import {FilterType} from "../../features/todos/todos.types";

interface FilterButtonProps {
    filter: FilterType;
    currentFilter: FilterType;
    setFilter: (filter: FilterType) => void;
    children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ filter, currentFilter, setFilter, children }) => {
    return (
        <Button
            variant={currentFilter === filter ? "contained" : "text"}
            onClick={() => setFilter(filter)}
            sx={{ width: '120px' }}
        >
            {children}
        </Button>
    );
};

export default FilterButton;
