<template>
  <div>
      <canvas ref="canvas"/>
   <Three v-if="canvas">
      <Renderer :canvas="canvas" camera="main" scene="scene1" :clearColor="0xCCCCCC" antialias shadows/>

      <AssetBundle name="myBundle" preload>
        
      </AssetBundle>

      <Scene name="scene1" assets="myBundle">

        <Camera name="main">
          <Position :value="{x: 0, y: 0, z: 0}"/>
        </Camera>

        <!-- Declare scene objects -->

      </Scene>

    </Three>
  </div>
</template>

<script>

import { components } from 'vue-threejs-composer'

export default {
  name: "Planetary",
  components: {
    ...components
  },
  data() {
    return {
      canvas: null
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
  }
}