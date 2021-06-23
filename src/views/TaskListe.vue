<template>
<div id="page-wrap">
  <div class="grid-wrap">

    <header>
    <h1>Alle Tasks</h1>
    </header>

    <table>
    <thead>
    <tr>
    <th scope="col">#</th>
    <th scope="col">Bezeichnung</th>
    <th scope="col">Beschreibung</th>
    <th scope="col">Zeiteinschätzung</th>
    <th scope="col">Pauschalpreis</th>
    <th scope="col">Kommentar</th>
    <th scope="col">Aktionen</th>
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="product in products"
      class="product-item"
      v-bind:key="product.id"
    >

    <th scope="row">{{ product.id}}</th>
    <td>{{ product.name}}</td>
    <td><hr>{{ product.description}}</td>
    <td>{{ product.time}}</td>
    <td>{{ product.price}}</td>
    <td>{{ product.comment}}</td>
     <router-link v-bind:to="'/Edit/' + product.id">
        <button>Bearbeiten</button>
      </router-link>
        <button>Löschen</button>
      <input :id="product.id" :time="product.time" :price="product.price" type="checkbox" v-model="checkedProducts" />

    </tr>

    </tbody>
    </table>

  <br />

    <h1>Liste der ausgewählten Tasks</h1>
    <table>
    <thead>
    <tr>
    <th scope="col">#</th>
    <th scope="col">Bezeichnung</th>
    <th scope="col">Beschreibung</th>
    <th scope="col">Zeiteinschätzung</th>
    <th scope="col">Pauschalpreis</th>
    <th scope="col">Kommentar</th>
    <th scope="col">Aktionen</th>
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="product in checkedProducts"
      class="product-item"
      v-bind:key="product.id"
    >

    <th scope="row">{{ product.id}}</th>
    <td>{{ product.time}}</td>
    <td>{{ product.price}}</td>
        <button>Löschen</button>
      <input type="checkbox">

    </tr>
    </tbody>
    </table>

  </div>
</div>
</template>

<script>
import { products } from '../fake-data';
export default {
  name: 'TaskListe',
  data() {
    return {
      products, checkedProducts:[]
    };
  },
};
</script>
