import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AgricultureRegenerative() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/durabilite-ecologie"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à Durabilité & écologie
          </Link>
          
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
            Durabilité & écologie
          </div>
          
          <h1 className="text-emerald-900 mb-6">
            Agriculture Régénérative : Comment les Pratiques Ancestrales Régénèrent les Sols et Capturent le Carbone
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>1 décembre 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>12 min de lecture</span>
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
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mb-8">
          <p className="text-neutral-700">
            <strong>L'agriculture régénérative</strong> combine les savoir-faire ancestraux et les découvertes scientifiques modernes pour restaurer la santé des sols, augmenter la biodiversité et capturer le carbone atmosphérique. Cette approche holistique transforme l'agriculture en solution climatique tout en améliorant la productivité et la résilience des exploitations.
          </p>
        </div>

        {/* Image principale */}
        <figure className="mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDk2MDMwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Champ avec couverture végétale permanente montrant des sols sains et vivants"
            className="w-full h-96 object-cover rounded-xl"
          />
          <figcaption className="text-neutral-600 mt-2 text-center">
            Sols régénératifs avec couverture végétale permanente : la base de l'agriculture régénérative
          </figcaption>
        </figure>

        {/* Table des matières */}
        <nav className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-neutral-900 mb-4">Sommaire</h2>
          <ul className="space-y-2 text-neutral-700">
            <li><a href="#definition" className="hover:text-emerald-600 transition-colors">• Qu'est-ce que l'agriculture régénérative ?</a></li>
            <li><a href="#principes" className="hover:text-emerald-600 transition-colors">• Les 5 principes fondamentaux</a></li>
            <li><a href="#techniques" className="hover:text-emerald-600 transition-colors">• Techniques pratiques pour régénérer vos sols</a></li>
            <li><a href="#benefices" className="hover:text-emerald-600 transition-colors">• Bénéfices environnementaux et économiques</a></li>
            <li><a href="#cas-usage" className="hover:text-emerald-600 transition-colors">• Cas d'usage réussis en France</a></li>
            <li><a href="#transition" className="hover:text-emerald-600 transition-colors">• Comment faire la transition</a></li>
          </ul>
        </nav>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <h2 id="definition" className="text-emerald-900 mt-8 mb-4">Qu'est-ce que l'agriculture régénérative ?</h2>
          
          <p className="mb-4">
            L'<strong>agriculture régénérative</strong> est un système de pratiques agricoles qui restaure et améliore la santé des sols, augmente la biodiversité, améliore le cycle de l'eau et renforce les services écosystémiques. Contrairement à l'agriculture conventionnelle qui dégrade les sols, l'agriculture régénérative les régénère activement, créant un cercle vertueux de productivité croissante et de résilience environnementale.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8">
            <p className="text-neutral-700">
              <strong>Définition rapide :</strong> L'agriculture régénérative est un système de pratiques agricoles qui restaure la santé des sols, augmente la biodiversité et capture le carbone atmosphérique, combinant savoir-faire ancestraux et science moderne pour créer une agriculture productive et résiliente.
            </p>
          </div>

          <p className="mb-6">
            Selon l'Institut de l'Agriculture Durable (IAD), l'<strong>agriculture régénérative</strong> se distingue de l'agriculture biologique par son approche systémique : elle ne se contente pas d'éviter les intrants chimiques, elle reconstruit activement la fertilité des sols et les écosystèmes. Les sols régénératifs contiennent en moyenne 2 à 3 fois plus de matière organique que les sols conventionnels.
          </p>

          <h2 id="principes" className="text-emerald-900 mt-8 mb-4">Les 5 principes fondamentaux de l'agriculture régénérative</h2>
          
          <div className="bg-emerald-50 rounded-lg p-6 my-8">
            <h3 className="text-emerald-900 mb-4">Les 5 principes de l'agriculture régénérative</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex gap-3">
                <span className="text-emerald-600">✓</span>
                <span><strong>Minimiser le travail du sol</strong> pour préserver la vie microbienne</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600">✓</span>
                <span><strong>Maintenir une couverture végétale permanente</strong> toute l'année</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600">✓</span>
                <span><strong>Diversifier les rotations</strong> et les associations de cultures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600">✓</span>
                <span><strong>Intégrer l'élevage</strong> de manière holistique avec pâturage tournant</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600">✓</span>
                <span><strong>Limiter ou supprimer les intrants chimiques</strong> progressivement</span>
              </li>
            </ul>
          </div>

          <h3 className="text-emerald-800 mt-6 mb-3">1. Minimiser le travail du sol</h3>
          <p className="mb-4">
            Le travail du sol profond (labour) perturbe la vie microbienne, expose la matière organique à l'oxydation et accélère l'érosion. L'<strong>agriculture régénérative</strong> privilégie le semis direct sous couvert végétal, limitant le travail du sol aux 5 premiers centimètres. Cette approche préserve la structure du sol, maintient l'humidité et favorise le développement des mycorhizes.
          </p>

          <h3 className="text-emerald-800 mt-6 mb-3">2. Maintenir une couverture végétale permanente</h3>
          <p className="mb-4">
            Les sols nus sont vulnérables à l'érosion, au lessivage des nutriments et à la compaction. L'<strong>agriculture régénérative</strong> maintient une couverture végétale vivante toute l'année grâce aux cultures de couverture (engrais verts) entre les cultures principales. Ces couverts végétaux protègent le sol, fixent l'azote et améliorent la structure.
          </p>

          <h3 className="text-emerald-800 mt-6 mb-3">3. Diversifier les rotations et les associations</h3>
          <p className="mb-4">
            La monoculture appauvrit les sols et favorise les maladies. L'<strong>agriculture régénérative</strong> diversifie les rotations sur 5 à 7 ans, alternant céréales, légumineuses, oléagineux et cultures fourragères. Les associations de cultures créent des synergies : les légumineuses fixent l'azote pour les céréales.
          </p>

          <h2 id="techniques" className="text-emerald-900 mt-8 mb-4">Techniques pratiques pour régénérer vos sols</h2>
          
          <h3 className="text-emerald-800 mt-6 mb-3">Semis direct sous couvert végétal</h3>
          <p className="mb-4">
            Le <strong>semis direct</strong> consiste à semer directement dans un couvert végétal vivant ou roulé, sans labour ni travail du sol. Cette technique préserve la structure du sol, maintient l'humidité et réduit l'érosion de 90% par rapport au labour. Les couverts végétaux sont semés après la récolte et roulés au printemps avant le semis de la culture principale.
          </p>

          <h3 className="text-emerald-800 mt-6 mb-3">Agroforesterie et haies</h3>
          <p className="mb-4">
            L'<strong>agroforesterie</strong> associe arbres et cultures sur la même parcelle. Les arbres créent un microclimat favorable, abritent la faune auxiliaire, enrichissent le sol avec leurs feuilles et leurs racines profondes, et séquestrent du carbone. Les haies bocagères autour des parcelles protègent du vent et limitent l'érosion.
          </p>

          <h2 id="benefices" className="text-emerald-900 mt-8 mb-4">Bénéfices environnementaux et économiques</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <caption className="text-neutral-900 mb-4">Impact de l'agriculture régénérative sur 5 ans</caption>
              <thead>
                <tr className="bg-emerald-100">
                  <th className="border border-emerald-200 p-3 text-left text-emerald-900">Indicateur</th>
                  <th className="border border-emerald-200 p-3 text-left text-emerald-900">Amélioration moyenne</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Matière organique du sol</td>
                  <td className="border border-neutral-200 p-3">+50 à +100%</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Capacité de rétention d'eau</td>
                  <td className="border border-neutral-200 p-3">+30 à +50%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Séquestration de carbone</td>
                  <td className="border border-neutral-200 p-3">2 à 5 tonnes CO₂/ha/an</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Rendements (après transition)</td>
                  <td className="border border-neutral-200 p-3">+20 à +40%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Réduction des intrants</td>
                  <td className="border border-neutral-200 p-3">-40 à -60%</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Marge brute</td>
                  <td className="border border-neutral-200 p-3">+15 à +35%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-emerald-800 mt-6 mb-3">Captation du carbone et lutte contre le changement climatique</h3>
          <p className="mb-4">
            L'<strong>agriculture régénérative</strong> est l'une des solutions les plus prometteuses pour capturer le carbone atmosphérique. Les sols régénératifs séquestrent en moyenne 2 à 5 tonnes de CO₂ par hectare et par an. Si 50% des terres agricoles françaises adoptaient ces pratiques, cela représenterait 25 à 60 millions de tonnes de CO₂ capturées annuellement.
          </p>

          <h2 id="cas-usage" className="text-emerald-900 mt-8 mb-4">Cas d'usage réussis en France</h2>
          
          <div className="bg-emerald-50 rounded-lg p-6 mb-6">
            <h3 className="text-emerald-900 mb-3">Jean-Pierre Moreau : restauration des sols en Dordogne</h3>
            <p className="text-neutral-700 mb-3">
              Jean-Pierre Moreau, agriculteur bio en Dordogne, a converti ses 120 hectares à l'<strong>agriculture régénérative</strong> il y a 5 ans. La matière organique est passée de 1,2% à 3,8% en 4 ans. Ses rendements en blé ont augmenté de 40%, passant de 45 à 63 quintaux/hectare, tandis que ses coûts d'intrants ont diminué de 55%.
            </p>
            <p className="text-neutral-600 italic">
              "Mes sols sont vivants, je vois des vers de terre partout, et mes cultures résistent mieux aux sécheresses"
            </p>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 mb-6">
            <h3 className="text-emerald-900 mb-3">Claire Dubois : coopérative bio en Provence</h3>
            <p className="text-neutral-700 mb-3">
              Claire Dubois dirige une coopérative de 15 agriculteurs bio en Provence. Le pâturage tournant dynamique sur les parcelles de lavande et d'oliviers a amélioré la structure des sols et réduit les besoins en irrigation de 30%. La vente en circuits courts a permis de doubler les revenus tout en réduisant les émissions de transport de 65%.
            </p>
            <p className="text-neutral-600 italic">
              "Nous prouvons qu'on peut être rentables tout en régénérant la planète"
            </p>
          </div>

          <h2 id="transition" className="text-emerald-900 mt-8 mb-4">Comment faire la transition vers l'agriculture régénérative</h2>
          
          <div className="bg-emerald-50 rounded-lg p-6 my-8">
            <h3 className="text-emerald-900 mb-4">Les 5 étapes pour transitionner</h3>
            <ol className="space-y-2 text-neutral-700 list-decimal list-inside">
              <li>Évaluer l'état initial de vos sols avec un diagnostic complet</li>
              <li>Introduire progressivement les couverts végétaux entre les cultures</li>
              <li>Réduire le travail du sol étape par étape sur 3-5 ans</li>
              <li>Diversifier les rotations sur 5-7 ans avec légumineuses</li>
              <li>Réduire les intrants chimiques progressivement de 20% par an</li>
            </ol>
          </div>

          <h3 className="text-emerald-800 mt-6 mb-3">Étape 1 : Évaluer l'état de vos sols</h3>
          <p className="mb-4">
            Avant de commencer la transition, réalisez un diagnostic complet de vos sols : analyse de la matière organique, test de la vie microbienne, évaluation de la structure et de la compaction. Ce diagnostic de départ servira de référence pour mesurer les progrès.
          </p>

          <h3 className="text-emerald-800 mt-6 mb-3">Étape 2 : Commencer par les couverts végétaux</h3>
          <p className="mb-4">
            La première étape la plus accessible est l'introduction de <strong>cultures de couverture</strong> entre vos cultures principales. Semez des mélanges d'engrais verts (trèfle, vesce, phacélie, seigle) après chaque récolte. Commencez sur 20% de votre surface la première année, puis étendez progressivement.
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-neutral-100 rounded-xl p-8 mt-12">
          <h2 className="text-emerald-900 mb-6">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-emerald-800 mb-2">Qu'est-ce qui différencie l'agriculture régénérative de l'agriculture biologique ?</h3>
              <p className="text-neutral-700">
                L'agriculture régénérative va au-delà du bio en ne se contentant pas d'éviter les intrants chimiques, mais en régénérant activement les sols et les écosystèmes. Elle se concentre sur la séquestration de carbone, l'amélioration de la biodiversité et la restauration de la santé des sols.
              </p>
            </div>
            
            <div>
              <h3 className="text-emerald-800 mb-2">Combien de temps faut-il pour voir les résultats ?</h3>
              <p className="text-neutral-700">
                Les premiers signes d'amélioration apparaissent après 1 à 2 ans (meilleure structure du sol, augmentation des vers de terre), mais les bénéfices complets se manifestent après 3 à 5 ans de transition. La matière organique augmente progressivement et les rendements s'améliorent.
              </p>
            </div>
            
            <div>
              <h3 className="text-emerald-800 mb-2">L'agriculture régénérative est-elle rentable économiquement ?</h3>
              <p className="text-neutral-700">
                Oui, après 3 à 5 ans de transition, l'agriculture régénérative améliore la rentabilité grâce à la réduction des coûts d'intrants (40 à 60% de moins) et à l'augmentation des rendements (20 à 40%). La marge brute augmente de 15 à 35% en moyenne.
              </p>
            </div>
          </div>
        </div>

        {/* Articles connexes */}
        <div className="bg-emerald-50 rounded-xl p-8 mt-12">
          <h3 className="text-emerald-900 mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/durabilite-ecologie" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              → Réduction du Gaspillage Alimentaire
            </Link>
            <Link to="/durabilite-ecologie" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              → Énergies Vertes en Agriculture
            </Link>
            <Link to="/durabilite-ecologie" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              → Circuits Courts
            </Link>
            <Link to="/agroalimentaire-intelligent" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              → IA et Analyse des Sols
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl p-8 mt-12 text-center">
          <h3 className="mb-4">Rejoignez le mouvement régénératif</h3>
          <p className="mb-6">
            Recevez nos guides pratiques et retours d'expérience d'agriculteurs régénératifs
          </p>
          <Link
            to="/newsletter"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            S'abonner gratuitement
          </Link>
        </div>
      </article>
    </div>
  );
}
