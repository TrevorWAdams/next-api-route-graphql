import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Pet = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout title="Pet">
      <h1>Pet: {slug}</h1>
    </Layout>
  );
};

export default Pet;
