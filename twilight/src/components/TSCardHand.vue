<template>
  <b-card :class="['ts-card', 'float-left', 'mx-1', card.phase, card.side]" v-if="card.state === collection">
    <b-card-body>
      <TSCardTitle :card=card />
      <div class="text m-2 text-center">{{ card.text }}</div>
    </b-card-body>
    <b-card-footer>
      <b-button-group>
        <b-button v-if="collection !== 'usa'" @click="card.state = 'usa'">US</b-button>
        <b-button v-if="collection !== 'ussr'" @click="card.state = 'ussr'">USSR</b-button>
        <b-button v-if="collection !== 'deck'" @click="card.state = 'deck'">Dk</b-button>
        <b-button v-if="collection !== 'removed'" @click="card.state = 'removed'">Rm</b-button>
        <b-button v-if="collection !== 'discard'" @click="card.state = 'discard'">Ds</b-button>
      </b-button-group>
    </b-card-footer>
  </b-card>
</template>

<script>
import TSCardTitle from './TSCardTitle.vue'

export default {
  name: 'TSCardHand',
  components: {
    TSCardTitle
  },
  props: {
    card: Object,
    collection: String,
    display: String
  },
}
</script>

<style scoped>
  div.ts-card { width:300px;}
  div.ts-card.ussr svg.star { fill:red; stroke:yellow; }
  div.ts-card.ussr text { fill:white; stroke:black; }
  div.ts-card.usa svg.star { fill: white; stroke: blue; }
  div.ts-card.usa text { fill:black; stroke:white; }
  div.ts-card.neutral svg.star { fill:url(#diagonalHatch2);stroke:black; }
  div.ts-card.neutral text { fill:black; stroke:white; }
</style>
