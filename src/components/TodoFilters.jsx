import { useState } from "react";
import "../styles/TodoFilters.css";
import { FILTER_CHECK_TYPE } from "../utils/filterCheckType.js";
import { FILTER_TYPE } from "../utils/filterType.js";

const TodoFilters = ({filterTodo}) =>
{
    const [filter, setFilter] = useState(0);  
    const {filterTxt,filterColor} = FILTER_CHECK_TYPE[filter];

    const handleFilterButton = () =>
    {
        const newFilter = (filter + 1)%3;
        setFilter(newFilter);

        filterTodo({filter:FILTER_TYPE.CHECK,props:newFilter});
    }

    const handleFilterTitle = (event) =>
    {
        filterTodo({filter:FILTER_TYPE.TITLE,props:event.target.value});
    }

    return (
        <div className="todo-list-filters-content">
            <button onClick={handleFilterButton} className="todo-list-filter-button" style={{backgroundColor:filterColor}}>{filterTxt}</button>
            <input className="todo-list-filter-input" onChange={handleFilterTitle} type="text" placeholder="title..."/>
        </div>
    );
}

export default TodoFilters;