import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';

const App = () => {
    
    const todoData = [
        { label: 'Drink tea', important: false },
        { label: 'Create Web-site', important: true },
        { label: 'GO for a walk', important: false }
    ];
    
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoData} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));