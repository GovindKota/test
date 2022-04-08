<template>
<div>
    <h1> Login form</h1>
    <form name="myform">
        <label for="Fullname" name="fname">Fullname:</label>
        <input type="text" name="fname" placeholder="enter your fullname" required><br><br>
        <label for="Password" name="psw">Password:</label>
        <input type="text" name="psw" placeholder="enter your password" required><br><br>
            <button @click=fun()>submit</button>
            </form>
        </div>
        </template>
        
        <script>
        export default{
            name:"LoginforM",
            data(){
                return{

                }
            },
    
        methods:{
            fun(){
document.write("welcome"+" "+document.myform.fname.value+" "+document.myform.password.value);
            }
            

        }
        };
        </script>
