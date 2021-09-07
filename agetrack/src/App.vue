<template>
  <b-container class="mt-3">
    <h3>Age Track</h3>
    <div>Store: [{{ store }}]</div>
    <b-table-simple striped>
      <b-thead>
        <b-tr>
          <b-th></b-th>
          <b-th v-for="year in years" :key=year>
            <b-input v-model=year.year style="width:100px;" />
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr 
          v-for="person in people"
          :key=person>
          <b-td>
            <b-input v-model=person.name size="sm" style="width:200px;" class="float-left mr-1" />
            <b-input v-model=person.year size="sm" style="width:100px;" class="float-left" />
          </b-td>
          <b-td v-for="year in years" :key=year>
            <b-input 
              style="width:100px;"
              :value="year.year - person.year > 0 ? year.year - person.year : ''"
              @change="function(value) { person.year = parseInt(year.year) - parseInt(value); }" />
            </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-button-group class="float-left">
      <b-button variant="success" @click="people.push({name:'', year:9999})">Add Person</b-button>
      <b-button variant="success" @click="years.push({year:0})">Add Year</b-button>
    </b-button-group>
    <b-button-group class="float-right">
      <b-button variant="danger" @click="function() { people = []; years = []; }">Reset Group</b-button>
    </b-button-group>
  </b-container>
</template>

<script>
const people = [];
const years = [];

export default {
  name: 'AgeTrack',
  data: function() {
    return {
      people,
      years
    }
  }
}
</script>

<style>

</style>
