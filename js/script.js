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
        ]
    };
  },
  methods: {

  },
}).mount("#app");
