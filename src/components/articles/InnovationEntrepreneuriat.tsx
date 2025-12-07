import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Lightbulb, TrendingUp, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function InnovationEntrepreneuriat() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/innovation-entrepreneuriat"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à Innovation & Entrepreneuriat
          </Link>
          
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-4">
            Innovation & Entrepreneuriat
          </div>
          
          <h1 className="text-orange-900 mb-6">
            Innovation & Entrepreneuriat : Transformez vos idées en succès
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>28 novembre 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8 min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>AlimFutur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Chapô */}
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
          <p className="text-neutral-700">
            <strong>L'innovation et l'entrepreneuriat</strong> sont essentiels pour créer des entreprises prospères. Comprendre comment transformer une idée originale en projet viable permet aux entrepreneurs de se démarquer, répondre aux besoins du marché et stimuler une croissance durable.
          </p>
        </div>

        {/* Image principale */}
        <figure className="mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728044849347-ea6ff59d98dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdGVjaG5vbG9neSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY0OTYzNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Équipe de startup travaillant sur l'innovation en FoodTech"
            className="w-full h-96 object-cover rounded-xl"
          />
          <figcaption className="text-neutral-600 mt-2 text-center">
            L'innovation au cœur de l'entrepreneuriat moderne
          </figcaption>
        </figure>

        {/* Table des matières */}
        <nav className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-neutral-900 mb-4">Sommaire</h2>
          <ul className="space-y-2 text-neutral-700">
            <li><a href="#importance" className="hover:text-orange-600 transition-colors">• Pourquoi l'innovation est essentielle</a></li>
            <li><a href="#types" className="hover:text-orange-600 transition-colors">• Les types d'innovation</a></li>
            <li><a href="#entrepreneuriat" className="hover:text-orange-600 transition-colors">• Entrepreneuriat et création de valeur</a></li>
            <li><a href="#exemples" className="hover:text-orange-600 transition-colors">• Exemples inspirants</a></li>
            <li><a href="#faq" className="hover:text-orange-600 transition-colors">• FAQ</a></li>
          </ul>
        </nav>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <h2 id="importance" className="text-orange-900 mt-8 mb-4">Pourquoi l'innovation est essentielle</h2>
          
          <p className="mb-6">
            L'innovation est le moteur qui propulse les entreprises vers le succès. Dans un environnement économique en constante évolution, les entrepreneurs qui réussissent sont ceux qui savent innover pour créer de la valeur et se différencier de la concurrence.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-orange-50 rounded-lg p-6">
              <Lightbulb className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-orange-900 mb-2">Différenciation</h3>
              <p className="text-neutral-600">Se démarquer grâce à des produits ou services uniques</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-orange-900 mb-2">Croissance</h3>
              <p className="text-neutral-600">Favoriser la croissance durable et la compétitivité</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <Target className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-orange-900 mb-2">Adaptation</h3>
              <p className="text-neutral-600">Répondre aux besoins changeants des consommateurs</p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 my-8">
            <h3 className="text-orange-900 mb-4">Les bénéfices clés de l'innovation</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>✓ Se différencier grâce à des produits ou services uniques</li>
              <li>✓ Améliorer l'efficacité des processus internes</li>
              <li>✓ Répondre aux besoins changeants des consommateurs</li>
              <li>✓ Favoriser la croissance durable et la compétitivité</li>
            </ul>
          </div>

          <h2 id="types" className="text-orange-900 mt-8 mb-4">Les types d'innovation</h2>
          
          <p className="mb-6">
            L'innovation prend différentes formes selon les besoins de l'entreprise et les opportunités du marché. Comprendre ces différents types permet de choisir la stratégie la plus adaptée.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-orange-900 mb-2">Innovation de produit</h3>
              <p className="text-neutral-700">
                Création ou amélioration significative des produits. Exemple : développement de substituts de viande à base de protéines végétales, comme les produits Beyond Meat.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-orange-900 mb-2">Innovation de processus</h3>
              <p className="text-neutral-700">
                Optimisation des méthodes de production et de gestion. Exemple : automatisation de la chaîne de production avec la robotique et l'IA pour réduire les coûts et améliorer la qualité.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-orange-900 mb-2">Innovation organisationnelle</h3>
              <p className="text-neutral-700">
                Nouvelles structures ou pratiques de travail. Exemple : adoption du télétravail et des méthodes agiles pour améliorer la productivité et l'engagement des équipes.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-orange-900 mb-2">Innovation marketing</h3>
              <p className="text-neutral-700">
                Stratégies de promotion et distribution innovantes. Exemple : utilisation des réseaux sociaux et du marketing d'influence pour atteindre de nouveaux segments de clients.
              </p>
            </div>
          </div>

          <h2 id="entrepreneuriat" className="text-orange-900 mt-8 mb-4">Entrepreneuriat et création de valeur</h2>
          
          <p className="mb-6">
            L'entrepreneuriat consiste à identifier un besoin et développer une solution viable. Les entrepreneurs à succès suivent un processus structuré pour transformer leurs idées en entreprises florissantes.
          </p>

          <div className="bg-orange-50 rounded-lg p-6 my-8">
            <h3 className="text-orange-900 mb-4">Les 5 étapes clés de l'entrepreneuriat</h3>
            <ol className="space-y-4 text-neutral-700">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">1</span>
                <div>
                  <strong className="text-orange-900">Identifier une opportunité ou un problème</strong>
                  <p className="text-neutral-600 mt-1">Observez le marché et détectez les besoins non satisfaits ou les points de friction des consommateurs.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">2</span>
                <div>
                  <strong className="text-orange-900">Élaborer un business plan solide</strong>
                  <p className="text-neutral-600 mt-1">Définissez votre modèle économique, votre proposition de valeur et votre stratégie de croissance.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">3</span>
                <div>
                  <strong className="text-orange-900">Obtenir des financements et partenaires stratégiques</strong>
                  <p className="text-neutral-600 mt-1">Levez des fonds auprès d'investisseurs, business angels ou via le crowdfunding.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">4</span>
                <div>
                  <strong className="text-orange-900">Développer et tester le produit ou service</strong>
                  <p className="text-neutral-600 mt-1">Créez un MVP (Minimum Viable Product) et testez-le auprès de vos premiers clients.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">5</span>
                <div>
                  <strong className="text-orange-900">Lancer et ajuster l'offre selon les retours du marché</strong>
                  <p className="text-neutral-600 mt-1">Itérez rapidement en fonction des feedbacks pour améliorer votre produit.</p>
                </div>
              </li>
            </ol>
          </div>

          <h2 id="exemples" className="text-orange-900 mt-8 mb-4">Exemples inspirants</h2>
          
          <p className="mb-6">
            Des entreprises innovantes montrent comment l'innovation combinée à l'esprit entrepreneurial peut transformer un marché et créer de nouvelles habitudes chez les consommateurs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
              <h3 className="text-orange-900 mb-3">Tesla : Innovation technologique</h3>
              <p className="text-neutral-700 mb-4">
                Tesla a révolutionné l'industrie automobile en démocratisant les véhicules électriques et en intégrant des technologies avancées comme l'autopilote. L'entreprise a su créer un écosystème complet incluant batteries, panneaux solaires et infrastructures de recharge.
              </p>
              <div className="text-orange-600">
                Impact : Transformation complète de la perception des véhicules électriques
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
              <h3 className="text-orange-900 mb-3">Airbnb : Innovation de modèle</h3>
              <p className="text-neutral-700 mb-4">
                Airbnb a transformé l'industrie hôtelière en créant une plateforme permettant à des particuliers de louer leur logement. Ce modèle de partage a créé de nouvelles opportunités économiques et changé la façon dont les gens voyagent.
              </p>
              <div className="text-orange-600">
                Impact : Création d'une nouvelle économie collaborative
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
            <h3 className="text-orange-900 mb-3">FoodTech : Le secteur en pleine effervescence</h3>
            <p className="text-neutral-700 mb-3">
              Le secteur de la FoodTech a levé plus de 2 milliards d'euros en 2024 en France. Les startups innovent dans des domaines variés : protéines alternatives, agriculture verticale, livraison de repas personnalisés, réduction du gaspillage alimentaire, et traçabilité blockchain.
            </p>
            <p className="text-neutral-600">
              Ces innovations répondent aux attentes croissantes des consommateurs pour une alimentation plus durable, transparente et personnalisée.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="bg-neutral-100 rounded-xl p-8 mt-12">
          <h2 className="text-orange-900 mb-6">FAQ sur Innovation & Entrepreneuriat</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-800 mb-2">Qu'est-ce que l'innovation en entrepreneuriat ?</h3>
              <p className="text-neutral-700">
                L'innovation en entrepreneuriat consiste à introduire de nouvelles idées, produits, services ou méthodes qui permettent de créer de la valeur et de se démarquer sur le marché. Elle peut être technologique, organisationnelle, ou porter sur le modèle économique.
              </p>
            </div>
            
            <div>
              <h3 className="text-orange-800 mb-2">Pourquoi l'entrepreneuriat nécessite-t-il de l'innovation ?</h3>
              <p className="text-neutral-700">
                Sans innovation, une entreprise risque de stagner et de ne pas répondre aux besoins changeants des clients. L'innovation permet de rester compétitif, de saisir de nouvelles opportunités et de créer une proposition de valeur unique qui attire et fidélise les clients.
              </p>
            </div>
            
            <div>
              <h3 className="text-orange-800 mb-2">Comment transformer une idée en entreprise prospère ?</h3>
              <p className="text-neutral-700">
                En identifiant un problème réel, en développant un produit ou service répondant à ce besoin, en testant le concept auprès de clients potentiels, en obtenant un financement adapté et en ajustant continuellement l'offre selon les retours des clients. L'agilité et la capacité d'adaptation sont essentielles.
              </p>
            </div>
          </div>
        </div>

        {/* Articles connexes */}
        <div className="bg-orange-50 rounded-xl p-8 mt-12">
          <h3 className="text-orange-900 mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/innovation-entrepreneuriat" className="text-orange-600 hover:text-orange-700 transition-colors">
              → FoodTech : Levées de fonds 2024
            </Link>
            <Link to="/innovation-entrepreneuriat" className="text-orange-600 hover:text-orange-700 transition-colors">
              → Startups AgriTech françaises
            </Link>
            <Link to="/agroalimentaire-intelligent" className="text-orange-600 hover:text-orange-700 transition-colors">
              → Technologies innovantes
            </Link>
            <Link to="/durabilite-ecologie" className="text-orange-600 hover:text-orange-700 transition-colors">
              → Innovation durable
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 mt-12 text-center">
          <h3 className="mb-4">Inspirez-vous des success stories</h3>
          <p className="mb-6">
            Recevez chaque semaine des interviews d'entrepreneurs et des analyses de tendances
          </p>
          <Link
            to="/newsletter"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors"
          >
            S'abonner gratuitement
          </Link>
        </div>
      </article>
    </div>
  );
}
