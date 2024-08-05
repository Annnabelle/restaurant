<template>
    <div class="p-4">
        <ul class="space-y-2">
            <li v-for="item in items" :key="item.id">
                <button @click="toggleSubList(item.id), item.isOpen = !item.isOpen"
                    class="w-full gap-[10px] flex text-left p-2 hover:bg-[#EBEDEC] rounded-md">
                    <svg v-if="!item.isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#C4C4C2" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <svg v-if="item.isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#C4C4C2" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>



                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#C4C4C2" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>


                    {{ item.name }}
                </button>
                <ul v-if="isSubListVisible(item.id)" class="ml-4 mt-2 space-y-1">
                    <li v-for="subItem in item.subItems" :key="subItem.id"
                        class="p-2 bg-gray-200 cursor-pointer rounded-md">
                        {{ subItem.name }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface SubItem {
    id: number;
    name: string;
}

interface Item {
    id: number;
    isOpen: boolean;
    name: string;
    subItems: SubItem[];
}

export default defineComponent({
    name: 'DynamicList',
    setup() {
        const visibleSubLists = ref<number[]>([]);

        // Пример данных
        const items = ref<Item[]>([
            { id: 1, isOpen: false, name: 'Forecasting', subItems: [{ id: 1, name: 'text.txt', }, { id: 2, name: 'text.txt' }] },
            { id: 2, isOpen: false, name: 'Master data and settings', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 3, isOpen: false, name: 'Replenishment', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 4, isOpen: false, name: 'Product introdunctions', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 5, isOpen: false, name: 'Events', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 6, isOpen: false, name: 'Product terminations', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 7, isOpen: false, name: 'Inventory managment', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 8, isOpen: false, name: 'Season managment', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 9, isOpen: false, name: 'Promotions', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 10, isOpen: false, name: 'New store opening', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 11, isOpen: false, name: 'Markdown optimisations', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 12, isOpen: false, name: 'Temprorary Store closure', subItems: [{ id: 3, name: 'text.txt' }] },
            { id: 13, isOpen: false, name: 'Reporting', subItems: [{ id: 3, name: 'text.txt' }] },
        ]);

        const toggleSubList = (id: number) => {
            if (visibleSubLists.value.includes(id)) {
                visibleSubLists.value = visibleSubLists.value.filter(itemId => itemId !== id);
            } else {
                visibleSubLists.value.push(id);
            }
        };

        const isSubListVisible = (id: number) => visibleSubLists.value.includes(id);

        return {
            items,
            toggleSubList,
            isSubListVisible,
        };
    },
});
</script>

<style scoped></style>