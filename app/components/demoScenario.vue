<template>
    <Page>
        <ActionBar title="Introduction and demo scenario" class="h2 p-10">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="this.$navigateBack" />
        </ActionBar>

        <ScrollView>
            
            <StackLayout width="100%" backgroundColor="white" padding="10">

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Let’s go through an example to get a better understanding of how this will work. Our business is Jack’s Rock-Hard Lemonade, a corner lemonade stand with 6 employees and $1m annual sales at 50% GP. The business started a year ago and is run by Jack and a few team members that have been with him since the beginning. Sales are transacted at a physical stand by and the average hard-lemonade costs $10" 
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Let’s look at an example using the first scenario “You had to serve twice as many customers with the same amount of staff”"
                />

                <Label textWrap="true" class="h2 p-10" text="Physical structures:"
                />

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• List the things you would have to physically move, buy or sell in order to adapt to this scenario. E.g. If you had to ship twice as many parcels, you may need a new label printer”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Print larger main menu boards so that customers can see them while they queue up”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Buy 2nd cash register”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Create ‘pickup’ and ‘ordering’ area so that customers can order and then move to the pickup area while they wait”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Consider tablets or fixed ordering stations that allow customers to do quick orders for simple items and have them ready for pickup”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Offer ‘pre-pay’ orders that customers can order ahead of time and collect at a designated time”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Offer take-away 6-packs, need to investigate packaging etc”"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• New machinated production system that doesn’t solely rely on staff mixing the product”"
                />

                <Label textWrap="true" class="h2 p-10" text="Processes / Systems:"
                />
                
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• e.g. if you were going to ship twice as many parcels, you might need to implement a tracking system."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• New ordering / pickup system needs to be implemented so that cashier is no longer server"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Quality control system needs to be put in place"
                />

                <Label textWrap="true" class="h2 p-10" text="Communication:"
                />

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• With the changes that confront you in this scenario, who would you need to tell about what you're changing and when? E.g. if all your staff now had to work remotely, you may want to put a morning meeting in place to align everyone's objectives for the day"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Team needs to be informed that sales are going so well and we need to change some process"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Customers to be alerted of the new great options that we offer"
                />
                <Label textWrap="true" textAlignment="center" class="h3 p-10" style="font-size: 15px; " text="- Pre-order and pay for fast checkout"
                />
                <Label textWrap="true" textAlignment="center" class="h3 p-10" style="font-size: 15px; " text="- Take-away options available"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Daily team huddles to go in place for first few weeks to manage expectations of staff and take feedback on new process etc"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Training to take place on operating the new lemonade mixing machine"
                />

                <Label textWrap="true" class="h2 p-10" text="People:"
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• Whose role would need to change? Would you need to increase or decrease staff? Is there a new specialist that you would need to add to your team? e.g if you were going to double your deliveries, you may need another driver. If you had to stop doing retail sales, you may need to re-assign some retail sales staff to other roles."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Several of the team members will need to change / split their roles. Need to sit down and map out the new roles and responsibilities."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• May need to change one of the team fulltime from general assistant to production."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Need to engage business analyst to scope changes to online etc."
                />

                <Label textWrap="true" class="h2 p-10" text="Financial Processes / Implications:"
                />

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• What financial impact would this have on the business? Would you need to change the way that you reported? Would your terms of sale need to change? E.g. if you had to sell only online, you may want to offer some after payment options."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Sales are going to be well up, need to ensure margin remains the same."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Need to monitor amounts of cash we’re taking and holding daily, may need to do more bank runs. "
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Can tap and go be prioritised? "
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Need to speak to accountant re purchased of machine and repayment schedule etc to see what we can afford. "
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Need to consider how much holding of all raw materials we need now if doubling production, does this need to be delivered in bulk and if so what are the cash flow implications? "
                />
                
                <Label textWrap="true" class="h2 p-10" text="Anything else:"
                />

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• What else comes to mind that you need to consider in this scenario? List any other factors or notes to consider that you may want to revisit. "
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• This might be the best time to launch the rebrand that we’ve been considering? "
                />

                <Label textWrap="true" class="h2 p-10" text="Estimated Cost of Changes $:"
                />

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• List the costs associated with the various options that you have outlined above E.g. if you had to buy a parcel tracking system, estimate how much that may cost."
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• Costing needs to be completed but early estimates:"
                />
                <Label textWrap="true" textAlignment="center" class="h3 p-10" style="font-size: 15px; " text="- New signage $2k"
                />
                <Label textWrap="true" textAlignment="center" class="h3 p-10" style="font-size: 15px; " text="- New machine $15k"
                />
                <Label textWrap="true" textAlignment="center" class="h3 p-10" style="font-size: 15px; " text="- New cash register $2k"
                />

                <Label textWrap="true" class="h2 p-10" text="How long could you do this for: "
                />

                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style:italic;" text="• Make notes about how sustainable these changes would be. i.e. How long do you think that your business could survive if you had to sell online only? Could you do this forever, or only for a few months? "
                />
                <Label textWrap="true" class="h3 p-10" style="font-size: 15px; " text="• With proper procedures and training, this could be done indefinitely, until such time that we grow further. That said, if we are able to double sales and maintain profit margins, another team member would be good as a ‘generalist’ to ease the load on existing team members. "
                />

                

                


                


                 

                
                
                

                



            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>

    export default {
        methods: {
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            },

            onButtonTap() {
                console.log("Button was pressed");
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