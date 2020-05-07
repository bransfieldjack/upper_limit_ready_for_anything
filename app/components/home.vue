<template>
    <Page actionBarHidden="true">

        <BottomNavigation>

            <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
            <TabStrip>

                <TabStripItem>
                    <Label text="Scenarios"></Label>
                    <Image :src="scenarios_icon" height="20%" width="20%"></Image>
                </TabStripItem>

                <TabStripItem>
                    <Label text="New Scenario"></Label>
                    <Image :src="template_scenario" height="20%" width="20%"></Image>
                </TabStripItem>

                <TabStripItem>
                    <Label text="Favourites"></Label>
                    <Image :src="full_star" height="20%" width="20%"></Image>
                </TabStripItem>

                <TabStripItem>
                    <Label text="Help"></Label>
                    <Image :src="help_icon" height="20%" width="20%"></Image>
                </TabStripItem>

            </TabStrip>

            <!-- Scenarios page, includes add a new scnearion nav button -->
            <TabContentItem>

                <ScrollView>
                    <StackLayout class="home-panel">

                    <CardView v-for="item in this.$store.state.data" class="cardStyle" margin="10" elevation="40" radius="5" ios:shadowRadius="3">
                        <StackLayout class="card-layout">
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="100%" height="20%"
                                columns="*, *, *, *, *, *, *, *, *, *" rows="*">

                                <Image :src="delete_icon" loadMode="async" height="8%" width="8%" col="1" row="0" @tap="delete_record(item.id)">
                                </Image>

                                <Image v-if="item.favourite == 'true'" :src="full_star" loadMode="async" height="8%" width="8%" col="8" row="0" @tap="make_favourite(item.id)">
                                </Image>

                                <Image v-else :src="empty_star" loadMode="async" height="8%" width="8%" col="8" row="0" @tap="make_favourite(item.id)">
                                </Image>                                

                            </GridLayout>

                            <Label text="" textAlignment="center"/>
                            <Image v-if="item.custom" :src="custom_scenario_icon" height="40%" width="40%"/>
                            <Image v-else :src="template_scenario_icon" height="40%" width="40%"/>
                            <Label class="h2" v-bind:text="item.title" textAlignment="center" textWrap="true"/>
                            
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="80%" height="30%"
                                columns="*, *, *, *, *, *, *, *" rows="*">

                                <Image col="5" v-if="item.inprogress == 'true'" :src="full_cloud" loadMode="async"
                                stretch="aspectFit" height="30%" width="30%">
                                </Image>
                                <Image col="5" v-else :src="green_tick" loadMode="async"
                                    stretch="aspectFit" height="30%" width="30%">
                                </Image>

                                <Image col="8" :src="open_scenario" loadMode="async"
                                    stretch="aspectFit" height="30%" width="30%" @tap="cardTapped(item.id)">
                                </Image>

                            </GridLayout>

                            <Label text="" textAlignment="center"/>

                        </StackLayout>
                    </CardView>

                    <Fab 
                        @tap="dialog"
                        height="15%" width="15%"
                        :icon="plus_icon"
                        rippleColor="#FAC710"
                        class="fab-button"
                    ></Fab>
                    
                    </StackLayout>
                </ScrollView>
                        
            </TabContentItem>

            <TabContentItem>
                <ScrollView>
                    <StackLayout backgroundColor="white" width="400" height="400">

                        <Label class="h2 text-center" text="" />
                        <Button width="70%" height="30%" class="my-custom-scenarios-button" @tap="newCustomScenario" />

                        <Label class="h2 text-center" text="" />
                
                        <Button width="70%" height="30%" class="my-template-scenarios-button" @tap="$modal.close()" />
                        <Label class="h2 text-center" text="" />

                    </StackLayout>
                </ScrollView>
            </TabContentItem>

            <TabContentItem>

                <ScrollView>

                    <StackLayout class="home-panel">

                    <CardView v-for="item in this.$store.state.data" v-if="item.favourite == 'true'" class="cardStyle" margin="10" elevation="40" radius="5" ios:shadowRadius="3">
                        <StackLayout class="card-layout" >
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="100%" height="20%"
                                columns="*, *, *, *, *, *, *, *, *, *" rows="*">

                            </GridLayout>

                            <Label text="" textAlignment="center"/>
                            <Image v-if="item.custom" :src="custom_scenario_icon" height="40%" width="40%"/>
                            <Image v-else :src="template_scenario_icon" height="40%" width="40%"/>
                            <Label class="h2" v-bind:text="item.title" textAlignment="center" textWrap="true"/>
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="40%" height="20%" @tap="cardTapped"
                                columns="*, *, *" rows="*">

                                <Image col="1" v-if="item.inprogress == 'true'" :src="full_cloud" loadMode="async"
                                stretch="aspectFit" height="30%" width="30%">
                                </Image>
                                <Image col="1" v-else :src="green_tick" loadMode="async"
                                    stretch="aspectFit" height="30%" width="30%">
                                </Image>

                            </GridLayout>

                            <Label text="" textAlignment="center"/>

                        </StackLayout>
                    </CardView>
                    
                    </StackLayout>
                </ScrollView>

                <!-- <ScrollView>
                    <StackLayout backgroundColor="white" width="400" height="400">

                        <Label class="h2 text-center" text="Favourites" />
        
                    </StackLayout>
                </ScrollView> -->
            </TabContentItem>

            <TabContentItem>
                <ScrollView>
                    <StackLayout backgroundColor="white" width="400" height="400">

                        <Label class="h2 text-center" text="Help" />
        
                    </StackLayout>
                </ScrollView>
            </TabContentItem>
        
        </BottomNavigation>

    </Page>
</template>

<script>
    import newCustomScenario from "./newCustomScenario";
    import myScenarios from "./myScenarios";
    import addCustom from "./addCustom";
    import help from "./help";
    import ModalComponent from "./ModalComponent";  
    import editScenario from "./editScenario";

    const Sqlite = require("nativescript-sqlite");

    export default {
        components: {
            myScenarios,
            addCustom,
            help
        },
        methods: {
            make_favourite(event) {

                const Sqlite = require("nativescript-sqlite");

                new Sqlite("my.db").then(db => {

                    db.all('select favourite from custom_templates where id=?', [event], function(err, table) {
                        // console.log(table[0][0]);
                        if (table[0][0] == 'true'){
                            db.all('update custom_templates set favourite="false" where id=?', [event], function(err, table) {
                                console.log(table);
                                this.$store.dispatch("init");
                                this.load();
                            });                    
                        }
                        else if (table[0][0] == 'false'){
                            db.all('update custom_templates set favourite="true" where id=?', [event], function(err, table) {
                                console.log(table);
                                this.$store.dispatch("init");
                                this.load();
                            });       
                        }


                    });                    

                    this.$store.dispatch("init");
                    this.load();

                });

            },
            delete_record(event) {

                const id = event;
                this.selected_id.id = id;
        
                var dialogs = require("tns-core-modules/ui/dialogs");
                
                const actionOptions = {
                    message: "Are you sure you want to delete this scenario?",
                    cancelButtonText: "Cancel",
                    actions: ["Yes", "No"],
                    state: this.$store.state.data,
                    id: id,
                    cancelable: true // Android only
                };

                action(actionOptions).then((result) => {

                    console.log("Dialog result: ", result);

                    if (result == "Yes") {

                        const Sqlite = require("nativescript-sqlite");

                        new Sqlite("my.db").then(db => {

                            db.all('delete from custom_templates where id=?', [this.selected_id.id], function(err, table) {
                            console.log(table);
                            console.log("record deleted")
                            });

                            // db.all('select * from custom_templates', function(err, table) {
                            // console.log(table);
                            // console.log("record deleted")
                            // });

                            this.$store.dispatch("init");
                            this.load();

                        });

                    } else if (result == "No") {

                        this.selected_id = null;

                    }
                });

            },
            state_print(){
            },
            newCustomScenario() {
                this.$navigateTo(newCustomScenario);
            },
            dialog(){
                this.$showModal(ModalComponent);
            },
            cardTapped(id) {
                this.$navigateTo(editScenario, {
                    props: {
                        id: id,
                    }
                });
            },
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            },
            addCustom() {
                this.$navigateTo(addCustom);
            },

            help() {
                this.$navigateTo(help);
            },
			myScenarios() { 
                this.$navigateTo(myScenarios);
            },
            load() {
                this.$store.dispatch("query");
            },
            delete() {
                this.$store.dispatch("delete", this.selected_id.id);
            },
        },

        mounted() {
            this.load();
        },

        data() {
            return {
                favourite_button_logic: {
                    type: Boolean,
                    id: null,
                    default: false,
                    value: false,
                },
                selected_id: {
                    id: null,
                },
                custom_scenario_icon: "~/images/custom-scenario.png",
                template_scenario_icon: "~/images/template-scenario.png",
                card_image: '~/images/scenarios-icon.png',
                delete_icon: '~/images/delete_icon.png',
                template_scenario: '~/images/template-icon.png',
                scenario_title: 'You had no money ... ',
                searchPhrase: "",
                starVisible: true,
                empty_star: '~/images/empty-star.png',
                full_star: '~/images/full-star.png',
                plus_icon: '~/images/new-icon.png',
                scenarios_icon: '~/images/scenarios-icon.png',
                help_icon: '~/images/help-icon.png',
                cloudVisible: true,
                empty_cloud: '~/images/empty-cloud.png',
                full_cloud: '~/images/full-cloud.png',
                green_tick: '~/images/green-tick.png',
                open_scenario: '~/images/open-scenario.png',
            };
        }
    };
</script>

<style scoped>

    .delete-icon {
        padding-right: 50px;
    }

    .my-custom-scenarios-button {
        position: absolute;
        bottom: 5%;
        width: 100%;
        left: 0%;
        background-image: url("~/images/custom-scenario.png");
        background-size: 400px 300px;
        background-repeat: no-repeat;
        background-position: center center;
        android-elevation: 5;
        background-color: white;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .my-template-scenarios-button {
        position: absolute;
        bottom: 5%;
        width: 100%;
        left: 0%;
        background-image: url("~/images/template-scenario.png");
        background-size: 400px 300px;
        background-repeat: no-repeat;
        background-position: center center;
        android-elevation: 5;
        background-color: white;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .cardStyle {
        android-elevation: 4;
        background-color: white;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .cardStyle:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }

    .fab-button {
        height: 100;
        width: 100; 
        margin: 20;
        background-color: #F9921C;
        horizontal-align: right;
        vertical-align: bottom;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .my-button {
        android-elevation: 4;
        background-color: #0C3C60;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .my-button:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }

    .my-scenarios-button {
        android-elevation: 4;
        background-color: #F9921C;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .my-scenarios-button:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }

    .add-custom-button {
        android-elevation: 4;
        background-color: #FAC710;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .add-custom-button:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }

    .help-howto-button {
        android-elevation: 4;
        background-color: #DA0063;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .help-howto-button:active {
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