<template>
    <div v-if="user">
        <!-- <h1>접속한 유저</h1>
        <p>아이디:{{user.id}}</p>
        <p>비밀번호:{{user.password}}</p>
        <p>이름:{{user.name}}</p>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button> -->
        <h1>인덱스페이지</h1>
    </div>
    
    
</template>

<script>
    export default{
        // data(){
        //     return{
        //         user: null,
        //     };
        // },
        // created(){
        //     this.$http.get('/api/login')
        //     .then((res) => {
        //         const user = res.data.user;
        //         if(user) this.user = user;
        //     })
        //     .catch((err)=>{
        //         console.error(err);
        //     });
        // }
    }
</script>

<style></style>