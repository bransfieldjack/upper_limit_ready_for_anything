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

                <Button dock="left" text="Scenario 1" @tap="onButtonTap" width="65%"
                    height="10%" class="my-scenarios-button" />

                <GridLayout dock="right" width="100%" height="20%"
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

        </DockLayout>

    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    
    Vue.use(RadDataForm);

    export default {
        methods: {
            cloudFavourited() {
                this.cloudVisible = !this.cloudVisible
            },
            starFavourited() {
                this.starVisible = !this.starVisible
            },
            onButtonTap() {
                console.log("Button was pressed");
            },
            toggleCheck() {
                let checkBox = topmost().getViewById('yourCheckBoxId');
                checkBox.toggle();
            },
            getCheckProp() {
                let checkBox = topmost().getViewById('yourCheckBoxId');
                console.log('checked prop value = ' + checkBox.checked);
            },
        },

        data() {
            return { 
                starVisible: true,
                empty_star: '~/images/empty-star.png',
                full_star: '~/images/full-star.png',

                cloudVisible: true,
                empty_cloud: '~/images/empty-cloud.png',
                full_cloud: '~/images/full-cloud.png',

                green_tick: '~/images/green-tick.png',
            };
        }
    };
</script>

<style>
    .fav-button{
        background-color: #FEF445; /* Green */
        height: 10px;
    }

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