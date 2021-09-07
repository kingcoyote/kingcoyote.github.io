<template>
  <b-container class="mt-5">
    <b-row class="mb-3">
      <b-col>
        <h3>USA Hand</h3>
        <TSCardCollection name="usa" display="hand" :cards=cards />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col>
        <h3>USSR Hand</h3>
        <TSCardCollection name="ussr" display="hand" :cards=cards  />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col id="deck">
        <h3>Deck</h3>
        <TSCardCollection name="deck" display="stack" :cards=cards  />
      </b-col>
      <b-col id="discard">
        <h3>Discard</h3>
        <TSCardCollection name="discard" display="stack" :cards=cards  />
      </b-col>
      <b-col id="removed">
        <h3>Removed</h3>
        <TSCardCollection name="removed" display="stack" :cards=cards  />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TSCardCollection from './components/TSCardCollection.vue'
import TSCards from './ts_cards'

export default {
  name: 'Twilight',
  components: {
    TSCardCollection
  },
  data: function() {
    return {
      cards: TSCards
    }
  }
}
</script>

<style>

</style>
