// import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra,
  SimpleGrid
} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tăng Quốc Tuấn
          </Heading>
          {/*<p>Digital Craftsman ( Artist / Developer / Designer )</p>*/}
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/tuan.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Tuấn is a software engineer based in Vietnam. He has many years of experience working in startup companies.
          When not online, he loves hanging out with his friends.
          {/*Currently, he is living off of his own*/}
          {/*product called{' '}*/}
          {/*<NextLink href="/works/inkdrop" scroll={false}>*/}
          {/*  <Link>Inkdrop</Link>*/}
          {/*</NextLink>*/}
          .
        </Paragraph>
        {/*<Box align="center" my={4}>*/}
        {/*  <NextLink href="/works" scroll={false}>*/}
        {/*    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">*/}
        {/*      My portfolio*/}
        {/*    </Button>*/}
        {/*  </NextLink>*/}
        {/*</Box>*/}
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        {/*<BioSection>*/}
        {/*  <BioYear>1990</BioYear>*/}
        {/*  Born Ho Chi Minh, Vietnam.*/}
        {/*</BioSection>*/}
        <BioSection>
          <BioYear>2012</BioYear>
          Completed the HIGHER DIPLOMA IN SOFTWARE ENGINEERING
        </BioSection>
        {/*<BioSection>*/}
        {/*  <BioYear>2010</BioYear>*/}
        {/*  Worked at Yahoo! Japan (ヤフー株式会社入社)*/}
        {/*</BioSection>*/}
        {/*<BioSection>*/}
        {/*  <BioYear>2012 to present</BioYear>*/}
        {/*  Works as a freelance*/}
        {/*</BioSection>*/}
      </Section>

      {/*<Section delay={0.3}>*/}
      {/*  <Heading as="h3" variant="section-title">*/}
      {/*    I ♥*/}
      {/*  </Heading>*/}
      {/*  <Paragraph>*/}
      {/*    Music,{' '}*/}
      {/*    <Link href="https://illust.odoruinu.net/" target="_blank">*/}
      {/*      Drawing*/}
      {/*    </Link>*/}
      {/*    LEGO{' '}*/}
      {/*    <Link href="https://500px.com/p/craftzdog" target="_blank">*/}
      {/*      Photography*/}
      {/*    </Link>*/}
      {/*    , Gym,*/}
      {/*  </Paragraph>*/}
      {/*</Section>*/}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={2}>
          <Section mb={0}>
            <Link href="https://github.com/tangquoctuan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @tangquoctuan
              </Button>
            </Link>
          </Section>
          <Section mb={0}>
            <Link href="https://twitter.com/tangquoctuan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @tangquoctuan
              </Button>
            </Link>
          </Section>
          <Section mb={0}>
            <Link href="https://www.linkedin.com/in/tang-quoc-tuan-060b3697/" target="_blank">
              <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
              >
                @tangquoctuan
              </Button>
            </Link>
          </Section>
        </SimpleGrid>

        {/*<SimpleGrid columns={[1, 2, 2]} gap={6}>*/}
        {/*  <GridItem*/}
        {/*    href="https://www.youtube.com/devaslife"*/}
        {/*    title="Dev as Life"*/}
        {/*    thumbnail={thumbYouTube}*/}
        {/*  >*/}
        {/*    My YouTube channel*/}
        {/*  </GridItem>*/}
        {/*  <GridItem*/}
        {/*    href="https://www.inkdrop.app/"*/}
        {/*    title="Inkdrop"*/}
        {/*    thumbnail={thumbInkdrop}*/}
        {/*  >*/}
        {/*    A Markdown note-taking app*/}
        {/*  </GridItem>*/}
        {/*</SimpleGrid>*/}

        {/*<Box align="center" my={4}>*/}
        {/*  <NextLink href="/posts" scroll={false}>*/}
        {/*    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">*/}
        {/*      Popular posts*/}
        {/*    </Button>*/}
        {/*  </NextLink>*/}
        {/*</Box>*/}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
