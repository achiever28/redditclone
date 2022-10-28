import { Button, Flex, Image} from '@chakra-ui/react';
import React from 'react';

type OAuthButtonsProps = {
    
};

const OAuthButtons:React.FC = () => {
    
    return (
        <Flex direction="column" width="100%" mb={4}>
            <Button variant="oauth" mb={2}>
                <Image src='/images/googlelogo.png' alt='loading' height="20px" mr={2}></Image>
                Continue With Google
            </Button>

            <Button variant="oauth">
                Some Other Provider
            </Button>
            
        </Flex>

    )
}
export default OAuthButtons;