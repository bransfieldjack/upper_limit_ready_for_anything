<template>

    <ScrollView class="input-field" width="400" height="400">
        <StackLayout class="input-field" width="400" height="400">

            <Label text="" textAlignment="center"/>

            <Image src="~/images/question-mark.png" height="20%" width="20%"></Image>
            <Label text="" textAlignment="center"/>

            <Label text="Introduction and demo scenario" class="h2" testwrap="true" textAlignment="center"/>

            <StackLayout width="100%" backgroundColor="white" padding="10">
                <Label textWrap="true" class="h3 p-12" style="font-size: 15px;" text="Let’s go through an example to get a better understanding of how this will work. Our business is Jack’s Rock-Hard Lemonade, a corner lemonade stand with 6 employees and $1m annual sales at 50% GP. The business started a year ago and is run by Jack and a few team members that have been with him since the beginning. Sales are transacted at a physical stand by and the average hard-lemonade costs $10"
                />   
                <Label textWrap="true" class="h3 p-12" style="font-size: 15px;" text="Let’s look at an example using the first scenario “You had to serve twice as many customers with the same amount of staff”"
                />   
            </StackLayout>
            
        </StackLayout>
    </ScrollView>                 

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