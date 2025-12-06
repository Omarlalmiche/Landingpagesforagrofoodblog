import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Apple, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Nutrition() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex items-center gap-2 text-neutral-600 mb-8">
            <Link to="/" className="hover:text-pink-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-pink-600">Nutrition & santé</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full mb-6">
                Santé & Bien-être
              </div>
              <h1 className="text-pink-900 mb-6">
                Nutrition personnalisée et santé de demain
              </h1>
              <p className="text-neutral-700 mb-8">
                Découvrez comment la science et la technologie transforment notre approche 
                de la nutrition. De la génomique nutritionnelle à l'intelligence artificielle, 
                explorez les innovations qui permettent une alimentation optimale pour chaque individu.
              </p>
              <button className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors">
                Découvrir nos articles
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjQ5NTE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nutrition et santé"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-pink-900 mb-3">Nutrition personnalisée</h3>
            <p className="text-neutral-600 mb-4">
              Recommandations basées sur votre profil génétique et vos besoins individuels
            </p>
            <div className="text-neutral-500">42 articles</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Apple className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-pink-900 mb-3">Aliments fonctionnels</h3>
            <p className="text-neutral-600 mb-4">
              Superaliments, probiotiques et innovations nutritionnelles
            </p>
            <div className="text-neutral-500">38 articles</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-pink-900 mb-3">Sport & performance</h3>
            <p className="text-neutral-600 mb-4">
              Nutrition sportive et optimisation des performances
            </p>
            <div className="text-neutral-500">35 articles</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="mb-4">Abonnez-vous à notre newsletter santé</h2>
          <p className="text-pink-100 mb-8">
            Recevez nos conseils nutritionnels et les dernières découvertes scientifiques
          </p>
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 transition-colors"
          >
            S'abonner gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
