<template>
    <Page>
        <ActionBar title="How to complete this activity" color="#0C3C60" />

        <GridLayout columns="*" rows="*, *, *, *" backgroundColor="#ffffff">
            <Label textAlignment="center" class="p" text="Step 1" row="0" col="0" />
            <Label textAlignment="center" class="p" text=" " row="1" col="0" />
            <TextView row="2" col="0">
                <FormattedString>
                <Span text="NativeScript" foregroundColor="#3C5AFD"></Span>
                </FormattedString>
            </TextView>
        </GridLayout>

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
    .p {
        font-size: large;
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