const taskStructure = {
    name: "",
    description: "",
    status: "",
    priority: "",
    saveTo: "",
};

const projectStructure = {
    name: "",
    tasks: [taskStructure],
    totalTasks: 0,
};

const makeProject = (name, tasks) => {
    return projectStructure;
};

export default makeProject;
