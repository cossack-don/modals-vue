<template>
<!-- анимация transition -->
<transition name="modal">
<!--  clickAreaClosePopup  для закрытия по области -->
  <div class="modal__wrapper" @click="$emit('clickAreaClosePopup')">

    <!-- @click.stop="" останавливает всплытие, чтобы закрывалось по области, а при клике по попапу не закрывалось -->
    <div class="modal-content" @click.stop="">

      <!-- header -->
      <div class="modal-header">
        <!-- title передаем с помощью пропсов и определяем значение title в app. vue -->
        <span class="modal-title" style="margin-right:10px;"> {{ title }} </span>

        <!--  с помощью $emit передаем в родительский компонент, изменение (для взаимодействия между 2-мя компонентами).
         А именно создали clickClosePopup и при клике на крестик, попап будет закрываться-->
        <span class="button-close" @click="$emit('clickClosePopup')" style="background:red; padding:6px; border-radius:50%;"> × </span>
      </div>

      <!-- body -->
      <div class="modal-body">
        <!-- Создаем слот -->
        <slot name="body">Default body</slot>
    </div>

          <div class="modal-footer">
        <!-- Создаем слот -->
        <slot name="footer">footer body</slot>
    </div>
  </div>
  </div>
  </transition>
</template>

<script>
export default {
  // с помощью пропсов передаем в компонент App, что title должен быть строкой и обязательное требование
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {},
  methods: {

  },
  mounted() {
    // Используем хук и создаем метод clickBtnEscAndClosePopup который передаем в app и
    // цепляем на компонент модалс. Закрытие попап-окна по кнопке esc
    document.body.addEventListener('keyup', e => {
      if(e.keyCode === 27) {
        this.$emit('clickBtnEscAndClosePopup')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
// анимация
.modal-enter, .modal-leave-active {
opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
transform: scale(1.2);
}
// конец анимация

.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}



</style>
