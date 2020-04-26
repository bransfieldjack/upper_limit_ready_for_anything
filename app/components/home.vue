<template>
    <Page>
        <ActionBar title="Prepared for anything" color="#0C3C60" />

        <ScrollView>

            <StackLayout orientation="vertical" height="100%"
                backgroundColor="white">

                <Image src="~/images/upper_limit_expand.JPG" loadMode="async"
                    stretch="aspectFit" height="40%" width="50%">
                </Image>

                <Button text="New Scenario" @tap="newScenario" width="80%"
                    class="my-scenarios-button" height="60" />

                <Button text="My Scenarios" @tap="myScenarios" width="60%"
                    class="my-button" height="60" />

                <Button text="Add Custom" @tap="onButtonTap" width="60%"
                    class="my-button" height="60" />

                <Button text="Help / how to" @tap="onButtonTap" width="60%"
                    class="my-button" height="60" />


                <SearchBar hint="Search " width="100%" height="50"
                    @submit="onSearchSubmit" />


            </StackLayout>

        </ScrollView>
    </Page>
</template>

<script>
    import newScenario from "./newScenario";
    import myScenarios from "./myScenarios";

    export default {
        methods: {
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            },

            onButtonTap() {
                console.log("Button was pressed");
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