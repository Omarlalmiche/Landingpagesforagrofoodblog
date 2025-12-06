import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, TrendingUp, DollarSign, Users, Building2, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Innovation() {
  const sections = [
    {
      icon: Rocket,
      title: 'Startups FoodTech/AgriTech',
      description: 'Découvrez les startups qui révolutionnent la chaîne alimentaire avec des innovations de rupture.',
      articles: 78,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Building2,
      title: 'Marketplaces alimentaires',
      description: 'Plateformes digitales qui transforment la distribution et connectent producteurs et consommateurs.',
      articles: 45,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Blockchain & traçabilité',
      description: 'Technologies décentralisées pour garantir transparence et confiance dans la chaîne alimentaire.',
      articles: 32,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: DollarSign,
      title: 'Financement & investissement',
      description: 'Levées de fonds, VCs, et stratégies de financement pour les projets FoodTech et AgriTech.',
      articles: 56,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Études de cas & success stories',
      description: "Retours d'expérience détaillés des entrepreneurs qui ont réussi leur aventure FoodTech.",
      articles: 64,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const successStories = [
    {
      company: 'VertiFresh',
      founder: 'Sarah Chen',
      sector: 'Fermes verticales urbaines',
      raised: '15M€',
      impact: '500T légumes/an',
      description: "Production locale de légumes frais en plein cœur des villes avec 95% d'eau en moins."
    },
    {
      company: 'BlockChain',
      founder: 'Marc Dupont',
      sector: 'Traçabilité alimentaire',
      raised: '8M€',
      impact: '1000+ producteurs',
      description: "Plateforme blockchain garantissant la traçabilité complète de la ferme à l'assiette."
    },
    {
      company: 'NutriAI',
      founder: 'Julie Martin',
      sector: 'Nutrition personnalisée',
      raised: '12M€',
      impact: '200K utilisateurs',
      description: 'IA pour des recommandations nutritionnelles basées sur le profil génétique.'
    }
  ];

  const fundingStats = [
    { label: 'Levées de fonds 2024', value: '2.1Mds€' },
    { label: 'Nombre de deals', value: '450+' },
    { label: 'Startups accompagnées', value: '200+' },
    { label: 'Taux de réussite', value: '68%' }
  ];

  const partnerLogos = [
    { name: 'Station F', count: '50+' },
    { name: 'Bpifrance', count: '30+' },
    { name: 'Partech', count: '25+' },
    { name: 'Five Seasons', count: '15+' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-neutral-600 mb-8">
            <Link to="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-orange-600">Innovation & entrepreneuriat</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6">
                Entrepreneuriat & FoodTech
              </div>
              <h1 className="text-orange-900 mb-6">
                Accélérez votre projet FoodTech avec nos insights
              </h1>
              <p className="text-neutral-700 mb-8">
                Plongez dans l'écosystème entrepreneurial de la FoodTech et de l'AgriTech. 
                Découvrez les success stories inspirantes, les tendances d'investissement, 
                les stratégies gagnantes et les conseils d'experts pour réussir votre projet 
                dans l'alimentation de demain.
              </p>
              <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors">
                Découvrir les success stories
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Funding Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-orange-900 mb-1">275</div>
                  <div className="text-neutral-600">Articles publiés</div>
                </div>
                <div>
                  <div className="text-orange-900 mb-1">2.1Mds€</div>
                  <div className="text-neutral-600">Levées suivies</div>
                </div>
                <div>
                  <div className="text-orange-900 mb-1">200+</div>
                  <div className="text-neutral-600">Startups analysées</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728044849347-ea6ff59d98dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdGVjaG5vbG9neSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY0OTYzNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Innovation FoodTech"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-orange-900">+450 deals</div>
                    <div className="text-neutral-600">en 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Stats Banner */}
      <section className="bg-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {fundingStats.map((stat, index) => (
              <div key={index}>
                <div className="mb-2">{stat.value}</div>
                <div className="text-orange-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-orange-900 mb-4">Explorez l'écosystème FoodTech</h2>
          <p className="text-neutral-600">
            Toutes les facettes de l'entrepreneuriat dans l'innovation alimentaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-200"
              >
                <div className={`bg-gradient-to-br ${section.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-orange-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {section.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">{section.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-orange-100">
              Découvrez les startups qui transforment l'industrie agroalimentaire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-orange-300">{story.company}</div>
                  <div className="bg-orange-500 px-3 py-1 rounded-full">{story.raised}</div>
                </div>
                <div className="mb-3">{story.sector}</div>
                <p className="text-orange-100 mb-4">{story.description}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-orange-200">{story.founder}</div>
                    <div className="text-orange-300">{story.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors">
              Voir toutes les success stories
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-orange-900 mb-4">Nos partenaires investisseurs</h2>
          <p className="text-neutral-600">
            Un réseau de VCs et d'incubateurs reconnus dans l'écosystème FoodTech
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="bg-orange-50 p-8 rounded-xl text-center">
              <div className="text-orange-900 mb-2">{partner.name}</div>
              <div className="text-neutral-600">{partner.count} startups accompagnées</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-1 text-yellow-500 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="text-center mb-6">
              <p className="text-neutral-700 mb-4 italic">
                "AgroFutur nous a permis de comprendre les tendances du marché et d'affiner notre stratégie. 
                Grâce aux insights partagés, nous avons levé 15M€ et accéléré notre croissance."
              </p>
              <footer>
                <div className="text-orange-900">Sarah Chen</div>
                <div className="text-neutral-600">CEO & Co-fondatrice, VertiFresh</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Entrepreneur Resources */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-900 mb-6">Ressources pour entrepreneurs</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-900 mb-1">Guides de fundraising</div>
                    <p className="text-neutral-600">Décks, pitchs et stratégies pour convaincre les investisseurs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-900 mb-1">Analyses de marché</div>
                    <p className="text-neutral-600">Études sectorielles et tendances d'investissement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-900 mb-1">Réseau d'experts</div>
                    <p className="text-neutral-600">Accès à des mentors et des entrepreneurs expérimentés</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-600 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-orange-900 mb-1">Veille concurrentielle</div>
                    <p className="text-neutral-600">Suivez l'activité des acteurs majeurs du secteur</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-12 text-white">
              <h3 className="mb-4">Lancez votre startup FoodTech</h3>
              <p className="text-orange-100 mb-8">
                Accédez à nos ressources exclusives, templates et guides pour entrepreneurs
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                  Télécharger le guide startup
                </button>
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Rejoindre la communauté
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="mb-4">Restez à jour sur l'écosystème FoodTech</h2>
          <p className="text-orange-100 mb-8">
            Recevez chaque semaine notre newsletter avec les dernières levées de fonds, 
            success stories et tendances entrepreneuriales
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors"
            >
              S'abonner gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/recherche"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Explorer les articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}