import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';
//import { openDB } from '../lib/openDB';

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // implementar a busca dos dados no mongodb
  //const db = await openDB();
  //const data = await db.collection('feed').find().toArray();

  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
        name: 'Lucas Nhimi',
        username: 'lucasnhimi',
      },
      description: '',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
      videoUrl:"https://v16m.tiktokcdn.com/f7446feb98dfaffa7e3c4c0932574d15/5fd59eba/video/tos/useast2a/tos-useast2a-ve-0068c004/fd8988b8a37245f482e020ff4d458042/?a=1233&br=3410&bt=1705&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020121222551401019018904207022D10&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzZubTxpcWQ0eTMzOTczM0ApaTk7OzhpaDw8N2dpNDNoNGcxaGBtYGtnZzZfLS1gMTZzcy8zXzFiLjRiLy4zNS9iMjQ6Yw%3D%3D&vl=&vr=",
      //videoUrl: 'JSG93PNucHE', 
        //"https://www.youtube.com/embed/JSG93PNucHE?start=27",
        //'https://v16-web-newkey.tiktokcdn.com/19121f05fbed4c4e63a61c79aab3fcea/5f6cf21d/video/tos/alisg/tos-alisg-pve-0037c001/e6da6a1fbf1f4d798e3498ea13aca32b/?a=1988&br=2314&bt=1157&cr=0&cs=0&dr=0&ds=3&er=&l=2020092413230501018907422533020866&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Zpdjx1andydzMzOzczM0ApZ2dkaTwzNWQ3NzhmaTw1N2dkaGVhY2k0XmlfLS0zMTRzcy0xYGJfNDBfYzVfYy5eMzA6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
        name: 'Lucas Nhimi',
        username: 'lucasnhimi',
      },
      description: 'Vídeo teste para clone de interface',
      tags: [{ title: '#youtube' }, { title: '#clone' }],
      songName: 'Tampa Curhat Beat - TampaCurhat',
      videoUrl:
        "https://v16m.tiktokcdn.com/db5d477293f72ed6ffa44209eda4c653/5fd59b5b/video/tos/alisg/tos-alisg-pve-0037c001/843bed5784de4816a0b8bce8621f7502/?a=1233&br=6002&bt=3001&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012122240510101901760222C01D102&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amhxcWRscDk4eDMzZzczM0ApNTU1NDVnaGVmNzk8ZTVnaWdocGY1Ly5oYDVfLS1hMTRzczYwNWBgXjYwMWAwYjEuY2M6Yw%3D%3D&vl=&vr=",
        likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;
