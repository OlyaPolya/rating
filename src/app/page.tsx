import { Htag, Button } from '../../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Some text</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка Новая</Button>
    </>
  );
}
