import {useState, useEffect} from "react";
import TaskList from "../../components/TaskList/TaskList";

function Home () {
    
const [tasks, setTasks] = useState([]);

useEffect(() => {

    fetch('/api/tasks')
      .then(response => response.json())
      .then(tasks => {
        console.log(tasks);
        setTasks(tasks);
      })
      .catch(error => console.error("Error fetching tasks:", error));
  
    }, []);  

   return (
  <>
    <div>
        <TaskList headline="Att göra" tasks={tasks}/>
    </div>
  </>

)  

}

export default Home;