import Head from 'next/head'
import Carousel from 'react-material-ui-carousel';
import React from 'react';
import { Typography, CardActions, Stack, Card, Box, ButtonGroup, Button, CardContent, Divider, CardMedia } from '@mui/material';
import UmImg from '../components/images/umLogo.png'

export const DefaultSettings = {
  autoPlay: false,
  animation: "fade",
  indicators: true,
  duration: 1000,
  navButtonsAlwaysVisible: false,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true
}

export default function Home() {
  return (
    <div >
      <Head>
        <title>Charles Rose IV</title>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <Stack p={2} direction="row" sx={{ justifyContent: "space-between", alignItems:"center"}}>
        <Stack >
        <Typography lineHeight={1.2} variant='overline'fontSize={{xs:"1.225rem", sm:"2rem"}} >
          Charles Rose IV
          
        </Typography>
        <Typography lineHeight={1} variant='overline' fontSize={{xs:"1rem", sm:"1.725rem"}} fontWeight={1}>
            Software Engineer
            
          </Typography>
          </Stack>
          <Box >
      <ButtonGroup  variant="text" orientation="vertical" sx={{fontSize:{xs: "small", md:"medium"}}}>
        <Button size="small" href="https://www.linkedin.com/in/charles-rose-2020/">LinkedIn</Button>
        <Button size="small" href="https://github.com/rosechar">Github</Button>
      </ButtonGroup>
      </Box>
     </Stack>
     <Stack>
      <Divider variant='overline' sx={{ fontVariant:"all-small-caps", fontSize:20, fontWeight:1, color:"gray" }}>
          Education
      </Divider>
     <Card sx={{ display: 'flex', margin:2, alignContent: 'space-evenly', maxWidth:600, alignSelf:'center' }}>
      
        <CardContent >
          <Typography  variant="h6" fontWeight={2}>
            University of Michigan 2021
          </Typography>
          <Typography variant="subtitle1" fontWeight={2}>
            B.S., Computer Science, Minor in Economics
          </Typography>
        </CardContent>
      
      <CardMedia
        component="img"
        height="auto"
        sx={{ width: {xs:125, sm:100}}}
        image={UmImg.src}
        alt="University of Michigan"
      />
    </Card>
    <Divider variant='overline' sx={{ fontVariant:"all-small-caps", fontSize:20, fontWeight:1, color:"gray" }}>
          Work History
      </Divider>
      <Box pl={{xs:3,md:20}} pr={{xs:3,md:20}} pt={2}>
      <Carousel 
                {...DefaultSettings}
                sx={{ height:{xs:350, sm:250}}}
            >
                {
                    items.map((item, index) => {
                        return <Work item={item} key={index} />
                    })
                }
            </Carousel>
      </Box>
    <Divider variant='overline' sx={{ fontVariant:"all-small-caps",padding:2, fontSize:20, fontWeight:1, color:"gray" }}>
          Projects
      </Divider>
      <Stack spacing={2} pb={2} direction={{xs:"column", md:"row"}} sx={{ justifyContent: "space-evenly", alignItems:"center" }}>
      <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" component="div">
              Focus Optical
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Local optomotrist/eyeglass shop
            </Typography>
            <Typography variant="body2">
              Built and deployed customer facing website using React, Next.js, Material UI, and Vercel
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://focusoptical.vercel.app">Visit site</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" component="div">
              Clean King
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Car dealership and detail shop
            </Typography>
            <Typography variant="body2">
              Built and deployed customer facing site with scheduling and admin interface using React, Next.js, Material UI, DynamoDB, Cognitio, and Vercel
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://cleanking.vercel.app">Visit site</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" component="div">
              IIMD
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Immigrant rights organization
            </Typography>
            <Typography variant="body2">
              Volunteer consulting and development with Wordpress from 2020-21
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://iimd.org">Visit site</Button>
          </CardActions>
        </Card>
      </Stack>
      
     </Stack>
    </div>
  )
}

function Work({item}) {
  return (
    <Box textAlign="center" justifyContent="center">

        <Stack spacing={1}  >
          
          <Typography fontSize="1.5rem" lineHeight={1} variant="overline">{item.name}</Typography>
          <Typography variant='body1' fontStyle="italic" >{item.title}</Typography>
          {item.description.map((d) => {
            return (
              <Typography key={d}  textAlign="left" variant='body2' > {d} </Typography>
            )
          })}
        </Stack>

      </Box>
  )
}

const items = [
  {
      name: "Domino's Pizza",
      description: ['• Implemented endpoint to abandon invalid carts as part of a batch process, resolving a bug that impacted store operations and required manual dev intervention',
      '• Provided on-call support to production environments during pilot roll-out of new store system platform, identifying build issues, fixing bugs, and dynamically providing stopgap measures',
      '• Facilitated the depreciation process of a legacy API, removing client dependencies and old code, thus reducing complexity and improving maintainability of codebase'],
      title: 'Store System .NET Developer'
  },
  {
      name: "Quicken Loans",
      description: ['• Built endpoint in Loan Origination .NET Core API to expose banker’s IDs to other systems',
      '• Team based development of an Angular based web tool for managing schemas used in the document ingestion process, allowing scalability for banker’s accepting client’s document'],
      title: 'Software Engineer Intern'
  },
  {
    name: "Domino's Pizza",
    description: ['• Collaborate with business units to identify optimal Salesforce use cases, solicit requirements, and develop systems to streamline internal operations and franchise business processes',
    '• Subject matter expert on international market opening process, defining and iteratively implementing feature set necessary to transition from a manual to automated process',
    '• Create dashboards highlighting key business metrics for executive level summaries'],
    title: 'Salesforce Business Analyst'
  },
  {
      name: "University of Michigan",
      description: ['• Backend development of web app to facilitate audio calls via VIOP, matching visitors at different museums to foster art-based connections',
      '• Worked hand-in-hand with UX designers throughout front end development and usability testing, assisting in translating design into implementation'],
      title: 'Web Developer'
  },
  {
    name: "Domino's Pizza",
    description: ['• Develop and execute a test plan for a cloud-based payment processing service, outlining test scenarios and automating API testing with Java/Maven/Cucumber',
  '• Execute functional and regression testing of dominos.com in different environments–creating test cases for new features, identifying bugs, and helping facilitate the release of new national offers and campaigns',
  '• Work with fellow QA engineers to develop an automated regression test suite for an internal web application utilizing Webdriver.io, reducing the amount of required manual testing '],
    title: 'Web QA Engineer'
  },
  {
    name: "University of Michigan",
    description: ['• Backend development of a call volume dashboard using AWS and Google Sheets APIs',
    '• Prototyped intelligent call routing system using Amazon Lex, iteratively testing and revising to improve understanding of customer intent',
    '• Created a DynamoDB database, web interface, and Python script to dynamically check for call center holiday closures', 
    '• Designed alert system to monitor service metrics and output to Slack'],
    title: 'Service Center Developer'
}
]