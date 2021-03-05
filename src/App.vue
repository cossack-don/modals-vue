<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">

<!-- FIRST MODAL -->
          <button class="btn btnPrimary" @click="ModalFirst = !ModalFirst">Show model first</button>

          <!-- Modals - компонент модального окна -->
          <!-- clickClosePopup - имя произвольное, берем из компонента Modals -->
          <!-- title="Frist model" - передается с помощью пропсов, Frist model - значение произвольное -->
        <!-- clickAreaClosePopup закрытие по области -->
        <!-- С v-if анимация не работает. Работант с v-show -->
        <Modals title="Frist model"
         v-show="ModalFirst"
         
          @clickClosePopup="ModalFirst = !ModalFirst"
          @clickAreaClosePopup="ModalFirst = !ModalFirst"
          @clickBtnEscAndClosePopup="ModalFirst = !ModalFirst"
          > 
          
          <!-- Слот начало -->
          <div slot="body">
              <p>TEXT TEXT TEXT TEXT</p>
              <button class="btn btnPrimary" @click="ModalFirst = !ModalFirst">Show model first</button>
          </div>
          <!-- Слот конец -->

           <!-- Слот начало -->
          <div slot="footer">
              <p>Footer</p>
              <!-- <button class="btn btnPrimary" @click="ModalFirst = !ModalFirst">Show model first</button> -->
          </div>
          <!-- Слот конец -->

          </Modals>

          <!-- END FIRST MODAL -->




          <!-- SECOND MODAL -->
          <button class="btn btnPrimary" @click="ModalSecond.show = !ModalSecond.show">Show model second with form</button>

          <!-- Modals - компонент модального окна -->
          <!-- clickClosePopup - имя произвольное, берем из компонента Modals -->
          <!-- title="Frist model" - передается с помощью пропсов, Frist model - значение произвольное -->
        <!-- clickAreaClosePopup закрытие по области -->
        <!-- С v-if анимация не работает. Работант с v-show -->
        <Modals title="Model with form"
         v-show="ModalSecond.show"
         
          @clickClosePopup="ModalSecond.show = false"
          @clickAreaClosePopup="ModalSecond.show = false"
          @clickBtnEscAndClosePopup="ModalSecond.show = false"
          > 
          
          <!-- Слот начало -->
          <div slot="body">
            <!--@submit.prevent="" отменяем перезагруззку стр по клике на кнопку самбит  -->
              <form @submit.prevent="submitSecondForm">
                <label >Name:</label>
                <input type="text" required v-model="ModalSecond.name">

                 <label >Email:</label>
                <input type="email" required v-model="ModalSecond.email">

                <button class="btn btnPrimary">Submit</button>
              </form>

              
          </div>
          <!-- Слот конец -->

           <!-- Слот начало -->
          <div slot="footer">
              <p>Footer</p>
              <!-- <button class="btn btnPrimary" @click="ModalFirst = !ModalFirst">Show model first</button> -->
          </div>
          <!-- Слот конец -->

          </Modals>
          <!-- END SECOND MODAL -->

<!-- THREE -->
          <!-- MODAL VALIDATE WITH validation  https://vuelidate.js.org/#sub-package-content -->
          <button class="btn btnPrimary" @click="ModalValidateEvent = !ModalValidateEvent">Show model + validate</button>
<ModalValidate v-if="ModalValidateEvent" 

         @clickClosePopup-two="ModalValidateEvent = false"
         @clickBtnEscAndClosePopup-two="ModalValidateEvent = false"
         @clickAreaClosePopup-two="ModalValidateEvent = false"
>
<!-- Принимаю emitы из др компоненты(ModalValidate), именно по названию  clickAreaClosePopup-two и тд-->
</ModalValidate>
        </div>




      </section>
    </div>

    
  </div>
</template>

<script>
import Modals from '@/components/Modal.vue'
import ModalValidate from '@/components/ModalValidate.vue'

export default {
  name: 'App',
  components: {
    Modals,
    ModalValidate
  },
  data() {
    return {
      ModalFirst:false,
      ModalSecond: {
        show:false,
        email:'',
        name:'',
        
      },
      ModalValidateEvent:false
    }
  },

  methods: {
    submitSecondForm() {
      console.log({name:this.ModalSecond.name, email:this.ModalSecond.email})
  //  очищаем поля инпута и закрываем окно
   this.ModalSecond.name = '',
   this.ModalSecond.email = '',
   this.ModalSecond.show = false
   }
  }
}
</script>

<style>

</style>
