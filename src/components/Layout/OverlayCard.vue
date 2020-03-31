<template>
    <div>
       <b-card class=" badge text-wrap"
        img-alt="Image" 
        img-top
        bg-variant="dark"
        border-variant="light"
        text-variant=""
        :title="img_title"
        header-text-variant="light"
        header-border-variant="light"
       @click="closeOverlay()"
        >
        <b-col>        
            <b-card-img :src="img" img-top></b-card-img>
              <b-card-text >
                  {{desc}}
             </b-card-text>
        </b-col>
    </b-card>
    </div>
</template>

<script>

import { bus } from '../../main'

//creating property to be accessed
export default {
    props: ["img_title", "img", "desc"],

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
.thumbnail img:hover{

}
</style>
