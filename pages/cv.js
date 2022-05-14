import React, {useState, useEffect} from "react";
import {Heading, Container} from "@chakra-ui/react";
import Layout from '../components/layouts/article';
import parse from "html-react-parser";
import tuantangHTML from "../public/html/TuanTang.html";
import Image from 'next/image'

const CV = () => {
    // const [authen, setAuthen] = useState(false);
    return (
        <>
            <Layout title="Works">
                <Container>
                    <Heading as="h3" fontSize={20} mb={4}>
                    </Heading>
                    <Image src="./html/TuanTang.html"/>
                </Container>
            </Layout>
        </>
    )
}

export default CV;