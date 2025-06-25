import Section from '@/components/section';
import RegistrationForm from '@/components/RegistrationForm';

const CadastroPage = () => {
  return (
    <Section
      id="cadastro"
      background="#0D1117"
      backgroundcolor="#0D1117"
      classname="pt-[140px] text-white"
      barstitle
      title="<b>Formulário de Cadastro</b>"
      subtitle="<span class='text-gray-400'>Preencha os campos abaixo para cadastrar<br/>seu estabelecimento em nossa plataforma.</span>"
      direction="col"
      gap={12}
    >
      <RegistrationForm />
    </Section>
  );
};

export default CadastroPage;
