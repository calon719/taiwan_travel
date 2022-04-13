<template>
  <VueLoadingOverlay
    v-model:active="isLoading"
    :opacity="0.9"
  >
    <div class="cssload-container">
      <div class="cssload-l">L</div>
      <div class="cssload-circle"></div>
      <div class="cssload-square"></div>
      <div class="cssload-triangle"></div>
      <div class="cssload-i">I</div>
      <div class="cssload-n">N</div>
      <div class="cssload-g">G</div>
    </div>
  </VueLoadingOverlay>
</template>

<script>
import VueLoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  props: {
    loadingStatus: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isLoading() {
      return this.loadingStatus;
    },
  },
  components: {
    VueLoadingOverlay,
  },
};
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:700);
.cssload-container * {
  color: rgb(0,0,0);
  font-size: 60px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
}
.cssload-container {
  position: absolute;
  width: 210px;
  height: 88px;
  left: 50%;
  transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
}
.cssload-container > div {
  position: absolute;
  transform-origin: center;
  -o-transform-origin: center;
  -ms-transform-origin: center;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
}
.cssload-l {
  left: 14px;
}
.cssload-i {
  left: 105px;
}
.cssload-n {
  left: 126px;
}
.cssload-g {
  left: 173px;
}
.cssload-square,
.cssload-circle,
.cssload-triangle {
  left: 53px;
}
.cssload-square {
  background: rgb(117,179,209);
  width: 42px;
  height: 42px;
  left: 56px;
  top: 31px;
  transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -o-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -ms-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -webkit-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -moz-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  animation-delay: 2.3s;
  -o-animation-delay: 2.3s;
  -ms-animation-delay: 2.3s;
  -webkit-animation-delay: 2.3s;
  -moz-animation-delay: 2.3s;
}
.cssload-circle {
  background: rgb(129,212,125);
  width: 47px;
  height: 47px;
  top: 31px;
  left: 53px;
  border-radius: 50%;
  animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -o-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -ms-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -webkit-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -moz-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  animation-delay: 0s;
  -o-animation-delay: 0s;
  -ms-animation-delay: 0s;
  -webkit-animation-delay: 0s;
  -moz-animation-delay: 0s;
}
.cssload-triangle {
  width: 0;
  height: 0;
  left: 53px;
  top: 31px;
  border-style: solid;
  border-width: 0 25.5px 44.1px 25.5px;
  border-color: transparent transparent rgb(210,121,140) transparent;
  transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -o-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -ms-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -webkit-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  -moz-animation: cssload-shrinkgrow 3.45s ease-in-out infinite;
  animation-delay: 1.15s;
  -o-animation-delay: 1.15s;
  -ms-animation-delay: 1.15s;
  -webkit-animation-delay: 1.15s;
  -moz-animation-delay: 1.15s;
}

@keyframes cssload-shrinkgrow {
  0% {
    transform: scale(0);
  }
  12.5% {
    transform: scale(1);
  }
  25% {
    transform: scale(1);
  }
  33% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@-o-keyframes cssload-shrinkgrow {
  0% {
    -o-transform: scale(0);
  }
  12.5% {
    -o-transform: scale(1);
  }
  25% {
    -o-transform: scale(1);
  }
  33% {
    -o-transform: scale(0);
  }
  100% {
    -o-transform: scale(0);
  }
}

@-ms-keyframes cssload-shrinkgrow {
  0% {
    -ms-transform: scale(0);
  }
  12.5% {
    -ms-transform: scale(1);
  }
  25% {
    -ms-transform: scale(1);
  }
  33% {
    -ms-transform: scale(0);
  }
  100% {
    -ms-transform: scale(0);
  }
}

@-webkit-keyframes cssload-shrinkgrow {
  0% {
    -webkit-transform: scale(0);
  }
  12.5% {
    -webkit-transform: scale(1);
  }
  25% {
    -webkit-transform: scale(1);
  }
  33% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(0);
  }
}

@-moz-keyframes cssload-shrinkgrow {
  0% {
    -moz-transform: scale(0);
  }
  12.5% {
    -moz-transform: scale(1);
  }
  25% {
    -moz-transform: scale(1);
  }
  33% {
    -moz-transform: scale(0);
  }
  100% {
    -moz-transform: scale(0);
  }
}
</style>
