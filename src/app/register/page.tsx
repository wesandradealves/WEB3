import Section from '@/components/section';
import RegistrationForm from '@/components/RegistrationForm';

const CadastroPage = () => {
  return (
    <Section
      id="cadastro"
      background="#0D1117"
      backgroundcolor="#0D1117"
      classname="text-white"
      barstitle
      title="Formulário de Cadastro"
      subtitle="Preencha os campos abaixo para cadastrar seu estabelecimento em nossa plataforma."
      direction="col"
      gap={12}
    >
      <div className="w-full max-w-5xl mx-auto">
        <RegistrationForm />
      </div>
    </Section>
  );
};

export default CadastroPage;
