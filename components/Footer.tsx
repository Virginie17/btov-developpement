import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>La Rochelle, France</p>
              <p>btovdeveloppement@gmail.com</p>
              <p>SIRET : 93330480000016</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary-300 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cahier-des-charges" className="hover:text-primary-300 transition-colors">
                  Cahier des charges
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Création de sites web</li>
              <li>Refonte de site</li>
              <li>Référencement SEO</li>
              <li>Optimisation web</li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            {currentYear} B to V Développement. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/mentions-legales" className="hover:text-primary-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-primary-300 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
