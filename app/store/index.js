// import Vue from 'nativescript-vue';
// import Vuex from 'vuex';

// const Sqlite = require("nativescript-sqlite");

// Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//         database: null,
//         data: []
//     },
//     mutations: {
//         init(state, data) {
//             state.database = data.database;
//         },
//         load(state, data) {
//             state.data = [];
//             for(var i = 0; i < data.data.length; i++) {
//                 state.data.push({
//                     firstname: data.data[i][0],
//                     lastname: data.data[i][1]
//                 });
//             }
//         },
//         save(state, data) {
//             state.data.push({
//                 firstname: data.data.firstname,
//                 lastname: data.data.lastname
//             });
//         },
//     },
//     actions: {
//         init(context) {
//             (new Sqlite("my.db")).then(db => {
//                 db.execSQL("CREATE TABLE IF NOT EXISTS custom_templates (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, structures TEXT, processes TEXT, communication TEXT, people TEXT, anything_else TEXT, custom BOOLEAN)").then(id => {
//                     context.commit("init", { database: db });
//                 }, error => {
//                     console.log("CREATE TABLE ERROR", error);
//                 });
//             }, error => {
//                 console.log("OPEN DB ERROR", error);
//             });
//         },
//         insert(context, data) {
//             context.state.database.execSQL("INSERT INTO custom_templates (firstname, lastname) VALUES (?, ?)", [data.title, data.structures, data.processes, data.communication, data.people, data.anything_else,]).then(id => {
//                 context.commit("save", { data: data });
//             }, error => {
//                 console.log("INSERT ERROR", error);
//             });
//         },
//         query(context) {
//             context.state.database.all("SELECT * FROM custom_templates", []).then(result => {
//                 context.commit("load", { data: result });
//             }, error => {
//                 console.log("SELECT ERROR", error);
//             });
//         }
//     }
// });

// Vue.prototype.$store = store;

// module.exports = store;

// store.dispatch("init");