<template>
    <Page>

        <ActionBar title="Custom Scenario">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="this.$navigateBack" />
        </ActionBar>

        <ScrollView>

            
            <StackLayout class="form">

                <Label text="" textAlignment="center"/>

                <Image src="~/images/custom-scenario.png" height="40%" width="40%"></Image>

                <Label text="" textAlignment="center"/>

                <Label text="Title" class="h2" textAlignment="left"/>

                <StackLayout class="input-field">
                    <TextField v-model="scenario.title" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <Label text="List the changes you would need to make to" class="h2" textAlignment="left" textWrap="true"/>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="scenario.structures" hint="The Physical Structures (premises, equipment, etc.)" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="scenario.processes" hint="Processes / Systems:" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="scenario.communication" hint="Communication:" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="scenario.people" hint="People:" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <TextField v-model="scenario.anything_else" hint="Anything else?" class="input"></TextField>
                </StackLayout>

                <Label text="" textAlignment="center"/>

                <StackLayout class="input-field">
                    <GridLayout columns="*, *" rows="*">
                        <Button row="0" col="0" width="60%" height="30%" class="save-button" @tap="save" />
                        <Button row="0" col="1" width="60%" height="30%" class="home-button" @tap="home" />
                    </GridLayout>
                </StackLayout>

                <ListView for="item in store_data" class="list-group" row="1" col="0">
                    <v-template>
                        <StackLayout class="list-group-item">
                            <Label v-bind:text="item.title" />
                        </StackLayout>
                    </v-template>
                </ListView>

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
                scenario: {
                    "title": "",
                    "structures": "",
                    "processes": "",
                    "communication": "",
                    "people": "",
                    "anything_else": "",
                    "custom": true
                },

                input: {
                    firstname: "jack",
                    lastname: "bransfield"
                },
            };
        },
        methods: {
            save() {
                this.$store.dispatch("insert", this.input);
            },
            load() {
                this.$store.dispatch("query");
            },
            clear() {
                this.input.firstname = "";
                this.input.lastname = "";
            },
            // save() {
            //     this.$store.dispatch("insert", this.scenario);
            //     const result = this.$store.dispatch("query");
            //     console.log(result)
            // },
            myScenarios() { 
                this.$navigateTo(myScenarios);
            },
            home() {
                console.log(this.$store.state.data)
                // console.log(this.$store.dispatch("query")); 
                // this.$navigateTo(home);
            },
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