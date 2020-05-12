<template>
    <Page actionBarHidden="true">

        <BottomNavigation>

            <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
            <TabStrip>

                <TabStripItem>
                    <Label text="Scenarios"></Label>
                    <Image :src="scenarios_icon" height="20%" width="20%"></Image>
                </TabStripItem>

                <TabStripItem>
                    <Label text="New Scenario"></Label>
                    <Image :src="template_scenario" height="20%" width="20%"></Image>
                </TabStripItem>

                <TabStripItem>
                    <Label text="Favourites"></Label>
                    <Image :src="full_star" height="20%" width="20%"></Image>
                </TabStripItem>

                <TabStripItem>
                    <Label text="About"></Label>
                    <Image :src="help_icon" height="20%" width="20%"></Image>
                </TabStripItem>

            </TabStrip>

            <!-- Scenarios page, includes add a new scnearion nav button -->
            <TabContentItem>

                <ScrollView>
                    <StackLayout class="home-panel">

                    <CardView v-for="item in this.$store.state.data" class="cardStyle" margin="10" elevation="40" radius="5" ios:shadowRadius="3">
                        <StackLayout class="card-layout">
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="100%" height="20%"
                                columns="*, *, *, *, *, *, *, *, *, *" rows="*">

                                <Image :src="delete_icon" loadMode="async" height="8%" width="8%" col="1" row="0" @tap="delete_record(item.id)">
                                </Image>

                                <Image v-if="item.favourite == 'true'" :src="full_star" loadMode="async" height="8%" width="8%" col="8" row="0" @tap="make_favourite(item.id)">
                                </Image>

                                <Image v-else :src="empty_star" loadMode="async" height="8%" width="8%" col="8" row="0" @tap="make_favourite(item.id)">
                                </Image>                                

                            </GridLayout>

                            <Label text="" textAlignment="center"/>
                            <Image v-if="item.custom" :src="custom_scenario_icon" height="40%" width="40%"/>
                            <Image v-else :src="template_scenario_icon" height="40%" width="40%"/>
                            <Label class="h2" v-bind:text="item.title" textAlignment="center" textWrap="true"/>
                            
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="80%" height="30%"
                                columns="*, *, *, *, *, *, *, *" rows="*">

                                <Image col="5" v-if="item.inprogress == 'true'" :src="full_cloud" loadMode="async"
                                stretch="aspectFit" height="30%" width="30%">
                                </Image>
                                <Image col="5" v-else :src="green_tick" loadMode="async"
                                    stretch="aspectFit" height="30%" width="30%">
                                </Image>

                                <Image col="8" :src="open_scenario" loadMode="async"
                                    stretch="aspectFit" height="30%" width="30%" @tap="cardTapped(item.id)">
                                </Image>

                            </GridLayout>

                            <Label text="" textAlignment="center"/>

                        </StackLayout>
                    </CardView>

                    <Fab 
                        @tap="dialog"
                        height="15%" width="15%"
                        :icon="plus_icon"
                        rippleColor="#FAC710"
                        class="fab-button"
                    ></Fab>
                    
                    </StackLayout>
                </ScrollView>
                        
            </TabContentItem>

            <TabContentItem>
                <ScrollView>
                    <StackLayout backgroundColor="white" width="400" height="400">

                        <Label class="h2 text-center" text="" />
                        <Button width="70%" height="30%" class="my-custom-scenarios-button" @tap="newCustomScenario" />

                        <Label class="h2 text-center" text="" />
                
                        <Button width="70%" height="30%" class="my-template-scenarios-button" @tap="templateModal" />
                        <Label class="h2 text-center" text="" />

                    </StackLayout>
                </ScrollView>
            </TabContentItem>

            <TabContentItem>

                <ScrollView>

                    <StackLayout class="home-panel">

                    <CardView v-for="item in this.$store.state.data" v-if="item.favourite == 'true'" class="cardStyle" margin="10" elevation="40" radius="5" ios:shadowRadius="3">
                        <StackLayout class="card-layout" >
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="100%" height="20%"
                                columns="*, *, *, *, *, *, *, *, *, *" rows="*">

                            </GridLayout>

                            <Label text="" textAlignment="center"/>
                            <Image v-if="item.custom" :src="custom_scenario_icon" height="40%" width="40%"/>
                            <Image v-else :src="template_scenario_icon" height="40%" width="40%"/>
                            <Label class="h2" v-bind:text="item.title" textAlignment="center" textWrap="true"/>
                            <Label text="" textAlignment="center"/>

                            <GridLayout width="40%" height="20%" @tap="cardTapped(item.id)"
                                columns="*, *, *" rows="*">

                                <Image col="1" v-if="item.inprogress == 'true'" :src="full_cloud" loadMode="async"
                                stretch="aspectFit" height="30%" width="30%">
                                </Image>
                                <Image col="1" v-else :src="green_tick" loadMode="async"
                                    stretch="aspectFit" height="30%" width="30%">
                                </Image>

                            </GridLayout>

                            <Label text="" textAlignment="center"/>

                        </StackLayout>
                    </CardView>
                    
                    </StackLayout>
                </ScrollView>

                <!-- <ScrollView>
                    <StackLayout backgroundColor="white" width="400" height="400">

                        <Label class="h2 text-center" text="Favourites" />
        
                    </StackLayout>
                </ScrollView> -->
            </TabContentItem>

            <TabContentItem>
                <ScrollView ref="scrollView" @scroll="onScroll">
                    <StackLayout>
                        <StackLayout ref="topView" height="220" style="background-image: url('~/images/upper_limit_expand_png.png'); background-repeat: no-repeat; background-position: center; background-size: 500px 500px;">
                            <!-- this is the header for collapsing --->
                            <!-- Note: this can be any type of layout you want -->
                            <!-- <Label text="Parallax" color="gray" textAlignment="center" fontSize="45" marginTop="40" /> -->
                        </StackLayout>
                        <StackLayout width="100%" backgroundColor="white" padding="10">
                            <!--Add your page content here-->
                            <Label textWrap="true" text="Prepared for Anything: How to Successfully Navigate Your Business Through an Uncertain Future" class="h2 p-10 description-label" />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="It’s really easy to just keep doing what you always did. In fact, it’s the easiest thing to do and it saves us mental and physical energy. In normal conditions, we keep doing things the same way until outside factors are imposed upon us and it becomes apparent that we can’t keep doing it that way. "
                            />

                            <Label textWrap="true" class="h2 p-10" text="These are not normal conditions that we face at the moment..."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Change is the one constant in this world. Sometimes the change we face is gradual, and other times it’s more drastic and rapid. Either way, you must be prepared and willing to face it."
                            />
                            <Label textWrap="true" class="h2 p-10" text="Being prepared means:"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="• Being ready to act when rapid change is forced upon you"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="• Regularly identifying opportunities in your business"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="• implementing these positive, gradual changes at your own pace"
                            />
                            <Label textWrap="true" class="h2 p-10" text="How Rapid Change Impacts Business"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Periods of rapid change pose a different, and more direct threat. While we typically don’t see rapid change events too often, we’re almost statistically certain to face a few in our lifetimes. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Events like financial crises, natural disasters, war and pandemics bring about periods of rapid change. Periods of rapid change have the potential to blindside and wipe out those that don’t act swiftly. The rules of the game can change in the blink of an eye, forcing them to face numerous high-impact decisions in a short period of time. When they do face these decisions, they must choose wisely. Those that have thought about different scenarios and contingencies in a calm, unemotional state beforehand are best prepared. Those who have not prepared come undone as they make shortsighted mistakes through rash, random action, or worse still, fail to act at all and become extinct."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="To be clear, in the face of rapid change events, if you aren’t prepared to make swift and decisive moves, you may not survive. Make no mistake, right now, we are in the early stages of a rapid change event, and there is one question that matters:"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px; font-style: italic;" text="Are you prepared to face rapid change?"
                            />
                            <Label textWrap="true" class="h2 p-10" text="Examples of Changing Industries and The Race to Adapt"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="There is no definitive “right way” to run a business and no business is ever immune to change. All businesses must constantly morph and adapt to changing conditions in order to survive and thrive. In this period of rapid change though, some industries will need to transform gradually, while others will need to adapt seemingly overnight. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="The sooner that you accept the prospect of needing to adapt, the further ahead you start in the race. If you haven’t already, accept that your business may need to look extremely different in this new environment if it is to adapt and survive."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="To better understand the change we’re facing, let’s look at the hospitality industry. Take your average restaurant for example - the way that they do business has changed more in the last month than it has in the past 20 years. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Specifically, let’s look at two specific changes that have gradually occurred in the last 20 years in more detail:"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="1. The rise of social media"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="2. The growth in digital delivery platforms and delivery services"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 20px;" text="The rise of social media"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Most people have now seen the menu and photos of the food before they even select a restaurant. Savvy owners have used this trend to reach larger audiences than ever before through social media services like Facebook and Instagram."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="They have made the most of the gradual changes in technology and have built online communities that give them an audience to speak to. They make appealing information available for anyone who wants to see it and to grow their business ‘organically’ without paying for advertising. This in itself, has not changed the day to day operations of many restaurants. Until very recently, it has been a perfectly viable option to do what you always did as a restaurant owner. Now though, those who hadn’t started adapting to the gradual change face a much steeper uphill climb to catch up and survive."
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 20px;" text="3rd-party delivery services"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Other progressive owners have capitalised on the rise of digital delivery platforms like uber eats, foodora or deliveroo where they can deliver tens or hundreds more meals per night (at a much lower margin) without having to wash plates or employ front of house staff. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Again, this alone has not drastically changed the way that restaurants need to do business day to do. It allows them to keep the kitchen busier and reach larger audiences, but to date, it has not been necessary for the survival of most restaurant businesses."
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 20px;" text="It’s never too late, until it is"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Social media accounts and 3rd party online delivery platforms are just a few examples of the kinds of gradual changes that have created opportunity in the last 20 years. But the fact of the matter is, in an era where nearly everyone is online and connected most of the day, many restaurants hadn’t yet adapted to take advantage of this environment. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="They didn’t adapt because they weren’t forced to adapt. They are now being forced to, and rapidly, some at a rate that they won’t be able to keep up with."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="The current environment has lumped a drastic change on top years of gradual change, and those that weren’t keeping up before are now starting a long way behind the pack in this race for survival. It’s plain to see that the restaurants that have explored the new opportunity that  technology presents are better positioned to survive and thrive under current conditions."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Now put yourself in the shoes of a restaurant owner - If you needed to change your business model overnight, imagine the difference it would make having a social media account with 1000+ followers and a fully menu loaded ready to go for delivery through a trusted 3rd party partner. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="With this in mind, I ask again, are you prepared to face rapid change? "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Do you know and understand the gradual changes in your industry that will prove critical in adapting to the future?"
                            />
                            <Label textWrap="true" class="h2 p-10" style="font-size: 15px;" text="If You Are Not Prepared, Act Now"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="In short, start preparing now. Start preparing right now and don’t stop. "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="If you have the means to do so, discuss your situation with a trusted professional. Workshop plans for what to do if likely scenarios come to pass. Take advice on what your business will need to do to adapt under certain conditions. Prioritise and put emphasis on those scenarios that you are likely to face in the near future such as decreased ‘foot traffic’ and increasing demand for delivered services."
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="If you don’t have the means to work with a professional skilled in these matters, workshop a preparedness plan with someone you trust, or even alone if necessary. "
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 20px;" text="3rd-party delivery services"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="1. Select a scenario (start with the most likely ones you will face) and articulate what changes you would need to make to adapt to that situation in regard to:"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Physical structures / equipment"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Processes and systems"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Communication methods (internal and external)"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- People (inc roles and responsibilities) "
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Financial processes / implications (changes to invoicing, process, cashflow etc)"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="2. Once you have explored the changes you need to make:"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Note estimated times and costs to make the changes suggested"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Note how long you think your business would be sustainable for under this scenario if you made the changes"
                            />
                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="- Note if the changes you are considering making are permanent or reversible."
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="3. Compile these changes into an action plan, complete with specific conditions that would trigger different stages of this plan e.g. ‘If business drops by 20%, I will do action A. Then if it drops by another 20% I will do action B’. Have the plan ready and assess the situation regularly. By adding conditions and triggers for when the plan will be used, you will be prepared to make considered, swift and decisive actions when the time comes. "
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="4. Repeat steps 1-3 until you’ve completed rough action plans for the top 5 most likely scenarios that you’ll face. Explore at least one scenario daily until this is done. It only needs to take 10-20 minutes each day and with each different scenario that you explore, you strengthen the foundations of your business by preparing it to adapt. "
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="By putting aside time each day to work on your business, you can manage this process in a non-disruptive manner. The more you do to prepare, the more likely you are to act positively and swiftly when you need to. "
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="There is another huge upside to this process as well - by planning for what may come to pass, you will identify beneficial changes that you can make to your business right now. These changes can be implemented whenever you choose and some will be quick and easy modifications to everyday business."
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="Just because you started doing something one way doesn’t mean that it’s still relevant or the best way to do it now or in the future. "
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="While it’s true that times of drastic change force us to confront our reality and adapt, there is no rule that says we must wait for a crisis to make positive change in our world."
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 15px;" text="For more information, worksheets, or example of scenarios that you can plan for, you can contact me:"
                            />

                            <Label textWrap="true" class="h3 p-10" style="font-size: 18px; color: blue;" text="jake@upperlimit.club"
                            />

                            
                            
                            


                            
                        </StackLayout>
                    </StackLayout>
                </ScrollView>

<!--                 
                <ScrollView>
                    <StackLayout backgroundColor="white" width="400" height="400">

                        <Label class="h2 text-center" text="Help" />
        
                    </StackLayout>
                </ScrollView> -->
            </TabContentItem>
        
        </BottomNavigation>

    </Page>
</template>

<script>
    import newCustomScenario from "./newCustomScenario";
    import myScenarios from "./myScenarios";
    import addCustom from "./addCustom";
    import help from "./help";
    import ModalComponent from "./ModalComponent";  
    import editScenario from "./editScenario";
    import templateModal from "./templateModal";

    const Sqlite = require("nativescript-sqlite");

    export default {
        components: {
            myScenarios,
            addCustom,
            help
        },
        methods: {
            templateModal() {
                // this.$navigateTo(templateModal);
                this.$showModal(templateModal);
            },
            onScroll: function () {
                //access to the native event
                const scrollView = this.$refs.scrollView.nativeView;
                const topView = this.$refs.topView.nativeView;

                // if the offset is less than the height of the header.
                if (scrollView.verticalOffset < 250) {
                    const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
                    if (scrollView.ios) {
                    // iOS adjust the position with an animation to create a smother scrolling effect. 
                    topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
                    } else {
                    // Android, animations are jerky so instead just adjust the position without animation.
                    topView.translateY = Math.floor(offset);
                    }
                }
            },
            make_favourite(event) {

                const Sqlite = require("nativescript-sqlite");

                new Sqlite("my.db").then(db => {

                    db.all('select favourite from custom_templates where id=?', [event], function(err, table) {
                        // console.log(table[0][0]);
                        if (table[0][0] == 'true'){
                            db.all('update custom_templates set favourite="false" where id=?', [event], function(err, table) {
                                console.log(table);
                                this.$store.dispatch("init");
                                this.load();
                            });                    
                        }
                        else if (table[0][0] == 'false'){
                            db.all('update custom_templates set favourite="true" where id=?', [event], function(err, table) {
                                console.log(table);
                                this.$store.dispatch("init");
                                this.load();
                            });       
                        }


                    });                    

                    this.$store.dispatch("init");
                    this.load();

                });

            },
            delete_record(event) {

                const id = event;
                this.selected_id.id = id;
        
                var dialogs = require("tns-core-modules/ui/dialogs");
                
                const actionOptions = {
                    message: "Are you sure you want to delete this scenario?",
                    cancelButtonText: "Cancel",
                    actions: ["Yes", "No"],
                    state: this.$store.state.data,
                    id: id,
                    cancelable: true // Android only
                };

                action(actionOptions).then((result) => {

                    console.log("Dialog result: ", result);

                    if (result == "Yes") {

                        const Sqlite = require("nativescript-sqlite");

                        new Sqlite("my.db").then(db => {

                            db.all('delete from custom_templates where id=?', [this.selected_id.id], function(err, table) {
                            console.log(table);
                            console.log("record deleted")
                            });

                            // db.all('select * from custom_templates', function(err, table) {
                            // console.log(table);
                            // console.log("record deleted")
                            // });

                            this.$store.dispatch("init");
                            this.load();

                        });

                    } else if (result == "No") {

                        this.selected_id = null;

                    }
                });

            },
            state_print(){
            },
            newCustomScenario() {
                this.$navigateTo(newCustomScenario);
            },
            dialog(){
                this.$showModal(ModalComponent);
            },
            cardTapped(id) {
                this.$navigateTo(editScenario, {
                    props: {
                        id: id,
                    }
                });
            },
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
			myScenarios() { 
                this.$navigateTo(myScenarios);
            },
            load() {
                this.$store.dispatch("query");
            },
            delete() {
                this.$store.dispatch("delete", this.selected_id.id);
            },
        },

        mounted() {
            this.load();
        },

        data() {
            return {
                favourite_button_logic: {
                    type: Boolean,
                    id: null,
                    default: false,
                    value: false,
                },
                selected_id: {
                    id: null,
                },
                custom_scenario_icon: "~/images/custom-scenario.png",
                template_scenario_icon: "~/images/template-scenario.png",
                card_image: '~/images/scenarios-icon.png',
                delete_icon: '~/images/delete_icon.png',
                template_scenario: '~/images/template-icon.png',
                scenario_title: 'You had no money ... ',
                searchPhrase: "",
                starVisible: true,
                empty_star: '~/images/empty-star.png',
                full_star: '~/images/full-star.png',
                plus_icon: '~/images/new-icon.png',
                scenarios_icon: '~/images/scenarios-icon.png',
                help_icon: '~/images/help-icon.png',
                cloudVisible: true,
                empty_cloud: '~/images/empty-cloud.png',
                full_cloud: '~/images/full-cloud.png',
                green_tick: '~/images/green-tick.png',
                open_scenario: '~/images/open-scenario.png',
            };
        }
    };
</script>

<style scoped>

    .delete-icon {
        padding-right: 50px;
    }

    .my-custom-scenarios-button {
        position: absolute;
        bottom: 5%;
        width: 100%;
        left: 0%;
        background-image: url("~/images/custom-scenario.png");
        background-size: 400px 300px;
        background-repeat: no-repeat;
        background-position: center center;
        android-elevation: 5;
        background-color: white;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .my-template-scenarios-button {
        position: absolute;
        bottom: 5%;
        width: 100%;
        left: 0%;
        background-image: url("~/images/template-scenario.png");
        background-size: 400px 300px;
        background-repeat: no-repeat;
        background-position: center center;
        android-elevation: 5;
        background-color: white;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .cardStyle {
        android-elevation: 4;
        background-color: white;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: whitesmoke;
        font-size: 18;
        font-weight: bold;
    }

    .cardStyle:active {
        android-elevation: 8;
        background-color: whitesmoke;
        border-color: white;
        border-radius: 20;
        border-width: 1;
        color: lightseagreen;
        font-size: 18;
        font-weight: bold;
    }

    .fab-button {
        height: 100;
        width: 100; 
        margin: 20;
        background-color: #F9921C;
        horizontal-align: right;
        vertical-align: bottom;
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