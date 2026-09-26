import { useMemo, useState } from 'react';
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Truck,
} from 'lucide-react';

const WHATSAPP = '2347088946671';

const sizes = [
  { name: 'Small Pack', price: 800 },
  { name: 'Medium Pack', price: 1500 },
  { name: 'Large Pack', price: 2000 },
  { name: 'Size L', price: 10000 },
  { name: 'Size XL', price: 15000 },
  { name: 'Party Tray', price: 20000 },
];

function money(value: number) {
  return new Intl.NumberFormat('en-NG').format(value);
}

function whatsappUrl(item: string, quantity: number) {
  const message = `Hello Sauce & Skin by Anna, I would like to order ${quantity} × ${item}. Please confirm availability and delivery.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(
    () => selectedSize.price * quantity,
    [selectedSize.price, quantity]
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          aria-label="Sauce & Skin by Anna home"
        >
          <span className="brand-name">SAUCE &amp; SKIN</span>
          <span className="brand-by">by ANNA</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <button onClick={() => scrollTo("menu")}>Menu</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
        <a
          className="nav-order"
          href={whatsappUrl("Pepppered Kpomo", 1)}
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="brand-by hero-kicker">by ANNA</p>
          <h1>
            PEPPERED
            <br />
            KPOMO
          </h1>
          <p className="hero-subtitle">
            Soft, juicy &amp; extra peppered.
            <br />
            Made to burst with flavour.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollTo("menu")}>
              Choose your pack <ArrowRight size={18} />
            </button>
            <a
              className="text-link"
              href={whatsappUrl("Pepppered Kpomo", 1)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp us
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <img
              src="/images/logo-removebg-preview.png"
              alt="Sauce & Skin by Anna logo"
            />
          </div>
          <div className="visual-caption">Amuwo • Lagos</div>
        </div>
      </section>

      <section className="intro-strip">
        <div>
          <span>Soft</span>
          <span>Juicy</span>
          <span>Extra peppered</span>
        </div>
        <p>
          A rich, pepper-forward favourite prepared for easy ordering and Lagos
          delivery.
        </p>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div>
            <p className="section-kicker">THE MENU</p>
            <h2>Pick your pack.</h2>
          </div>
          <p>
            For quick orders, select a size and send the details straight to
            WhatsApp.
          </p>
        </div>

        <div className="menu-layout">
          <div className="price-list">
            {sizes.map((size, index) => (
              <button
                key={size.name}
                className={`price-row ${selectedSize.name === size.name ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                <span className="row-number">0{index + 1}</span>
                <span className="row-name">{size.name}</span>
                <span className="row-price">₦{money(size.price)}</span>
                <ArrowRight className="row-arrow" size={17} />
              </button>
            ))}
          </div>

          <aside className="order-card">
            <p className="section-kicker">QUICK ORDER</p>
            <h3>{selectedSize.name}</h3>
            <div className="order-price">₦{money(selectedSize.price)}</div>
            <label htmlFor="quantity">Quantity</label>
            <div className="quantity-control">
              <button
                aria-label="Decrease quantity"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity((current) => current + 1)}
              >
                +
              </button>
            </div>
            <div className="order-total">
              <span>Total</span>
              <strong>₦{money(total)}</strong>
            </div>
            <a
              className="primary-button full-width"
              href={whatsappUrl(selectedSize.name, quantity)}
              target="_blank"
              rel="noreferrer"
            >
              Order this pack <MessageCircle size={18} />
            </a>
            <p className="micro-note">
              WhatsApp opens with your order details ready to send.
            </p>
          </aside>
        </div>
      </section>

      <section className="story-section" id="about">
        <div className="story-image">
          <img
            src="images/logo-removebg-preview.png"
            alt="Sauce and skin logo"
          />
        </div>
        <div className="story-copy">
          <p className="section-kicker">SAUCE &amp; SKIN BY ANNA</p>
          <h2>
            Bold flavour.
            <br />
            Straightforward ordering.
          </h2>
          <p>
            Pepppered Kpomo is made for people who want soft, juicy meat with a
            serious pepper kick. Choose your pack, tell us how many you want,
            and we will take the order from there.
          </p>
          <div className="details-grid">
            <div>
              <MapPin size={18} />
              <span>
                Amuwo, Lagos
                <br />
                First Gate
              </span>
            </div>
            <div>
              <Truck size={18} />
              <span>
                Delivery available
                <br />
                across Lagos
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">ORDER DIRECT</p>
          <h2>Ready for your peppered fix?</h2>
          <p>
            Send a WhatsApp message and we will confirm your order, availability
            and delivery details.
          </p>
        </div>
        <a
          className="contact-button"
          href={whatsappUrl("Pepppered Kpomo", 1)}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp 0708 894 6671 <MessageCircle size={19} />
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-name">SAUCE &amp; SKIN</span>
          <span className="brand-by">by ANNA</span>
          <div>
            <span>
              Built by{" "}
              <a
                href="https://shaelsystems.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Shael Systems
              </a>
            </span>
          </div>
        </div>
        <div className="footer-location">
          <MapPin size={16} /> Amuwo, Lagos • First Gate
        </div>
        <div className="footer-links">
          <a
            href={whatsappUrl("Pepppered Kpomo", 1)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <button onClick={() => scrollTo("menu")}>Menu</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      </footer>

      <button
        className="floating-wa"
        aria-label="Order on WhatsApp"
        onClick={() =>
          window.open(
            whatsappUrl("Pepppered Kpomo", 1),
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        <MessageCircle size={23} />
      </button>
    </main>
  );
}

export default App;
