import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplet, Sun, Route, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Durabilite() {
  const categories = [
    {
      icon: Leaf,
      title: 'Agriculture régénérative',
      description: 'Pratiques agricoles qui restaurent les sols, augmentent la biodiversité et capturent le carbone.',
      articles: 62,
      impact: '50% CO₂ capturé'
    },
    {
      icon: Droplet,
      title: 'Réduction du gaspillage',
      description: 'Solutions innovantes pour réduire les pertes alimentaires de la production à la consommation.',
      articles: 48,
      impact: '30% économisé'
    },
    {
      icon: Sun,
      title: 'Énergies vertes',
      description: "Transition énergétique dans l'agriculture : solaire, biogaz, et énergies renouvelables.",
      articles: 41,
      impact: '100% renouvelable'
    },
    {
      icon: Route,
      title: 'Circuits courts',
      description: "Rapprocher producteurs et consommateurs pour réduire l'empreinte carbone et soutenir l'économie locale.",
      articles: 55,
      impact: '70% émissions -'
    },
    {
      icon: Heart,
      title: 'Prévention & bien-être',
      description: 'Agriculture respectueuse du bien-être animal et des écosystèmes naturels.',
      articles: 39,
      impact: '100% éthique'
    }
  ];

  const testimonials = [
    {
      name: 'Jean-Pierre Moreau',
      role: 'Agriculteur bio en Dordogne',
      quote: "Grâce aux pratiques régénératives découvertes sur AgroFutur, j'ai restauré mes sols en 3 ans et augmenté mes rendements de 40%.",
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Claire Dubois',
      role: 'Coopérative Bio Provence',
      quote: 'Les circuits courts nous ont permis de réduire nos émissions de 65% tout en doublant nos revenus.',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const impactStats = [
    { value: '245', label: 'Articles publiés', unit: '' },
    { value: '2.5M', label: 'Tonnes CO₂ évitées', unit: '' },
    { value: '500+', label: 'Fermes accompagnées', unit: '' },
    { value: '85%', label: 'Satisfaction agriculteurs', unit: '' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-neutral-600 mb-8">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-emerald-600">Durabilité & écologie</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
                Écologie & Régénération
              </div>
              <h1 className="text-emerald-900 mb-6">
                Ensemble, construisons une agriculture qui régénère la planète
              </h1>
              <p className="text-neutral-700 mb-8">
                Découvrez les pratiques agricoles durables qui restaurent les écosystèmes, 
                réduisent l'empreinte carbone et créent un avenir alimentaire résilient. 
                De l'agriculture régénérative aux circuits courts, explorez les solutions concrètes 
                pour une transition écologique réussie.
              </p>
              <button className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors">
                Rejoindre la transition
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-emerald-900 mb-1">245</div>
                  <div className="text-neutral-600">Articles publiés</div>
                </div>
                <div>
                  <div className="text-emerald-900 mb-1">500+</div>
                  <div className="text-neutral-600">Fermes accompagnées</div>
                </div>
                <div>
                  <div className="text-emerald-900 mb-1">2.5M</div>
                  <div className="text-neutral-600">Tonnes CO₂ évitées</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agriculture durable"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-emerald-900">Certification Bio</div>
                    <div className="text-neutral-600">Label européen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div key={index}>
                <div className="mb-2">{stat.value}{stat.unit}</div>
                <div className="text-emerald-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-emerald-900 mb-4">Nos thématiques durabilité</h2>
          <p className="text-neutral-600">
            Explorez les différentes facettes de l'agriculture durable et régénérative
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-emerald-200"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-emerald-900 group-hover:text-emerald-600 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">{category.articles} articles</span>
                  <span className="text-emerald-600">{category.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Farmer Testimonials */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-emerald-900 mb-4">Témoignages d'agriculteurs</h2>
            <p className="text-neutral-600">
              Découvrez les retours d'expérience de ceux qui ont fait le choix de la durabilité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-emerald-900">{testimonial.name}</div>
                    <div className="text-neutral-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-emerald-900 mb-4">Certifications et partenaires</h2>
          <p className="text-neutral-600">
            Nos contenus sont validés par des organismes reconnus
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-emerald-50 p-8 rounded-xl text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-emerald-900 mb-2">Label Bio EU</div>
            <div className="text-neutral-600">Certification européenne</div>
          </div>
          <div className="bg-emerald-50 p-8 rounded-xl text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-emerald-900 mb-2">Carbon Neutral</div>
            <div className="text-neutral-600">Bilan carbone vérifié</div>
          </div>
          <div className="bg-emerald-50 p-8 rounded-xl text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-emerald-900 mb-2">Bien-être animal</div>
            <div className="text-neutral-600">Pratiques éthiques</div>
          </div>
          <div className="bg-emerald-50 p-8 rounded-xl text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Route className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-emerald-900 mb-2">Circuit court</div>
            <div className="text-neutral-600">Local & direct</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="mb-4">Participez à la révolution verte</h2>
          <p className="text-emerald-100 mb-8">
            Recevez chaque semaine nos meilleurs articles sur l'agriculture durable et régénérative
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Rejoindre la communauté
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/recherche"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Explorer les ressources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}