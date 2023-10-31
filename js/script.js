const { createApp } = Vue;

createApp({
  data() {
    return {
        todoList : [
            {
                id : 1,
                name : "Amanda Platz",
                image : "img/amanda-platz.jpg",
                task : "Clean app caches",
                priority : "text-bg-success",
                text : "low",
                doneTask : true
            },
            {
                id : 2,
                name : "Mario Rui",
                image : "img/mario-rui.jpg",
                task : "Meeting 14:00",
                priority : "text-bg-danger",
                text : "high",
                doneTask : false
            },
            {
                id : 3,
                name : "Nicky Monday",
                image : "img/nicky-monday.jpg",
                task : "Organize Main Project",
                priority : "text-bg-warning",
                text : "medium",
                doneTask : false
            },
        ],
        lastID : 3,
        selectPriority : "low",
        textTask : ""
    };
  },
  methods: {
    removeTask(id){
        const index = this.todoList.findIndex((task)=>task.id === id);
        this.todoList.splice(index,1);
    },
    addTask(){
        this.lastID++;
        const newTask = 
        {
            id : this.lastID,
            name : "Leonardo Mastrangelo",
            image : "img/us.png",
            task : this.textTask,
            priority : this.selectPriority,
            text : this.selectPriority,
            doneTask : false
        }
        this.todoList.unshift(newTask)
        this.textTask = ""
        this.selectPriority = "low"
    },
    todoDone(i){
        this.todoList[i].doneTask = (this.todoList[i].doneTask) ? false : true
    },
  },
}).mount("#app");
