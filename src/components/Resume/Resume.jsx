import React from "react";
import "./style.css";

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div id="education" className="row justify-content-center pb-5">
            <ul className="timeline">
              <li>
                <i className="icon-graduation"></i>
                <h2 className="timelin-title">Formação</h2>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">
                    Bacharelado em Ciência da Computação
                  </h3>
                  <h3 className="line-subtitle">
                    Universidade Federal do Paraná
                  </h3>
                  <span>2013 - 2019</span>
                  <p className="line-text">
                    O objetivo principal do curso é o de formar pessoas com
                    capacidade de analisar e modelar problemas que lhes sejam
                    apresentados, adotando as técnicas adequadas para
                    solucioná-los da melhor forma possível.
                  </p>
                  <p className="line-text">
                    Foi onde tive meu primeiro contato com programação,
                    aprendendo os conceitos iniciais na linguagem Pascal e
                    depois utilizando linguagem C na maior da parte do curso.
                    Dentro da graduação estudei desde conceitos de mais baixo
                    nível, como arquitetura de processadores, até noções de mais
                    alto nível, como planejamento e acompanhamento de projetos.
                  </p>
                  <p className="line-text">
                    Tive que codificar diversos programas em C como compressores
                    e descompressores de texto, algoritmo de detecção de
                    movimentos, buscas em grafos, aplicações de conceitos de
                    Inteligência Artificial dentre outros.
                  </p>
                  <p className="line-text">
                    Também utilizei na minha graduação Java, GHDL, JavaScript,
                    Kotlin, Shell Script e C++.
                  </p>
                </div>
              </li>
              {/* <li>
              <div className="content-text">
                <h3 className="line-title">
                  Higher Secondary School - San Francisco College
                </h3>
                <span>2010 - 2012</span>
                <p className="line-text">
                  Expenses as material breeding insisted building to in.
                  Continual so distrusts pronounce by unwilling listening. Thing
                  do taste on we manor.
                </p>
              </div>
            </li> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div id="experience" className="row justify-content-center">
            <ul className="timeline">
              <li>
                <i className="icon-briefcase"></i>
                <h2 className="timelin-title">Experiência</h2>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">
                    Engenheiro de Software Front-End
                  </h3>
                  <h3 className="line-subtitle">Dextra Digital</h3>
                  <span>Mar 2020 - Atualmente</span>
                  <p className="line-text">
                    Projeto onde me consolidei como desenvolvedor ReactJS e que
                    decidi o meu foco.
                  </p>
                  <p className="line-text">
                    O projeto consiste em uma interface de monitoramento em
                    tempo real utilizando uma API de localização por GPS
                    (mapboxGL) integrada com uma plataforma de IoT (Clear
                    Blade).
                  </p>
                  <p className="line-text">
                    Iniciado como um POC, o projeto já passou por diversas
                    interações e mudanças de escopo o que fez com que eu tivesse
                    que desenvolver os mais diversos tipos de recurso para
                    aplicação.
                  </p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Engenheiro de Software Junior</h3>
                  <h3 className="line-subtitle">Cinq Technologies</h3>
                  <span>Jun 2019 - Mar 2020</span>
                  <p className="line-text">
                    Auxiliei no suporte e manutenção de uma aplicação
                    internacional para consultas de perfis de empresas e pessoas
                    por meio de web-crawling.
                  </p>
                  <p className="line-text">
                    Não tive oportunidade de desenvolver em font-end durante
                    esse período sendo que passei a maior parte do tempo
                    atualizando e configurando os parâmetros do webcrawler e
                    criando scripts de automação.
                  </p>
                  <p className="line-text">
                    Durante esse período passei a estudar ReactJS por conta
                    própria até ter uma oportunidade de desenvolver
                    profissionalmente utilizando a tecnologia.
                  </p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Estagiário Desenvolvedor</h3>
                  <h3 className="line-subtitle">Cinq Technologies</h3>
                  <span>Jun 2017 - Jun 2019</span>
                  <p className="line-text">
                    Onde tive minha primeira experiência profissional com
                    desenvolvimento. Atuei no Front-End utilizando
                    Javascript/HTML/CSS lidando na maior parte com JavaScript
                    puro e durante um curto período no final do estágio com
                    ReactJS.
                  </p>
                  <p className="line-text">
                    Lidei alguns meses com a elaboração de testes unitários
                    automatizados com Intern e testes de integração com
                    Selenium, escritos em Python.
                    <p className="line-text">
                      Durante meu período de estágio fiz uso da plataforma Jira
                      para o acompanhamento de tarefas e o Git para o controle
                      de versionamento do código.
                    </p>
                    <p className="line-text">
                      Durante todo o período trabalhei em projetos
                      internacionais com reuniões diárias em inglês e utilizando
                      a metodologia SCRUM.
                    </p>
                  </p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Estagiário HelpDesk</h3>
                  <h3 className="line-subtitle">
                    Tinfo Tecnologia da Informação
                  </h3>
                  <span>Nov 2016 - Dec 2017</span>
                  <p className="line-text">
                    Prestação de suporte a usuários do sistema de Ponto de
                    Vendas fornecido para postos de combustível e suporte a ERP
                    para lojas especializadas em produtos Agropecuários.
                    Fornecer auxílio com relação ao funcionamento dos sistemas,
                    realizar atualizações, abertura e acompanhamento de
                    chamados, consultas em bancos e auxílio na emissão de notas
                    pelo sistema.
                  </p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Estagiário Suporte técnico</h3>
                  <h3 className="line-subtitle">Geha Sistemas Especialistas</h3>
                  <span>Nov 2013 - Mar 2014</span>
                  <p className="line-text">
                    Realização de suporte técnico a usuários do programa Urânia,
                    programa de criação de horários escolares. Realizar suporte
                    ao cliente por meio de chat online e telefone.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
