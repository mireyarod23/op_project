<template>
    <div>
       <b-card class=" badge text-wrap"
        img-alt="Image" 
        img-top
        bg-variant="dark"
        border-variant="light"
        text-variant=""
        header-text-variant="light"
        header-border-variant="light"
       @click="closeOverlay()"
        >
        <b-card-img class="pb-2" :src="img" img-top></b-card-img>
        <b-card-title class="text-left mb-2">{{img_title}}</b-card-title>
         <b-card-sub-title class="text-left mb-2">{{img_date}}</b-card-sub-title>
            <b-card-text  class=" text-xl-left font-weight-light h6 ">
                {{desc}}
        </b-card-text>
    </b-card>
    </div>
</template>

<script>

import { bus } from '../../main'

//creating property to be accessed
export default {
    props: ["img_title", "img", "desc", "img_date"],

    methods :{
        closeOverlay(){
        const show = false;
        bus.$emit('closeOverlay', show);
        }
    }

};
</script>

<style scoped >
.thumbnail img {
    object-fit: cover;
    height:100px;
    width:100%;
}

</style>
