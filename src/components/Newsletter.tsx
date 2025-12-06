import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, User, Phone, Check } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    categories: [] as string[]
  });

  const [errors, setErrors] = useState({
    email: '',
    telephone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Agroalimentaire Intelligent',
    'Durabilité & écologie',
    'Nutrition & santé',
    'Innovation & entrepreneuriat',
    'Alimentation & société'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validation en temps réel
    if (name === 'email') {
      if (value && !value.includes('@')) {
        setErrors(prev => ({ ...prev, email: "L'email doit contenir un @" }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (name === 'telephone') {
      const phoneRegex = /^\+33\s?\d\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;
      if (value && !phoneRegex.test(value)) {
        setErrors(prev => ({ ...prev, telephone: 'Format attendu: +33 X XX XX XX XX' }));
      } else {
        setErrors(prev => ({ ...prev, telephone: '' }));
      }
    }
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation finale
    if (!formData.email.includes('@')) {
      setErrors(prev => ({ ...prev, email: "L'email doit contenir un @" }));
      return;
    }

    if (formData.telephone) {
      const phoneRegex = /^\+33\s?\d\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;
      if (!phoneRegex.test(formData.telephone)) {
        setErrors(prev => ({ ...prev, telephone: 'Format attendu: +33 X XX XX XX XX' }));
        return;
      }
    }

    // Simulation d'envoi
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-green-900 mb-4">Merci de votre inscription !</h2>
          <p className="text-neutral-600 mb-8">
            Vous recevrez bientôt notre première newsletter avec les meilleurs articles sur l'innovation alimentaire.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour à l'accueil
        </Link>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-green-900 mb-4">Recevez nos meilleurs articles</h1>
            <p className="text-neutral-600">
              Abonnez-vous gratuitement à notre newsletter et restez informé des dernières innovations 
              en agroalimentaire intelligent, durabilité et entrepreneuriat.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <div className="mb-3 text-green-900">Ce que vous recevrez :</div>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Une sélection hebdomadaire des meilleurs articles</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Les dernières innovations et tendances du secteur</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Accès exclusif à nos études de cas et success stories</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Invitations à nos webinaires et événements</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Identity Section */}
            <div>
              <div className="text-green-900 mb-4">Identité</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-neutral-700 mb-2">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="Jean"
                      style={{ minHeight: '44px' }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="nom" className="block text-neutral-700 mb-2">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="Dupont"
                      style={{ minHeight: '44px' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <div className="text-green-900 mb-4">Contact</div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-neutral-700 mb-2">
                    Email * 
                    <span className="text-neutral-500 ml-2">(ex: contact@exemple.fr)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-neutral-200 focus:border-green-600'
                      }`}
                      placeholder="votre.email@exemple.fr"
                      style={{ minHeight: '44px' }}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-600 mt-2">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-neutral-700 mb-2">
                    Téléphone (optionnel)
                    <span className="text-neutral-500 ml-2">(Format: +33 X XX XX XX XX)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        errors.telephone
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-neutral-200 focus:border-green-600'
                      }`}
                      placeholder="+33 6 12 34 56 78"
                      style={{ minHeight: '44px' }}
                    />
                  </div>
                  {errors.telephone && (
                    <p className="text-red-600 mt-2">{errors.telephone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <div className="text-green-900 mb-2">Catégories d'intérêt</div>
              <p className="text-neutral-600 mb-4">
                Sélectionnez les thématiques qui vous intéressent (au moins une)
              </p>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:bg-green-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-600"
                    />
                    <span className="text-neutral-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-neutral-50 rounded-lg p-4 text-neutral-600">
              <p>
                En vous abonnant, vous acceptez de recevoir nos newsletters et communications. 
                Vous pouvez vous désabonner à tout moment. Vos données sont protégées et ne seront 
                jamais partagées avec des tiers.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors"
              style={{ minHeight: '48px' }}
            >
              S'abonner gratuitement
            </button>
          </form>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-200">
            <div className="text-center">
              <div className="text-green-900 mb-1">50K+</div>
              <div className="text-neutral-600">Abonnés actifs</div>
            </div>
            <div className="text-center">
              <div className="text-green-900 mb-1">100%</div>
              <div className="text-neutral-600">Gratuit</div>
            </div>
            <div className="text-center">
              <div className="text-green-900 mb-1">1 email</div>
              <div className="text-neutral-600">Par semaine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}