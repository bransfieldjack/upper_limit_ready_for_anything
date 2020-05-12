<template>
    <Page width="100%">
        <ScrollView width="100%" height="600">
            <StackLayout width="100%" backgroundColor="white" padding="10" >
                    <Label :text="title" v-for="title in scenarioTitles" textWrap="true" textAlignment="center" class="h2 p-10 about-heading" style="font-size: 15px;" @tap="select(title)"
                    />
            </StackLayout>
        </ScrollView>                 
    </Page>
</template>

<script>

import newTemplateScenario from "./newTemplateScenario";
import templateModal from "./templateModal";

    export default {
        data() {
            return {
                scenarioTitles: [
                    'You had to serve twice as many customers with the same amount of staff',
                    'You had to deliver the same service or products with half the cost',
                    'You had to sell only via the web',
                    'You had to sell without using any website or social media',
                    'You had to create a franchise of your business model',
                    'You could only be on site at the business 1 day per week',
                    'All of your communication to your team needed to be via email / phone',
                    'The majority (80% plus) of your team worked from home',
                    'Your average transaction amount halved',
                    'Your average transaction doubled',
                    'You couldn’t advertise your business',
                    'Your most important team member couldn’t work for 12 months?',
                    'You couldn’t sell your top selling product / service anymore?',
                    'You couldn’t sell any of the products / services that you currently sell?',
                    'You could only sell a consolidated list of products or services (25% or less of your current total)?',
                    'You had to operate from a location half as big',
                    'You couldn’t use any external logistics',
                    'You could only use casual / part-time team members',
                    'Customers could only shop on account terms (and no transactions were paid for in person)',
                    'Customers could only buy in bulk (orders 3-4 time your average transaction)',
                    'Your customers could only make a transaction once per week',
                    'Your business was ‘mail-order’ driven (catalogues and order forms)',
                    'You couldn’t use your biggest 2 suppliers / service providers anymore'
                ],
            };
        },
        
        methods: {
            select(title) {
                // this.$showModal(templateModal);
                this.$modal.close(templateModal);
                this.$navigateTo(newTemplateScenario, {
                    props: {
                        title: title,
                    }
                });
            },
        }
    };
</script>

<style>

    .about-heading{
        font-size: 10;
        padding: 5 18;
        border-color: #0C3C60;
        border-width: 1;
    }

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