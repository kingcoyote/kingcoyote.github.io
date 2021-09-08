<template>
  <b-container class="mt-3">
    <h3>Age Track</h3>
    <b-table-simple striped>
      <b-thead>
        <b-tr>
          <b-th></b-th>
          <b-th v-for="(year, index) in years" :key="`year_th${index}`">
            <b-button variant="danger" @click="removeYear(index)" class="float-left mr-1" style="width:60px">Del</b-button>
            <b-input v-model=year.year style="width:80px;" />
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr 
          v-for="(person, index) in people"
          :key="`person_${index}`">
          <b-td>
            <b-button size="sm" variant="danger" @click="removePerson(index)" class="float-left mr-1">Del</b-button>
            <b-input v-model=person.name size="sm" style="width:180px;" class="float-left mr-1" />
            <b-input v-model=person.year size="sm" style="width:80px;" class="float-left" />
          </b-td>
          <b-td v-for="(year, index) in years" :key="`year_td${index}`">
            <b-input 
              style="width:145px;"
              :value="year.year - person.year > 0 ? year.year - person.year : ''"
              @change="function(value) { person.year = parseInt(year.year) - parseInt(value); }" />
            </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-button-group class="float-left">
      <b-button variant="success" @click=addPerson>Add Person</b-button>
      <b-button variant="success" @click=addYear>Add Year</b-button>
    </b-button-group>
    <b-button-group class="float-right">
      <b-button variant="danger" @click=reset>Reset Group</b-button>
    </b-button-group>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AgeTrack',
  data: function() {
    return {
      people: this.$store.state.people,
      years: this.$store.state.years
    }
  },
  methods: {
    ...mapMutations(['addYear', 'addPerson', 'removeYear', 'removePerson', 'reset'])
  }
}
</script>

<style>

</style>
