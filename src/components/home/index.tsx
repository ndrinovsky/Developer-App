import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { styled } from 'styled-components';
// import { useLoaderData } from 'react-router';
import { homeStrings } from '../../strings/home';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const StyledCard = styled(Card)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1024px;
  height: auto;
`;


export default function Home() {
  // const loaderData = useLoaderData();
  // console.log(loaderData);
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = homeStrings;
  return (
    <StyledCard>
      <CardHeader>
        <div className='text-3xl font-bold tracking-tight'>{strings.introductionSectionTitle[language]}</div>
      </CardHeader>
      <CardBody>
        <p>{strings.introductionSectionContentP1[language]}</p><br />
        <p>{strings.introductionSectionContentP2[language]}</p><br />
        <p>{strings.introductionSectionContentP3[language]}</p><br />
      </CardBody>
      <CardFooter>
        {strings.description[language]}
      </CardFooter>
    </StyledCard>
  );
}
