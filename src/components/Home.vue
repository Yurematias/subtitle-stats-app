<template>
  <v-container fluid>
      <v-form>
          <v-file-input 
            label="Selecione as Legendas"
            outlined
            append-outer-icon="mdi-send"
            multiple 
            chips 
            v-model="files"
            @click:append-outer="processSubtitles"
            />

      </v-form>
      <div class="pills">
          <Pill 
            v-for="word of groupedWords" 
            :key="word.name" 
            :name="word.name" 
            :amount="word.amount"
            />
      </div>
  </v-container>
</template>

<script>

import { ipcRenderer } from 'electron'
import Pill from './Pill';

export default {
    components: {
        Pill
    },
    data() {
        return {
            files: [],
            groupedWords: [
                {name: 'You', amount: 400},
                {name: 'He', amount: 100},
                {name: 'I', amount: 500}
            ]
        }
    },
    methods: {
        processSubtitles() {
            console.log(this.files);
            ipcRenderer.send('blabla', 'ping');
            ipcRenderer.on('blabla', (event, resp) => {
                console.log(resp);
            });
        }
    }
}
</script>

<style scoped>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>