<template>

<b-col sm="1" md="3" lg="4" align-self="center">
    <b-input-group v-if="player.type =='user' && player.active" v-bind:class="{active:player.active}">
        <b-form-input type="number" ></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-secondary">Button</b-button>
            </b-input-group-append>
    </b-input-group>
    <b-form-textarea v-if="player.type == 'bot' && player.active" v-bind:class="{active:player.active}" id="textarea-no-resize" placeholder="Fixed height textarea" rows="3" no-resize>
    </b-form-textarea>
    <b-img class="img-responsive" v-if="player.imgURL" v-bind:src="player.imgURL"></b-img>
    <b-img class="img-responsive" v-else-if="player.active" src= "http://www.freespins24h.se/wp-content/uploads/2017/02/faq.png"></b-img>
    </b-col>

</template>

<script>
export default {
    name: "User",
    props: [
    "player"
    ],
    data() {
        return {
        text: ''
        }
    }
};
</script>

<style scoped>

img{

    height: 300px;
    padding-top: 10px;

}

</style>