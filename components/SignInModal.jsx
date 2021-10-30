import {
    Box,
    chakra,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue as mode,
    useToast,
} from '@chakra-ui/react'
import * as React from 'react'
import {useState, useContext, useEffect} from 'react'
import AuthContext from '@/context/AuthContext'
  
export const SignInModal = (props) => {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login, error } = useContext(AuthContext);
    useEffect(() => error && toast({title: "Your email or password is incorrect or doesn't exist.", status: "error"}))

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email, password})
    }
    return (
    <chakra.form
    onSubmit={(e) => {
    e.preventDefault() // your login logic here
    }}
    {...props}
    >
        <Stack spacing="6">
        <FormControl id="email">
            <FormLabel fontSize='18px' fontWeight='normal'>Email Address</FormLabel>
            <Input  onChange={(e) => setEmail(e.target.value)}
            type="email" 
            id="emailAddress"
            value={email}
            aria-describedby="email-helper-text"
            autoComplete="email" 
            />
        </FormControl>
        <FormControl>
            <Flex align="baseline" justify="space-between">
                <FormLabel mb={1} fontSize='18px' fontWeight='normal'>Password</FormLabel>
                <Box
                as="a"
                href="/forgot-password" 
                fontWeight="normal" 
                >
                Forgot Password?
                </Box>
            </Flex>
            <Input 
            autoComplete="current-password" 
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="pass"
            value={password}
            aria-describedby="password-helper-text"
            />
            </FormControl>
        <Button
            isDisabled={email === "" || password === ""}
            onClick={handleSubmit}
            type="submit" 
            size="lg" 
            minW="210px" 
            height="10" px="8"
            fontWeight="normal"
            _hover={{
            backgroundColor: 'transparent',
            border:'1px',
            }}
            >
                Sign in now
            </Button>
        </Stack>
    </chakra.form>
    )
}
  