<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <header>
                <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

                <div class="wrapper">
                    <HelloWorld msg="You did it!" />
                </div>
            </header>

            <main>
                <TheWelcome />
                <Filters :filters="filters" @apply="applyFilters" />
                <div v-if="characters.length === 0">No characters found.</div> 
                <CharacterCard v-for="character in characters" :key="character.id" :character="character" /> 
                <Pagination :currentPage="currentPage" :totalPages="totalPages" @change="changePage" /> 
            </main>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted } from 'vue';
    import axios from 'axios';

    import CharacterCard from './components/CharacterCard.vue';
    import Pagination from './components/Pagination.vue';
    import Filters from './components/Filters.vue';

    const characters = ref([]);
    const loading = ref(false);
    const currentPage = ref(1);
    const totalPages = ref(null);
    const filters = reactive({
        name: '',
        status: ''
    });

    const fetchCharacters = async () => {
        loading.value = true;
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage.value}`, { params: filters });
            characters.value = response.data.results;
            totalPages.value = response.data.info.pages;
        } catch (error) {
            console.error('Error fetching characters:', error);
        } finally {
            loading.value = false;
        }
    };

    const changePage = async (page) => {
        currentPage.value = page;
        await fetchCharacters();
    };

    const applyFilters = () => {
        currentPage.value = 1;
        fetchCharacters();
    };

    onMounted(fetchCharacters);
</script>

<style scoped>
    header {
        line-height: 1.5;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }
    }
</style>
