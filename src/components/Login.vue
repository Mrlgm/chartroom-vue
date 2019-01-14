<template>
    <div class="login_com">
        <Form class="login_form" ref="formInline"  :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem class="login_form_button">
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                <Button @click="handleReset('formInline')" style="margin-left: 8px">Rest</Button>
            </FormItem>

        </Form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: 'Please fill in the user name', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Please fill in the password.', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: 'The password length cannot be less than 6 bits',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(name){
                this.$refs[name].resetFields();
            }
        }

    }
</script>

<style lang="scss" scoped>
.login_com{
    width: 300px;
    .login_form{
        .login_form_button{
            text-align: center;
            margin: 0;
        }
    }
}

</style>