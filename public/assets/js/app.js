"use strict";
const render = (root)=>{
    root.empty();
    root.append(PersonaShow());
};

const state = {
    persona : null
}
$.getJSON('https://randomuser.me/api/',(response)=>{
    console.log(response);
    state.persona =response.results;
    const root=$('#root');
    render(root);
})