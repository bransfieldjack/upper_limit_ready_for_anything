<template>
    <Page>
        <ActionBar title="Prepared for anything" color="#0C3C60" />

        <!-- <ScrollView>

            <StackLayout orientation="vertical" height="100%"
                backgroundColor="white">

                <Image src="~/images/upper_limit_expand_png.png" loadMode="async"
                    stretch="aspectFit" height="40%" width="50%">
                </Image>

                <Button text="New Scenario" @tap="newScenario" width="80%"
                    class="my-scenarios-button" height="60" />

                <Button text="My Scenarios" @tap="myScenarios" width="60%"
                    class="my-button" height="60" />

                <Button text="Add Custom" @tap="newScenario" width="60%"
                    class="my-button" height="60" />

                <Button text="Help / how to" @tap="help" width="60%"
                    class="my-button" height="60" />

                <SearchBar hint="Search " width="100%" height="50"
                    @submit="onSearchSubmit" />

            </StackLayout>

        </ScrollView> -->

        <BottomNavigation selectedIndex="1">

            <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
            <TabStrip>
                <TabStripItem>
                    <Label text="New Scenario" @tap="newScenario"></Label>
                </TabStripItem>
                <TabStripItem class="special">
                    <Label text="Account"></Label>
                </TabStripItem>
                <TabStripItem class="special">
                    <Label text="Search"></Label>
                </TabStripItem>
            </TabStrip>

            <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
            <!-- <TabContentItem>
                <newScenario/>
                <!-- <GridLayout>
                    <Label text="Home Page"></Label>
                </GridLayout> -->
            </TabContentItem>
            <TabContentItem>
                <GridLayout>
                    <Label text="Account Page"></Label>
                </GridLayout>
            </TabContentItem>
            <TabContentItem>
                <GridLayout>
                    <Label text="Search Page"></Label>
                </GridLayout>
            </TabContentItem> -->

        </BottomNavigation>

    </Page>
</template>

<script>
    import newScenario from "./newScenario";
    import myScenarios from "./myScenarios";
    import addCustom from "./addCustom";
    import help from "./help";

    export default {
        methods: {
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
                searchPhrase: ""
            };
        }
    };
</script>

<style scoped>
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