<!-- src/components/Login.vue -->
<template>
  <div class="loginPage">

    <div class="login">
      <div class="loginPageContainer">

        <h2>Login</h2>
        <form @submit.prevent="login">
          <div>
            <!-- <label for="name">Name:</label> -->
            <input class="input" placeholder="Name:" type="text" v-model="name" required />
          </div>
          <div>
            <!-- <label for="password">Password:</label> -->
            <input class="input" placeholder="Password:" type="password" v-model="password" required />
          </div>
          <button class="btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Replace with actual login logic
      if (this.name === 'user' && this.password === 'password') {
        this.$router.push({ name: 'dashboard' });
      } else {
        alert('Invalid login credentials');
      }
    },
  },
};
</script>

<style scoped>

.loginPage{
  height: 100vh;
  background: url('../assets/mainBgRestaurant.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.login {
  max-width: 400px;
  width: 100%;  
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
}

.loginPageContainer{
  width: 100%;
  padding: 10px;
  border: 1px solid #f1f1f1;
  background: #f1f1f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.loginPageContainer h2{
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: cornflowerblue;
  font-weight: 600;
}

.input{
  padding: 20px;
  width: 100%;
  background: #d0d0d0;
  outline: none;
}

.input::placeholder{
  color: #010101;
}

.btn{
  width: 100%;
  font-size: 18px;
  background: cornflowerblue;
  border: none;
  color: #f1f1f1;
}
form div {
  margin-bottom: 15px;
}
</style>