import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Alimentation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex items-center gap-2 text-neutral-600 mb-8">
            <Link to="/" className="hover:text-teal-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-teal-600">Alimentation & société</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
                Société & Culture
              </div>
              <h1 className="text-teal-900 mb-6">
                L'alimentation au cœur des enjeux sociétaux
              </h1>
              <p className="text-neutral-700 mb-8">
                Explorez les dimensions sociales, culturelles et économiques de notre système alimentaire. 
                De la sécurité alimentaire aux nouvelles habitudes de consommation, 
                découvrez comment l'alimentation façonne nos sociétés.
              </p>
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors">
                Découvrir nos analyses
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alimentation et société"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-teal-900 mb-3">Sécurité alimentaire</h3>
            <p className="text-neutral-600 mb-4">
              Enjeux de l'accès à une alimentation saine et durable pour tous
            </p>
            <div className="text-neutral-500">45 articles</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-teal-900 mb-3">Comportements alimentaires</h3>
            <p className="text-neutral-600 mb-4">
              Évolution des habitudes de consommation et nouvelles tendances
            </p>
            <div className="text-neutral-500">52 articles</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-teal-900 mb-3">Politiques publiques</h3>
            <p className="text-neutral-600 mb-4">
              Réglementations, subventions et initiatives gouvernementales
            </p>
            <div className="text-neutral-500">38 articles</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="mb-4">Suivez les enjeux sociétaux de l'alimentation</h2>
          <p className="text-teal-100 mb-8">
            Restez informé des débats et évolutions qui façonnent notre système alimentaire
          </p>
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors"
          >
            S'abonner gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
