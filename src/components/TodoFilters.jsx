import { useState } from "react";
import "../styles/TodoFilters.css";

const TodoFilters = ({filterTodo}) =>
{
    const [filter, setFilter] = useState(0);
    
    var filterTxt;
    var filterColor;

    switch(filter)
    {
        case 1: 
            {
                filterTxt = "Completed";
                filterColor ="#3498db"
            };
            break;
        case 2: 
            {
                filterTxt = "UnCompleted";
                filterColor ="#e74c3c";
            };
            break;
        default: 
            {
                filterTxt = "All";
                filterColor = "#27ae60";
            };
            break;
    }

    const handleFilterButton = () =>
    {
        const newFilter = (filter + 1)%3;
        setFilter(newFilter);

        filterTodo({action:"check",props:newFilter});
    }

    const handleFilterTitle = (event) =>
    {
        filterTodo({action:"title",props:event.target.value});
    }

    const handleFilterDate = (event) =>
    {
        filterTodo({action:"date",props:event.target.value});
    }

    return (
        <div className="todo-list-filters-content">
            <button onClick={handleFilterButton} className="todo-list-filter-button" style={{backgroundColor:filterColor}}>{filterTxt}</button>
            <input className="todo-list-filter-input" onChange={handleFilterTitle} type="text" placeholder="title..."/>
            <input className="todo-list-filter-input" onChange={handleFilterDate} type="text" placeholder="01/01/99"/>
        </div>
    );
}

export default TodoFilters;