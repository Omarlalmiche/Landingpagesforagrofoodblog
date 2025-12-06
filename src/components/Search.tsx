import { Link } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon, Filter, Calendar, Tag, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const categories = [
    'Toutes les catégories',
    'Agroalimentaire Intelligent',
    'Durabilité & écologie',
    'Nutrition & santé',
    'Innovation & entrepreneuriat',
    'Alimentation & société'
  ];

  const availableTags = [
    'IoT', 'IA', 'Blockchain', 'Agriculture régénérative', 
    'Circuits courts', 'FoodTech', 'Startups', 'Nutrition personnalisée',
    'Robotique', 'Capteurs', 'Traçabilité', 'Bio'
  ];

  const dateOptions = [
    { label: 'Toutes les dates', value: '' },
    { label: 'Cette semaine', value: 'week' },
    { label: 'Ce mois', value: 'month' },
    { label: 'Cette année', value: 'year' }
  ];

  const allArticles = [
    {
      id: 1,
      title: "L'IA révolutionne l'analyse des sols agricoles",
      category: 'Agroalimentaire Intelligent',
      excerpt: "Découvrez comment les capteurs IoT et l'intelligence artificielle transforment l'agriculture de précision.",
      date: '3 décembre 2025',
      tags: ['IA', 'IoT', 'Capteurs'],
      image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwc2Vuc29yc3xlbnwxfHx8fDE3NjQ5NDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Agriculture régénérative : retour aux sources',
      category: 'Durabilité & écologie',
      excerpt: 'Les pratiques ancestrales revisitées par la science moderne pour régénérer nos sols.',
      date: '1 décembre 2025',
      tags: ['Agriculture régénérative', 'Bio'],
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Blockchain et traçabilité alimentaire',
      category: 'Agroalimentaire Intelligent',
      excerpt: "De la ferme à l'assiette, la blockchain garantit transparence et confiance.",
      date: '28 novembre 2025',
      tags: ['Blockchain', 'Traçabilité'],
      image: 'https://images.unsplash.com/photo-1703932892707-96a68172d8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ4NzU2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedDate('');
    setSelectedTags([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </Link>

        {/* Search Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-green-900 mb-4">Trouvez l'article qui vous intéresse</h1>
            <p className="text-neutral-600">
              Utilisez les filtres ci-dessous pour affiner votre recherche parmi nos 500+ articles
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="space-y-6">
            {/* Keyword Search */}
            <div>
              <label htmlFor="search" className="block text-green-900 mb-2">
                Recherche par mot-clé
              </label>
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ex: blockchain, IoT, nutrition..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  style={{ minHeight: '48px' }}
                />
              </div>
              <p className="text-neutral-500 mt-2">
                💡 Conseil : Utilisez plusieurs mots-clés pour affiner votre recherche
              </p>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-green-900 mb-2 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Catégorie
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-neutral-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                  style={{ minHeight: '48px' }}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat === 'Toutes les catégories' ? '' : cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <p className="text-neutral-500 mt-2">
                  💡 Filtrez par thématique pour des résultats ciblés
                </p>
              </div>

              {/* Date Filter */}
              <div>
                <label htmlFor="date" className="block text-green-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Période de publication
                </label>
                <select
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-neutral-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors appearance-none bg-white cursor-pointer"
                  style={{ minHeight: '48px' }}
                >
                  {dateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-neutral-500 mt-2">
                  💡 Consultez les articles les plus récents
                </p>
              </div>
            </div>

            {/* Tags Multi-Select */}
            <div>
              <label className="block text-green-900 mb-2 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags (sélection multiple)
              </label>
              <div className="border-2 border-neutral-200 rounded-lg p-4 min-h-[120px]">
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-green-600 text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <X className="inline-block w-4 h-4 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-neutral-500 mt-2">
                💡 Cliquez sur plusieurs tags pour combiner les critères
              </p>
            </div>

            {/* Active Filters Summary */}
            {(searchTerm || selectedCategory || selectedDate || selectedTags.length > 0) && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-900">Filtres actifs :</span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    Réinitialiser
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="bg-white px-3 py-1 rounded-full text-neutral-700">
                      Mot-clé: {searchTerm}
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="bg-white px-3 py-1 rounded-full text-neutral-700">
                      {selectedCategory}
                    </span>
                  )}
                  {selectedDate && (
                    <span className="bg-white px-3 py-1 rounded-full text-neutral-700">
                      {dateOptions.find(opt => opt.value === selectedDate)?.label}
                    </span>
                  )}
                  {selectedTags.map(tag => (
                    <span key={tag} className="bg-white px-3 py-1 rounded-full text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              style={{ minHeight: '48px' }}
            >
              <SearchIcon className="w-5 h-5" />
              Rechercher
            </button>
          </form>
        </div>

        {/* Search Results */}
        {showResults && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-green-900">Résultats de recherche</h2>
              <span className="text-neutral-600">{allArticles.length} articles trouvés</span>
            </div>

            <div className="space-y-6">
              {allArticles.map((result) => (
                <article
                  key={result.id}
                  className="flex gap-6 p-6 rounded-xl border-2 border-neutral-100 hover:border-green-200 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {result.category}
                      </span>
                      <span className="text-neutral-500">{result.date}</span>
                    </div>
                    <h3 className="text-neutral-900 mb-2 hover:text-green-600 transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-neutral-600 mb-3">{result.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-neutral-500 bg-neutral-100 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Précédent
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border-2 border-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Suivant
              </button>
            </div>
          </div>
        )}

        {/* Help Section */}
        {!showResults && (
          <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-green-900 mb-4">Besoin d'aide pour votre recherche ?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-green-800 mb-2">Articles populaires</div>
                <ul className="space-y-2 text-neutral-700">
                  <li className="hover:text-green-600 cursor-pointer transition-colors">
                    → Intelligence artificielle en agriculture
                  </li>
                  <li className="hover:text-green-600 cursor-pointer transition-colors">
                    → Circuits courts et durabilité
                  </li>
                  <li className="hover:text-green-600 cursor-pointer transition-colors">
                    → Success stories FoodTech
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-green-800 mb-2">Thématiques tendances</div>
                <ul className="space-y-2 text-neutral-700">
                  <li className="hover:text-green-600 cursor-pointer transition-colors">
                    → Blockchain alimentaire
                  </li>
                  <li className="hover:text-green-600 cursor-pointer transition-colors">
                    → Agriculture régénérative
                  </li>
                  <li className="hover:text-green-600 cursor-pointer transition-colors">
                    → Nutrition personnalisée
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}