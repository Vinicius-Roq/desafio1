import { useState } from "react";
import { Menu, X, ChevronDown, AlertCircle, Shield } from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold">
              WS
            </div>
            <span className="hidden sm:inline text-lg font-bold text-gray-900">
              Wilson Sons
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "inicio", label: "Início" },
              { id: "sobre", label: "Sobre" },
              { id: "programacao", label: "Programação" },
              { id: "epis", label: "EPIs" },
              { id: "inscricao", label: "Inscrição" },
              { id: "contato", label: "Contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("inscricao")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
            {[
              { id: "inicio", label: "Início" },
              { id: "sobre", label: "Sobre" },
              { id: "programacao", label: "Programação" },
              { id: "epis", label: "EPIs" },
              { id: "inscricao", label: "Inscrição" },
              { id: "contato", label: "Contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("inscricao")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Agendar Visita
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-gradient-to-br from-blue-50 via-blue-40 to-blue-100 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto text-center py-20">
          <div className="mb-6 inline-block">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              📍 Estaleiros Wilson Sons
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Visite os Estaleiros da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Wilson Sons
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Conheça de perto uma das maiores empresas do segmento offshore brasileiro. Explore nossa infraestrutura moderna e inovadora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("inscricao")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:scale-105"
            >
              Agendar minha visita
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Saiba mais
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { number: "70+", label: "Anos de história" },
              { number: "2.000+", label: "Colaboradores" },
              { number: "100%", label: "Segurança" },
              { number: "24h", label: "Suporte" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Conheça a Wilson Sons
          </h2>
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/rB6jcirH848"
              title="Wilson Sons - Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Sobre a Visita
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">O Evento</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                A Wilson Sons convida você para uma experiência imersiva em seus estaleiros. Esta é uma oportunidade única de conhecer as instalações modernas, tecnologias avançadas e processos produtivos de uma empresa líder em engenharia offshore.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Durante a visita, você terá acesso a áreas restritas, poderá conversar com profissionais experientes e compreender melhor o setor naval brasileiro.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Público-alvo
              </h3>
              <ul className="space-y-3">
                {[
                  "Estudantes de Engenharia (Naval, Mecânica, Elétrica, Civil)",
                  "Profissionais da indústria naval e offshore",
                  "Pesquisadores e acadêmicos",
                  "Entusiastas da engenharia e tecnologia",
                  "Profissionais em busca de oportunidades de carreira",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronDown className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programação Section */}
      <section id="programacao" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Programação
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                hora: "09:00",
                titulo: "Recepção e Briefing",
                desc: "Recepção dos visitantes e apresentação da programação do dia",
              },
              {
                hora: "09:30",
                titulo: "Tour pelos Estaleiros",
                desc: "Visita guiada pelas principais áreas de produção",
              },
              {
                hora: "11:00",
                titulo: "Apresentação Corporativa",
                desc: "História, missão e inovações da Wilson Sons",
              },
              {
                hora: "11:45",
                titulo: "Tecnologia e Inovação",
                desc: "Demonstração de tecnologias e processos avançados",
              },
              {
                hora: "12:30",
                titulo: "Intervalo para Almoço",
                desc: "Confraternização e refeição",
              },
              {
                hora: "13:30",
                titulo: "Mesa Redonda",
                desc: "Conversa aberta com profissionais da empresa",
              },
              {
                hora: "14:30",
                titulo: "Oportunidades de Carreira",
                desc: "Apresentação de programas de estágio e recrutamento",
              },
              {
                hora: "15:00",
                titulo: "Encerramento",
                desc: "Sessão de perguntas e respostas finais",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-600"
              >
                <div className="text-blue-600 font-bold text-lg mb-2">
                  {item.hora}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPIs - Obrigatoriedade */}
      <section id="epis" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded-lg mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-2">
                  ⚠️ EPIs - OBRIGATÓRIO
                </h2>
                <p className="text-orange-800 text-lg">
                  O uso de Equipamentos de Proteção Individual (EPIs) é <span className="font-bold">OBRIGATÓRIO</span> para todos os visitantes. Sem a utilização adequada dos EPIs, não será permitido o acesso aos estaleiros.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                EPIs Fornecidos
              </h3>
              <div className="space-y-4">
                {[
                  { item: "Capacete de segurança", desc: "Proteção contra impactos" },
                  { item: "Coletes de segurança", desc: "Identificação e visibilidade" },
                  {
                    item: "Óculos de proteção",
                    desc: "Proteção ocular contra partículas",
                  },
                  {
                    item: "Protetores auriculares",
                    desc: "Proteção contra ruído",
                  },
                  {
                    item: "Luvas de segurança",
                    desc: "Proteção das mãos",
                  },
                  { item: "Calçados antiderrapantes", desc: "Segurança dos pés" },
                ].map((epi, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-900 mb-1">{epi.item}</h4>
                    <p className="text-gray-600 text-sm">{epi.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Normas de Segurança
              </h3>
              <div className="space-y-4">
                {[
                  "Todos os EPIs devem estar em perfeito estado de conservação",
                  "É proibido remover ou descartar os EPIs durante a visita",
                  "Não é permitido fumar, comer ou beber dentro dos estaleiros",
                  "Respeite todas as placas de sinalização e advertências",
                  "Mantenha-se junto ao guia em todos os momentos",
                  "Evite tocar em máquinas, ferramentas ou materiais sem autorização",
                  "Em caso de incidente ou dúvida, comunique imediatamente ao guia",
                  "Fotografar é permitido apenas em áreas designadas",
                ].map((norma, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white rounded-lg p-4"
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-gray-700">{norma}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-red-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Avisos Importantes</h3>
            <p className="text-lg mb-4">
              O descumprimento das normas de segurança pode resultar em:
            </p>
            <ul className="text-lg space-y-2">
              <li>• Desligamento imediato da visita</li>
              <li>• Cancelamento do seu registro na empresa</li>
              <li>• Possível impedimento de futuras visitas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inscrição Section */}
      <section id="inscricao" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Inscrição
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Preencha o formulário abaixo para se inscrever. Sua inscrição será confirmada por e-mail.
          </p>

          {/* Google Forms Iframe */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_cQxWJ805AbhGmlkEFYgrgxBeXOhqcnmKEfOH79-lU1Q_rg/viewform?embedded=true"
              width="100%"
              height="1039"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulário de Inscrição"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                titulo: "Localização",
                info: "Estaleiros Wilson Sons - Recife, PE",
              },
              {
                icon: "📧",
                titulo: "E-mail",
                info: "visitas@wilsonsons.com.br",
              },
              {
                icon: "📞",
                titulo: "Telefone",
                info: "(81) 3228-9000",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.titulo}
                </h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Wilson Sons</h4>
              <p className="text-gray-400">
                Líder em engenharia e construção naval no Brasil.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Navegação</h4>
              <ul className="text-gray-400 space-y-2">
                {[
                  { id: "inicio", label: "Início" },
                  { id: "sobre", label: "Sobre" },
                  { id: "programacao", label: "Programação" },
                  { id: "epis", label: "EPIs" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Inscrição</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("inscricao")}
                    className="hover:text-white transition-colors"
                  >
                    Agendar Visita
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="hover:text-white transition-colors"
                  >
                    Fale Conosco
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Informações</h4>
              <p className="text-gray-400 text-sm">
                Todos os direitos reservados © 2024 Wilson Sons
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 font-semibold text-lg">
              Projeto desenvolvido para fins educativos na KODIE Academy
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Esta é uma landing page de demonstração para agendamento de visitas
              aos estaleiros da Wilson Sons.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
