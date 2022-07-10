import Layout from '../components/layout/Layout';

const Sucesso = () => {
  return (
    <Layout>
      <section className="container mx-auto my-20 mt-40 py-24 bg-gray-200 rounded-lg text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-primary-default mb-8">
          Obrigado por entrar em contato!
        </h2>

        <p className="text-gray-600 text-center">Em breve entraremos em contato com você.</p>
      </section>
    </Layout>
  );
};

export default Sucesso;
