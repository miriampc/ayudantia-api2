"use strict";
const PersonaShow = _=>{
    let persona = state.persona[0];
    const divContainer = $('<div class="container"></div>');
    const row = $('<div class="row text-center"></div>');
    const columnFoto = $('<div class="col-xs-12 col-md-3 center-block"></div>');
    const foto = $(`<img src="${persona.picture.large}" alt="">`);
    const column = $('<div class="col-xs-12 col-md-3 center-block"></div>');
    const dataContainer = $('<div class="text-left"></div>');
    const name = $(`<h3 class="text-primary text-center">${persona.name.title} ${persona.name.first} ${persona.name.last}</h3>`);
    const gender = $(`<p>Gender: ${persona.gender}</p>`);
    const city = $(`<p>City: ${persona.location.city}</p>`);
    const street = $(`<p>Street: ${persona.location.street}</p>`);
    const email = $(`<p>Email: ${persona.email}</p>`);
    const cell = $(`<p>Cellphone: ${persona.cell}</p>`);



    row.append(name);
    dataContainer.append(gender);
    dataContainer.append(city);
    dataContainer.append(street);
    dataContainer.append(email);
    dataContainer.append(cell);
    columnFoto.append(foto);
    column.append(dataContainer);
    row.append(columnFoto);
    row.append(column);
    divContainer.append(row);

    return divContainer;
}