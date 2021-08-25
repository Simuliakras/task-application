import Header from './components/Header';
import {Route, Switch} from "react-router";
import ActiveTasksPage from "./pages/ActiveTasks";
import CompletedTasksPage from "./pages/CompletedTasks";
import TasksHistoryPage from './pages/TasksHistory';

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <ActiveTasksPage/>
                </Route>
                <Route path="/completed-tasks">
                    <CompletedTasksPage/>
                </Route>
                <Route path="/tasks-history">
                    <TasksHistoryPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
