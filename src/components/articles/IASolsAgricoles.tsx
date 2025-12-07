import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function IASolsAgricoles() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/agroalimentaire-intelligent"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à Agroalimentaire Intelligent
          </Link>
          
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            Agroalimentaire Intelligent
          </div>
          
          <h1 className="text-blue-900 mb-6">
            IA et Analyse des Sols Agricoles : Comment l'Intelligence Artificielle Transforme l'Agriculture de Précision
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>3 décembre 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>10 min de lecture</span>
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
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-neutral-700">
            <strong>L'intelligence artificielle révolutionne l'analyse des sols agricoles</strong> en combinant capteurs IoT, machine learning et données satellitaires. Cette technologie permet aux agriculteurs d'optimiser leurs rendements, réduire les intrants et préserver l'environnement grâce à des prédictions précises et des recommandations personnalisées.
          </p>
        </div>

        {/* Image principale */}
        <figure className="mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwc2Vuc29yc3xlbnwxfHx8fDE3NjQ5NDc3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Capteurs IoT mesurant l'humidité et les nutriments du sol dans un champ agricole"
            className="w-full h-96 object-cover rounded-xl"
          />
          <figcaption className="text-neutral-600 mt-2 text-center">
            Interface d'analyse des sols par IA : visualisation des données de capteurs IoT en temps réel
          </figcaption>
        </figure>

        {/* Table des matières */}
        <nav className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-neutral-900 mb-4">Sommaire</h2>
          <ul className="space-y-2 text-neutral-700">
            <li><a href="#definition" className="hover:text-blue-600 transition-colors">• Qu'est-ce que l'IA pour l'analyse des sols ?</a></li>
            <li><a href="#technologies" className="hover:text-blue-600 transition-colors">• Les technologies au service de l'analyse des sols</a></li>
            <li><a href="#benefices" className="hover:text-blue-600 transition-colors">• Les bénéfices pour les agriculteurs</a></li>
            <li><a href="#cas-usage" className="hover:text-blue-600 transition-colors">• Cas d'usage réussis en France</a></li>
            <li><a href="#implementation" className="hover:text-blue-600 transition-colors">• Comment implémenter l'IA dans votre exploitation</a></li>
          </ul>
        </nav>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <h2 id="definition" className="text-blue-900 mt-8 mb-4">Qu'est-ce que l'IA pour l'analyse des sols agricoles ?</h2>
          
          <p className="mb-4">
            L'<strong>intelligence artificielle appliquée à l'analyse des sols agricoles</strong> désigne l'utilisation d'algorithmes de machine learning et de deep learning pour interpréter des données complexes issues de capteurs, satellites et analyses de laboratoire. Contrairement aux méthodes traditionnelles qui nécessitent des prélèvements manuels et des analyses longues, l'IA permet une évaluation en temps réel de la santé des sols, de leur composition nutritionnelle et de leur potentiel de rendement.
          </p>

          <p className="mb-6">
            Les systèmes d'IA agricoles analysent simultanément des milliers de paramètres : pH, taux d'azote, phosphore, potassium, matière organique, humidité, température, structure du sol, présence de pathogènes. Cette analyse multidimensionnelle dépasse largement les capacités humaines et offre une précision inégalée pour prendre des décisions éclairées.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-neutral-700">
              <strong>Définition rapide :</strong> L'analyse des sols par IA utilise des algorithmes de machine learning pour interpréter automatiquement les données de capteurs IoT, satellites et analyses de laboratoire, permettant une évaluation en temps réel de la santé et de la composition nutritionnelle des sols agricoles.
            </p>
          </div>

          <h2 id="technologies" className="text-blue-900 mt-8 mb-4">Les technologies au service de l'analyse des sols</h2>
          
          <h3 className="text-blue-800 mt-6 mb-3">Capteurs IoT et télédétection</h3>
          <p className="mb-4">
            Les <strong>capteurs IoT connectés</strong> mesurent en continu l'humidité du sol, la température, le pH et les niveaux de nutriments. Ces capteurs transmettent des données en temps réel à des plateformes cloud où l'IA les analyse. La télédétection par satellite complète ces données avec des images multispectrales révélant la santé des cultures, le stress hydrique et les carences nutritionnelles invisibles à l'œil nu.
          </p>

          <h3 className="text-blue-800 mt-6 mb-3">Machine Learning et Deep Learning</h3>
          <p className="mb-4">
            Les algorithmes de <strong>machine learning</strong> apprennent à partir de vastes bases de données historiques pour prédire les besoins des sols. Le deep learning, via des réseaux de neurones, identifie des patterns complexes dans les images satellitaires et les données de capteurs, permettant de détecter précocement les maladies ou les carences avant qu'elles n'affectent les rendements.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 my-8">
            <h3 className="text-blue-900 mb-4">Les 6 technologies clés de l'IA agricole</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>✓ Capteurs IoT pour la mesure en temps réel</li>
              <li>✓ Imagerie satellitaire multispectrale</li>
              <li>✓ Algorithmes de machine learning prédictifs</li>
              <li>✓ Réseaux de neurones pour l'analyse d'images</li>
              <li>✓ Plateformes cloud pour le traitement des données</li>
              <li>✓ Blockchain pour la traçabilité des analyses</li>
            </ul>
          </div>

          <h2 id="benefices" className="text-blue-900 mt-8 mb-4">Les bénéfices pour les agriculteurs</h2>
          
          <p className="mb-6">
            L'implémentation de l'<strong>IA dans l'analyse des sols</strong> génère des bénéfices mesurables pour les exploitations agricoles. Les études menées par l'INRAE et les startups AgriTech françaises montrent des gains de productivité significatifs.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <caption className="text-neutral-900 mb-4">Impact de l'IA sur les performances agricoles</caption>
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-200 p-3 text-left text-blue-900">Indicateur</th>
                  <th className="border border-blue-200 p-3 text-left text-blue-900">Amélioration moyenne</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Rendement des cultures</td>
                  <td className="border border-neutral-200 p-3">+15 à +30%</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Réduction des intrants</td>
                  <td className="border border-neutral-200 p-3">-20 à -40%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Optimisation de l'irrigation</td>
                  <td className="border border-neutral-200 p-3">-25% d'eau</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Détection précoce des maladies</td>
                  <td className="border border-neutral-200 p-3">7 jours d'avance</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">ROI sur 3 ans</td>
                  <td className="border border-neutral-200 p-3">150 à 300%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="cas-usage" className="text-blue-900 mt-8 mb-4">Cas d'usage réussis en France</h2>
          
          <h3 className="text-blue-800 mt-6 mb-3">Ferme connectée en Bretagne : +30% de rendement</h3>
          <p className="mb-6">
            Une exploitation céréalière de 200 hectares en Bretagne a implémenté un système d'<strong>analyse des sols par IA</strong> combinant capteurs IoT et imagerie satellitaire. Les résultats après deux saisons : augmentation de 30% du rendement en blé, réduction de 35% des apports en azote, et économie de 28% sur les coûts d'irrigation. L'investissement initial de 45 000€ a été rentabilisé en 18 mois.
          </p>

          <h3 className="text-blue-800 mt-6 mb-3">Vignoble bordelais : détection précoce des maladies</h3>
          <p className="mb-6">
            Un domaine viticole de 50 hectares utilise l'IA pour analyser la santé des sols et prédire les risques de mildiou et d'oïdium. Le système détecte les signaux faibles 7 à 10 jours avant l'apparition visuelle des symptômes, permettant des traitements préventifs ciblés. Résultat : réduction de 40% des traitements phytosanitaires et amélioration de la qualité des raisins.
          </p>

          <h2 id="implementation" className="text-blue-900 mt-8 mb-4">Comment implémenter l'IA dans votre exploitation</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 my-8">
            <h3 className="text-blue-900 mb-4">Les 5 étapes pour implémenter l'IA dans votre exploitation</h3>
            <ol className="space-y-2 text-neutral-700 list-decimal list-inside">
              <li>Évaluer vos besoins et votre maturité technologique</li>
              <li>Choisir la solution adaptée à votre exploitation</li>
              <li>Planifier l'installation et la formation des équipes</li>
              <li>Collecter des données pendant 6-12 mois pour l'apprentissage</li>
              <li>Optimiser progressivement selon les recommandations de l'IA</li>
            </ol>
          </div>

          <h3 className="text-blue-800 mt-6 mb-3">Choisir la solution adaptée</h3>
          <p className="mb-6">
            Plusieurs startups françaises proposent des solutions d'IA agricole : <strong>Weenat</strong> pour les capteurs IoT, <strong>ITK</strong> pour les prédictions de rendement, <strong>Ekylibre</strong> pour la gestion de données agricoles. Comparez les fonctionnalités, les tarifs (généralement 500€ à 5000€/an selon la taille) et les retours d'expérience d'autres agriculteurs.
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-neutral-100 rounded-xl p-8 mt-12">
          <h2 className="text-blue-900 mb-6">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-blue-800 mb-2">Comment l'IA améliore-t-elle l'analyse des sols agricoles ?</h3>
              <p className="text-neutral-700">
                L'IA analyse simultanément des milliers de données issues de capteurs IoT, satellites et analyses de laboratoire pour prédire les besoins nutritionnels des sols en temps réel. Cette approche permet d'optimiser les apports en engrais et en eau, augmentant les rendements de 15 à 30% tout en réduisant les intrants de 20 à 40%.
              </p>
            </div>
            
            <div>
              <h3 className="text-blue-800 mb-2">Quel est le coût d'une solution d'IA pour l'analyse des sols ?</h3>
              <p className="text-neutral-700">
                Le coût varie entre 500€ et 5000€ par an selon la taille de l'exploitation et les fonctionnalités. L'investissement initial en capteurs IoT se situe entre 10 000€ et 50 000€ pour une exploitation moyenne. Des subventions France Num et des aides de la PAC peuvent réduire significativement ces coûts.
              </p>
            </div>
            
            <div>
              <h3 className="text-blue-800 mb-2">L'IA peut-elle remplacer l'expertise de l'agriculteur ?</h3>
              <p className="text-neutral-700">
                Non, l'IA complète l'expertise de l'agriculteur en fournissant des données précises et des recommandations. L'agriculteur conserve un rôle essentiel pour valider les suggestions, adapter aux spécificités locales et prendre les décisions finales. L'IA est un outil d'aide à la décision, pas un substitut à l'expérience humaine.
              </p>
            </div>
          </div>
        </div>

        {/* Articles connexes */}
        <div className="bg-blue-50 rounded-xl p-8 mt-12">
          <h3 className="text-blue-900 mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/agroalimentaire-intelligent" className="text-blue-600 hover:text-blue-700 transition-colors">
              → Capteurs IoT en Agriculture
            </Link>
            <Link to="/agroalimentaire-intelligent" className="text-blue-600 hover:text-blue-700 transition-colors">
              → Blockchain et Traçabilité
            </Link>
            <Link to="/agroalimentaire-intelligent" className="text-blue-600 hover:text-blue-700 transition-colors">
              → Robotique Agricole et Drones
            </Link>
            <Link to="/durabilite-ecologie" className="text-blue-600 hover:text-blue-700 transition-colors">
              → Agriculture Régénérative
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-8 mt-12 text-center">
          <h3 className="mb-4">Restez informé des innovations AgriTech</h3>
          <p className="mb-6">
            Recevez notre newsletter hebdomadaire avec les dernières actualités sur l'IA en agriculture
          </p>
          <Link
            to="/newsletter"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            S'abonner gratuitement
          </Link>
        </div>
      </article>
    </div>
  );
}
