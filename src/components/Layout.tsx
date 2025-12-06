import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/97438d408ef6e55dc59a5512533e57a8323f65a6.png";

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "", href: "/" },
    {
      name: "Agroalimentaire Intelligent",
      href: "/agroalimentaire-intelligent",
    },
    {
      name: "Durabilité & écologie",
      href: "/durabilite-ecologie",
    },
    { name: "Nutrition & santé", href: "/nutrition-sante" },
    {
      name: "Innovation & entrepreneuriat",
      href: "/innovation-entrepreneuriat",
    },
    {
      name: "Alimentation & société",
      href: "/alimentation-societe",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="AlimFutur"
                className="w-12 h-12"
              />
              <span className="text-green-800">AlimFutur</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors ${
                    location.pathname === item.href
                      ? "text-green-600"
                      : "text-neutral-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
                to="/recherche"
                className="text-neutral-700 hover:text-green-600 transition-colors"
              >
                <SearchIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/newsletter"
                className="hidden sm:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Newsletter
              </Link>
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="lg:hidden text-neutral-700"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-200">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 ${
                    location.pathname === item.href
                      ? "text-green-600"
                      : "text-neutral-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-green-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logo}
                  alt="AlimFutur"
                  className="w-10 h-10"
                />
                <span>AlimFutur</span>
              </div>
              <p className="text-green-100">
                Votre source d'information sur l'innovation
                alimentaire et la durabilité.
              </p>
            </div>

            <div>
              <div className="mb-4">Catégories</div>
              <ul className="space-y-2 text-green-100">
                <li>
                  <Link
                    to="/agroalimentaire-intelligent"
                    className="hover:text-white transition-colors"
                  >
                    Agroalimentaire Intelligent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/durabilite-ecologie"
                    className="hover:text-white transition-colors"
                  >
                    Durabilité & écologie
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innovation-entrepreneuriat"
                    className="hover:text-white transition-colors"
                  >
                    Innovation & entrepreneuriat
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4">Ressources</div>
              <ul className="space-y-2 text-green-100">
                <li>
                  <Link
                    to="/newsletter"
                    className="hover:text-white transition-colors"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recherche"
                    className="hover:text-white transition-colors"
                  >
                    Recherche
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    À propos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4">Contact</div>
              <ul className="space-y-2 text-green-100">
                <li>contact@agrofutur.fr</li>
                <li>+33 1 23 45 67 89</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2025 AlimFutur. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}