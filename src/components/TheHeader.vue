<template>
    <div class="container-fluid">
        <div class="row text-white" style="background-color: #0c713d; padding: 1rem;">
            <div class="col-1 d-flex d-md-none align-items-center justify-content-center">
                <span v-on:click="showDrawer" class="text-white">X</span>
            </div>
            <div class="col-10 col-sm-9 d-flex justify-content-center align-items-center justify-content-sm-start">
                <img src="../assets/logo.jpg" alt="" height="32" width="34" class="ms-3 me-3">
                <span class="d-none d-sm-flex">Quản trị</span>
            </div>

            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
                <span>
                    Admin
                </span>
            </div>
            <div class="col-1 d-flex d-md-none align-items-center justify-content-center">
                <span class="text-white">X</span>
            </div>
        </div>
    </div>

    <a-drawer
    v-model:open="open"
    title="Danh mục"
    placement="left"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import { ref } from 'vue';
const open = ref(false);
const showDrawer = () => {
  open.value = true;
};

</script>