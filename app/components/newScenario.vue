<template>
    <Page>
        <ActionBar>
            <Button text="Back" @tap="this.$navigateBack"
                class="my-scenarios-button" color="#F9921C" />
        </ActionBar>

        <ScrollView>

            <GridLayout columns="*,*,*"
                rows="*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*">
                <!-- 25 -->

                <Label text="SCENARIO 1" row="1" colSpan="3" class="h2"
                    textAlignment="center" textDecoration="underline" />

                <Label
                    text="YOU HAD TO SERVE TWICE AS MANY CUSTOMERS WITH THE SAME AMOUNT OF STAFF"
                    row="2" colSpan="3" class="h3" textAlignment="center"
                    textWrap="true" />

                <Label text="List the changes you would need to make to:"
                    row="3" colSpan="3" class="p" textAlignment="center"
                    textWrap="true" />

                <!-- Space -->

                <Label text="" row="4" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Label
                    text="The Physical Structures (premises, equipment, etc.)"
                    row="5" colSpan="3" class="p" textAlignment="center"
                    textWrap="true" />

                <TextView row="6" colSpan="3" class="input input-border">
                </TextView>

                <!-- Space -->

                <Label text="" row="7" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Label text="Processes / Systems:" row="8" colSpan="3"
                    class="p" textAlignment="center" textWrap="true" />

                <TextView row="9" colSpan="3" class="input input-border">
                </TextView>

                <!-- Space -->

                <Label text="" row="10" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Label text="Communication:" row="11" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <TextView row="12" colSpan="3" class="input input-border">
                </TextView>

                <!-- Space -->

                <Label text="" row="13" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Label text="People:" row="14" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <TextView row="15" colSpan="3" class="input input-border">
                </TextView>

                <!-- Space -->

                <Label text="" row="16" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Label text="Anything else:" row="17" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <TextView row="18" colSpan="3" class="input input-border">
                </TextView>

                <Label text="" row="19" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Label text="Keywords & Themes (use a comma to seperate):"
                    row="20" colSpan="3" class="p" textAlignment="center"
                    textWrap="true" />

                <TextView row="21" colSpan="3" class="input input-border">
                </TextView>

                <Label text="" row="22" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />

                <Button row="23" colSpan="3" text="Mark as complete"
                    @tap="onButtonTap" class="mark-as-complete-button"
                    color="#F9921C" />

                <Button row="24" colSpan="3" text="My Scenarios"
                    @tap="myScenarios" class="mark-as-complete-button"
                    color="#F9921C" />

                <Label text="" row="25" colSpan="3" class="p"
                    textAlignment="center" textWrap="true" />



            </GridLayout>



        </ScrollView>

    </Page>
</template>

<script>
    import myScenarios from "./myScenarios";
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";

    Vue.use(RadDataForm);

    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },
            myScenarios() { 
                this.$navigateTo(myScenarios);
            },
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