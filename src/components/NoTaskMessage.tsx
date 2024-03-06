import {getNoTasksMessage} from "../helpers";
import {Typography} from "@mui/material";
import React, {FC} from "react";
import {FilterType} from "../features/todos/todos.types";

interface NoTaskMessageProps {
    filter: FilterType;
}

export const NoTaskMessage: FC<NoTaskMessageProps> = ({filter}) => {
    return (
        <Typography variant="subtitle1" color="textSecondary" sx={{m: 2, textAlign: 'center'}}>
            {getNoTasksMessage(filter)}
        </Typography>
    )
};