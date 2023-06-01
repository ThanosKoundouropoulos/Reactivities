import { ErrorMessage, Form, Formik } from "formik";
import { values } from "mobx";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Header, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/layout/stores/store";
import { error } from "console";


export default observer(function LoginForm(){
    const {userStore} = useStore();
    return(
        <Formik
            initialValues={{email:'', password:'',error: null}}
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error =>
                setErrors({error: 'invalid'}))}
        >
            {({handleSubmit, isSubmitting,errors}) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                    <Header as='h2' content='Login to Reactivities' color="teal" textAlign="center"/>
                    <MyTextInput placeholder="Email" name="email"/>
                    <MyTextInput placeholder="Password" name="password" type='password'/>
                    <ErrorMessage
                    name="error"render={() =>
                    <Label style={{marginBottom: 10}} basic color="red" content={errors.error}/>}
                    />
                    <Button loading={isSubmitting} positive content='Login' type="submit" fluid/>
                </Form>
            )}



        </Formik>
    )
})