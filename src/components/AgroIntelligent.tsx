import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Database, ShieldCheck, Bot, Truck, Wifi } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AgroIntelligent() {
  const subcategories = [
    {
      icon: Wifi,
      title: 'Capteurs & IoT',
      description: "Surveillance en temps réel des cultures, des sols et du climat grâce aux capteurs connectés et à l'Internet des Objets.",
      articles: 48,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'IA & analyse des données',
      description: 'Intelligence artificielle et machine learning pour optimiser les rendements et prédire les récoltes.',
      articles: 52,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShieldCheck,
      title: 'Traçabilité & blockchain',
      description: 'Blockchain et technologies de traçabilité pour garantir la transparence de la chaîne alimentaire.',
      articles: 35,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Bot,
      title: 'Automatisation & robotique',
      description: 'Robots agricoles, drones et systèmes automatisés pour optimiser le travail au champ.',
      articles: 41,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Truck,
      title: 'Stockage & logistique intelligente',
      description: 'Solutions innovantes pour le stockage, le transport et la distribution des produits alimentaires.',
      articles: 29,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'Ferme connectée en Bretagne',
      result: '+30% de rendement',
      description: "Capteurs IoT et IA pour optimiser l'irrigation"
    },
    {
      title: 'Traçabilité blockchain',
      result: '100% transparence',
      description: 'De la ferme à la table, traçage complet'
    },
    {
      title: 'Robots de récolte',
      result: '-40% de coûts',
      description: 'Automatisation de la cueillette des fruits'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-neutral-600 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-blue-600">Agroalimentaire Intelligent</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                Technologie & Innovation
              </div>
              <h1 className="text-blue-900 mb-6">
                Découvrez comment la technologie transforme l'agriculture
              </h1>
              <p className="text-neutral-700 mb-8">
                De l'IoT à l'intelligence artificielle, en passant par la blockchain et la robotique, 
                explorez les innovations qui révolutionnent l'agroalimentaire. Articles d'experts, 
                études de cas et analyses des dernières tendances technologiques.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                Explorer les innovations
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-blue-900 mb-1">205</div>
                  <div className="text-neutral-600">Articles publiés</div>
                </div>
                <div>
                  <div className="text-blue-900 mb-1">50+</div>
                  <div className="text-neutral-600">Experts cités</div>
                </div>
                <div>
                  <div className="text-blue-900 mb-1">120+</div>
                  <div className="text-neutral-600">Cas d'usage réussis</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwc2Vuc29yc3xlbnwxfHx8fDE3NjQ5NDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agriculture intelligente"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Analyses approfondies</h3>
              <p className="text-neutral-600">
                Des analyses détaillées des technologies émergentes et de leur impact sur l'agriculture
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Retours d'expérience</h3>
              <p className="text-neutral-600">
                Des cas concrets d'implémentation réussie de solutions technologiques
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Veille technologique</h3>
              <p className="text-neutral-600">
                Une veille constante sur les innovations et les acteurs du secteur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Explorez nos sous-catégories</h2>
          <p className="text-neutral-600">
            Plongez dans les différentes facettes de l'agroalimentaire intelligent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
              >
                <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">{category.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Cas d'usage réussis</h2>
            <p className="text-blue-100">
              Des exemples concrets d'implémentation de technologies intelligentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-blue-300 mb-3">{useCase.title}</div>
                <div className="mb-4">{useCase.result}</div>
                <p className="text-blue-100">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-900 mb-6">Pourquoi nous faire confiance ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-900 mb-1">Expertise reconnue</div>
                    <p className="text-neutral-600">50+ experts du secteur AgriTech contribuent à nos contenus</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-900 mb-1">Cas pratiques vérifiés</div>
                    <p className="text-neutral-600">Tous nos cas d'usage sont documentés et sourcés</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-900 mb-1">Veille technologique continue</div>
                    <p className="text-neutral-600">Publication hebdomadaire des dernières innovations</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-blue-900 mb-6">Nos partenaires technologiques</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-blue-900 mb-1">15+</div>
                  <div className="text-neutral-600">Startups AgriTech</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-blue-900 mb-1">30+</div>
                  <div className="text-neutral-600">Instituts de recherche</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-blue-900 mb-1">50+</div>
                  <div className="text-neutral-600">Exploitations pilotes</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-blue-900 mb-1">100+</div>
                  <div className="text-neutral-600">Solutions testées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="mb-4">Restez à la pointe de l'innovation</h2>
          <p className="text-blue-100 mb-8">
            Recevez chaque semaine notre sélection d'articles sur les technologies agricoles
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              S'abonner gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/recherche"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Parcourir les articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}