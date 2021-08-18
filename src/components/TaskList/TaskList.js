import React from 'react';
import "./TaskList.css";
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem/TaskItem';
import { Button } from 'react-bootstrap';

export const TaskList = ({ title, onAddTask, taskState, tasks, onTaskUpdate, onDeleteTask }) => {
    const addTask = () => {
        onAddTask("Nova Tarefa", taskState)
    }
    return (
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate}
                            onDeleteTask={onDeleteTask} />
                    )
                })
                }
            </div>
            <div className="content">
                <Button variant="primary" onClick={addTask} size="lg">
                    Adicionar Tarefa
                </Button>
            </div>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};