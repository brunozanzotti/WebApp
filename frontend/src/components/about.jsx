import React from "react";
import TeamMemberCard from "./profile_cards";

const About = () => {
  return (
    <div className="p-2 mt-3">
      <h4>Sobre o Nosso Modelo de Detecção de Câncer de Pele por IA</h4>
      <p>
        Bem-vindo ao nosso Modelo de Detecção de Câncer de Pele por IA! Nossa
        missão é fornecer uma ferramenta rápida e confiável para auxiliar na
        detecção precoce do câncer de pele. Abaixo, apresentaremos a tecnologia
        por trás do nosso modelo de IA e por que é crucial para a detecção do
        câncer em estágios iniciais.
      </p>
      <p className="paragraph-title">
        Por Que a Detecção Precoce é Importante:
      </p>
      <p>
        A detecção precoce do câncer de pele é vital para um tratamento eficaz.
        O câncer de pele, quando identificado em seus estágios iniciais, é
        altamente tratável, muitas vezes com invasão mínima e melhores
        resultados. Nosso modelo de IA foi projetado para auxiliar no processo
        de detecção precoce, fornecendo uma ferramenta valiosa para indivíduos e
        profissionais de saúde.
      </p>
      <p className="paragraph-title">Sobre Nosso Modelo de IA:</p>
      <p>
        Nosso modelo de IA para detecção de câncer de pele foi treinado com uma
        ampla e confiável base de dados ISIC (International Skin Imaging
        Collaboration) que possui cerca de 70 mil diferentes imagens de lesões
        de pele, e alcançou uma impressionante taxa de precisão de 90% em nossos
        cenários de teste.
      </p>
      <p className="paragraph-title">Recursos Principais:</p>
      <ul>
        <li>
          <span style={{ fontWeight: "bold", marginRight: "3px" }}>
            Alta Precisão:
          </span>
          Nosso modelo possui uma taxa de precisão de 90%, tornando-o uma fonte
          confiável para identificar possíveis casos de câncer de pele.
        </li>
        <li>
          <span style={{ fontWeight: "bold", marginRight: "3px" }}>
            Interface Amigável:
          </span>
          Nosso aplicativo da web foi projetado para ser intuitivo e fácil de
          usar, garantindo que qualquer pessoa possa acessar e se beneficiar de
          nossa ferramenta de IA.
        </li>
        <li>
          <span style={{ fontWeight: "bold", marginRight: "3px" }}>
            Detecção Rápida:
          </span>
          Com o envio rápido de imagens, você pode receber resultados em questão
          de segundos, potencialmente economizando tempo valioso no processo de
          diagnóstico.
        </li>
      </ul>
      <p className="paragraph-title">Gráficos e Representações Visuais:</p>
      <div className="row">
        <div className="col">
          <img src="graphs_model.png" alt="" style={{ height: "60vh" }} />
        </div>
        <div className="col">
          <img src="matrix_model.png" alt="" style={{ height: "60vh" }} />
        </div>
      </div>
      <p className="mt-3 paragraph-title">Conheça a Equipe:</p>
      <div className="row" style={{ justifyContent: "space-around" }}>
        <TeamMemberCard
          image={"bzd_profile.jpg"}
          name={"Bruno Zanzotti Dias"}
          title={"Desenvolvedor de software"}
          text={
            "Desenvolvedor de software e analista de dados na empresa Constellation Asset Management"
          }
        />
        <TeamMemberCard
          image={"gtf_profile.jpg"}
          name={"Gustavo Tobaldini Fabian"}
          title={"Analista de BI"}
          text={
            "Analista de BI na empresa Axyma e parte da equipe de suporte da nossa ferramenta de formulário digital"
          }
        />
        <TeamMemberCard
          image={"gas_profile.jpg"}
          name={"Guilherme Augusto da Silva"}
          title={"Estagiário de TI"}
          text={
            "Estagiário de desenvolvimento atuando na área de automação no BTG Pactual"
          }
        />
      </div>
    </div>
  );
};

export default About;
