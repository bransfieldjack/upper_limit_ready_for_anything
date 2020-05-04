<template>
	<StackLayout backgroundColor="white" width="400" height="400">

        <Label class="h2 text-center" text="" />
        <Button width="70%" height="30%" class="my-custom-scenarios-button" @tap="newCustomScenario" />

        <Label class="h2 text-center" text="" />
  
        <Button width="70%" height="30%" class="my-template-scenarios-button" @tap="$modal.close()" />
        <Label class="h2 text-center" text="" />

	</StackLayout>
</template>

<script>
import newCustomScenario from "./newCustomScenario";

export default {
    data() {
        return {
            template: '~/images/template-icon.png',
        };
    },
    methods: {
        newCustomScenario() {
            this.$navigateTo(newCustomScenario);
            this.$modal.close()
        },
    }
};
</script>

<style>

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

</style>

