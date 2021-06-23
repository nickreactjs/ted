<template>

  <div id="page-wrap">

    <h1> Bearbeite Task</h1>
    <form>
      <label for="name">Bezeichnung</label><br>
      <input type="text" id="name" v-model="product.name" name="name"><br>
      <br>
      <label for="lname">Beschreibung - optional</label><br>
      <input type="text" id="lname" v-model="product.description" name="lname" ><br>
      <br>
      <label for="time">Zeiteinschätzung (h)</label><br>
      <input type="text" id="lname" v-model="product.time" name="lname"><br>
      <br>
      <label for="lname">Pauschalpreis (€)</label><br>
      <input type="text" id="lname" v-model="product.price" name="lname"><br>
      <br>
      <label for="lname">Kommentar - optional</label><br>
      <input type="text" id="lname" v-model="product.comment" name="lname"><br>
      <br>
    </form>
    <button>Aktualisieren</button>
  </div>
</template>

<script>
import { products } from '../fake-data';

export default {
  name: 'BearbeiteTask',
  data() {
    return {
      product: products.find((p) => p.id === this.$route.params.id),
    };
  }
};
</script>
