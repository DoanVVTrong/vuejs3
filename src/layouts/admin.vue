<template>
    <TheHeader />
        <div class="row">
            <div class="col-sm-3">
                Slider bar
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
                <!-- Index.vue gọi tới nó do thằng admin.js được import vào index.js gọi trong main.js   -->
            </div>
        </div>

    <!-- render ra data bắt buộc phải có   <router-view></router-view> -->
</template>
<script>
import TheHeader from '../components/TheHeader.vue';

export default {
    components: {
        TheHeader
    }
}
</script>