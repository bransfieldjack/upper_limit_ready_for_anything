<template>
    <Page>

        <ActionBar title="Edit Scenario">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="this.$navigateBack" />
        </ActionBar>

        <ScrollView>

            
            <StackLayout class="form" v-for="item in scenario_being_edited" v-if="item.id == id">
                <!-- v-bind=:v-model="test_scenario" -->
                <Label text="" textAlignment="center"/>

                <Image src="~/images/custom-scenario.png" height="40%" width="40%"></Image>

                <Label text="" textAlignment="center"/>

                <Label :text="item.title" class="h2" textAlignment="left"/>

                <!-- <Label text="Title" class="h2" textAlignment="left"/> -->

                <StackLayout class="input-field">
                    <TextField v-model="item.title" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <Label text="List the changes you would need to make to" class="h2" textAlignment="left" textWrap="true"/>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="item.structures" hint="The Physical Structures (premises, equipment, etc.)" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="item.processes" hint="Processes / Systems:" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="item.communication" hint="Communication:" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="item.people" hint="People:" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="item.anything_else" hint="Anything else?" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <GridLayout columns="*, *" rows="*">
                        <Button row="0" col="0" width="60%" height="30%" class="save-button" @tap="save" />
                        <Button row="0" col="1" width="60%" height="30%" class="home-button" @tap="home" />
                    </GridLayout>
                </StackLayout>

            </StackLayout>


        </ScrollView>

    </Page>
</template>

<script>
    import store from '../store'
    import myScenarios from "./myScenarios";
    import home from "./home";
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";

    Vue.use(RadDataForm);

    export default {
        data() {
            return {
                store_data: this.$store.state.data,
                test_scenario: null,
                scenario_being_edited: null,
                scenario: {
                    "title": "null",
                    "structures": "null",
                    "processes": "null",
                    "communication": "null",
                    "people": "null",
                    "anything_else": "null",
                    "custom": "null",
                    "favourite": "null",
                    "inprogress": "null",
                },
            };
        },
        props: ['id'],
        computed: {
            completed: function() {

                const data = Object.keys(this.scenario).every(field => {
                    return this.scenario[field];
                });

                
            },  
        },
        methods: {
            save() {
                this.$store.dispatch("update", this.scenario_being_edited[0]);
                this.$navigateTo(home);
                // console.log(this.scenario_being_edited[0]);
                // console.log(typeof(this.scenario_being_edited));
            },
            load() {
                this.$store.dispatch("query");
            },
            clear() {
                this.scenario.title = "";
                this.scenario.structures = "";
                this.scenario.processes = "";
                this.scenario.communication = "";
                this.scenario.people = "";
                this.scenario.anything_else = "";
                this.scenario.custom = true;
            },
            myScenarios() { 
                this.$navigateTo(myScenarios);
            },
            home() {
                // console.log(this.$store.state.data)
            },
        },
        mounted(){
            const id = this.$props.id;

            this.load();
            this.test_scenario = this.$store.state.data;//.findIndex(x => x.id === id);

            this.scenario_being_edited = this.test_scenario.filter(obj => {
                return obj.id === id
            })

            console.log(this.scenario_being_edited);

        },
    };
</script>

<style>

    .save-button {
        position: absolute;
        background-image: url("~/images/save-icon.png");
        background-size: 100px 100px;
        background-repeat: no-repeat;
        background-position: center center;
        background-color: white;
    }

    .home-button {
        position: absolute;
        background-image: url("~/images/home-icon.png");
        background-size: 100px 100px;
        background-repeat: no-repeat;
        background-position: center center;
        background-color: white;
    }

    .h2 {
        padding-left: 40px; 
        
    }

    .back-button {
        background-image: url("~/images/go-back-button.png");
        background-size: 90px 90px;
        background-repeat: no-repeat;
    }

    TextView {
        padding-left: 10;
        padding-right: 10;
        padding-bottom: 10;
        padding-top: 10;
        border-width: 1;
        border-color: #0C3C60;
    }

    .content {
        margin-left: 16;
        margin-right: 16;
        margin-bottom: 3;
        /* margin-top: 16; */
    }

    .h2 {
        text-decoration: none;
        color: #0C3C60;
    }

    .h3 {
        font-size: 12px;
    }

    .p {
        font-size: smaller;
    }

    .my-scenarios-button {
        android-elevation: 4;
        background-color: #F9921C;
        color: red;
        border-color: #F9921C;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .my-scenarios-button:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: darkolivegreen;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }

    .mark-as-complete-button {
        android-elevation: 4;
        background-color: white;
        color: red;
        border-color: #F9921C;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .mark-as-complete-button:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }
</style>