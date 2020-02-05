import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TeamCard from '../components/TeamCard';
import NewTeamCard from '../components/NewTeamCard';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Button, Label, Item } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Login extends React.Component {

    // static navigationOptions = {
    //     header : null
    // }

    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    loginUser = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }))
    }


    render() {

        return (
            <Container style={styles.container}>

                <View style={styles.welcomeContainer}>
                    <Text style={styles.title}>Welcome Back...</Text>

                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>


                <Form>
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
                        success
                        style={styles.button}
                        onPress={() => { this.loginUser() }}
                    ><Text>Login</Text></Button>
                </Form>
                <View style={styles.welcomeContainer}>
                    <Text>New to Coach App? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                        <Text style={{ color: 'red' }}>Sign Up!</Text>
                    </TouchableOpacity>

                </View>

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
    },
    button: {
        marginTop: 20,
        backgroundColor: '#26A69A'
    },
    title: {
        fontSize: 18
    }
});
