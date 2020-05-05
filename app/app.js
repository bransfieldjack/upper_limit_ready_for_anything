import Vue from 'nativescript-vue';
import Vuex from 'vuex'
import home from './components/home';
const Sqlite = require("nativescript-sqlite");
// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
Vue.use(Vuex);
Vue.registerElement(
    'CheckBox',
    () => require('@nstudio/nativescript-checkbox').CheckBox,
    {
      model: {
        prop: 'checked',
        event: 'checkedChange'
      }
    }
  );

Vue.registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

new Vue({

    template: `
        <Frame>
            <home />
        </Frame>`,

    components: {
        home
    }
}).$start();

const store = new Vuex.Store({
  state: {
      database: null,
      data: []  // Keep our database data loaded and ready to go at all times. Naming conventions are not specific, as long as they exist in the state property.
  },
  mutations: {

    init(state, data) {
        state.database = data.database;
    },

    load(state, data) { // loop through the results of a query and store it as an array of objects
        state.data = [];

        for(var i = 0; i < data.data.length; i++) {
            state.data.push({
                id: data.data[i][0],
                title: data.data[i][1],
                structures: data.data[i][2],
                processes: data.data[i][3],
                communication: data.data[i][4],
                people: data.data[i][5],
                anything_else: data.data[i][6],
                custom: data.data[i][7],
                favourite: data.data[i][8],
                inprogress: data.data[i][9],
            });
        }

    },

    save(state, data) { // a way for saving data into our state.
        state.data.push({
          title: data.data.title,
          structures: data.data.structures,
          processes: data.data.processes,
          communication: data.data.communication,
          people: data.data.people,
          anything_else: data.data.anything_else,
          custom: data.data.custom,
          favourite: data.data.favourite,
          inprogress: data.data.inprogress,
        });
    },

  }, // Anytime I want to alter the state variables, I need to do it in a mutation. However, mutations must be synchronous, so I have to make use of actions as well, which can be asynchronous.

  actions: {  // mutations are only for changing the state variables. The actual interaction with our database will happen in the actions:

    init(context) { // open a database and execute a query for creating a table.
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS custom_templates (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, structures TEXT, processes TEXT, communication TEXT, people TEXT, anything_else TEXT, custom BOOLEAN, favourite BOOLEAN, inprogress BOOLEAN)").then(id => {
                context.commit("init", { database: db }); // the open database is passed to the mutation via the commit method.
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    },

    insert(context, data) { // When inserting information, data is passed to the insert action and a query is executed.
        context.state.database.execSQL("INSERT INTO custom_templates (title, structures, processes, communication, people, anything_else, custom, favourite, inprogress) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [data.title, data.structures, data.processes, data.communication, data.people, data.anything_else, data.custom, data.favourite, data.inprogress]).then(id => {  // context.state.database variable is the open database in the state variables section.
            context.commit("save", { data: data });
        }, error => {
            console.log("INSERT ERROR", error);
        });
    },

    query(context) {
        context.state.database.all("SELECT id, title, structures, processes, communication, people, anything_else, custom, favourite, inprogress FROM custom_templates", []).then(result => {
            context.commit("load", { data: result });
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

  }
});

Vue.prototype.$store = store;

store.dispatch("init");