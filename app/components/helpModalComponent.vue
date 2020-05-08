<template>
    <Page>

        <ActionBar title="Custom Scenario">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="this.$navigateBack" />
        </ActionBar>

        <ScrollView>

            
            <StackLayout class="form" >

                <StackLayout class="input-field" >

                    <Label text="" textAlignment="center"/>

                    <GridLayout columns="*, *, *, *, *" rows="*">
                        <Image row="0" col="2"  src="~/images/question-mark.png" height="30%" width="30%"></Image>
                    </GridLayout>

                    <Label text="" textAlignment="center"/>

                    <Label text="Introduction and demo scenario" class="h2" textAlignment="center"/>
                    
                </StackLayout>

               
                

                

            </StackLayout>


        </ScrollView>

    </Page>
</template>

<script>

    export default {
        data() {
            return {
                
            };
        },
        
        methods: {

        }
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