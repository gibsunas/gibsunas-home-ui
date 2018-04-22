<template>
<div class="howdy">
<v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark class="transparent">
          <v-card-text class="px-0">12</v-card-text>
          <v-btn color="info">Hello</v-btn>
          <v-btn color="success">Hello</v-btn>
          <v-btn color="error">Hello</v-btn>
          <v-btn color="warn">Hello</v-btn>
          <v-btn color="accent">Hello</v-btn>
          <v-btn color="secondary">Hello</v-btn>
          <v-btn color="primary">Hello</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="`6${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="`4${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="`3${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="`2${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="`1${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card dark color="secondary">
          <v-card-text class="px-0">9</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card dark color="primary">
          <v-card-text class="px-0">8</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="`4${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="`3${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="`2${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="`1${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="`6${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="`4${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="`3${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="`2${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="`1${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.howdy {
  background-image: linear-gradient(
    to bottom right,
    #3f3772,
    #4e757c
  ) !important;
}
</style>
