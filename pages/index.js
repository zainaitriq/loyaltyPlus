export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}

export default function Home() { return null; }
