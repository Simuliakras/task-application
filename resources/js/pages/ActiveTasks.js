import TaskList from '../components/tasks/TaskList';

const DUMMY_DATA = [
    {
        id: "t1",
        title: "Pasimokyti programuoti",
        description: "Išmokti asinchronines funkcijas, susipažinti su GIT",
        createDate: "2021-07-15"
    },
    {
        id: "t2",
        title: "Pasportuoti",
        description:
            "Nubėgti 5km ir padaryti 75 atsispaudimų bei 25 prisitraukimus",
        createDate: "2021-07-08"
    },
    {
        id: "t3",
        title: "Apsipirkti parduotuvėje",
        description: "Nupirkti bananų, avokadų ir melioną",
        createDate: "2021-07-20"
    },
];

function ActiveTasksPage() {
    return (
        <div className="tasks-container">
            <TaskList tasks={DUMMY_DATA}/>
        </div>
    )
}

export default ActiveTasksPage;
