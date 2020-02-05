import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TeamCard from '../components/TeamCard';
import NewTeamCard from '../components/NewTeamCard';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Button, Label, Item } from 'native-base';



export default class Register extends React.Component {


    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null
    }


    signUpUser = () => {
            if (this.state.password.length < 6) {
                alert("please enter at least 6 characters")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            }).catch(error => this.setState({errorMessage: error.message}))
    }

    render() {

        return (

            <Container style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text>Sign up to get started...</Text>
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Full Name</Label>
                        <Input
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </Item>


                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </Item>

                    <Button
                        full
                        rounded
                        primary
                        style={{ marginTop: 10 }}
                        onPress={() => { this.signUpUser(this.state.email, this.state.password) }}
                    ><Text>Sign Up</Text></Button>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
    welcomeContainer: {
        alignItems: 'center',
        padding: 20
    },
    error: {
        color: 'red'
    }
});
