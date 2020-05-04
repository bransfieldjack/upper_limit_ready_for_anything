<template>
    <Page actionBarHidden="true">

        <BottomNavigation selectedIndex="1">

            <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
            <TabStrip>

                <TabStripItem>
                    <Label text="Scenarios"></Label>
                    <Image :src="scenarios_icon" height="20%" width="20%"></Image>
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

                    <CardView v-for="item in scenarioObjects" class="cardStyle" margin="10" elevation="40" radius="5" ios:shadowRadius="3" @tap="cardTapped">
                        <StackLayout class="card-layout">
                            <Label text="" textAlignment="center"/>
                            <Image :src="item.image" height="20%" width="20%"/>
                            <Label class="h2" :text="item.text" textAlignment="center"/>
                            <Label text="" textAlignment="center"/>

                            <GridLayout dock="right" width="50%" height="20%"
                                columns="*, *, *" rows="*">

                                <Image col="0" v-if="cloudVisible" :src="full_cloud" @tap="cloudFavourited" loadMode="async"
                                stretch="aspectFit" height="20%" width="20%">
                                </Image>
                                <Image col="0" v-else :src="empty_cloud" @tap="cloudFavourited" loadMode="async"
                                    stretch="aspectFit" height="20%" width="20%">
                                </Image>

                                <Image col="1" :src="green_tick" loadMode="async"
                                    stretch="aspectFit" height="20%" width="20%">
                                </Image>

                                <Image col="2" v-if="starVisible" :src="full_star" @tap="starFavourited" loadMode="async"
                                stretch="aspectFit" height="20%" width="20%">
                                </Image>
                                <Image col="2" v-else :src="empty_star" @tap="starFavourited" loadMode="async"
                                    stretch="aspectFit" height="20%" width="20%">
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

            <!-- <TabContentItem>
            
                <Image src="~/images/upper_limit_expand_png.png" loadMode="async"
                    stretch="aspectFit" height="40%" width="50%">
                </Image>
          
            <TabContentItem/> -->
        
            <TabContentItem>
                <StackLayout orientation="vertical" height="100%"
                    backgroundColor="white">
                    <Image src="~/images/upper_limit_expand_png.png" loadMode="async"
                        stretch="aspectFit" height="40%" width="50%">
                    </Image>
                </StackLayout>
            </TabContentItem>

        </BottomNavigation>

    </Page>
</template>

<script>
    import newScenario from "./newScenario";
    import myScenarios from "./myScenarios";
    import addCustom from "./addCustom";
    import help from "./help";
    import ModalComponent from "./ModalComponent";  

    export default {
        components: {
            newScenario,
            myScenarios,
            addCustom,
            help
        },
        methods: {
            dialog(){
                // var dialogs = require("tns-core-modules/ui/dialogs");
                // // Second argument is optional.
                // dialogs.prompt("Your message", "Default text").then(function (r) {
                //     console.log("Dialog result: " + r.result + ", text: " + r.text);
                // });
                this.$showModal(ModalComponent);
            },
            cardTapped() {
                console.log("Card tapped. ")
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

            newScenario() {
                this.$navigateTo(newScenario);
            },

			myScenarios() { 
                this.$navigateTo(myScenarios);
            },
        },

        data() {
            return {
                scenarioObjects: [
                    {
                        "text": 'You had no money ... ', 
                        "full_cloud": '~/images/full-cloud.png', 
                        "green_tick": '~/images/green-tick.png', 
                        "image": '~/images/scenarios-icon.png'
                    }, 
                    {
                        "text": 'You had no money ... ', 
                        "full_cloud": '~/images/full-cloud.png', 
                        "green_tick": '~/images/green-tick.png', 
                        "image": '~/images/scenarios-icon.png'
                    }, 
                    {
                        "text": 'You had no money ... ', 
                        "full_cloud": '~/images/full-cloud.png', 
                        "green_tick": '~/images/green-tick.png', 
                        "image": '~/images/scenarios-icon.png'
                    }, 
                    {
                        "text": 'You had no money ... ', 
                        "full_cloud": '~/images/full-cloud.png', 
                        "green_tick": '~/images/green-tick.png', 
                        "image": '~/images/scenarios-icon.png'
                    }, 
                    {
                        "text": 'You had no money ... ', 
                        "full_cloud": '~/images/full-cloud.png', 
                        "green_tick": '~/images/green-tick.png', 
                        "image": '~/images/scenarios-icon.png'
                    }, 
                ],
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
            };
        }
    };
</script>

<style scoped>

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