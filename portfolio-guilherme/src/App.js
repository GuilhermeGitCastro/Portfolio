import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Database, Server, Smartphone, Moon, Sun, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const skills = [
    { icon: Code, name: 'Python', level: 90 },
    { icon: Code, name: 'Java', level: 85 },
    { icon: Code, name: 'JavaScript', level: 85 },
    { icon: Server, name: 'Flask/Django', level: 85 },
    { icon: Code, name: 'React', level: 80 },
    { icon: Server, name: 'Node.js', level: 75 },
    { icon: Code, name: 'HTML/CSS', level: 90 },
    { icon: Database, name: 'MySQL', level: 85 },
    { icon: Database, name: 'Oracle SQL', level: 80 },
    { icon: Server, name: 'APIs REST', level: 80 },
    { icon: Server, name: 'SaaS', level: 75 },
    { icon: Server, name: 'Cloud Computing', level: 70 },
    { icon: Code, name: 'Git/GitHub', level: 85 },
    { icon: Server, name: 'Bootstrap', level: 75 }
  ];

  const projects = [
    {
      title: 'Sistema Interno Financeiro - ETEC',
      description: 'Sistema desenvolvido em Python para controle de entradas e saídas financeiras, com integração a planilhas e banco de dados.',
      tech: ['Python', 'SQL', 'Excel Integration']
    },
    {
      title: 'Ferramenta de Integração Automatizada',
      description: 'Pipeline de automação com Python para tratamento e geração de relatórios integrados com Google Sheets.',
      tech: ['Python', 'Google Sheets API', 'Automation']
    },
    {
      title: 'Sistema de Vistoria - Porto Seguro',
      description: 'Aplicação para automatizar vistoria de bicicletas utilizando IA e chatbot 100% autônomo.',
      tech: ['Python', 'AI', 'Chatbot', 'Automation']
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header/Navigation */}
      <header className={`fixed w-full top-0 z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} transition-all duration-300`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Guilherme Castro
          </div>
          <div className="flex items-center space-x-6">
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projetos" className="hover:text-blue-600 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                Guilherme Rodrigues de Castro
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                Desenvolvedor Python & Full Stack Júnior
              </p>
              <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Especializado em Python, Java e tecnologias Full Stack. 
                Apaixonado por automação, cloud computing e soluções criativas. 
                Pronto para contribuir com equipes de tecnologia e entregar valor através de código limpo e funcional.
              </p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/guilherme-castro-070009290/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://github.com/GuilhermeGitCastro"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Github size={20} />
                <span>GitHub</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="animate-bounce">
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-all duration-500`}>
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${isVisible.sobre ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Objetivo Profissional
            </h2>
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl`}>
              <p className="text-lg leading-relaxed text-center">
                Conquistar uma posição como <strong>Desenvolvedor Python, Java ou Full Stack Júnior</strong>, 
                contribuindo com soluções criativas, automações e sistemas funcionais enquanto desenvolvo 
                minhas habilidades técnicas e entrego valor prático às equipes de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Formação Acadêmica
          </h2>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl border-l-4 border-blue-600`}>
            <h3 className="text-2xl font-bold mb-2">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
            <p className="text-blue-600 font-semibold mb-2">Faculdade FIAP</p>
            <p className="text-green-600 font-medium">✓ Concluído</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-all duration-500`}>
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white group-hover:from-purple-600 group-hover:to-teal-600 transition-all duration-300">
                      <skill.icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3">{skill.name}</h3>
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${isVisible.projetos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projetos Pessoais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group`}
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-all duration-500`}>
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${isVisible.contato ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <div className="text-center">
              <p className="text-lg mb-8">
                Estou sempre aberto a novas oportunidades e colaborações. 
                Entre em contato comigo!
              </p>
              <a
                href="mailto:Guilhermercastro04@gmail.com"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Mail size={24} />
                <span>Guilhermercastro04@gmail.com</span>
                <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-500`}>
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Guilherme Rodrigues de Castro. Desenvolvido com React e paixão por tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;