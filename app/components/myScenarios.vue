<template>
    <Page>
        <ActionBar title="Prepared for anything" color="#0C3C60" />

        <ActionBar>
            <Button text="Back" @tap="this.$navigateBack"
                class="my-scenarios-button" color="#F9921C" />
        </ActionBar>

        <DockLayout width="100%" height="100%" backgroundColor="white"
            stretchLastChild="false">

            <Label text="Prepared for anything scenarios" dock="top"
                height="10%" backgroundColor="white" class="h2"
                textAlignment="center" textDecoration="underline" />

            <StackLayout dock="left" width="70%" backgroundColor="red"
                orientation="vertical" backgroundColor="white">

                <Button text="Scenario 1" @tap="onButtonTap" width="90%"
                    height="20%" class="my-scenarios-button" />

                <Button text="Scenario 2" @tap="onButtonTap" width="90%"
                    height="20%" class="my-scenarios-button" />

                <Button text="Scenario 3" @tap="onButtonTap" width="90%"
                    height="20%" class="my-scenarios-button" />

                <Button text="Scenario 4" @tap="onButtonTap" width="90%"
                    height="20%" class="my-scenarios-button" />

            </StackLayout>

            <StackLayout dock="right" width="30%" backgroundColor="white"
                orientation="vertical" backgroundColor="lightgray">

                <GridLayout width="100%" height="20%" backgroundColor="purple"
                    columns="*, *, *" rows="*" backgroundColor="purple">

                    <Label text="Label 1" col="0" class="far" />
                    <Label text="Label 2" col="1" backgroundColor="green" />
                    <Label text="Label 3" col="2" backgroundColor="blue" />

                </GridLayout>

                <GridLayout width="100%" height="50" backgroundColor="purple"
                    columns="*, *, *" rows="*" backgroundColor="purple">

                    <Label text="Label 1" col="0" backgroundColor="red" />
                    <Label text="Label 2" col="1" backgroundColor="green" />
                    <Label text="Label 3" col="2" backgroundColor="blue" />
                </GridLayout>
                <GridLayout width="100%" height="50" backgroundColor="purple"
                    columns="*, *, *" rows="*" backgroundColor="purple">

                    <Label text="Label 1" col="0" backgroundColor="red" />
                    <Label text="Label 2" col="1" backgroundColor="green" />
                    <Label text="Label 3" col="2" backgroundColor="blue" />
                </GridLayout>
                <GridLayout width="100%" height="50" backgroundColor="purple"
                    columns="*, *, *" rows="*" backgroundColor="purple">

                    <Label text="Label 1" col="0" backgroundColor="red" />
                    <Label text="Label 2" col="1" backgroundColor="green" />
                    <Label text="Label 3" col="2" backgroundColor="blue" />
                </GridLayout>
            </StackLayout>


        </DockLayout>

    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            }
        },

        data() {
            return {
                listPickerCountries: [
                    "Australia",
                    "Belgium",
                    "Bulgaria",
                    "Canada",
                    "Switzerland",
                    "China",
                    "Czech Republic",
                    "Germany",
                    "Spain",
                    "Ethiopia",
                    "Croatia",
                    "Hungary",
                    "Italy",
                    "Jamaica",
                    "Romania",
                    "Russia",
                    "United States"
                ],
                selectedListPickerIndex: 0,

                album: {
                    bandName: "Ed Sheeran",
                    albumName: "X",
                    year: "2017",
                    // owned: true,
                    myRating: "9.5"
                },

                textFieldValue: ""
            };
        }
    };
</script>

<style>
    .far {
        font-family: "Font Awesome 5 Free", "fa-regular-400";
        font-weight: 400;
    }

    .my-scenarios--button {
        android-elevation: 4;
        background-color: #0C3C60;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: orange;
        font-size: 18;
        font-weight: bold;
    }

    .my-scenarios-button:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: orange;
        font-size: 18;
        font-weight: bold;
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