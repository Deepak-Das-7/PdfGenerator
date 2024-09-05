import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../../Context/ThemeContext'; // Import ThemeContext

interface LoginProps {
    onSubmit: (formData: { email: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const { theme } = useContext(ThemeContext);

    const handleSubmit = () => {
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        const formData = { email, password };
        onSubmit(formData);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.label, { color: theme.textColors.primaryText }]}>Email address</Text>
            <TextInput
                style={[styles.input, { borderColor: theme.borderColors.defaultBorder }]}
                placeholder="Enter your email"
                placeholderTextColor={theme.textColors.placeholderText}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={[styles.label, { color: theme.textColors.primaryText }]}>Password</Text>
            <TextInput
                style={[styles.input, { borderColor: theme.borderColors.defaultBorder }]}
                placeholder="Enter your password"
                placeholderTextColor={theme.textColors.placeholderText}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            {error ? (
                <Text style={[styles.error, { color: theme.colors.error }]}>{error}</Text>
            ) : null}
            <Button
                title="Login"
                onPress={handleSubmit}
                color={theme.buttonColors.primaryButtonBackground}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        borderRadius: 4,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    error: {
        marginBottom: 16,
    },
});

export default Login;
