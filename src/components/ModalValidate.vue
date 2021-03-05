<template>
<!-- емиты для передачи в компонент app Беру емиты из компонента modal => modal-validate => App -->
  <modal title="Model with form"
         @clickClosePopup="$emit('clickClosePopup-two')"
         @clickBtnEscAndClosePopup="$emit('clickBtnEscAndClosePopup-two')"
         @clickAreaClosePopup="$emit('clickAreaClosePopup-two')"
          > 
          <!-- Слот начало -->
          <div slot="body">
            <!--@submit.prevent="" отменяем перезагруззку стр по клике на кнопку самбит  -->
              <form @submit.prevent="clickBtnForm">

 <!-- NAME BLOCK -->
                  <!-- задали form-item -класс и обращаемся к $v.name.$error  - зареверзированные имена от vue-validate -->
                <div class="form-item" :class="{errorInput: $v.name.$error}">
                    <label >Name:</label>
                    <!-- если required в состояние фолс и не отработал, мы вызываем ошибку -->
                    <p class="errorText" v-if="!$v.name.required">filed is required</p>
                    <p class="errorText" v-if="!$v.name.minLength">name must have at leat не может быть меньще чем 4 символа
                        $v-{{$v.name.$params.minLength.min}}
                    </p>

                    <!-- @change следит за инпутом -->
                    <input  v-model="name" :class="{error:$v.name.$error}" @change="$v.name.$touch()">
                </div>


<!-- EMAIL BLOCK -->
                <div class="form-item" :class="{errorInput: $v.email.$error}">
                    <label>Email:</label>
                    <!-- если required в состояние фолс и не отработал, мы вызываем ошибку -->
                    <p class="errorText" v-if="!$v.email.required">filed is required</p>
                    <p class="errorText" v-if="!$v.email.email">емейл не корректный</p>


                    <!-- @change следит за инпутом -->
                    <input  v-model="email" :class="{error:$v.email.$error}" @change="$v.email.$touch()">
                </div>
          

                <!-- buttom -->
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

          </modal>
</template>

<script>
// vue validate плагин between - между 10 и 20 например
// required - обязательное поле
// minLength - мин длинна символов
import { required, minLength, email } from 'vuelidate/lib/validators'


import modal from '@/components/Modal.vue'

export default {
components:{
    modal
},
data () {
    return {
        email:'',
        name:''
    }
},
// vue validate plagin
validations: {
    name: {
        required,
        minLength:minLength(4)
    },
    email: {
        required,
        email

    }
},

methods: {
    clickBtnForm() {
        // валидация всей формы, проверка
        this.$v.$touch()

// если форма НЕ валидная - фолс
        if(!this.$v.$invalid) {

            const user = {
                name:this.name,
                email:this.email
            }

            console.log(user);

            // очищаем поля инпутов
            this.name = '',
            this.email = '',
            // нужно обязательно указывать this.$v.$reset()
            this.$v.$reset(),
            // закрываем окно
            this.$emit('clickClosePopup-two')
        }
    }
}
}
</script>

<style lang="scss">
// классы отвечают за ошибку которая выходит при невалидной форме - инпуте
.form-item .errorText{
display: none;
margin-bottom: 0;
font-size: 13.4px;
color: #fc3939;
}

.form-item {
    &.errorInput .errorText {
    display: block;
}
}

input.error {
    border-color:#fc3939;
}
</style>