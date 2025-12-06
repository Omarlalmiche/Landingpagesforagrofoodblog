import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentArticles = [
    {
      id: 1,
      title: "L'IA révolutionne l'analyse des sols agricoles",
      category: 'Agroalimentaire Intelligent',
      image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwc2Vuc29yc3xlbnwxfHx8fDE3NjQ5NDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: "Découvrez comment les capteurs IoT et l'intelligence artificielle transforment l'agriculture de précision.",
      date: '3 décembre 2025',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Agriculture régénérative : retour aux sources',
      category: 'Durabilité & écologie',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Les pratiques ancestrales revisitées par la science moderne pour régénérer nos sols.',
      date: '1 décembre 2025',
      readTime: '7 min'
    },
    {
      id: 3,
      title: "FoodTech : 2 milliards levés en 2024",
      category: 'Innovation & entrepreneuriat',
      image: 'https://images.unsplash.com/photo-1728044849347-ea6ff59d98dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdGVjaG5vbG9neSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY0OTYzNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: "Panorama des levées de fonds et des tendances qui façonnent l'avenir de l'alimentation.",
      date: '28 novembre 2025',
      readTime: '6 min'
    },
    {
      id: 4,
      title: "Nutrition personnalisée : l'avenir de la santé",
      category: 'Nutrition & santé',
      image: 'https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjQ5NTE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: "Comment la génomique et l'IA permettent des recommandations nutritionnelles sur mesure.",
      date: '25 novembre 2025',
      readTime: '8 min'
    }
  ];

  const featuredSelection = [
    {
      id: 1,
      title: 'Blockchain et traçabilité alimentaire',
      image: 'https://images.unsplash.com/photo-1703932892707-96a68172d8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ4NzU2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Tendance du mois',
      description: "De la ferme à l'assiette, la blockchain garantit transparence et confiance dans la chaîne alimentaire."
    },
    {
      id: 2,
      title: "Fermes verticales : l'agriculture urbaine décolle",
      image: 'https://images.unsplash.com/photo-1761839257946-4616bcfafec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMGZhcm1pbmclMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NDk2MzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Innovation',
      description: "Les fermes verticales produisent 100 fois plus par m² avec 95% d'eau en moins."
    },
    {
      id: 3,
      title: 'Circuits courts : économie et écologie',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Dossier',
      description: "Les circuits courts réduisent l'empreinte carbone de 70% et soutiennent l'économie locale."
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Ingénieure agronome',
      content: "Une source d'information indispensable pour suivre les innovations du secteur. Articles de qualité et analyses pertinentes.",
      rating: 5
    },
    {
      name: 'Thomas Laurent',
      role: 'Entrepreneur FoodTech',
      content: "AgroFutur m'a permis de rester à jour sur les tendances et de trouver l'inspiration pour mon projet de startup.",
      rating: 5
    },
    {
      name: 'Sophie Martin',
      role: 'Agricultrice',
      content: "Des conseils pratiques et des retours d'expérience concrets. J'ai adopté plusieurs innovations grâce à ce blog.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSelection.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSelection.length) % featuredSelection.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
                Innovation & Durabilité
              </div>
              <h1 className="text-green-900 mb-6">
                L'avenir de l'alimentation commence ici
              </h1>
              <p className="text-neutral-600 mb-8">
                Découvrez comment la technologie et la durabilité transforment l'agriculture et l'industrie agroalimentaire. 
                Articles d'experts, analyses de tendances et success stories pour façonner l'alimentation de demain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/agroalimentaire-intelligent"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Découvrir nos articles
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/newsletter"
                  className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors"
                >
                  S'abonner gratuitement
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-green-900 mb-1">500+</div>
                  <div className="text-neutral-600">Articles publiés</div>
                </div>
                <div>
                  <div className="text-green-900 mb-1">50K+</div>
                  <div className="text-neutral-600">Lecteurs mensuels</div>
                </div>
                <div>
                  <div className="text-green-900 mb-1">100+</div>
                  <div className="text-neutral-600">Experts cités</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703932892707-96a68172d8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ4NzU2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agriculture intelligente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-green-900">+45%</div>
                    <div className="text-neutral-600">Croissance du secteur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-green-900 mb-2">Derniers articles</h2>
            <p className="text-neutral-600">Restez à jour avec nos dernières publications</p>
          </div>
          <Link to="/recherche" className="text-green-600 hover:text-green-700 flex items-center gap-2">
            Voir tous les articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-green-600">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-neutral-900 mb-3 hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-neutral-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Selection - Carousel */}
      <section className="bg-gradient-to-br from-green-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Sélection du mois</h2>
            <p className="text-green-100">
              Les innovations et tendances qui façonnent l'avenir de l'agroalimentaire
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {featuredSelection.map((item) => (
                  <div key={item.id} className="min-w-full">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="relative h-96 rounded-xl overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-orange-500 px-4 py-2 rounded-full">
                          {item.tag}
                        </div>
                      </div>
                      <div className="px-4">
                        <h3 className="mb-4">{item.title}</h3>
                        <p className="text-green-100 mb-8">
                          {item.description}
                        </p>
                        <button className="inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
                          Lire l'article
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {featuredSelection.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Trust Signals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-green-900 mb-4">Ce que disent nos lecteurs</h2>
          <p className="text-neutral-600">
            Rejoignez une communauté de 50 000+ professionnels de l'agroalimentaire
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-neutral-700 mb-6">"{testimonial.content}"</p>
              <div>
                <div className="text-green-900">{testimonial.name}</div>
                <div className="text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-green-900 mb-1">50K+</div>
            <div className="text-neutral-600">Lecteurs actifs</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-green-900 mb-1">Prix 2024</div>
            <div className="text-neutral-600">Meilleur blog AgriTech</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-green-900 mb-1">98%</div>
            <div className="text-neutral-600">Satisfaction lecteurs</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-green-900 mb-1">100+</div>
            <div className="text-neutral-600">Contributeurs experts</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="mb-4">Restez informé des dernières innovations</h2>
          <p className="text-green-100 mb-8">
            Recevez chaque semaine notre sélection d'articles sur l'innovation alimentaire et la durabilité
          </p>
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors"
          >
            S'abonner à la newsletter
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}