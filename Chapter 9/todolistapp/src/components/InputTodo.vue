<style>
* {box-sizing: border-box;}
.input {
    border: none;
    width: 755;
    height: 35px;
    padding: 10px;
    float: left;
    font-size: 16px;
}

.addbutton {
    padding: 10px;
    width: 25%;
    height: 35px;
    background: #d9d9d9;
    color: #555;
    float: left;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
    transition: 0.3s;
}
</style>

<template>
<div>
    <input class='input' type='text' id='task' v-model.trim='todo'
    placeholder="Enter!" v-on:keyup.enter="addTodo">
    <span class="addbutton" v-on:click="addTodo">추 가</span>
</div>
</template>

<script type="text/javascript">
import eventBus from './EventBus.vue'

export default {
    name: 'input-todo',
    data: function() {
        return {
            todo: ""
        };
    },
    methods: {
        addTodo: function() {
            eventBus.$emit('add-todo', this.todo);
            this.todo = "";
        }
    }
}
</script>