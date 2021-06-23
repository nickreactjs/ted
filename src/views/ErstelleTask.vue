<template>
  <div id="page-wrap">
  <h1> Erstelle Task</h1>
    <form>
      <label for="name">Bezeichnung</label><br>
      <input type="text" id="name" name="name"><br>
      <br>
      <label for="lname">Beschreibung - optional</label><br>
      <input type="text" id="lname" name="lname" ><br>
      <br>
      <label for="time">Zeiteinschätzung (h)</label><br>
      <input type="text" id="lname" name="lname"><br>
      <br>
      <label for="lname">Pauschalpreis (€)</label><br>
      <input type="text" id="lname" name="lname"><br>
      <br>
      <label for="lname">Kommentar - optional</label><br>
      <input type="text" id="lname" name="lname"><br>
      <br>
    </form>
    <button>Erstellen</button>
  </div>

</template>

<script>

export default {
  name: 'ErstelleTask',

}
</script>
