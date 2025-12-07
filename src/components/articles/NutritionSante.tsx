import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Heart, Activity, Apple } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function NutritionSante() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-50 to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/nutrition-sante"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à Nutrition & Santé
          </Link>
          
          <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full mb-4">
            Nutrition & Santé
          </div>
          
          <h1 className="text-pink-900 mb-6">
            Nutrition et santé : comprendre comment l'alimentation influence notre bien-être
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>25 novembre 2025</span>
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
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <p className="text-neutral-700">
            <strong>La nutrition et la santé</strong> sont étroitement liées : ce que nous mangeons influence directement notre énergie, notre immunité et notre longévité. Dans ce guide, découvrez les principes essentiels d'une alimentation équilibrée, les erreurs courantes et les bonnes pratiques validées scientifiquement.
          </p>
        </div>

        {/* Image principale */}
        <figure className="mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjQ5NTE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Assiette équilibrée : légumes, protéines et céréales complètes"
            className="w-full h-96 object-cover rounded-xl"
          />
          <figcaption className="text-neutral-600 mt-2 text-center">
            Une assiette équilibrée : la base d'une bonne santé
          </figcaption>
        </figure>

        {/* Table des matières */}
        <nav className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-neutral-900 mb-4">Sommaire</h2>
          <ul className="space-y-2 text-neutral-700">
            <li><a href="#bases-scientifiques" className="hover:text-pink-600 transition-colors">• Les bases scientifiques du lien nutrition-santé</a></li>
            <li><a href="#nutriments" className="hover:text-pink-600 transition-colors">• Les nutriments essentiels pour le corps</a></li>
            <li><a href="#habitudes" className="hover:text-pink-600 transition-colors">• Les habitudes alimentaires à adopter</a></li>
            <li><a href="#erreurs" className="hover:text-pink-600 transition-colors">• Les erreurs courantes à éviter</a></li>
            <li><a href="#maladies" className="hover:text-pink-600 transition-colors">• Nutrition et maladies : ce que dit la recherche</a></li>
            <li><a href="#assiette" className="hover:text-pink-600 transition-colors">• Comment construire une assiette équilibrée</a></li>
          </ul>
        </nav>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          <h2 id="bases-scientifiques" className="text-pink-900 mt-8 mb-4">Les bases scientifiques du lien entre nutrition et santé</h2>
          
          <p className="mb-4">
            La nutrition influence le fonctionnement de chaque cellule du corps. Une alimentation équilibrée agit sur l'énergie, l'immunité, la régulation hormonale, le microbiote et même la santé mentale. De nombreuses études épidémiologiques et essais cliniques montrent qu'une alimentation variée et riche en aliments peu transformés réduit le risque de maladies chroniques : <em>diabète, maladies cardiovasculaires, obésité</em> ou états inflammatoires.
          </p>

          <p className="mb-6">
            À l'inverse, une alimentation déséquilibrée favorise la fatigue, les troubles digestifs et l'apparition de carences. Comprendre ce lien est la base pour mettre en place des habitudes durables et efficaces.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-pink-900 mb-2">Santé cardiovasculaire</h3>
              <p className="text-neutral-600">Une bonne nutrition protège le cœur</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <Activity className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-pink-900 mb-2">Énergie & vitalité</h3>
              <p className="text-neutral-600">Les nutriments alimentent votre corps</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <Apple className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-pink-900 mb-2">Immunité renforcée</h3>
              <p className="text-neutral-600">Les aliments sains boostent vos défenses</p>
            </div>
          </div>

          <h2 id="nutriments" className="text-pink-900 mt-8 mb-4">Les nutriments essentiels pour le corps</h2>
          
          <p className="mb-6">
            Les nutriments constituent les briques du métabolisme. On distingue les macronutriments (glucides, protéines, lipides) qui fournissent l'énergie et la structure, et les micronutriments (vitamines, minéraux, antioxydants) qui assurent la régulation, la défense et la réparation cellulaire.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <caption className="text-neutral-900 mb-4">Les nutriments essentiels et leurs rôles</caption>
              <thead>
                <tr className="bg-pink-100">
                  <th className="border border-pink-200 p-3 text-left text-pink-900">Nutriments</th>
                  <th className="border border-pink-200 p-3 text-left text-pink-900">Rôle principal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Glucides</td>
                  <td className="border border-neutral-200 p-3">Fournissent l'énergie</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Protéines</td>
                  <td className="border border-neutral-200 p-3">Construction des tissus et muscles</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Lipides</td>
                  <td className="border border-neutral-200 p-3">Fonctionnement hormonal et cérébral</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Vitamines</td>
                  <td className="border border-neutral-200 p-3">Immunité, vision, production d'énergie</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-neutral-200 p-3">Minéraux</td>
                  <td className="border border-neutral-200 p-3">Métabolisme cellulaire, hydratation</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 p-3">Antioxydants</td>
                  <td className="border border-neutral-200 p-3">Protection contre le stress oxydatif</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            Une alimentation riche en légumes, fruits, légumineuses, céréales complètes et en bonnes graisses couvre la plupart des besoins nutritionnels.
          </p>

          <h2 id="habitudes" className="text-pink-900 mt-8 mb-4">Les habitudes alimentaires à adopter</h2>
          
          <p className="mb-6">
            Adopter des petites habitudes quotidiennes a un fort impact sur la santé. Voici les pratiques les plus utiles validées par la recherche scientifique :
          </p>

          <div className="bg-pink-50 rounded-lg p-6 my-8">
            <h3 className="text-pink-900 mb-4">Les bonnes pratiques nutritionnelles</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex gap-3">
                <span className="text-pink-600">✓</span>
                <span>Privilégier les aliments frais et non transformés</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600">✓</span>
                <span>Limiter les sucres ajoutés et produits ultra-transformés</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600">✓</span>
                <span>Manger lentement pour favoriser la satiété</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600">✓</span>
                <span>Hydrater régulièrement le corps (1,5-2L d'eau par jour)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600">✓</span>
                <span>Augmenter la part de fibres (légumes, fruits, légumineuses)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-600">✓</span>
                <span>Cuire à la vapeur, au four ou à basse température</span>
              </li>
            </ul>
          </div>

          <p className="text-neutral-600 mb-6">
            Ces pratiques améliorent le microbiote, la digestion et la régulation de l'énergie sur la journée.
          </p>

          <h2 id="erreurs" className="text-pink-900 mt-8 mb-4">Les erreurs courantes à éviter</h2>
          
          <p className="mb-6">
            Certains comportements alimentaires, même bien intentionnés, peuvent nuire à la santé. Voici les pièges les plus fréquents :
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-neutral-700"><strong>❌ Sauter le petit-déjeuner</strong> ou d'autres repas importants perturbe le métabolisme</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-neutral-700"><strong>❌ Confondre faim et envie</strong> conduit à la gestion émotionnelle de l'alimentation</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-neutral-700"><strong>❌ Abuser des boissons sucrées</strong> augmente le risque de diabète et d'obésité</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-neutral-700"><strong>❌ Consommer trop de sel</strong> favorise l'hypertension artérielle</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-neutral-700"><strong>❌ Penser que "manger sain = forcément manger moins"</strong> est une idée fausse</p>
            </div>
          </div>

          <p className="mb-6">
            Ces comportements perturbent les signaux de satiété (leptine/ghréline) et favorisent les compulsions alimentaires.
          </p>

          <h2 id="maladies" className="text-pink-900 mt-8 mb-4">Nutrition et maladies : ce que dit la recherche</h2>
          
          <p className="mb-6">
            Les données scientifiques montrent qu'une alimentation équilibrée réduit significativement les risques de nombreuses maladies chroniques :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-pink-200 rounded-lg p-6">
              <h3 className="text-pink-900 mb-3">Maladies cardiovasculaires</h3>
              <p className="text-neutral-700">
                Une alimentation riche en fruits, légumes, poissons gras et pauvre en graisses saturées réduit le risque de 30 à 40%.
              </p>
            </div>
            <div className="bg-white border border-pink-200 rounded-lg p-6">
              <h3 className="text-pink-900 mb-3">Diabète de type 2</h3>
              <p className="text-neutral-700">
                Limiter les sucres simples et privilégier les fibres permet de prévenir et même de réverser le prédiabète.
              </p>
            </div>
            <div className="bg-white border border-pink-200 rounded-lg p-6">
              <h3 className="text-pink-900 mb-3">Obésité</h3>
              <p className="text-neutral-700">
                Une alimentation équilibrée combinée à l'activité physique permet un contrôle durable du poids.
              </p>
            </div>
            <div className="bg-white border border-pink-200 rounded-lg p-6">
              <h3 className="text-pink-900 mb-3">États inflammatoires</h3>
              <p className="text-neutral-700">
                Les aliments anti-inflammatoires (oméga-3, antioxydants) réduisent l'inflammation chronique.
              </p>
            </div>
          </div>

          <p className="mb-6">
            Des modèles alimentaires robustes comme le régime méditerranéen ou le régime DASH sont régulièrement associés à des bénéfices clairs sur la longévité et la qualité de vie.
          </p>

          <h2 id="assiette" className="text-pink-900 mt-8 mb-4">Comment construire une assiette équilibrée ?</h2>
          
          <div className="bg-pink-50 border-l-4 border-pink-600 p-6 my-8">
            <p className="text-neutral-700">
              <strong>Réponse rapide :</strong> Une assiette équilibrée contient 50% de légumes, 25% de protéines (poisson, œufs, légumineuses) et 25% de féculents complets. Ajoutez une source de bonnes graisses et hydratez-vous régulièrement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 mb-8">
            <h3 className="text-pink-900 mb-4">Exemples d'assiettes équilibrées</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-pink-800 mb-2">🍳 Petit-déjeuner</h4>
                <p className="text-neutral-700">Flocons d'avoine + yaourt grec + fruits frais + graines de chia + une poignée de noix</p>
              </div>
              
              <div>
                <h4 className="text-pink-800 mb-2">🥗 Déjeuner</h4>
                <p className="text-neutral-700">Salade variée + quinoa + pois chiches + filet de poisson + vinaigrette à l'huile d'olive</p>
              </div>
              
              <div>
                <h4 className="text-pink-800 mb-2">🍲 Dîner</h4>
                <p className="text-neutral-700">Légumes rôtis (brocoli, carottes, poivrons) + lentilles + avocat + riz complet</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-neutral-100 rounded-xl p-8 mt-12">
          <h2 className="text-pink-900 mb-6">Questions fréquentes sur nutrition et santé</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-pink-800 mb-2">Qu'est-ce qu'une alimentation équilibrée ?</h3>
              <p className="text-neutral-700">
                Une alimentation équilibrée consiste à consommer des aliments variés apportant l'énergie, les vitamines et minéraux nécessaires au bon fonctionnement du corps, tout en limitant les sucres raffinés, graisses saturées et additifs.
              </p>
            </div>
            
            <div>
              <h3 className="text-pink-800 mb-2">Comment améliorer sa santé grâce à la nutrition ?</h3>
              <p className="text-neutral-700">
                Privilégiez les aliments frais, augmentez les fibres, buvez suffisamment, réduisez le sucre ajouté et cuisinez maison : ces actions simples améliorent l'immunité, la digestion et la gestion du poids.
              </p>
            </div>
            
            <div>
              <h3 className="text-pink-800 mb-2">Quels aliments faut-il éviter au quotidien ?</h3>
              <p className="text-neutral-700">
                Boissons sucrées, snacks industriels, viandes ultra-transformées, fast-foods et plats préparés sont à limiter ; ils contiennent trop de sel, sucre et additifs augmentant le risque de maladies chroniques.
              </p>
            </div>
          </div>
        </div>

        {/* Articles connexes */}
        <div className="bg-pink-50 rounded-xl p-8 mt-12">
          <h3 className="text-pink-900 mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/nutrition-sante" className="text-pink-600 hover:text-pink-700 transition-colors">
              → Nutrition personnalisée par l'IA
            </Link>
            <Link to="/nutrition-sante" className="text-pink-600 hover:text-pink-700 transition-colors">
              → Aliments fonctionnels
            </Link>
            <Link to="/durabilite-ecologie" className="text-pink-600 hover:text-pink-700 transition-colors">
              → Alimentation durable
            </Link>
            <Link to="/innovation-entrepreneuriat" className="text-pink-600 hover:text-pink-700 transition-colors">
              → Innovations NutritionTech
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-xl p-8 mt-12 text-center">
          <h3 className="mb-4">Améliorez votre santé pas à pas</h3>
          <p className="mb-6">
            Recevez des conseils nutritionnels et des recettes équilibrées chaque semaine
          </p>
          <Link
            to="/newsletter"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors"
          >
            S'abonner gratuitement
          </Link>
        </div>
      </article>
    </div>
  );
}
