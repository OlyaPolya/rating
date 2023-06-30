'use client';
import { Htag, Button, Ptag, Tag, Rating } from '../../components';
import { useState } from 'react';
import { withLayout } from '../../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <Htag tag='h1'>Pfuj</Htag>
      <Button appearance='primary' arrow='right'>
        Кнопка
      </Button>
      <Button appearance='ghost' arrow='down'>
        Кнопка
      </Button>
      <Ptag size='L'>Rfrjq ntrcn</Ptag>
      <Ptag>Rfrjq ntrcn</Ptag>
      <Ptag size='S'>Rfrjq ntrcn</Ptag>
      <Tag size='S'>Rfrjq ntrcn</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
