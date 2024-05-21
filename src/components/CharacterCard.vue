<template>
    <div class="character-card">
        <img :src="character.image" :alt="character.name" class="character-image" />
        <div class="character-details">
            <h2>{{ character.name }}</h2>
            <p>Status: {{ character.status }}</p>
            <p>Species: {{ character.species }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
    .character-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 16px;
        display: flex;
        align-items: center;
    }

    .character-image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 16px;
    }

    .character-details {
        flex-grow: 1;
    }
</style>
