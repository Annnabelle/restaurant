<script setup la components: { DynamicList },ng="ts">
import { ref } from 'vue';
import DynamicList from '../components/DynamicList.vue';
import Graph from '../components/Graph.vue';
import Header from '@/components/Header.vue';


const folders = ref([
  {
    isOpen: true,
    isFolder: true,
    title: "Forecasting",
    files: [
      {
        isOpen: false,
        isFolder: true,
        title: "Order forecast",
        files: [
          {
            title: "Index.html",
            isFolder: false,
          },
          {
            title: "Index.html",
            isFolder: false,
          },
          {
            isOpen: false,
            isFolder: true,
            title: "Extra order forecast",
            files: [
              {
                title: "Index.html",
                isFolder: false,
              },
            ]
          },
          {
            isOpen: false,
            isFolder: true,
            title: "Multiple order per day",
            files: [
              {
                title: "Index.html",
                isFolder: false,
              },
            ]
          },
        ]
      },

    ]
  }
])

console.log(folders.value);


</script>
<!-- <Header /> -->
<template>
    <Header />
  <main class="bg-[#E2E2E0] min-h-[100vh] flex gap-[1px]">

    <aside class="flex flex-col bg-[white] h-[100vh] sticky top-[0px] w-[80px] p-[10px] gap-[10px]">

      <button class="btn border-none bg-[#EAF2F7]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </button>

      <button class="btn border-none bg-[transparent]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </button>

      <button class="btn border-none bg-[transparent]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>

      <button class="btn border-none bg-[transparent]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
        </svg>
      </button>

    </aside>

    <nav class="w-[400px] flex flex-col gap-[1px]">
      <div class="h-[70px] bg-[white] flex items-center justify-end gap-[20px] p-[10px]">
        <button class="btn bg-[transparent] border-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <button class="btn bg-[transparent] border-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </button>
      </div>

      <div class="w-[100%] bg-white px-[20px] py-[10px]">
        <div class="border-[2px] gap-[10px] rounded-[7px] border-[#C7C9C8] flex items-center px-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#888886"
            class="size-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input placeholder="Search" class="outline-none h-[40px] w-[100%]" type="text">
        </div>
      </div>
      <div class="w-[100%] p-[0px] h-[100%] bg-white">
        <dynamic-list />
      </div>
    </nav>
    <section class="flex-1 flex flex-col gap-[1px]">
      <div class="h-[76px] bg-[white] p-[10px]">
        <div class="max-w-[1100px] w-[100%] h-[100%] items-center flex justify-between">
          <p class="text-[#354343] font-[600] text-[22px]">
            Porposal rows (MRP Exceptions)
          </p>

          <button class="bg-[#FAE7BF] rounded-[20px] flex font-[600] items-center gap-[5px] px-[10px] py-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>

            32 changes
          </button>
        </div>
      </div>
      <div class="w-[100%] bg-white flex items-center justify-between h-[64px] px-[20px] py-[10px]">
        <div class="flex gap-[30px] items-center">
          <div class="dropdown dropdown-bottom">
            <div tabindex="0" role="button">
              <button class="flex border-[1px] px-[10px] py-[5px] shadow-sm gap-[5px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                Filters
              </button>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <div class="flex items-center justify-center">
            <p class="mr-[20px]">Time period</p>
            <input value="-14" class="input h-[40px] shadow border-[1px] border-[#e4e4e4] w-[120px]" type="text">
            <p class="mx-[20px]">-</p>
            <input value="0" class="input h-[40px] shadow border-[1px] border-[#e4e4e4] w-[120px]" type="text">
          </div>
        </div>
        <div class="flex gap-[10px] h-[100%] items-center">
          <button class="btn bg-[transparent] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
            </svg>
          </button>
          <button class="btn bg-[transparent] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
          </button>
          <button class="btn bg-[transparent] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>

          |
          <button class="btn bg-[transparent] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </button>
          <button class="btn bg-[transparent] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </button>
          <button class="btn bg-[transparent] border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
          <button class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Refresh
          </button>

        </div>

      </div>
      <div class="h-[100%] bg-white p-[20px] flex flex-wrap gap-[20px]">

        <div class="flex-1 basis-[40%] h-[400px] border-[1px] border-[#E2E3DE] rounded-[10px]">
          <div class="w-[100%] flex justify-between border-b-[1px] border-[#E2E3DE] p-[10px]">
            <div class="flex gap-[10px] items-center">
              <div class="h-[20px] w-[20px] bg-[orange] rounded-[4px]"></div>
              <span class="font-[600] text-[20px]">Accuracy</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
          <div class="h-[300px] flex justify-center items-center">
            <span class="font-[600] text-[70px]">89%</span>
          </div>
        </div>

        <div class="flex-1 basis-[40%] h-[400px] border-[1px] border-[#E2E3DE] rounded-[10px]">
          <div class="w-[100%] flex justify-between border-b-[1px] border-[#E2E3DE] p-[10px]">
            <div class="flex gap-[10px] items-center">
              <div class="h-[20px] w-[20px] bg-[#69AEBD] rounded-[4px]"></div>
              <span class="font-[600] text-[20px]">Saved</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
          <div class="h-[355px] flex justify-center items-center flex-col">
            <span class="font-[600] text-[70px]">25.000$</span>
            <div class="flex items-center gap-[15px]">
              <div class="bg-[#F0F4F3] text-[#3B7463] p-[10px] rounded-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <span class="text-[#2C7665] text-[35px] font-[600]">+15.75%</span>
            </div>
          </div>
        </div>

        <div class="flex-1 basis-[40%] h-[400px] border-[1px] border-[#E2E3DE] rounded-[10px]">
          <div class="w-[100%] flex justify-between border-b-[1px] border-[#E2E3DE] p-[10px]">
            <div class="flex gap-[10px] items-center">
              <div class="h-[20px] w-[20px] bg-[#DB9CD1] rounded-[4px]"></div>
              <span class="font-[600] text-[20px]">Proposal rows</span>
            </div>
            <div class="flex gap-[20px] items-center h-[100%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div>
          <div class="h-[355px] overflow-x-auto flex justify-center items-center flex-col">
            <table class="table w-[100%] border-[1px] h-[100px] overflow-hidden">
              <thead>
                <tr>
                  <td class="border-[1px] px-[20px] py-[5px] w-[100px]" rowspan="2"></td>
                  <td class="border-[1px] px-[20px] py-[5px]" colspan="3">Basic information</td>
                </tr>
                <tr>
                  <td class="border-[1px] px-[20px] py-[5px]">Product</td>
                  <td class="border-[1px] px-[20px] py-[5px]">Code</td>
                  <td class="border-[1px] px-[20px] py-[5px] w-[200px]"></td>
                </tr>
                <tr>
                  <td class="border-[1px] px-[20px] py-[5px]">Total</td>
                  <td class="border-[1px] px-[20px] py-[5px]">#</td>
                  <td class="border-[1px] px-[20px] py-[5px] w-[200px]">#</td>
                  <td class="border-[1px] px-[20px] py-[5px] w-[200px]">#</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of 6" :key="item.id">
                  <td class="border-[1px] px-[20px] py-[5px]">{{ item }}</td>
                  <td class="border-[1px] px-[20px] py-[5px]"></td>
                  <td class="border-[1px] px-[20px] py-[5px]">323-2847</td>
                  <td class="border-[1px] px-[20px] py-[5px]"></td>
                </tr>
              </tbody>
            </table>
            <div class="w-[100%] h-[30px] px-[20px] pt-[10px] border-t-[1px]">
              10 of 7 rows
            </div>
          </div>
        </div>

        <div class="flex-1 basis-[40%] h-[400px] border-[1px] border-[#E2E3DE] rounded-[10px]">
          <div class="w-[100%] flex justify-between border-b-[1px] border-[#E2E3DE] p-[10px]">
            <div class="flex gap-[10px] items-center">
              <div class="h-[20px] w-[20px] bg-[#69AEBD] rounded-[4px]"></div>
              <span class="font-[600] text-[20px]">Store projections</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
          <div class="h-[355px] flex items-center flex-col">
            <div class="flex mt-[40px] justify-center gap-[60px]">
              <div class="flex items-center w-[150px] justify-between">
                <div class="h-[20px] w-[20px] bg-[#69AEBD] rounded-[4px]"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
              <div class="flex items-center w-[150px] justify-between">
                <div class="h-[20px] w-[20px] bg-[#69AEBD] rounded-[4px]"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
            <Graph/>
          </div>
        </div>
      </div>
    </section>




  </main>
</template>

<style></style>
