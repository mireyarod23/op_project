<template>
    <div>
       <b-card class="m-3 badge text-wrap"
        img-alt="Image" 
        style="max-width: 22rem;" 
        img-top
        bg-variant="dark"
        border-variant="light"
        text-variant=""
        :header="img_title"
        :item ="item"
        header-text-variant="light"
        header-border-variant="light"
       @click="accessItem()"
        >
        <b-col>
            <div class="thumbnail">
            <b-card-img :src="img"></b-card-img>
            </div>
        </b-col>
    </b-card>
    </div>
</template>

<script>
import { bus } from '../../main'

//creating property to be accessed
export default {
    props: ["img_title", "img", "desc", "item"],

    methods :{
    //using bus to be able to pass the item click to show
     accessItem(){
        //  console.log("Hello world");
         bus.$emit('changeIt', this.item);
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
    transform: scale(1.05) !important; 
}
</style>
