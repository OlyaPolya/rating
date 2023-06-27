import { Htag, Button, Ptag, Tag } from '../../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Some text</Htag>
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
    </>
  );
}
