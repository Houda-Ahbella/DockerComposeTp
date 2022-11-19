import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex"  >
                <Paper elevation={3} className="container">
                    <div className="heading">Bibliotheque</div>
                    <div>
<img src="https://media.istockphoto.com/id/1200326335/fr/photo/biblioth%C3%A8que-%C3%A9tag%C3%A8res-avec-livres-et-manuels-concept-dapprentissage-et-d%C3%A9ducation.jpg?s=612x612&w=0&k=20&c=pb9HcRfzFHnHVU1TOQvVkmIwAFr5L6gEx697M1t_uiI=" className="imageC"/>
                    </div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Ajouter nouveau Livre"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="success"
                            variant="contained"
                            type="submit"
                            
                        >
                            Ajouter
                        </Button>
                    </form>
                    <div>
                        { Array.isArray(tasks) ?tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <Button color="error"  onClick={() => this.handleDelete(task._id)} variant="outlined" >
                               Supprimer
                               </Button>
                               
                            </Paper>
                        )):[]}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;
